const toggleBtn = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

// 1. KIỂM TRA BỘ NHỚ KHI VỪA MỞ TRANG
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    htmlElement.setAttribute('data-theme', 'dark');
    toggleBtn.textContent = "☀️ Chế độ sáng";
}

// 2. XỬ LÝ KHI NHẤN NÚT ĐỔI MÀU
toggleBtn.addEventListener('click', () => {
    const isDark = htmlElement.hasAttribute('data-theme');

    if (isDark) {
        // Đang tối -> Chuyển sang sáng
        htmlElement.removeAttribute('data-theme');
        toggleBtn.textContent = "🌙 Chế độ tối";
        localStorage.setItem('theme', 'light');
    } else {
        // Đang sáng -> Chuyển sang tối
        htmlElement.setAttribute('data-theme', 'dark');
        toggleBtn.textContent = "☀️ Chế độ sáng";
        localStorage.setItem('theme', 'dark');
    }
});
