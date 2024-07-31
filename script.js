document.addEventListener('DOMContentLoaded', function() {
    function adaptSite() {
        const width = window.innerWidth;
        const body = document.body;

        // Удаляем все классы адаптации
        body.classList.remove('mobile', 'small-screen');

        // Добавляем классы адаптации в зависимости от ширины экрана
        if (width <= 480) {
            body.classList.add('small-screen');
        } else if (width <= 768) {
            body.classList.add('mobile');
        }
    }

    // Адаптируем сайт при загрузке и изменении размера окна
    adaptSite();
    window.addEventListener('resize', adaptSite);
});