$(document).ready(function() {
    // Подгонка размера видео под окно
    function resizeVideo() {
        const $video = $('#video-background');
        const aspectRatio = $video.width() / $video.height();
        
        if ($(window).width() / $(window).height() < aspectRatio) {
            $video.css({
                width: 'auto',
                height: '100%'
            });
        } else {
            $video.css({
                width: '100%',
                height: 'auto'
            });
        }
    };
    const $container = $('#target-text');
    const words = $container.text().split(/\s+/);
    
    // Очищаем контейнер и добавляем слова с оберткой
    $container.empty();
    
    $.each(words, function(index, word) {
        $container.append($('<span>', {
            class: 'word',
            text: word + ' ' // Добавляем пробел после слова
        }));
    });

    // Вызов при загрузке и изменении размера окна
    resizeVideo();
    $(window).on('resize', resizeVideo);
});

