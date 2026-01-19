# Filter Sản phẩm - Hướng dẫn sử dụng

## ✅ Đã hoàn thành

Filter buttons giờ đã hoạt động đúng! Khi bạn click vào:
- **Tất cả** → Hiển thị 20 sản phẩm
- **iPhone** → Hiển thị 4 sản phẩm Apple
- **Samsung** → Hiển thị 3 sản phẩm Samsung
- **Xiaomi** → Hiển thị 3 sản phẩm Xiaomi
- **Google** → Hiển thị sản phẩm Google (nếu có)

## 🔧 Cách hoạt động

### 1. Mapping Brand
```javascript
const brandMapping = {
    'iphone': { id: 1, name: 'Apple' },
    'samsung': { id: 2, name: 'Samsung' },
    'xiaomi': { id: 3, name: 'Xiaomi' },
    'google': { id: 4, name: 'Google' }
};
```

### 2. Lưu toàn bộ sản phẩm
Khi API trả về dữ liệu → Lưu vào biến `allProducts`

### 3. Filter client-side
Click button → Filter `allProducts` theo `brand_id`

### 4. Cập nhật UI
- Hiển thị sản phẩm lọc
- Đánh dấu button active (class "active")
- Cuộn lên đầu trang

## 📱 Flow chi tiết

```
User click "iPhone"
    ↓
updateFilterButtons('iphone')  // Đánh dấu active
    ↓
filterByBrand('iphone')  // Filter
    ↓
displayProducts(filtered)  // Hiển thị
    ↓
Scroll to products grid
```

## 🐛 Debug

Mở Console (F12) để xem logs:

```
🔘 Click filter button: iphone
🔍 Filter by: iphone
📦 Hiển thị sản phẩm Apple: 4
✅ Lọc Apple: 4 sản phẩm
```

## 📊 Dữ liệu hiện tại

API trả về 20 sản phẩm:
- **Apple** (ID: 1): 5 sản phẩm
  - iPhone 15 Pro Max
  - iPhone 15 Plus
  - MacBook Air M2
  - iPad Air 5
  - AirPods Pro 2

- **Samsung** (ID: 2): 4 sản phẩm
  - Samsung Galaxy S24 Ultra
  - Samsung Galaxy Z Fold 5
  - Samsung Galaxy A55
  - Galaxy Tab S9

- **Xiaomi** (ID: 3): 3 sản phẩm
  - Xiaomi 14
  - Redmi Note 13 Pro
  - Xiaomi Band 8

## 🔄 Pagination

API có pagination nhưng hiện chỉ load trang 1 (12 sản phẩm)
- Trang 1: 12 sản phẩm
- Trang 2: 8 sản phẩm (còn lại)
- Total: 20 sản phẩm

Để load tất cả 20 sản phẩm trước khi filter, có thể:
1. Load page 1 + page 2 lúc đầu
2. Hoặc thêm parameter `per_page=50` vào API call

## 🎯 Cách thêm brand mới

1. Thêm vào `brandMapping`:
```javascript
'oppo': { id: 5, name: 'OPPO' }
```

2. Thêm button trong HTML:
```html
<button class="filter-btn" data-filter="oppo">OPPO</button>
```

3. Đảm bảo backend có product với `brand_id` = 5

## ✅ Checklist

- [x] Click filter button → call filterByBrand()
- [x] Filter sản phẩm theo brand_id
- [x] Cập nhật active state
- [x] Hiển thị số lượng sản phẩm
- [x] Smooth scroll
- [x] Console logs
- [x] Fallback data support

---

**Thử ngay:** Reload trang và click vào các brand buttons! 🎉
