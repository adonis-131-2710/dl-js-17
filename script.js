const toggle = document.getElementById('toggle')
const nav = document.getElementById('nav')

// Lắng nghe sự kiện click vào nút icon
toggle.addEventListener('click', () => {
  // Thêm hoặc xóa class 'active'
  nav.classList.toggle('active')
})