devServer là một cấu hình cho webpack-dev-server, một máy chủ phát triển tích hợp với webpack.
port xác định cổng mà máy chủ phát triển sẽ lắng nghe.
open: true sẽ mở trình duyệt mặc định khi bạn chạy webpack-dev-server.
hot: true bật tính năng hot module replacement (HMR), giúp làm mới chỉ các phần đã thay đổi thay vì làm mới toàn bộ trang.

HtmlWebpackPlugin là một plugin của webpack giúp tạo ra một file HTML mới và tự động chèn các tệp script bundle vào trong nó.
Trong cấu hình của bạn, template chỉ định tệp HTML gốc mà plugin sẽ sử dụng để tạo ra tệp HTML mới.
