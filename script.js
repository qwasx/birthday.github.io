// 可选：添加一些简单的动画效果
document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".container");
    container.style.opacity = 0;
    setTimeout(() => {
        container.style.transition = "opacity 2s";
        container.style.opacity = 1;
    }, 100);
});
