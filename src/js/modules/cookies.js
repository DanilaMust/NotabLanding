export function cookies() {
    // Переменные
    const cookiesButton = document.querySelector(".cookies__btn");

    // Анимация
    const cookies = document.querySelector(".cookies");

    // Исчезновение при нажатии
    cookiesButton.addEventListener("click", () => {
        cookies.remove();
    });
}
