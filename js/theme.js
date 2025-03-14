// Получаем элементы
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Проверяем, какая тема сохранена в localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.classList.add(savedTheme);
    updateButtonText();
}

// Функция для переключения темы
function toggleTheme() {
    body.classList.toggle('dark-theme');
    const isDark = body.classList.contains('dark-theme');
    localStorage.setItem('theme', isDark ? 'dark-theme' : '');
    updateButtonText();
}

// Функция для обновления текста кнопки
function updateButtonText() {
    const isDark = body.classList.contains('dark-theme');
    themeToggle.textContent = isDark ? '☀️ Светлая тема' : '🌙 Тёмная тема';
}

// Вешаем обработчик на кнопку
themeToggle.addEventListener('click', toggleTheme);