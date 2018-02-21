$(() => {
    FastClick.attach(document.body);

    const totalImageFrame = 23;

    for (let i = 0; i <= totalImageFrame; i++) {
        const src = `./m3/${ String.fromCharCode(97 + i) }.webp`;
        const tag = `
        <picture>
            <source type="image/webp" srcset="${ src }">
            <img src="${ src }.png" data-index="${ i }" style="display: none;">
        </picture>
        `
        $('#showcase').append(tag);
    }

    let currentIndex = 0;
    // setInterval(() => {
    //     $(`img[data-index="${ currentIndex }"]`).css('display', 'none');
    //     currentIndex = (currentIndex + 1) % totalImageFrame;
    //     $(`img[data-index="${ currentIndex }"]`).css('display', 'inline-block');
    // }, 100);

    const showcase = document.querySelector('#showcase');
    const hammer = new Hammer(showcase);
    const step = 0.55;
    hammer.get('pan').set({
        direction: Hammer.DIRECTION_ALL,
        threshold: 100,
    });
    $(`img[data-index="0"]`).css('display', 'inline-block');

    hammer.on('panright', (e) => {
        $(`img[data-index="${ Math.floor(currentIndex) }"]`).css('display', 'none');
        currentIndex = currentIndex + step;
        if (currentIndex > totalImageFrame) {
            currentIndex = 0;
        }
        $(`img[data-index="${ Math.floor(currentIndex) }"]`).css('display', 'inline-block');
    });

    hammer.on('panleft', (e) => {
        $(`img[data-index="${ Math.floor(currentIndex) }"]`).css('display', 'none');
        currentIndex = currentIndex - step;
        if (currentIndex < 0) {
            currentIndex = totalImageFrame;
        }
        $(`img[data-index="${ Math.floor(currentIndex) }"]`).css('display', 'inline-block');
    });
});
