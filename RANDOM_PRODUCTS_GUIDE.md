# Hiển thị sản phẩm ngẫu nhiên - Hướng dẫn

## ✅ Đã hoàn thành

Website hiện tại cấu hình để **hiển thị chỉ 5-6 sản phẩm ngẫu nhiên** thay vì tất cả sản phẩm.

## 🎲 Cách hoạt động

### Trang chủ (Home):
- Load tất cả 20 sản phẩm từ API
- Chọn **6 sản phẩm ngẫu nhiên** để hiển thị
- Mỗi lần reload → Hiển thị 6 sản phẩm khác

### Khi click filter (iPhone, Samsung, ...):
- Filter sản phẩm theo brand
- Chọn **tối đa 6 sản phẩm ngẫu nhiên** từ brand đó
- Nếu brand có < 6 sản phẩm → Hiển thị tất cả

### Ví dụ:
```
Apple có 5 sản phẩm:
- Reload 1: iPhone 15 Plus, MacBook Air M2, iPad Air 5, AirPods Pro 2, iPhone 15 Pro Max (5 sản phẩm)
- Reload 2: MacBook Air M2, AirPods Pro 2, iPhone 15 Plus, iPad Air 5, iPhone 15 Pro Max (5 sản phẩm - khác thứ tự)

Samsung có 4 sản phẩm:
- Reload 1: Galaxy S24 Ultra, Galaxy A55, Galaxy Tab S9, Galaxy Z Fold 5 (4 sản phẩm)
- Reload 2: Galaxy Z Fold 5, Galaxy Tab S9, Galaxy S24 Ultra, Galaxy A55 (4 sản phẩm - khác thứ tự)
```

## 🔧 Cấu hình

Mở file **js/style.js** - dòng 4-5:

```javascript
const SHOW_RANDOM_PRODUCTS = true;  // true = hiển thị random | false = hiển thị tất cả
const RANDOM_PRODUCTS_COUNT = 6;    // Số sản phẩm: 5, 6, 10, ...
```

### Để **hiển thị tất cả sản phẩm**:
```javascript
const SHOW_RANDOM_PRODUCTS = false;  // Chuyển thành false
const RANDOM_PRODUCTS_COUNT = 6;     // Không cần quan tâm
```

### Để **hiển thị 5 sản phẩm**:
```javascript
const SHOW_RANDOM_PRODUCTS = true;
const RANDOM_PRODUCTS_COUNT = 5;     // Thay 6 thành 5
```

## 📋 Hàm random

```javascript
// Hàm này tự động shuffle mảng và lấy count sản phẩm
function getRandomProducts(products, count = RANDOM_PRODUCTS_COUNT) {
    if (products.length <= count) return products; // Nếu < count sản phẩm, return tất cả
    
    // Shuffle ngẫu nhiên
    const shuffled = [...products].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count); // Lấy count sản phẩm đầu
}
```

## 🎯 Cách hoạt động chi tiết

### Khi trang load:
```
1. Load 20 sản phẩm từ API
2. Nếu SHOW_RANDOM_PRODUCTS = true:
   → getRandomProducts(20 sản phẩm) → trả về 6 sản phẩm random
3. Hiển thị 6 sản phẩm đó lên grid
```

### Khi click filter:
```
1. Filter sản phẩm theo brand (ví dụ: iPhone)
2. Nếu SHOW_RANDOM_PRODUCTS = true:
   → getRandomProducts(5 sản phẩm Apple) → trả về 5 sản phẩm random
3. Hiển thị 5 sản phẩm đó lên grid
```

### Khi click "Làm mới":
```
1. Reload lại API
2. Chọn 6 sản phẩm random mới
3. Hiển thị
```

## 🔄 Auto-refresh

```javascript
const AUTO_REFRESH_INTERVAL = 30000; // 30 giây
```

Mỗi 30 giây:
- Tự động load API lại
- Chọn 6 sản phẩm random mới
- Cập nhật hiển thị (sản phẩm hiển thị sẽ thay đổi)

## 💡 Trường hợp sử dụng

### ✅ Hiển thị sản phẩm ngẫu nhiên (hiện tại):
- Trang chủ: Showcase sản phẩm nổi bật
- Mỗi lần vào lại → Thấy sản phẩm khác
- Khuyến khích khám phá toàn bộ catalog

### ✅ Hiển thị tất cả:
- Trang sản phẩm: Khách muốn thấy tất cả
- Tìm kiếm: Cho thấy đầy đủ kết quả
- Admin: Quản lý sản phẩm

## 📊 Console logs

Mở F12 để xem:

```
✅ Đã tải được 20 sản phẩm từ API
🎲 Chọn 6 sản phẩm ngẫu nhiên
📦 Hiển thị sản phẩm: 6
```

Khi filter:
```
🔍 Filter by: iphone
✅ Lọc Apple: 5 sản phẩm
🎲 Chọn 5 sản phẩm ngẫu nhiên từ 5
```

## ✅ Checklist

- [x] Load tất cả sản phẩm từ API (20 sản phẩm)
- [x] Chọn random 5-6 sản phẩm để hiển thị
- [x] Filter cũng áp dụng random
- [x] Auto-refresh cũng random
- [x] Dễ bật/tắt cấu hình
- [x] Console logs để debug

---

**🎉 Thử ngay:** Reload trang (F5) để thấy 6 sản phẩm khác mỗi lần!
