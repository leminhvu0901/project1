<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <title>Ví dụ HTML và PHP</title>
</head>
<body>

    <h2>Chương trình chào hỏi đơn giản</h2>
    
    <form method="POST" action="">
        <label for="ten">Nhập tên của bạn:</label><br>
        <input type="text" id="ten" name="username" required>
        <br><br>
        <button type="submit" name="btn_submit">Gửi Lời Chào</button>
    </form>

    <hr>

    <?php
    // Kiểm tra xem người dùng có ấn nút gửi không
    if (isset($_POST['btn_submit'])) {
        // Lấy dữ liệu từ ô input có name="username"
        $ten_nguoi_dung = $_POST['username'];

        // Xử lý đơn giản: Kiểm tra rỗng và hiển thị
        if (!empty($ten_nguoi_dung)) {
            // htmlspecialchars giúp bảo mật, tránh lỗi mã độc
            echo "<h3>Xin chào, " . htmlspecialchars($ten_nguoi_dung) . "! Chúc bạn một ngày tốt lành.</h3>";
        } else {
            echo "<p style='color:red;'>Vui lòng nhập tên!</p>";
        }
    }
    ?>

</body>
</html>