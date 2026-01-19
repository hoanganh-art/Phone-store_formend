// Data
      const productsData = [
        {
          id: 1,
          name: "iPhone 15 Pro Max",
          brand: "iphone",
          description:
            "Điện thoại cao cấp với chip A17 Pro, camera 48MP và thiết kế titan. Trải nghiệm công nghệ đỉnh cao từ Apple.",
          price: 32990000,
          originalPrice: 35990000,
          image:
            "https://images.unsplash.com/photo-1695048133142-1a20484d2569?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          images: [
            "https://images.unsplash.com/photo-1695048133142-1a20484d2569?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1592910147752-2fb6a8d4d51b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          ],
          specs: [
            "Chip A17 Pro 6 nhân",
            "Camera 48MP + 12MP + 12MP",
            "Màn hình 6.7 inch Super Retina XDR",
            "Pin 4422 mAh",
            "iOS 17",
          ],
          badge: "Mới",
          stock: 15,
          rating: 4.8,
          reviews: 124,
          colors: ["Titan Xám", "Titan Xanh", "Titan Trắng", "Titan Đen"],
        },
        {
          id: 2,
          name: "Samsung Galaxy S24 Ultra",
          brand: "samsung",
          description:
            "Điện thoại Android mạnh mẽ với bút S-Pen và camera 200MP. Hiệu năng vượt trội cho mọi tác vụ.",
          price: 27990000,
          originalPrice: 29990000,
          image:
            "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          images: [
            "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1598327105666-5b89351aff97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          ],
          specs: [
            "Chip Snapdragon 8 Gen 3",
            "Camera 200MP + 12MP + 10MP + 10MP",
            "Màn hình 6.8 inch Dynamic AMOLED 2X",
            "Bút S-Pen tích hợp",
            "Android 14",
          ],
          badge: "Bán chạy",
          stock: 8,
          rating: 4.7,
          reviews: 89,
          colors: ["Đen Phantom", "Xám Titan", "Tím Nhạt", "Vàng"],
        },
        {
          id: 3,
          name: "Xiaomi 14 Pro",
          brand: "xiaomi",
          description:
            "Điện thoại với camera Leica và hiệu năng hàng đầu. Trải nghiệm nhiếp ảnh chuyên nghiệp.",
          price: 19990000,
          originalPrice: 22990000,
          image:
            "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          images: [
            "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1589492477829-5e65395b66cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          ],
          specs: [
            "Chip Snapdragon 8 Gen 3",
            "Camera Leica 50MP + 50MP + 50MP",
            "Màn hình 6.73 inch AMOLED",
            "Sạc nhanh 120W",
            "Android 14",
          ],
          badge: "Khuyến mãi",
          stock: 20,
          rating: 4.6,
          reviews: 67,
          colors: ["Đen", "Trắng", "Xanh", "Tím"],
        },
        {
          id: 4,
          name: "Google Pixel 8 Pro",
          brand: "google",
          description:
            "Điện thoại với trí tuệ nhân tạo tích hợp và camera xuất sắc. Thông minh hơn với Google AI.",
          price: 23990000,
          originalPrice: 25990000,
          image:
            "https://images.unsplash.com/photo-1598327105666-5b89351aff97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          images: [
            "https://images.unsplash.com/photo-1598327105666-5b89351aff97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1598327105854-c8674faddf74?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          ],
          specs: [
            "Chip Tensor G3",
            "Camera 50MP + 48MP + 48MP",
            "Màn hình 6.7 inch LTPO OLED",
            "Android 14",
            "Google AI tích hợp",
          ],
          badge: "Mới",
          stock: 12,
          rating: 4.5,
          reviews: 45,
          colors: ["Đen Obsidian", "Xanh Bay", "Trắng Porcelain"],
        },
        {
          id: 5,
          name: "iPhone 14",
          brand: "iphone",
          description:
            "Điện thoại Apple với chip A15 Bionic và camera 12MP. Hiệu năng ổn định, giá cả hợp lý.",
          price: 19990000,
          originalPrice: 22990000,
          image:
            "https://images.unsplash.com/photo-1664478546384-d57ffe74a78c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          images: [
            "https://images.unsplash.com/photo-1664478546384-d57ffe74a78c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          ],
          specs: [
            "Chip A15 Bionic",
            "Camera 12MP kép",
            "Màn hình 6.1 inch Super Retina XDR",
            "Pin 3279 mAh",
            "iOS 16",
          ],
          badge: "Tiết kiệm",
          stock: 25,
          rating: 4.4,
          reviews: 156,
          colors: ["Xanh dương", "Tím", "Starlight", "Midnight"],
        },
        {
          id: 6,
          name: "Samsung Galaxy Z Fold5",
          brand: "samsung",
          description:
            "Điện thoại màn hình gập cao cấp với công nghệ tiên phong. Trải nghiệm đa nhiệm vượt trội.",
          price: 39990000,
          originalPrice: 42990000,
          image:
            "https://images.unsplash.com/photo-1620286343823-d0df2ae666a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          images: [
            "https://images.unsplash.com/photo-1620286343823-d0df2ae666a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          ],
          specs: [
            "Chip Snapdragon 8 Gen 2",
            "Màn hình gập 7.6 inch + 6.2 inch",
            "Camera 50MP + 12MP + 10MP",
            "Bút S-Pen",
            "Android 13",
          ],
          badge: "Độc quyền",
          stock: 5,
          rating: 4.9,
          reviews: 34,
          colors: ["Đen Phantom", "Kem", "Xanh Navy"],
        },
        {
          id: 7,
          name: "OPPO Find X6 Pro",
          brand: "oppo",
          description:
            "Flagship với camera Hasselblad và sạc siêu nhanh 100W. Nhiếp ảnh chuyên nghiệp trong tầm tay.",
          price: 24990000,
          originalPrice: 27990000,
          image:
            "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          images: [
            "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          ],
          specs: [
            "Chip Snapdragon 8 Gen 2",
            "Camera Hasselblad 50MP + 50MP + 50MP",
            "Màn hình 6.82 inch AMOLED",
            "Sạc nhanh 100W",
            "Android 13",
          ],
          badge: "Mới",
          stock: 10,
          rating: 4.6,
          reviews: 42,
          colors: ["Đen", "Xanh ngọc", "Cam"],
        },
        {
          id: 8,
          name: "OnePlus 11",
          brand: "oneplus",
          description:
            "Hiệu năng hàng đầu với thiết kế độc đáo và sạc nhanh 100W. Trải nghiệm mượt mà tuyệt đối.",
          price: 18990000,
          originalPrice: 20990000,
          image:
            "https://images.unsplash.com/photo-1592910147752-2fb6a8d4d51b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          images: [
            "https://images.unsplash.com/photo-1592910147752-2fb6a8d4d51b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          ],
          specs: [
            "Chip Snapdragon 8 Gen 2",
            "Camera Hasselblad 50MP + 32MP + 48MP",
            "Màn hình 6.7 inch AMOLED",
            "Sạc nhanh 100W",
            "OxygenOS 13",
          ],
          badge: "Nổi bật",
          stock: 14,
          rating: 4.7,
          reviews: 63,
          colors: ["Đen Eternal", "Xanh ngọc"],
        },
      ];

      // State Management
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
      let currentUser = JSON.parse(localStorage.getItem("currentUser")) || null;
      let currentFilter = "all";
      let currentPage = 1;
      const productsPerPage = 4;
      let isLoading = false;

      // DOM Elements
      const header = document.querySelector(".header");
      const navMenu = document.querySelector(".nav-menu");
      const mobileToggle = document.getElementById("mobile-toggle");
      const themeToggle = document.getElementById("theme-toggle");
      const cartBtn = document.getElementById("cart-btn");
      const wishlistBtn = document.getElementById("wishlist-btn");
      const userBtn = document.getElementById("user-btn");
      const cartSidebar = document.getElementById("cart-sidebar");
      const wishlistSidebar = document.getElementById("wishlist-sidebar");
      const closeCartBtn = document.getElementById("close-cart");
      const closeWishlistBtn = document.getElementById("close-wishlist");
      const continueShoppingBtn = document.getElementById("continue-shopping");
      const cartItems = document.getElementById("cart-items");
      const wishlistItems = document.getElementById("wishlist-items");
      const cartTotal = document.getElementById("cart-total");
      const cartCount = document.getElementById("cart-count");
      const wishlistCount = document.getElementById("wishlist-count");
      const productsGrid = document.getElementById("products-grid");
      const filterBtns = document.querySelectorAll(".filter-btn");
      const loadMoreBtn = document.getElementById("load-more");
      const productModal = document.getElementById("product-modal");
      const closeModalBtn = document.getElementById("close-modal");
      const modalBody = document.getElementById("modal-body");
      const checkoutBtn = document.getElementById("checkout-btn");
      const searchInput = document.querySelector(".search-input");
      const searchBtn = document.querySelector(".search-btn");

      // Format price
      function formatPrice(price) {
        return new Intl.NumberFormat("vi-VN", {
          style: "currency",
          currency: "VND",
        }).format(price);
      }

      // Show notification
      function showNotification(message, type = "info") {
        const container = document.getElementById("notification-container");
        const notification = document.createElement("div");
        notification.className = `notification ${type}`;

        const icons = {
          success: "fas fa-check-circle",
          error: "fas fa-times-circle",
          warning: "fas fa-exclamation-triangle",
          info: "fas fa-info-circle",
        };

        notification.innerHTML = `
                <div class="notification-icon">
                    <i class="${icons[type]}"></i>
                </div>
                <div class="notification-content">
                    <div class="notification-title">Thông báo</div>
                    <div class="notification-message">${message}</div>
                </div>
                <button class="notification-close">
                    <i class="fas fa-times"></i>
                </button>
            `;

        container.appendChild(notification);

        // Show notification
        setTimeout(() => {
          notification.classList.add("show");
        }, 10);

        // Auto remove after 5 seconds
        const removeNotification = () => {
          notification.classList.remove("show");
          setTimeout(() => {
            notification.remove();
          }, 300);
        };

        // Close button event
        notification
          .querySelector(".notification-close")
          .addEventListener("click", removeNotification);

        setTimeout(removeNotification, 5000);
      }

      // Update badges
      function updateBadges() {
        const totalCartItems = cart.reduce(
          (sum, item) => sum + item.quantity,
          0,
        );
        cartCount.textContent = totalCartItems;
        wishlistCount.textContent = wishlist.length;
      }

      // Save to localStorage
      function saveToLocalStorage() {
        localStorage.setItem("cart", JSON.stringify(cart));
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
        localStorage.setItem("currentUser", JSON.stringify(currentUser));
      }

      // Render products
      function renderProducts() {
        const filteredProducts =
          currentFilter === "all"
            ? productsData
            : productsData.filter((product) => product.brand === currentFilter);

        const startIndex = (currentPage - 1) * productsPerPage;
        const endIndex = startIndex + productsPerPage;
        const productsToShow = filteredProducts.slice(startIndex, endIndex);

        if (currentPage === 1) {
          productsGrid.innerHTML = "";
        }

        if (productsToShow.length === 0) {
          productsGrid.innerHTML = `
                    <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px;">
                        <i class="fas fa-search" style="font-size: 60px; color: var(--gray); margin-bottom: 20px;"></i>
                        <h3 style="color: var(--dark); margin-bottom: 12px;">Không tìm thấy sản phẩm</h3>
                        <p style="color: var(--gray);">Hãy thử tìm kiếm với bộ lọc khác</p>
                    </div>
                `;
          loadMoreBtn.style.display = "none";
          return;
        }

        productsToShow.forEach((product) => {
          const isInWishlist = wishlist.some((item) => item.id === product.id);
          const cartItem = cart.find((item) => item.id === product.id);

          const productCard = document.createElement("div");
          productCard.className = "product-card";
          productCard.innerHTML = `
                    ${product.badge ? `<div class="product-badge">${product.badge}</div>` : ""}
                    <button class="product-wishlist ${isInWishlist ? "active" : ""}" data-id="${product.id}">
                        <i class="${isInWishlist ? "fas" : "far"} fa-heart"></i>
                    </button>
                    <div class="product-image">
                        <img src="${product.image}" alt="${product.name}" loading="lazy">
                    </div>
                    <div class="product-info">
                        <div class="product-category">${product.brand.toUpperCase()}</div>
                        <h3 class="product-title">${product.name}</h3>
                        <p class="product-description">${product.description}</p>
                        <div class="product-rating">
                            <div class="stars">
                                ${getStarRating(product.rating)}
                            </div>
                            <span class="rating-value">${product.rating}/5</span>
                            <span class="rating-count">(${product.reviews})</span>
                        </div>
                        <div class="product-price">
                            <div class="price-current">${formatPrice(product.price)}</div>
                            ${product.originalPrice ? `<div class="price-original">${formatPrice(product.originalPrice)}</div>` : ""}
                        </div>
                        <div class="product-actions">
                            <button class="btn btn-primary btn-small add-to-cart" data-id="${product.id}" ${product.stock <= 0 ? "disabled" : ""}>
                                <i class="fas fa-cart-plus"></i>
                                ${cartItem ? `Đã có (${cartItem.quantity})` : "Thêm giỏ hàng"}
                            </button>
                            <button class="btn btn-outline btn-small view-detail" data-id="${product.id}">
                                <i class="fas fa-eye"></i>
                                Xem chi tiết
                            </button>
                        </div>
                    </div>
                `;

          productsGrid.appendChild(productCard);
        });

        // Show/hide load more button
        loadMoreBtn.style.display =
          filteredProducts.length > currentPage * productsPerPage
            ? "block"
            : "none";

        // Attach events
        attachProductEvents();
      }

      // Get star rating HTML
      function getStarRating(rating) {
        let stars = "";
        for (let i = 1; i <= 5; i++) {
          if (i <= Math.floor(rating)) {
            stars += '<i class="fas fa-star"></i>';
          } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
            stars += '<i class="fas fa-star-half-alt"></i>';
          } else {
            stars += '<i class="far fa-star"></i>';
          }
        }
        return stars;
      }

      // Attach product events
      function attachProductEvents() {
        // Add to cart
        document.querySelectorAll(".add-to-cart").forEach((btn) => {
          btn.addEventListener("click", (e) => {
            e.stopPropagation();
            const productId = parseInt(btn.dataset.id);
            addToCart(productId);
          });
        });

        // View detail
        document.querySelectorAll(".view-detail").forEach((btn) => {
          btn.addEventListener("click", (e) => {
            e.stopPropagation();
            const productId = parseInt(btn.dataset.id);
            showProductDetail(productId);
          });
        });

        // Wishlist
        document.querySelectorAll(".product-wishlist").forEach((btn) => {
          btn.addEventListener("click", (e) => {
            e.stopPropagation();
            const productId = parseInt(btn.dataset.id);
            toggleWishlist(productId);
          });
        });

        // Product card click
        document.querySelectorAll(".product-card").forEach((card) => {
          card.addEventListener("click", (e) => {
            if (!e.target.closest("button")) {
              const productId = parseInt(
                card.querySelector("[data-id]").dataset.id,
              );
              showProductDetail(productId);
            }
          });
        });
      }

      // Add to cart
      function addToCart(productId) {
        const product = productsData.find((p) => p.id === productId);
        if (!product) return;

        const existingItem = cart.find((item) => item.id === productId);

        if (existingItem) {
          if (existingItem.quantity >= product.stock) {
            showNotification(
              `Chỉ còn ${product.stock} sản phẩm trong kho`,
              "warning",
            );
            return;
          }
          existingItem.quantity++;
        } else {
          if (product.stock <= 0) {
            showNotification("Sản phẩm đã hết hàng", "warning");
            return;
          }
          cart.push({
            ...product,
            quantity: 1,
          });
        }

        saveToLocalStorage();
        updateCart();
        updateBadges();
        showNotification(`Đã thêm ${product.name} vào giỏ hàng`, "success");

        // Update button text
        const btn = document.querySelector(
          `.add-to-cart[data-id="${productId}"]`,
        );
        if (btn) {
          const cartItem = cart.find((item) => item.id === productId);
          btn.innerHTML = `<i class="fas fa-cart-plus"></i> Đã có (${cartItem.quantity})`;
        }
      }

      // Remove from cart
      function removeFromCart(productId) {
        cart = cart.filter((item) => item.id !== productId);
        saveToLocalStorage();
        updateCart();
        updateBadges();
        showNotification("Đã xóa sản phẩm khỏi giỏ hàng", "success");
      }

      // Update quantity
      function updateQuantity(productId, change) {
        const item = cart.find((item) => item.id === productId);
        if (item) {
          const product = productsData.find((p) => p.id === productId);

          item.quantity += change;

          if (item.quantity < 1) {
            removeFromCart(productId);
            return;
          }

          if (product && item.quantity > product.stock) {
            item.quantity = product.stock;
            showNotification(
              `Chỉ còn ${product.stock} sản phẩm trong kho`,
              "warning",
            );
          }
        }

        saveToLocalStorage();
        updateCart();
        updateBadges();
      }

      // Update cart display
      function updateCart() {
        cartItems.innerHTML = "";

        if (cart.length === 0) {
          cartItems.innerHTML = `
                    <div style="text-align: center; padding: 60px 20px;">
                        <i class="fas fa-shopping-cart" style="font-size: 60px; color: var(--gray); margin-bottom: 20px;"></i>
                        <h3 style="color: var(--dark); margin-bottom: 12px;">Giỏ hàng trống</h3>
                        <p style="color: var(--gray);">Hãy thêm sản phẩm vào giỏ hàng</p>
                    </div>
                `;
          cartTotal.textContent = "0 đ";
          checkoutBtn.disabled = true;
          return;
        }

        let total = 0;

        cart.forEach((item) => {
          const itemTotal = item.price * item.quantity;
          total += itemTotal;

          const cartItem = document.createElement("div");
          cartItem.className = "cart-item";
          cartItem.innerHTML = `
                    <div class="cart-item-image">
                        <img src="${item.image}" alt="${item.name}" loading="lazy">
                    </div>
                    <div class="cart-item-info">
                        <h4 class="cart-item-title">${item.name}</h4>
                        <div class="cart-item-price">${formatPrice(item.price)}</div>
                        <div class="cart-item-controls">
                            <button class="quantity-btn decrease" data-id="${item.id}">
                                <i class="fas fa-minus"></i>
                            </button>
                            <span class="quantity">${item.quantity}</span>
                            <button class="quantity-btn increase" data-id="${item.id}">
                                <i class="fas fa-plus"></i>
                            </button>
                            <button class="cart-item-remove" data-id="${item.id}">
                                <i class="fas fa-trash"></i>
                            </button>
                        </div>
                    </div>
                `;

          cartItems.appendChild(cartItem);
        });

        cartTotal.textContent = formatPrice(total);
        checkoutBtn.disabled = false;

        // Attach cart item events
        document.querySelectorAll(".decrease").forEach((btn) => {
          btn.addEventListener("click", (e) => {
            const productId = parseInt(btn.dataset.id);
            updateQuantity(productId, -1);
          });
        });

        document.querySelectorAll(".increase").forEach((btn) => {
          btn.addEventListener("click", (e) => {
            const productId = parseInt(btn.dataset.id);
            updateQuantity(productId, 1);
          });
        });

        document.querySelectorAll(".cart-item-remove").forEach((btn) => {
          btn.addEventListener("click", (e) => {
            const productId = parseInt(btn.dataset.id);
            removeFromCart(productId);
          });
        });
      }

      // Toggle wishlist
      function toggleWishlist(productId) {
        const product = productsData.find((p) => p.id === productId);
        if (!product) return;

        const existingIndex = wishlist.findIndex(
          (item) => item.id === productId,
        );

        if (existingIndex >= 0) {
          wishlist.splice(existingIndex, 1);
          showNotification(`Đã xóa ${product.name} khỏi yêu thích`, "success");
        } else {
          wishlist.push(product);
          showNotification(`Đã thêm ${product.name} vào yêu thích`, "success");
        }

        saveToLocalStorage();
        updateBadges();
        updateWishlist();

        // Update wishlist button
        const wishlistBtn = document.querySelector(
          `.product-wishlist[data-id="${productId}"]`,
        );
        if (wishlistBtn) {
          const isInWishlist = wishlist.some((item) => item.id === productId);
          wishlistBtn.classList.toggle("active", isInWishlist);
          wishlistBtn.innerHTML = `<i class="${isInWishlist ? "fas" : "far"} fa-heart"></i>`;
        }
      }

      // Update wishlist
      function updateWishlist() {
        wishlistItems.innerHTML = "";

        if (wishlist.length === 0) {
          wishlistItems.innerHTML = `
                    <div style="text-align: center; padding: 60px 20px;">
                        <i class="fas fa-heart" style="font-size: 60px; color: var(--gray); margin-bottom: 20px;"></i>
                        <h3 style="color: var(--dark); margin-bottom: 12px;">Danh sách yêu thích trống</h3>
                        <p style="color: var(--gray);">Hãy thêm sản phẩm vào yêu thích</p>
                    </div>
                `;
          return;
        }

        wishlist.forEach((product) => {
          const wishlistItem = document.createElement("div");
          wishlistItem.className = "cart-item";
          wishlistItem.innerHTML = `
                    <div class="cart-item-image">
                        <img src="${product.image}" alt="${product.name}" loading="lazy">
                    </div>
                    <div class="cart-item-info">
                        <h4 class="cart-item-title">${product.name}</h4>
                        <div class="cart-item-price">${formatPrice(product.price)}</div>
                        <div class="cart-item-controls">
                            <button class="btn btn-small btn-primary add-from-wishlist" data-id="${product.id}">
                                <i class="fas fa-cart-plus"></i>
                            </button>
                            <button class="btn btn-small btn-outline view-from-wishlist" data-id="${product.id}">
                                <i class="fas fa-eye"></i>
                            </button>
                            <button class="btn btn-small btn-outline remove-from-wishlist" data-id="${product.id}">
                                <i class="fas fa-trash"></i>
                            </button>
                        </div>
                    </div>
                `;

          wishlistItems.appendChild(wishlistItem);
        });

        // Attach wishlist item events
        document.querySelectorAll(".add-from-wishlist").forEach((btn) => {
          btn.addEventListener("click", (e) => {
            const productId = parseInt(btn.dataset.id);
            addToCart(productId);
          });
        });

        document.querySelectorAll(".view-from-wishlist").forEach((btn) => {
          btn.addEventListener("click", (e) => {
            const productId = parseInt(btn.dataset.id);
            showProductDetail(productId);
            closeSidebar(wishlistSidebar);
          });
        });

        document.querySelectorAll(".remove-from-wishlist").forEach((btn) => {
          btn.addEventListener("click", (e) => {
            const productId = parseInt(btn.dataset.id);
            toggleWishlist(productId);
          });
        });
      }

      // Show product detail
      function showProductDetail(productId) {
        const product = productsData.find((p) => p.id === productId);
        if (!product) return;

        const isInWishlist = wishlist.some((item) => item.id === productId);
        const cartItem = cart.find((item) => item.id === productId);

        modalBody.innerHTML = `
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 40px; padding: 20px;">
                    <div class="product-detail-images">
                        <div class="main-image" style="height: 400px; background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%); border-radius: var(--radius-xl); display: flex; align-items: center; justify-content: center; margin-bottom: 20px;">
                            <img src="${product.image}" alt="${product.name}" style="max-height: 300px;" id="main-image">
                        </div>
                        <div class="thumbnail-images" style="display: flex; gap: 10px;">
                            ${product.images
                              .map(
                                (img, index) => `
                                <div class="thumbnail ${index === 0 ? "active" : ""}" 
                                     data-image="${img}"
                                     style="width: 80px; height: 80px; background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%); border-radius: var(--radius-lg); display: flex; align-items: center; justify-content: center; cursor: pointer; border: 2px solid ${index === 0 ? "var(--primary)" : "transparent"}; padding: 8px;">
                                    <img src="${img}" alt="Thumbnail ${index + 1}" style="max-width: 100%; max-height: 100%;">
                                </div>
                            `,
                              )
                              .join("")}
                        </div>
                    </div>
                    <div class="product-detail-info">
                        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 20px;">
                            <div>
                                <div class="product-category">${product.brand.toUpperCase()}</div>
                                <h2 style="font-size: 32px; font-weight: 700; margin: 8px 0;">${product.name}</h2>
                                <div class="product-rating" style="display: flex; align-items: center; gap: 8px;">
                                    ${getStarRating(product.rating)}
                                    <span style="font-weight: 600;">${product.rating}/5</span>
                                    <span style="color: var(--gray);">(${product.reviews} đánh giá)</span>
                                </div>
                            </div>
                            <button class="product-wishlist ${isInWishlist ? "active" : ""}" 
                                    data-id="${product.id}"
                                    style="width: 48px; height: 48px; background: var(--glass-bg); border: 1px solid var(--glass-border); border-radius: var(--radius-full); display: flex; align-items: center; justify-content: center; cursor: pointer; font-size: 20px; color: ${isInWishlist ? "var(--danger)" : "var(--dark)"};">
                                <i class="${isInWishlist ? "fas" : "far"} fa-heart"></i>
                            </button>
                        </div>
                        
                        <div class="product-price" style="margin-bottom: 30px;">
                            <div style="font-size: 36px; font-weight: 800; color: var(--primary);">${formatPrice(product.price)}</div>
                            ${product.originalPrice ? `<div style="font-size: 24px; color: var(--gray); text-decoration: line-through;">${formatPrice(product.originalPrice)}</div>` : ""}
                        </div>
                        
                        <div style="margin-bottom: 30px;">
                            <h4 style="margin-bottom: 12px; font-size: 18px;">Màu sắc</h4>
                            <div style="display: flex; gap: 12px;">
                                ${product.colors
                                  .map(
                                    (color) => `
                                    <div style="padding: 8px 16px; border: 2px solid var(--gray-light); border-radius: var(--radius-full); cursor: pointer; transition: all var(--transition-normal);">
                                        ${color}
                                    </div>
                                `,
                                  )
                                  .join("")}
                            </div>
                        </div>
                        
                        <div style="margin-bottom: 30px;">
                            <h4 style="margin-bottom: 12px; font-size: 18px;">Thông số kỹ thuật</h4>
                            <ul style="color: var(--gray); line-height: 1.8;">
                                ${product.specs.map((spec) => `<li>• ${spec}</li>`).join("")}
                            </ul>
                        </div>
                        
                        <div style="display: flex; gap: 16px;">
                            <button class="btn btn-primary add-to-cart-modal" data-id="${product.id}" style="flex: 1;" ${product.stock <= 0 ? "disabled" : ""}>
                                <i class="fas fa-cart-plus"></i>
                                ${cartItem ? `Đã có ${cartItem.quantity} trong giỏ` : "Thêm vào giỏ hàng"}
                            </button>
                            <button class="btn btn-secondary" style="flex: 1;">
                                <i class="fas fa-bolt"></i>
                                Mua ngay
                            </button>
                        </div>
                    </div>
                </div>
            `;

        // Thumbnail events
        document.querySelectorAll(".thumbnail").forEach((thumb) => {
          thumb.addEventListener("click", () => {
            document.querySelectorAll(".thumbnail").forEach((t) => {
              t.style.borderColor = "transparent";
            });
            thumb.style.borderColor = "var(--primary)";
            document.getElementById("main-image").src = thumb.dataset.image;
          });
        });

        // Wishlist event
        const wishlistBtn = modalBody.querySelector(".product-wishlist");
        wishlistBtn.addEventListener("click", () => {
          toggleWishlist(productId);
          const isInWishlist = wishlist.some((item) => item.id === productId);
          wishlistBtn.classList.toggle("active", isInWishlist);
          wishlistBtn.innerHTML = `<i class="${isInWishlist ? "fas" : "far"} fa-heart"></i>`;
          wishlistBtn.style.color = isInWishlist
            ? "var(--danger)"
            : "var(--dark)";
        });

        // Add to cart event
        const addToCartBtn = modalBody.querySelector(".add-to-cart-modal");
        addToCartBtn.addEventListener("click", () => {
          addToCart(productId);
          const cartItem = cart.find((item) => item.id === productId);
          addToCartBtn.innerHTML = `<i class="fas fa-cart-plus"></i> Đã có ${cartItem ? cartItem.quantity : 1} trong giỏ`;
        });

        openModal(productModal);
      }

      // Open modal
      function openModal(modal) {
        modal.classList.add("active");
        document.body.style.overflow = "hidden";
      }

      // Close modal
      function closeModal(modal) {
        modal.classList.remove("active");
        document.body.style.overflow = "auto";
      }

      // Open sidebar
      function openSidebar(sidebar) {
        sidebar.classList.add("active");
        document.body.style.overflow = "hidden";
      }

      // Close sidebar
      function closeSidebar(sidebar) {
        sidebar.classList.remove("active");
        document.body.style.overflow = "auto";
      }

      // Promo timer
      function startPromoTimer() {
        const daysEl = document.getElementById("days");
        const hoursEl = document.getElementById("hours");
        const minutesEl = document.getElementById("minutes");
        const secondsEl = document.getElementById("seconds");

        const endTime = new Date();
        endTime.setDate(endTime.getDate() + 3);

        function updateTimer() {
          const now = new Date();
          const diff = endTime - now;

          if (diff <= 0) {
            daysEl.textContent = "00";
            hoursEl.textContent = "00";
            minutesEl.textContent = "00";
            secondsEl.textContent = "00";
            return;
          }

          const days = Math.floor(diff / (1000 * 60 * 60 * 24));
          const hours = Math.floor(
            (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
          );
          const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((diff % (1000 * 60)) / 1000);

          daysEl.textContent = days.toString().padStart(2, "0");
          hoursEl.textContent = hours.toString().padStart(2, "0");
          minutesEl.textContent = minutes.toString().padStart(2, "0");
          secondsEl.textContent = seconds.toString().padStart(2, "0");
        }

        updateTimer();
        setInterval(updateTimer, 1000);
      }

      // Initialize
      function init() {
        // Render initial products
        renderProducts();

        // Update cart and wishlist
        updateCart();
        updateWishlist();
        updateBadges();

        // Start promo timer
        startPromoTimer();

        // Header scroll effect
        window.addEventListener("scroll", () => {
          if (window.scrollY > 100) {
            header.classList.add("scrolled");
          } else {
            header.classList.remove("scrolled");
          }
        });

        // Mobile menu toggle
        mobileToggle.addEventListener("click", () => {
          navMenu.classList.toggle("active");
        });

        // Theme toggle
        themeToggle.addEventListener("click", () => {
          document.body.classList.toggle("dark-theme");
          const icon = themeToggle.querySelector("i");
          if (document.body.classList.contains("dark-theme")) {
            icon.className = "fas fa-sun";
            showNotification("Đã chuyển sang chế độ tối", "info");
          } else {
            icon.className = "fas fa-moon";
            showNotification("Đã chuyển sang chế độ sáng", "info");
          }
        });

        // Cart sidebar
        cartBtn.addEventListener("click", () => {
          openSidebar(cartSidebar);
        });

        closeCartBtn.addEventListener("click", () => {
          closeSidebar(cartSidebar);
        });

        continueShoppingBtn.addEventListener("click", () => {
          closeSidebar(cartSidebar);
        });

        // Wishlist sidebar
        wishlistBtn.addEventListener("click", () => {
          openSidebar(wishlistSidebar);
        });

        closeWishlistBtn.addEventListener("click", () => {
          closeSidebar(wishlistSidebar);
        });

        // Close modal
        closeModalBtn.addEventListener("click", () => {
          closeModal(productModal);
        });

        // Close modals/sidebars on backdrop click
        document
          .querySelectorAll(".modal-backdrop, .sidebar-backdrop")
          .forEach((backdrop) => {
            backdrop.addEventListener("click", (e) => {
              if (e.target === backdrop) {
                const modal = backdrop.closest(".modal, .sidebar");
                if (modal) {
                  if (modal.classList.contains("modal")) {
                    closeModal(modal);
                  } else {
                    closeSidebar(modal);
                  }
                }
              }
            });
          });

        // Filter products
        filterBtns.forEach((btn) => {
          btn.addEventListener("click", () => {
            filterBtns.forEach((b) => b.classList.remove("active"));
            btn.classList.add("active");
            currentFilter = btn.dataset.filter;
            currentPage = 1;
            renderProducts();
          });
        });

        // Load more products
        loadMoreBtn.addEventListener("click", () => {
          if (isLoading) return;

          isLoading = true;
          loadMoreBtn.innerHTML =
            '<i class="fas fa-spinner fa-spin"></i> Đang tải...';

          setTimeout(() => {
            currentPage++;
            renderProducts();
            isLoading = false;
            loadMoreBtn.innerHTML =
              '<i class="fas fa-sync-alt"></i> Xem thêm sản phẩm';

            // Scroll to new products
            const newProducts = productsGrid.querySelectorAll(".product-card");
            if (newProducts.length > 0) {
              newProducts[newProducts.length - 1].scrollIntoView({
                behavior: "smooth",
                block: "nearest",
              });
            }
          }, 1000);
        });

        // Search
        searchBtn.addEventListener("click", performSearch);
        searchInput.addEventListener("keypress", (e) => {
          if (e.key === "Enter") {
            performSearch();
          }
        });

        // Checkout
        checkoutBtn.addEventListener("click", () => {
          if (cart.length === 0) {
            showNotification("Giỏ hàng trống", "warning");
            return;
          }

          if (!currentUser) {
            showNotification("Vui lòng đăng nhập để thanh toán", "warning");
            closeSidebar(cartSidebar);
            setTimeout(() => {
              showNotification(
                "Chức năng đăng nhập sẽ được thêm trong phiên bản tiếp theo",
                "info",
              );
            }, 500);
            return;
          }

          // Simulate checkout process
          showNotification("Đang xử lý thanh toán...", "info");
          setTimeout(() => {
            const total = cart.reduce(
              (sum, item) => sum + item.price * item.quantity,
              0,
            );
            showNotification(
              `Thanh toán thành công! Tổng tiền: ${formatPrice(total)}`,
              "success",
            );

            // Clear cart
            cart = [];
            saveToLocalStorage();
            updateCart();
            updateBadges();
            closeSidebar(cartSidebar);
          }, 2000);
        });

        // User button
        userBtn.addEventListener("click", () => {
          if (currentUser) {
            showNotification(`Xin chào, ${currentUser.name}!`, "success");
          } else {
            // Chuyển đến trang đăng nhập
            window.location.href = "../home/login_regiter.html";
          }
        });

        // Close menu when clicking on links
        document.querySelectorAll(".nav-link").forEach((link) => {
          link.addEventListener("click", () => {
            navMenu.classList.remove("active");
          });
        });
      }

      // Perform search
      function performSearch() {
        const query = searchInput.value.trim().toLowerCase();
        if (!query) return;

        const filtered = productsData.filter(
          (product) =>
            product.name.toLowerCase().includes(query) ||
            product.brand.toLowerCase().includes(query) ||
            product.description.toLowerCase().includes(query),
        );

        if (filtered.length === 0) {
          showNotification("Không tìm thấy sản phẩm nào", "warning");
          return;
        }

        // Show search results
        productsGrid.innerHTML = "";
        filtered.forEach((product) => {
          const productCard = document.createElement("div");
          productCard.className = "product-card";
          productCard.innerHTML = `
                    ${product.badge ? `<div class="product-badge">${product.badge}</div>` : ""}
                    <div class="product-image">
                        <img src="${product.image}" alt="${product.name}" loading="lazy">
                    </div>
                    <div class="product-info">
                        <div class="product-category">${product.brand.toUpperCase()}</div>
                        <h3 class="product-title">${product.name}</h3>
                        <p class="product-description">${product.description}</p>
                        <div class="product-price">
                            <div class="price-current">${formatPrice(product.price)}</div>
                            ${product.originalPrice ? `<div class="price-original">${formatPrice(product.originalPrice)}</div>` : ""}
                        </div>
                        <div class="product-actions">
                            <button class="btn btn-primary btn-small add-to-cart" data-id="${product.id}">
                                <i class="fas fa-cart-plus"></i>
                                Thêm giỏ hàng
                            </button>
                            <button class="btn btn-outline btn-small view-detail" data-id="${product.id}">
                                <i class="fas fa-eye"></i>
                                Xem chi tiết
                            </button>
                        </div>
                    </div>
                `;
          productsGrid.appendChild(productCard);
        });

        // Update filter buttons
        filterBtns.forEach((btn) => btn.classList.remove("active"));
        filterBtns[0].classList.add("active");
        currentFilter = "all";

        loadMoreBtn.style.display = "none";

        // Attach events to new products
        attachProductEvents();

        showNotification(`Tìm thấy ${filtered.length} sản phẩm`, "success");
      }

      // Start the app
      document.addEventListener("DOMContentLoaded", init);