# 🛒 Giỏ Hàng - Tài Liệu Đầy Đủ

## ✅ Chức Năng Đã Hoàn Thành

### 1. **Thêm Sản Phẩm Vào Giỏ Hàng**
- ✅ Button "Thêm giỏ hàng" trên mỗi sản phẩm
- ✅ Lưu dữ liệu vào localStorage
- ✅ Tự động cập nhật badge số lượng
- ✅ Hiển thị thông báo thành công

**File:** `js/style.js` - Hàm `addToCart(productId)`

```javascript
function addToCart(productId) {
    // Lấy giỏ hàng từ localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Tìm sản phẩm nếu đã tồn tại
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;  // Tăng số lượng
    } else {
        // Lấy thông tin sản phẩm từ DOM
        const productCard = document.querySelector(`.product-card[data-id="${productId}"]`);
        if (productCard) {
            const productName = productCard.querySelector('.product-title').textContent;
            const priceText = productCard.querySelector('.price-current').textContent;
            const image = productCard.querySelector('img').src;
            
            // Thêm sản phẩm mới vào giỏ
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
    updateCartCount();  // Cập nhật badge
    showNotification('Đã thêm vào giỏ hàng', 'success');
}
```

---

### 2. **Hiển Thị Giỏ Hàng (Sidebar)**
- ✅ Sidebar mở từ bên phải
- ✅ Hiển thị danh sách sản phẩm
- ✅ Hiển thị tổng tiền
- ✅ Chỉ hiển thị khi có sản phẩm hoặc "Giỏ trống" nếu rỗng

**File:** `js/style.js` - Hàm `displayCart()`

```javascript
function displayCart() {
    try {
        const cartItems = document.getElementById('cart-items');
        const cartTotal = document.getElementById('cart-total');
        
        // Lấy dữ liệu từ localStorage
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        
        // Nếu giỏ rỗng
        if (cart.length === 0) {
            cartItems.innerHTML = `
                <div class="empty-cart">
                    <i class="fas fa-shopping-cart"></i>
                    <p>Giỏ hàng trống</p>
                </div>
            `;
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
                            <input type="number" value="${item.quantity}" min="1" 
                                   onchange="setQuantity(${item.id}, this.value)">
                            <button class="qty-btn" onclick="changeQuantity(${item.id}, 1)">+</button>
                        </div>
                    </div>
                    <button class="btn-remove" onclick="removeFromCart(${item.id})">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            `;
        }).join('');
        
        cartItems.innerHTML = cartHTML;
        cartTotal.textContent = formatPrice(totalPrice);  // Cập nhật tổng tiền
    } catch (e) {
        console.error('❌ Lỗi displayCart:', e);
    }
}
```

---

### 3. **Mở/Đóng Giỏ Hàng**
- ✅ Click button "Giỏ hàng" để mở
- ✅ Click "X" hoặc "Tiếp tục mua sắm" để đóng
- ✅ Click ngoài sidebar để đóng

**File:** `js/style.js` - Event listeners

```javascript
// Mở giỏ hàng
const cartBtn = document.getElementById('cart-btn');
if (cartBtn) {
    cartBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        displayCart();  // Hiển thị nội dung
        const cartSidebar = document.getElementById('cart-sidebar');
        cartSidebar?.classList.add('active');  // Mở sidebar
        document.body.style.overflow = 'hidden';  // Chặn scroll
    });
}

// Đóng giỏ hàng
const closeCartBtn = document.getElementById('close-cart');
if (closeCartBtn) {
    closeCartBtn.addEventListener('click', () => {
        const cartSidebar = document.getElementById('cart-sidebar');
        cartSidebar?.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
}
```

---

### 4. **Chỉnh Sửa Số Lượng**
- ✅ Button "+" để tăng số lượng
- ✅ Button "-" để giảm số lượng
- ✅ Input trực tiếp để nhập số lượng
- ✅ Tự động xóa sản phẩm nếu số lượng = 0

**File:** `js/style.js`

```javascript
// Thay đổi số lượng
function changeQuantity(productId, change) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const item = cart.find(item => item.id === productId);
    
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            cart = cart.filter(item => item.id !== productId);  // Xóa nếu = 0
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();  // Cập nhật badge
        displayCart();  // Làm mới hiển thị
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
```

---

### 5. **Xóa Sản Phẩm**
- ✅ Button trash icon để xóa sản phẩm
- ✅ Xóa khỏi localStorage
- ✅ Cập nhật hiển thị và badge

**File:** `js/style.js`

```javascript
function removeFromCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => item.id !== productId);  // Xóa sản phẩm
    
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();  // Cập nhật badge
    displayCart();  // Làm mới hiển thị
    showNotification('Đã xóa khỏi giỏ hàng', 'success');
}
```

---

### 6. **Cập Nhật Badge**
- ✅ Badge hiển thị tổng số sản phẩm
- ✅ Cập nhật tự động khi thêm/xóa/thay đổi số lượng

**File:** `js/style.js`

```javascript
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartCount = document.getElementById('cart-count');
    if (cartCount) {
        cartCount.textContent = totalItems;
    }
}
```

---

### 7. **Tính Toán Tổng Tiền**
- ✅ Tính tổng tự động cho mỗi sản phẩm
- ✅ Tính tổng cộng của giỏ hàng
- ✅ Format tiền theo chuẩn Việt Nam (VND)

**File:** `js/style.js`

```javascript
function formatPrice(price) {
    if (!price) return 'Liên hệ';
    return new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    }).format(price);
}
```

---

## 📁 Cấu Trúc HTML

### Nút Giỏ Hàng
```html
<button class="btn-icon" id="cart-btn">
    <i class="fas fa-shopping-cart"></i>
    <span class="badge" id="cart-count">0</span>
</button>
```

### Sidebar Giỏ Hàng
```html
<div class="sidebar cart-sidebar" id="cart-sidebar">
    <div class="sidebar-backdrop"></div>
    <div class="sidebar-content">
        <!-- Header -->
        <div class="cart-header">
            <h3>Giỏ hàng của bạn</h3>
            <button class="modal-close" id="close-cart">
                <i class="fas fa-times"></i>
            </button>
        </div>

        <!-- Danh sách sản phẩm -->
        <div class="cart-items" id="cart-items">
            <!-- Sẽ được fill bởi displayCart() -->
        </div>

        <!-- Footer với tổng tiền -->
        <div class="cart-footer">
            <div class="cart-total">
                <span>Tổng cộng:</span>
                <span id="cart-total">0 đ</span>
            </div>
            <div class="cart-actions">
                <button class="btn btn-primary" id="checkout-btn">
                    <i class="fas fa-credit-card"></i> Thanh toán
                </button>
                <button class="btn btn-outline" id="continue-shopping">
                    Tiếp tục mua sắm
                </button>
            </div>
        </div>
    </div>
</div>
```

---

## 🎨 CSS Classes

| Class | Mục Đích |
|-------|---------|
| `.sidebar` | Container chính cho sidebar |
| `.sidebar.active` | Sidebar đang mở |
| `.cart-sidebar` | Sidebar giỏ hàng cụ thể |
| `.sidebar-content` | Nội dung bên trong |
| `.sidebar-backdrop` | Overlay backdrop |
| `.cart-header` | Phần header |
| `.cart-items` | Container danh sách sản phẩm |
| `.cart-item` | Mỗi sản phẩm trong giỏ |
| `.cart-item-quantity` | Phần chỉnh sửa số lượng |
| `.cart-footer` | Phần footer với tổng |
| `.empty-cart` | Trạng thái giỏ trống |

---

## 💾 localStorage Structure

```javascript
// Key: 'cart'
// Value: JSON array

[
    {
        id: 1,                      // ID sản phẩm
        name: "iPhone 15 Pro",      // Tên sản phẩm
        price: 32990000,            // Giá đơn vị (VND)
        image: "https://...",       // URL hình ảnh
        quantity: 2                 // Số lượng
    },
    {
        id: 2,
        name: "Samsung Galaxy S24",
        price: 27990000,
        image: "https://...",
        quantity: 1
    }
    // ...
]
```

---

## 🧪 Cách Test

### Test File 1: `CART_COMPLETE_DEMO.html`
- Demo đầy đủ với UI đẹp
- Kiểm tra hệ thống
- Test từng tính năng
- Xem dữ liệu localStorage

**Cách mở:**
```
Mở file CART_COMPLETE_DEMO.html trong trình duyệt
```

### Test File 2: `SIMPLE_CART_TEST.html`
- Test các element HTML
- Test hàm JavaScript
- Test localStorage
- Kiểm tra sidebar hiển thị

**Cách mở:**
```
Mở file SIMPLE_CART_TEST.html trong trình duyệt
```

### Test File 3: `QUICK_TEST.html`
- Test nhanh từng chức năng
- Kiểm tra dữ liệu
- Mở/đóng sidebar

**Cách mở:**
```
Mở file QUICK_TEST.html trong trình duyệt
```

---

## 🚀 Cách Sử Dụng (Trên index.html)

1. **Thêm sản phẩm:** Nhấn button "Thêm giỏ hàng" trên sản phẩm
2. **Xem giỏ hàng:** Nhấn icon giỏ hàng ở header
3. **Thay đổi số lượng:** Dùng button +/- hoặc nhập số trực tiếp
4. **Xóa sản phẩm:** Nhấn button trash
5. **Đóng giỏ:** Nhấn "X" hoặc "Tiếp tục mua sắm"

---

## 📝 Các Biến Global

```javascript
// Giỏ hàng
const allProducts = [];           // Danh sách sản phẩm từ API
const brandMapping = {};          // Mapping brand ID -> name

// Auto-refresh
let autoRefreshIntervalId = null;  // ID cho interval refresh
```

---

## ⚙️ Configuration (js/style.js)

```javascript
const API_BASE_URL = "http://127.0.0.1:6345";
const USE_API = true;                           // Dùng API hay dữ liệu tĩnh?
const AUTO_REFRESH_INTERVAL = 30000;            // Làm mới mỗi 30s
const SHOW_RANDOM_PRODUCTS = true;              // Hiển thị sản phẩm ngẫu nhiên?
const RANDOM_PRODUCTS_COUNT = 6;                // Số sản phẩm ngẫu nhiên
```

---

## 🐛 Troubleshooting

### Giỏ không mở khi click?
1. Kiểm tra xem có element `#cart-btn` không
2. Kiểm tra xem có element `#cart-sidebar` không
3. Kiểm tra console xem có error không
4. Mở CART_COMPLETE_DEMO.html để test

### Dữ liệu không lưu?
1. Kiểm tra localStorage có disabled không
2. Mở DevTools > Application > localStorage
3. Thêm sản phẩm rồi check xem có key 'cart' không

### Sidebar không hiển thị?
1. Kiểm tra CSS có load không (F12 > Network)
2. Kiểm tra xem `.sidebar.active` có transform đúng không
3. Mở SIMPLE_CART_TEST.html để test CSS

---

## 📞 Danh Sách Hàm Có Sẵn

| Hàm | Mục Đích |
|-----|---------|
| `addToCart(productId)` | Thêm sản phẩm vào giỏ |
| `displayCart()` | Hiển thị nội dung giỏ |
| `updateCartCount()` | Cập nhật badge |
| `changeQuantity(id, change)` | Thay đổi số lượng |
| `setQuantity(id, qty)` | Set số lượng cụ thể |
| `removeFromCart(id)` | Xóa sản phẩm |
| `formatPrice(price)` | Format tiền VND |
| `openCart()` | Mở sidebar |
| `closeCart()` | Đóng sidebar |

---

## ✨ Tính Năng Thêm (Có Thể Thêm Sau)

- [ ] Checkout page
- [ ] Promo code / discount
- [ ] Save for later
- [ ] Compare products
- [ ] Wishlist integration
- [ ] Guest checkout
- [ ] Order tracking

---

**📦 Tất cả chức năng giỏ hàng đã hoàn thành và sẵn sàng sử dụng!**

Status: ✅ **COMPLETE**
