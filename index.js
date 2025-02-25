const images = document.querySelectorAll('.image-box img, .image-box-1 img');

images.forEach(img => {
    img.addEventListener('mouseover', () => {
        img.style.transform = 'scale(1.1)';
        img.style.transition = 'transform 0.3s';
    });
    img.addEventListener('mouseout', () => {
        img.style.transform = 'scale(1)';
    });
});

// Menambahkan deskripsi tambahan dan efek hati saat gambar diklik
images.forEach(img => {
    img.addEventListener('click', (e) => {
        // Menambahkan deskripsi tambahan
        const description = document.createElement('p');
        description.textContent = 'This is an additional description for the image.';
        description.style.color = '#ff6f61';
        img.parentElement.appendChild(description);

        // Menambahkan efek hati
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.position = 'absolute';
        heart.style.left = `${e.pageX - img.offsetLeft}px`;
        heart.style.top = `${e.pageY - img.offsetTop}px`;
        img.parentElement.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 1000);
    });
});

// Menambahkan jejak hati di kursor
document.addEventListener('mousemove', (e) => {
    const cursorHeart = document.createElement('div');
    cursorHeart.classList.add('cursor-heart');
    cursorHeart.style.left = `${e.pageX}px`;
    cursorHeart.style.top = `${e.pageY}px`;
    document.body.appendChild(cursorHeart);
    setTimeout(() => {
        cursorHeart.remove();
    }, 500);
});