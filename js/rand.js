function generateRandomNumber() {
    // Получаем значения из полей ввода
    const min = parseInt(document.getElementById('min').value);
    const max = parseInt(document.getElementById('max').value);

    // Проверяем, что введены корректные числа
    if (isNaN(min) || isNaN(max)) {
        document.getElementById('result').textContent = "Пожалуйста, введите корректные числа!";
        return;
    }

    // Проверяем, что минимальное число меньше максимального
    if (min >= max) {
        document.getElementById('result').textContent = "Минимальное число должно быть меньше максимального!";
        return;
    }

    // Генерируем случайное число
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    // Выводим результат
    document.getElementById('result').textContent = `Результат: ${randomNumber}`;
}