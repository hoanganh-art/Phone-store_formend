// CẤU HÌNH API
const API_BASE_URL = "http://127.0.0.1:6345";
const USE_API = true; // Đặt false để sử dụng dữ liệu tĩnh, true để dùng API
const AUTO_REFRESH_INTERVAL = 30000; // Tự động làm mới mỗi 30 giây (30000ms)
const SHOW_RANDOM_PRODUCTS = true; // Hiển thị chỉ sản phẩm ngẫu nhiên (5-6 sản phẩm)
const RANDOM_PRODUCTS_COUNT = 6; // Số sản phẩm ngẫu nhiên hiển thị

const API_ENDPOINTS = {
    PRODUCTS: {
        GET_ALL: `${API_BASE_URL}/api/products`,
        GET_BY_ID: (id) => `${API_BASE_URL}/api/products/${id}`,
        GET_STATS: `${API_BASE_URL}/api/products/stats`,
        GET_BRANDS: `${API_BASE_URL}/api/brands`,
        GET_CATEGORIES: `${API_BASE_URL}/api/categories`,
        GET_FILTER_OPTIONS: `${API_BASE_URL}/api/products/filter-options`,
        SEARCH: (keyword) => `${API_BASE_URL}/api/products?search=${keyword}`,
        FILTER_BY_BRAND: (brandId) => `${API_BASE_URL}/api/products?brand=${brandId}`,
        FILTER_BY_CATEGORY: (categoryId) => `${API_BASE_URL}/api/products?category=${categoryId}`
    },
    products: `${API_BASE_URL}/api/products`
};

// DỮ LIỆU DỰ PHÒNG (Fallback data khi API không hoạt động)
const FALLBACK_PRODUCTS = [
    {
        id: 1,
        product_name: "iPhone 15 Pro Max",
        brand_name: "iPhone",
        description: "Điện thoại cao cấp với chip A17 Pro, camera 48MP và thiết kế titan. Trải nghiệm công nghệ đỉnh cao từ Apple.",
        price: 32990000,
        original_price: 35990000,
        image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        badge: "Mới",
        stock: 15,
        ram: "8GB",
        storage: "256GB"
    },
    {
        id: 2,
        product_name: "Samsung Galaxy S24 Ultra",
        brand_name: "Samsung",
        description: "Điện thoại Android mạnh mẽ với bút S-Pen và camera 200MP. Hiệu năng vượt trội cho mọi tác vụ.",
        price: 27990000,
        original_price: 29990000,
        image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        badge: "Bán chạy",
        stock: 8,
        ram: "12GB",
        storage: "512GB"
    },
    {
        id: 3,
        product_name: "Xiaomi 14 Pro",
        brand_name: "Xiaomi",
        description: "Điện thoại với camera Leica và hiệu năng hàng đầu. Trải nghiệm nhiếp ảnh chuyên nghiệp.",
        price: 19990000,
        original_price: 22990000,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        badge: "Khuyến mãi",
        stock: 20,
        ram: "12GB",
        storage: "256GB"
    },
    {
        id: 4,
        product_name: "Google Pixel 8 Pro",
        brand_name: "Google",
        description: "Điện thoại với trí tuệ nhân tạo tích hợp và camera xuất sắc. Thông minh hơn với Google AI.",
        price: 23990000,
        original_price: 25990000,
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        badge: "Hot",
        stock: 12,
        ram: "12GB",
        storage: "128GB"
    },
    {
        id: 5,
        product_name: "OPPO Find X6 Pro",
        brand_name: "OPPO",
        description: "Điện thoại flagship với thiết kế sang trọng và camera Hasselblad. Chụp ảnh chuyên nghiệp.",
        price: 21990000,
        original_price: 24990000,
        image: "https://images.unsplash.com/photo-1589492477829-5e65395b66cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        stock: 10,
        ram: "16GB",
        storage: "512GB"
    },
    {
        id: 6,
        product_name: "Realme GT 3",
        brand_name: "Realme",
        description: "Điện thoại gaming giá tốt với sạc nhanh 240W. Hiệu năng mạnh mẽ cho game thủ.",
        price: 12990000,
        original_price: 14990000,
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        badge: "Giá tốt",
        stock: 25,
        ram: "12GB",
        storage: "256GB"
    }
];

// Hàm rút gọn mô tả sản phẩm
function truncateDescription(description, maxLength = 120) {
    if (!description) return '';
    if (description.length <= maxLength) return description;
    return description.substring(0, maxLength).trim() + '...';
}

// Hàm chọn sản phẩm ngẫu nhiên
function getRandomProducts(products, count = RANDOM_PRODUCTS_COUNT) {
    if (!products || products.length === 0) return [];
    
    // Nếu sản phẩm ít hơn count, trả về tất cả
    if (products.length <= count) return products;
    
    // Shuffle mảng và lấy count sản phẩm đầu tiên
    const shuffled = [...products].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
}

// Hàm gọi API với xử lý lỗi tốt hơn
async function fetchAPI(endpoint, options = {}) {
    try {
        const defaultOptions = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            ...options
        };

        const response = await fetch(endpoint, defaultOptions);
        
        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status} ${response.statusText}`);
        }
        
        const data = await response.json();
        return { success: true, data: data };
    } catch (error) {
        console.error('Lỗi gọi API:', error);
        return { 
            success: false, 
            error: error.message,
            data: null 
        };
    }
}

// Biến lưu interval ID để có thể clear khi cần
let autoRefreshIntervalId = null;

// Lấy và hiển thị sản phẩm từ API
async function loadProducts(filter = {}, showLoading = true) {
    console.log('Đang tải sản phẩm...', filter);
    
    const productsGrid = document.getElementById('products-grid');
    if (!productsGrid) {
        console.error('Không tìm thấy #products-grid');
        return;
    }
    
    // Hiển thị loading (chỉ khi cần, không hiển thị khi auto-refresh)
    if (showLoading) {
        productsGrid.innerHTML = `
            <div class="loading-products">
                <i class="fas fa-spinner fa-spin"></i>
                <p>Đang tải sản phẩm...</p>
            </div>
        `;
    }
    
    // Nếu không sử dụng API, dùng dữ liệu tĩnh
    if (!USE_API) {
        console.log('Sử dụng dữ liệu tĩnh (fallback)');
        displayProducts(FALLBACK_PRODUCTS);
        updateProductCount(FALLBACK_PRODUCTS.length);
        return;
    }
    
    try {
        // Lấy dữ liệu từ tất cả trang (vì API có pagination)
        let allData = [];
        let pageNum = 1;
        let totalPages = 1;
        
        // Load trang 1
        let response1 = await fetch(API_ENDPOINTS.products);
        let data1 = await response1.json();
        
        if (data1.success && data1.data && data1.data.data) {
            allData = [...data1.data.data];
            totalPages = data1.data.last_page || 1;
            console.log(`📄 Trang 1: ${allData.length} sản phẩm, Total pages: ${totalPages}`);
            
            // Nếu có trang 2, load thêm
            if (totalPages > 1) {
                let response2 = await fetch(`${API_ENDPOINTS.products}?page=2`);
                let data2 = await response2.json();
                if (data2.success && data2.data && data2.data.data) {
                    allData = [...allData, ...data2.data.data];
                    console.log(`📄 Trang 2: +${data2.data.data.length} sản phẩm`);
                }
            }
        }
        
        console.log('🔍 Debug - result.data:', data1);
        
        if (allData.length > 0) {
            console.log('✅ Đã tải được', allData.length, 'sản phẩm từ API');
            if (allData.length > 0) {
                console.log('📦 Sản phẩm đầu tiên:', allData[0]);
            }
            
            // Nếu cấu hình hiển thị ngẫu nhiên, chọn 5-6 sản phẩm random
            let productsToDisplay = allData;
            if (SHOW_RANDOM_PRODUCTS) {
                productsToDisplay = getRandomProducts(allData);
                console.log(`🎲 Chọn ${productsToDisplay.length} sản phẩm ngẫu nhiên`);
            }
            
            displayProducts(productsToDisplay, false); // false = không phải từ filter
            updateFilterButtons('all'); // Reset về "Tất cả"
            updateProductCount(products.length);
        } else {
            // Sử dụng fallback data khi API lỗi
            console.warn('⚠️ API lỗi, sử dụng dữ liệu dự phòng');
            displayProducts(FALLBACK_PRODUCTS, false);
            updateProductCount(FALLBACK_PRODUCTS.length);
            updateFilterButtons('all');
            showNotification('Đang sử dụng dữ liệu demo (API không khả dụng)', 'warning');
        }
    } catch (error) {
        console.error('Lỗi khi tải sản phẩm:', error);
        // Sử dụng fallback data khi có lỗi
        console.warn('Lỗi kết nối, sử dụng dữ liệu dự phòng');
        displayProducts(FALLBACK_PRODUCTS, false);
        updateProductCount(FALLBACK_PRODUCTS.length);
        updateFilterButtons('all');
        showNotification('Đang sử dụng dữ liệu demo (Lỗi kết nối API)', 'warning');
    }
}

// Hiển thị sản phẩm lên grid
function displayProducts(products, isFiltered = false) {
    const productsGrid = document.getElementById('products-grid');
    if (!productsGrid) return;
    
    // Lưu sản phẩm hiển thị cuối cùng để có thể filter
    if (!isFiltered && products.length > 0) {
        allProducts = products;
        console.log('💾 Lưu toàn bộ sản phẩm:', allProducts.length);
    }
    
    if (!products || products.length === 0) {
        productsGrid.innerHTML = `
            <div class="no-products">
                <i class="fas fa-box-open"></i>
                <h3>Không có sản phẩm nào</h3>
                <p>Hiện tại chưa có sản phẩm trong cửa hàng</p>
            </div>
        `;
        return;
    }
    
    // Tạo HTML cho từng sản phẩm
    const productsHTML = products.map(product => {
        // Format thông tin sản phẩm từ API
        const productId = product.id || product.product_id;
        const productName = product.product_name || product.name || 'Không có tên';
        const brandName = product.brand?.brand_name || product.brand_name || product.brand || 'Unknown';
        
        // Chuyển đổi giá: API trả về string "30000.00", cần parse thành số
        let price = parseFloat(product.price || product.sale_price || 0);
        let originalPrice = parseFloat(product.original_price || product.base_price || product.cost_price || 0);
        
        const imageUrl = product.image || product.image_url || product.thumbnail || 
                        'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&h=400&fit=crop';
        const stock = parseInt(product.stock || product.quantity || product.in_stock || 0);
        const ram = product.ram || '';
        const storage = product.storage || '';
        const status = product.status || 'Available';
        
        // Tính giá khuyến mãi nếu có
        const hasDiscount = originalPrice > price;
        
        return `
        <div class="product-card" data-id="${productId}">
            ${product.badge ? `<div class="product-badge">${product.badge}</div>` : ''}
            ${hasDiscount ? `<div class="product-badge" style="background: #ef4444;">Giảm giá</div>` : ''}
            <button class="product-wishlist" data-id="${productId}">
                <i class="far fa-heart"></i>
            </button>
            
            <div class="product-image">
                <img src="${imageUrl}" 
                     alt="${productName}"
                     loading="lazy"
                     onerror="this.src='https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&h=400&fit=crop'">
            </div>
            
            <div class="product-info">
                <div class="product-brand">${brandName}</div>
                <h3 class="product-title">${productName}</h3>
                
                <p class="product-description" title="${(product.description || product.short_description || '').substring(0, 200)}">${truncateDescription(product.description || product.short_description || '', 120)}</p>
                
                ${ram || storage ? `
                <div class="product-specs">
                    ${ram ? `<span>${ram}</span>` : ''}
                    ${storage ? `<span>${storage}</span>` : ''}
                </div>
                ` : ''}
                
                <div class="product-price">
                    <div class="price-current">${formatPrice(price)}</div>
                    ${originalPrice && originalPrice > price ? 
                        `<div class="price-original">${formatPrice(originalPrice)}</div>` : ''}
                </div>
                
                <div class="product-status">
                    ${stock > 0 ? 
                        '<span style="color: #10b981;"><i class="fas fa-check-circle"></i> Còn hàng</span>' : 
                        '<span style="color: #ef4444;"><i class="fas fa-times-circle"></i> Hết hàng</span>'}
                </div>
                
                <div class="product-actions">
                    <button class="btn btn-primary btn-small add-to-cart" data-id="${productId}" ${stock <= 0 ? 'disabled' : ''}>
                        <i class="fas fa-cart-plus"></i>
                        Thêm giỏ hàng
                    </button>
                    <button class="btn btn-outline btn-small view-detail" data-id="${productId}">
                        <i class="fas fa-eye"></i>
                        Xem chi tiết
                    </button>
                </div>
            </div>
        </div>
        `;
    }).join('');
    
    productsGrid.innerHTML = productsHTML;
    
    // Thêm event listeners cho các sản phẩm mới
    attachProductEvents();
    
    // Log thông tin ra console để debug
    console.log('Đã hiển thị sản phẩm:');
    products.forEach(product => {
        const productName = product.product_name || product.name || 'Không có tên';
        const price = product.price || product.sale_price || 0;
        console.log(`- ${productName}: ${formatPrice(price)}`);
    });
}

// Thêm event listeners cho sản phẩm
function attachProductEvents() {
    // Xem chi tiết sản phẩm
    document.querySelectorAll('.view-detail').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const productId = btn.dataset.id;
            showProductDetail(productId);
        });
    });
    
    // Thêm vào giỏ hàng
    document.querySelectorAll('.add-to-cart').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const productId = btn.dataset.id;
            addToCart(productId);
        });
    });
    
    // Yêu thích
    document.querySelectorAll('.product-wishlist').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const productId = btn.dataset.id;
            toggleWishlist(productId);
        });
    });
    
    // Click vào card sản phẩm
    document.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('click', (e) => {
            if (!e.target.closest('button')) {
                const productId = card.dataset.id;
                showProductDetail(productId);
            }
        });
    });
}

// Xem chi tiết sản phẩm từ API
async function showProductDetail(productId) {
    console.log('Xem chi tiết sản phẩm:', productId);
    
    try {
        const result = await fetchAPI(API_ENDPOINTS.PRODUCTS.GET_BY_ID(productId));
        
        if (result.success && result.data) {
            const product = result.data.data || result.data;
            openProductModal(product);
        } else {
            showNotification('Không thể tải chi tiết sản phẩm', 'error');
        }
    } catch (error) {
        console.error('Lỗi khi lấy chi tiết sản phẩm:', error);
        showNotification('Lỗi kết nối đến server', 'error');
    }
}

// Mở modal chi tiết sản phẩm
function openProductModal(product) {
    const modal = document.getElementById('product-modal');
    const modalBody = document.getElementById('modal-body');
    
    if (!modal || !modalBody) return;
    
    const productName = product.product_name || product.name || 'Không có tên';
    const brandName = product.brand?.brand_name || product.brand_name || product.brand || 'Unknown';
    const price = product.price || product.sale_price || 0;
    const originalPrice = product.original_price || product.base_price;
    const description = product.description || '';
    const specs = product.specifications || product.specs || [];
    const images = product.images || [product.image || product.image_url];
    const stock = product.stock || product.quantity || 0;
    const colors = product.colors || [];
    
    modalBody.innerHTML = `
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 40px; padding: 20px;">
            <div class="product-detail-images">
                <div class="main-image" style="height: 400px; background: #f3f4f6; border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-bottom: 20px;">
                    <img src="${images[0]}" alt="${productName}" style="max-height: 300px; max-width: 100%;" id="main-image">
                </div>
                ${images.length > 1 ? `
                <div class="thumbnail-images" style="display: flex; gap: 10px; flex-wrap: wrap;">
                    ${images.map((img, index) => `
                        <div class="thumbnail" data-image="${img}" style="width: 80px; height: 80px; background: #f3f4f6; border-radius: 8px; display: flex; align-items: center; justify-content: center; cursor: pointer; border: 2px solid ${index === 0 ? '#3b82f6' : 'transparent'}; padding: 8px;">
                            <img src="${img}" alt="Thumbnail ${index + 1}" style="max-width: 100%; max-height: 100%;">
                        </div>
                    `).join('')}
                </div>
                ` : ''}
            </div>
            
            <div class="product-detail-info">
                <div style="margin-bottom: 20px;">
                    <div style="color: #6b7280; font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em;">${brandName}</div>
                    <h2 style="font-size: 32px; font-weight: 700; margin: 8px 0;">${productName}</h2>
                </div>
                
                <div class="product-price" style="margin-bottom: 30px;">
                    <div style="font-size: 36px; font-weight: 800; color: #3b82f6;">${formatPrice(price)}</div>
                    ${originalPrice && originalPrice > price ? 
                        `<div style="font-size: 24px; color: #6b7280; text-decoration: line-through;">${formatPrice(originalPrice)}</div>` : ''}
                </div>
                
                ${description ? `
                <div style="margin-bottom: 30px;">
                    <h4 style="margin-bottom: 12px; font-size: 18px;">Mô tả sản phẩm</h4>
                    <p style="color: #6b7280; line-height: 1.6;">${description}</p>
                </div>
                ` : ''}
                
                ${specs.length > 0 ? `
                <div style="margin-bottom: 30px;">
                    <h4 style="margin-bottom: 12px; font-size: 18px;">Thông số kỹ thuật</h4>
                    <ul style="color: #6b7280; line-height: 1.8;">
                        ${specs.map(spec => `<li>• ${spec}</li>`).join('')}
                    </ul>
                </div>
                ` : ''}
                
                ${colors.length > 0 ? `
                <div style="margin-bottom: 30px;">
                    <h4 style="margin-bottom: 12px; font-size: 18px;">Màu sắc</h4>
                    <div style="display: flex; gap: 12px; flex-wrap: wrap;">
                        ${colors.map(color => `
                            <div style="padding: 8px 16px; border: 2px solid #d1d5db; border-radius: 9999px; cursor: pointer; transition: all 0.3s;">
                                ${color}
                            </div>
                        `).join('')}
                    </div>
                </div>
                ` : ''}
                
                <div style="display: flex; gap: 16px;">
                    <button class="btn btn-primary add-to-cart-modal" data-id="${product.id || product.product_id}" style="flex: 1;" ${stock <= 0 ? 'disabled' : ''}>
                        <i class="fas fa-cart-plus"></i>
                        ${stock <= 0 ? 'Hết hàng' : 'Thêm vào giỏ hàng'}
                    </button>
                    <button class="btn btn-secondary" style="flex: 1;">
                        <i class="fas fa-bolt"></i>
                        Mua ngay
                    </button>
                </div>
            </div>
        </div>
    `;
    
    // Thêm event listener cho thumbnail images
    document.querySelectorAll('.thumbnail').forEach(thumb => {
        thumb.addEventListener('click', () => {
            document.querySelectorAll('.thumbnail').forEach(t => {
                t.style.borderColor = 'transparent';
            });
            thumb.style.borderColor = '#3b82f6';
            document.getElementById('main-image').src = thumb.dataset.image;
        });
    });
    
    // Thêm vào giỏ hàng từ modal
    const addToCartBtn = modalBody.querySelector('.add-to-cart-modal');
    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', () => {
            addToCart(product.id || product.product_id);
        });
    }
    
    // Hiển thị modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Thêm vào giỏ hàng
function addToCart(productId) {
    // Tạm thời sử dụng local storage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Tìm sản phẩm trong cart
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        // Lấy thông tin sản phẩm từ API hoặc từ DOM
        const productCard = document.querySelector(`.product-card[data-id="${productId}"]`);
        if (productCard) {
            const productName = productCard.querySelector('.product-title').textContent;
            const priceText = productCard.querySelector('.price-current').textContent;
            const image = productCard.querySelector('img').src;
            
            cart.push({
                id: productId,
                name: productName,
                price: parseFloat(priceText.replace(/[^\d]/g, '')),
                image: image,
                quantity: 1
            });
        }
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    showNotification('Đã thêm vào giỏ hàng', 'success');
}

// Toggle wishlist
function toggleWishlist(productId) {
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    const wishlistBtn = document.querySelector(`.product-wishlist[data-id="${productId}"]`);
    
    const existingIndex = wishlist.indexOf(productId);
    if (existingIndex >= 0) {
        wishlist.splice(existingIndex, 1);
        wishlistBtn.innerHTML = '<i class="far fa-heart"></i>';
        showNotification('Đã xóa khỏi yêu thích', 'info');
    } else {
        wishlist.push(productId);
        wishlistBtn.innerHTML = '<i class="fas fa-heart"></i>';
        showNotification('Đã thêm vào yêu thích', 'success');
    }
    
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    updateWishlistCount();
}

// Cập nhật số lượng sản phẩm
function updateProductCount(count) {
    const countElement = document.getElementById('product-count');
    if (countElement) {
        countElement.textContent = `${count} sản phẩm`;
    }
}

// Cập nhật số lượng giỏ hàng
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartCount = document.getElementById('cart-count');
    if (cartCount) {
        cartCount.textContent = totalItems;
    }
}

// Hiển thị giỏ hàng
function displayCart() {
    const cartSidebar = document.getElementById('cart-sidebar');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    
    if (!cartSidebar || !cartItems) return;
    
    // Lấy giỏ hàng từ localStorage
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Nếu giỏ hàng rỗng
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart"></i>
                <p>Giỏ hàng trống</p>
                <p style="font-size: 12px; color: #999;">Hãy thêm sản phẩm để tiếp tục</p>
            </div>
        `;
        if (cartTotal) cartTotal.textContent = '0 đ';
        return;
    }
    
    // Hiển thị từng sản phẩm
    let totalPrice = 0;
    const cartHTML = cart.map(item => {
        const itemTotal = item.price * item.quantity;
        totalPrice += itemTotal;
        
        return `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <p class="cart-item-price">${formatPrice(item.price)}</p>
                    <div class="cart-item-quantity">
                        <button class="qty-btn" onclick="changeQuantity(${item.id}, -1)">-</button>
                        <input type="number" value="${item.quantity}" min="1" onchange="setQuantity(${item.id}, this.value)">
                        <button class="qty-btn" onclick="changeQuantity(${item.id}, 1)">+</button>
                    </div>
                </div>
                <div class="cart-item-total">
                    <p>${formatPrice(itemTotal)}</p>
                    <button class="btn-remove" onclick="removeFromCart(${item.id})">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        `;
    }).join('');
    
    cartItems.innerHTML = cartHTML;
    
    // Cập nhật tổng tiền
    if (cartTotal) {
        cartTotal.textContent = formatPrice(totalPrice);
    }
}

// Thay đổi số lượng sản phẩm
function changeQuantity(productId, change) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const item = cart.find(item => item.id === productId);
    
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            cart = cart.filter(item => item.id !== productId);
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        displayCart();
    }
}

// Set số lượng cụ thể
function setQuantity(productId, quantity) {
    const qty = parseInt(quantity) || 1;
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const item = cart.find(item => item.id === productId);
    
    if (item) {
        if (qty <= 0) {
            cart = cart.filter(item => item.id !== productId);
        } else {
            item.quantity = qty;
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        displayCart();
    }
}

// Xóa sản phẩm khỏi giỏ
function removeFromCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    displayCart();
    showNotification('Đã xóa khỏi giỏ hàng', 'success');
}

// Cập nhật số lượng yêu thích
function updateWishlistCount() {
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    const wishlistCount = document.getElementById('wishlist-count');
    if (wishlistCount) {
        wishlistCount.textContent = wishlist.length;
    }
}

// Format tiền Việt Nam
function formatPrice(price) {
    if (!price) return 'Liên hệ';
    return new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    }).format(price);
}

// Hiển thị thông báo
function showNotification(message, type = 'info') {
    const container = document.getElementById('notification-container');
    if (!container) return;
    
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <div class="notification-message">${message}</div>
        </div>
        <button class="notification-close"><i class="fas fa-times"></i></button>
    `;
    
    container.appendChild(notification);
    
    // Tự động xóa sau 5 giây
    setTimeout(() => {
        notification.remove();
    }, 5000);
    
    // Nút đóng
    notification.querySelector('.notification-close').addEventListener('click', () => {
        notification.remove();
    });
}

// Lọc sản phẩm theo thương hiệu
function filterByBrand(brandId) {
    loadProducts({ brand: brandId });
}

// Tìm kiếm sản phẩm
function searchProducts(keyword) {
    loadProducts({ search: keyword });
}

// Lưu toàn bộ sản phẩm để filter client-side
let allProducts = [];

// Mapping brand name sang brand_id
const brandMapping = {
    'iphone': { id: 1, name: 'Apple' },
    'samsung': { id: 2, name: 'Samsung' },
    'xiaomi': { id: 3, name: 'Xiaomi' },
    'google': { id: 4, name: 'Google' },
    'all': { id: null, name: 'Tất cả' }
};

// Hàm filter sản phẩm theo brand
function filterByBrand(brandKey) {
    console.log('🔍 Filter by:', brandKey);
    
    if (brandKey === 'all') {
        console.log('📦 Hiển thị tất cả sản phẩm:', allProducts.length);
        // Áp dụng random nếu cấu hình
        let productsToShow = allProducts;
        if (SHOW_RANDOM_PRODUCTS) {
            productsToShow = getRandomProducts(allProducts);
            console.log(`🎲 Chọn ${productsToShow.length} sản phẩm ngẫu nhiên từ ${allProducts.length}`);
        }
        displayProducts(productsToShow, true);
        return;
    }
    
    const brand = brandMapping[brandKey];
    if (!brand) {
        console.warn('❌ Brand không tìm thấy:', brandKey);
        return;
    }
    
    // Filter sản phẩm có brand_id khớp
    const filtered = allProducts.filter(product => {
        const productBrandId = product.brand_id || product.brand?.id;
        return productBrandId == brand.id;
    });
    
    console.log(`✅ Lọc ${brand.name}: ${filtered.length} sản phẩm`);
    // Áp dụng random nếu cấu hình
    let productsToShow = filtered;
    if (SHOW_RANDOM_PRODUCTS) {
        productsToShow = getRandomProducts(filtered);
        console.log(`🎲 Chọn ${productsToShow.length} sản phẩm ngẫu nhiên từ ${filtered.length}`);
    }
    displayProducts(productsToShow, true);
}

// Cập nhật active state của filter buttons
function updateFilterButtons(activeFilter = 'all') {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        const filterValue = btn.dataset.filter;
        if (filterValue === activeFilter) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}
function startAutoRefresh() {
    // Xóa interval cũ nếu có
    if (autoRefreshIntervalId) {
        clearInterval(autoRefreshIntervalId);
    }
    
    // Chỉ bật auto-refresh khi sử dụng API
    if (USE_API && AUTO_REFRESH_INTERVAL > 0) {
        autoRefreshIntervalId = setInterval(() => {
            console.log('🔄 Auto-refresh: Đang cập nhật dữ liệu...');
            loadProducts({}, false); // false = không hiển thị loading spinner
        }, AUTO_REFRESH_INTERVAL);
        console.log(`✅ Auto-refresh đã bật: Làm mới mỗi ${AUTO_REFRESH_INTERVAL/1000} giây`);
    }
}

// Hàm tắt tự động làm mới
function stopAutoRefresh() {
    if (autoRefreshIntervalId) {
        clearInterval(autoRefreshIntervalId);
        autoRefreshIntervalId = null;
        console.log('⏹️ Auto-refresh đã tắt');
    }
}

// Tự động chạy khi trang tải xong
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM đã sẵn sàng, bắt đầu tải sản phẩm...');
    
    // Khởi tạo giỏ hàng và yêu thích
    updateCartCount();
    updateWishlistCount();
    
    // Tải sản phẩm lần đầu
    loadProducts();
    
    // Bật auto-refresh
    startAutoRefresh();
    
    // Event listener cho icon giỏ hàng
    const cartBtn = document.getElementById('cart-btn');
    const cartSidebar = document.getElementById('cart-sidebar');
    const closeCartBtn = document.getElementById('close-cart');
    const sidebarBackdrop = cartSidebar?.querySelector('.sidebar-backdrop');
    
    if (cartBtn) {
        cartBtn.addEventListener('click', () => {
            console.log('Click giỏ hàng - mở sidebar');
            displayCart(); // Hiển thị giỏ hàng
            cartSidebar?.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }
    
    if (closeCartBtn) {
        closeCartBtn.addEventListener('click', () => {
            console.log('Đóng giỏ hàng');
            cartSidebar?.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    }
    
    if (sidebarBackdrop) {
        sidebarBackdrop.addEventListener('click', () => {
            console.log('Click backdrop - đóng sidebar');
            cartSidebar?.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    }
    
    // Thêm event listener cho tìm kiếm
    const searchInput = document.querySelector('.search-input');
    const searchBtn = document.querySelector('.search-btn');
    
    if (searchBtn && searchInput) {
        searchBtn.addEventListener('click', () => {
            if (searchInput.value.trim()) {
                searchProducts(searchInput.value.trim());
            }
        });
        
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && searchInput.value.trim()) {
                searchProducts(searchInput.value.trim());
            }
        });
    }
    
    // Thêm event listener cho nút làm mới
    const refreshBtn = document.getElementById('refresh-products');
    if (refreshBtn) {
        refreshBtn.addEventListener('click', () => {
            console.log('🔄 Làm mới sản phẩm thủ công...');
            refreshBtn.innerHTML = '<i class="fas fa-sync-alt fa-spin"></i> Đang tải...';
            refreshBtn.disabled = true;
            
            loadProducts().then(() => {
                refreshBtn.innerHTML = '<i class="fas fa-sync-alt"></i> Làm mới';
                refreshBtn.disabled = false;
                showNotification('Đã cập nhật danh sách sản phẩm!', 'success');
            });
        });
    }
    
    // Thêm event listener cho filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const filterValue = btn.dataset.filter;
            console.log('🔘 Click filter button:', filterValue);
            
            // Cập nhật active state
            updateFilterButtons(filterValue);
            
            // Filter sản phẩm
            filterByBrand(filterValue);
            
            // Cuộn lên đầu trang
            document.getElementById('products-grid')?.scrollIntoView({ behavior: 'smooth' });
        });
    });
    
    // Close modal
    const closeModalBtn = document.getElementById('close-modal');
    const productModal = document.getElementById('product-modal');
    
    if (closeModalBtn && productModal) {
        closeModalBtn.addEventListener('click', () => {
            productModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
        
        // Close on backdrop click
        productModal.querySelector('.modal-backdrop').addEventListener('click', () => {
            productModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    }
});