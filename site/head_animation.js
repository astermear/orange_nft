// Получаем элемент заголовка
const header = document.getElementById('mainheader');

// Получаем текст заголовка
const text = header.innerText;

// Очищаем текст заголовка
header.innerText = '';
header.style.opacity = '1';

// Создаем функцию для постепенного вывода букв
function showLetters(index) {
    // Проверяем, что индекс не превышает длину текста
      
    
    if (index < parseInt(text.length / 2)) {
        // Добавляем к заголовку следующую букву из текста
        header.innerText += text[index];
        // Постепенно увеличиваем индекс с задержкой 150 мс
        setTimeout(() => showLetters(index + 1), 600);
    } 
    else if (index < text.length) {
        header.innerText += text[index];
        // Постепенно увеличиваем индекс с задержкой 150 мс
        setTimeout(() => showLetters(index + 1), 200);
    }
}

// Вызываем функцию для начала анимации
showLetters(0);