        // Lấy các nút bằng cách sử dụng ID
        const btnXanh = document.getElementById("btnXanh");
        const btnDo = document.getElementById("btnDo");

        // Gắn sự kiện click cho nút Xanh
        btnXanh.addEventListener("click", function() {
            document.body.style.backgroundColor = "blue";
        });

        // Gắn sự kiện click cho nút Đỏ
        btnDo.addEventListener("click", function() {
            document.body.style.backgroundColor = "red";
        });