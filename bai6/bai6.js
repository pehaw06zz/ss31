function login() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
  
    if (!username || !password) {
      console.log("Vui lòng nhập đầy đủ thông tin!");
      return;
    }
  
    if (username === "huanrose@gmail.com" && password === "123456") {
      console.log("Đăng nhập thành công");
    } else {
      console.log("Đăng nhập thất bại");
    }
  }
  