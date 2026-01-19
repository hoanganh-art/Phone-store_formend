# Hướng dẫn sử dụng API cho Phone Store

## ✅ ĐÃ SỬA LỖI - Website hiện đang kết nối với API thật!

### 🔧 Các vấn đề đã khắc phục:

1. **✅ Bật kết nối API**: Đã đổi `USE_API = true` trong `js/style.js`
2. **✅ Sửa parse dữ liệu**: API trả về format `{success: true, data: {data: [...]}}`
3. **✅ Sửa hiển thị giá**: Parse đúng từ string sang number
4. **✅ Thêm auto-refresh**: Tự động cập nhật mỗi 30 giây
5. **✅ Thêm nút làm mới**: Người dùng có thể refresh thủ công

---

## 📡 Cấu hình API hiện tại

```javascript
const API_BASE_URL = "http://127.0.0.1:6345";
const USE_API = true;  // ✅ ĐÃ BẬT
const AUTO_REFRESH_INTERVAL = 30000; // Refresh mỗi 30 giây
```

### API Endpoints đang sử dụng:
- **Products**: `http://127.0.0.1:6345/api/products`
- **Brands**: `http://127.0.0.1:6345/api/brands`
- **Categories**: `http://127.0.0.1:6345/api/categories`

---

## 🎯 Cách hoạt động

### 1. Khi trang load:
- Tự động gọi API để lấy sản phẩm
- Hiển thị loading spinner
- Parse dữ liệu và hiển thị

### 2. Auto-refresh (30 giây):
- Tự động gọi API mỗi 30 giây
- Không hiển thị loading (để không làm phiền UX)
- Cập nhật dữ liệu mới nhất từ backend
- Log ra console: `🔄 Auto-refresh: Đang cập nhật dữ liệu...`

### 3. Nút "Làm mới" thủ công:
- Người dùng click để cập nhật ngay lập tức
- Hiển thị trạng thái "Đang tải..."
- Thông báo thành công khi xong

### 4. Fallback thông minh:
- Nếu API lỗi → Tự động dùng dữ liệu demo
- Thông báo cho người dùng biết
- Website vẫn hoạt động bình thường

---

## 📦 Format dữ liệu API

### Response từ backend:
```json
{
  "success": true,
  "data": {
    "current_page": 1,
    "data": [
      {
        "id": 1,
        "product_name": "iPhone 15 Pro Max",
        "sku": "IP15PM-256",
        "brand_id": 1,
        "category": "smartphone",
        "ram": null,
        "storage": null,
        "price": "30000000.00",
        "cost_price": "30000000.00",
        "stock": 25,
        "status": "Available",
        "brand": {
          "id": 1,
          "brand_name": "Apple",
          "country": "USA"
        }
      }
    ],
    "total": 20,
    "per_page": 12
  },
  "message": "Lấy danh sách sản phẩm thành công"
}
```

### Code xử lý trong frontend:
```javascript
// Parse dữ liệu từ API
let products = [];
if (result.data.data && Array.isArray(result.data.data)) {
    products = result.data.data; // Lấy mảng sản phẩm
}

// Parse giá (từ string sang number)
const price = parseFloat(product.price || 0);
const costPrice = parseFloat(product.cost_price || 0);

// Lấy thông tin brand
const brandName = product.brand?.brand_name || 'Unknown';
```

---

## 🚀 Cách chạy

### Bước 1: Khởi động Backend
```bash
# Đảm bảo backend đang chạy ở port 6345
php artisan serve --port=6345
```

### Bước 2: Mở Frontend
```bash
# Option 1: Live Server (VS Code)
# Right-click index.html → Open with Live Server

# Option 2: Python HTTP Server
python -m http.server 5500
```

### Bước 3: Kiểm tra
1. Mở browser: `http://127.0.0.1:5500/index.html`
2. Mở Console (F12) để xem logs
3. Bạn sẽ thấy:
   ```
   DOM đã sẵn sàng, bắt đầu tải sản phẩm...
   API URL: http://127.0.0.1:6345/api/products
   ✅ Đã tải được 12 sản phẩm từ API
   ✅ Auto-refresh đã bật: Làm mới mỗi 30 giây
   ```

---

## 🧪 Test API riêng

Mở file `TEST_API.html` để test riêng API:
```
http://127.0.0.1:5500/TEST_API.html
```

File này sẽ:
- ✅ Test kết nối API
- 📦 Load và hiển thị tất cả sản phẩm
- 💰 Hiển thị giá đẹp
- 🐛 Debug dễ dàng

---

## 🔄 Khi Admin cập nhật dữ liệu

Website sẽ **TỰ ĐỘNG** cập nhật trong vòng 30 giây hoặc:
- Click nút **"Làm mới"** để cập nhật ngay
- Reload trang (F5)

**Không cần làm gì thêm!** 🎉

---

## 🐛 Debug & Troubleshooting

### Lỗi: "Không tải được sản phẩm"
1. Kiểm tra backend có chạy không:
   ```bash
   curl http://127.0.0.1:6345/api/products
   ```

2. Kiểm tra CORS trong backend:
   ```php
   // config/cors.php
   'allowed_origins' => ['*']
   ```

3. Xem Console log (F12):
   ```
   ⚠️ API lỗi → Backend không chạy
   ✅ Đã tải → Backend OK
   ```

### Dữ liệu không cập nhật
1. Kiểm tra `USE_API = true` trong `js/style.js`
2. Clear cache browser (Ctrl + Shift + R)
3. Kiểm tra backend đã lưu dữ liệu mới chưa

### Giá hiển thị sai
- API phải trả về số (string OK, sẽ tự parse)
- Format: `"30000000.00"` hoặc `30000000`

---

## ⚙️ Tùy chỉnh

### Thay đổi thời gian auto-refresh:
```javascript
// js/style.js - dòng 4
const AUTO_REFRESH_INTERVAL = 60000; // 60 giây (60000ms)
const AUTO_REFRESH_INTERVAL = 0;     // Tắt auto-refresh
```

### Tắt auto-refresh:
```javascript
stopAutoRefresh(); // Gọi hàm này trong console hoặc code
```

### Thay đổi URL API:
```javascript
// js/style.js - dòng 2
const API_BASE_URL = "http://your-domain.com";
```

---

## ✅ Checklist hoàn thành

- [x] ✅ Kết nối API thành công
- [x] ✅ Hiển thị dữ liệu thật từ backend
- [x] ✅ Auto-refresh mỗi 30 giây
- [x] ✅ Nút làm mới thủ công
- [x] ✅ Parse đúng giá và thông tin
- [x] ✅ Hiển thị brand name
- [x] ✅ Hiển thị stock status
- [x] ✅ Fallback data nếu API lỗi
- [x] ✅ Console logs để debug

---

## 📝 Notes quan trọng

1. **Port backend**: Đảm bảo backend chạy đúng port `6345`
2. **CORS**: Backend phải cho phép CORS từ frontend
3. **Format dữ liệu**: Backend phải trả về đúng format JSON
4. **Auto-refresh**: Có thể tắt nếu không cần bằng cách set `AUTO_REFRESH_INTERVAL = 0`

---

**🎉 Website đã sẵn sàng hiển thị dữ liệu thật từ backend!**

Khi admin thêm/sửa/xóa sản phẩm → Website tự động cập nhật trong 30 giây hoặc click "Làm mới"!
