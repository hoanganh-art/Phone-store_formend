# Hướng dẫn sử dụng API cho Phone Store

## 🔧 Đã sửa lỗi kết nối API

### Vấn đề:
- Website cố kết nối đến API server tại `http://127.0.0.1:6346` nhưng server không hoạt động
- Người dùng thấy thông báo lỗi thay vì sản phẩm

### Giải pháp:
Đã thêm **fallback data** (dữ liệu dự phòng) vào file `js/style.js` để website vẫn hoạt động khi API không khả dụng.

## 📝 Cách sử dụng

### Chế độ 1: Sử dụng dữ liệu tĩnh (Mặc định - KHUYẾN NGHỊ)

File `js/style.js` đã được cấu hình để sử dụng dữ liệu tĩnh:

```javascript
const USE_API = false; // Đã đặt là false
```

**Khi nào dùng:**
- Khi chưa có backend API
- Để demo hoặc phát triển frontend
- Khi muốn test giao diện nhanh

**Ưu điểm:**
- Không cần cài đặt backend
- Mở file HTML trực tiếp trong trình duyệt là chạy được
- Không bị lỗi kết nối

### Chế độ 2: Sử dụng API thực

Khi có backend API sẵn sàng, thay đổi trong file `js/style.js`:

```javascript
const USE_API = true; // Đổi thành true
```

**Yêu cầu:**
- Backend server phải chạy tại `http://127.0.0.1:6346`
- API endpoint: `/products`
- API trả về JSON format:
  ```json
  {
    "data": [
      {
        "id": 1,
        "product_name": "Tên sản phẩm",
        "brand_name": "Thương hiệu",
        "description": "Mô tả",
        "price": 10000000,
        "original_price": 12000000,
        "image": "https://...",
        "stock": 10,
        "ram": "8GB",
        "storage": "256GB"
      }
    ]
  }
  ```

## 🔄 Cơ chế Fallback (Tự động)

Website thông minh! Ngay cả khi `USE_API = true`, nếu API gặp lỗi:
- Tự động chuyển sang sử dụng dữ liệu dự phòng
- Hiển thị thông báo nhẹ cho người dùng
- Website vẫn hoạt động bình thường

## 📦 Dữ liệu Fallback

File `js/style.js` chứa 6 sản phẩm mẫu:
1. iPhone 15 Pro Max - 32,990,000đ
2. Samsung Galaxy S24 Ultra - 27,990,000đ  
3. Xiaomi 14 Pro - 19,990,000đ
4. Google Pixel 8 Pro - 23,990,000đ
5. OPPO Find X6 Pro - 21,990,000đ
6. Realme GT 3 - 12,990,000đ

## 🚀 Cách chạy website

### Option 1: Mở trực tiếp (Đơn giản nhất)
1. Mở file `index.html` bằng trình duyệt
2. Website tự động load dữ liệu tĩnh

### Option 2: Sử dụng Live Server (VS Code)
1. Cài extension "Live Server" trong VS Code
2. Right-click vào `index.html`
3. Chọn "Open with Live Server"

### Option 3: Python HTTP Server
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```
Sau đó mở: `http://localhost:8000`

## 🐛 Debug

Mở Console trong trình duyệt (F12) để xem logs:
- `"Sử dụng dữ liệu tĩnh (fallback)"` - Đang dùng dữ liệu demo
- `"Đã tải được X sản phẩm từ API"` - API hoạt động tốt
- `"API lỗi, sử dụng dữ liệu dự phòng"` - API lỗi, tự động fallback

## 📡 API Configuration

Để thay đổi URL API, sửa trong `js/style.js`:

```javascript
const API_BASE_URL = "http://127.0.0.1:6346"; // Thay đổi URL này
```

## ✅ Checklist khi deploy

- [ ] Nếu có backend: Đặt `USE_API = true`
- [ ] Nếu không có backend: Giữ `USE_API = false`
- [ ] Kiểm tra `API_BASE_URL` đúng với server thực tế
- [ ] Test trong Console để đảm bảo không có lỗi JavaScript

---

**Lưu ý:** Website hiện đang cấu hình sẵn để chạy với dữ liệu tĩnh. Bạn có thể mở `index.html` trực tiếp và xem kết quả ngay lập tức! 🎉
