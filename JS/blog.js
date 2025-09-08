// Carrusel automático
let carouselIndex = 0;
const items = document.querySelectorAll('.carousel-item');

function showCarousel(index) {
    items.forEach(item => item.classList.remove('active'));
    items[index].classList.add('active');
}

function nextCarousel() {
    carouselIndex = (carouselIndex + 1) % items.length;
    showCarousel(carouselIndex);
}

function prevCarousel() {
    carouselIndex = (carouselIndex - 1 + items.length) % items.length;
    showCarousel(carouselIndex);
}

document.querySelector('.carousel-control.next').addEventListener('click', nextCarousel);
document.querySelector('.carousel-control.prev').addEventListener('click', prevCarousel);

// Auto pasar cada 6 segundos
setInterval(nextCarousel, 6000);

// Comentarios: Like / Dislike
document.querySelectorAll('.comentario .like').forEach(btn => {
    btn.addEventListener('click', () => {
        let count = btn.querySelector('span');
        count.textContent = parseInt(count.textContent) + 1;
    });
});

document.querySelectorAll('.comentario .dislike').forEach(btn => {
    btn.addEventListener('click', () => {
        let count = btn.querySelector('span');
        count.textContent = parseInt(count.textContent) + 1;
    });
});

// Agregar nuevo comentario
document.getElementById('agregar-comentario').addEventListener('click', () => {
    const nombre = document.getElementById('nombre-usuario').value.trim();
    const texto = document.getElementById('texto-comentario').value.trim();
    if(!nombre || !texto) return alert('Debe completar nombre y comentario');

    const div = document.createElement('div');
    div.classList.add('comentario');
    div.innerHTML = `
        <strong class="usuario">${nombre}</strong>
        <p>${texto}</p>
        <div class="acciones">
            <button class="like">👍 <span>0</span></button>
            <button class="dislike">👎 <span>0</span></button>
        </div>
    `;
    document.getElementById('comentarios-lista').appendChild(div);

    // Reiniciar inputs
    document.getElementById('nombre-usuario').value = '';
    document.getElementById('texto-comentario').value = '';

    // Agregar eventos al nuevo comentario
    div.querySelector('.like').addEventListener('click', () => {
        let count = div.querySelector('.like span');
        count.textContent = parseInt(count.textContent) + 1;
    });
    div.querySelector('.dislike').addEventListener('click', () => {
        let count = div.querySelector('.dislike span');
        count.textContent = parseInt(count.textContent) + 1;
    });
});
