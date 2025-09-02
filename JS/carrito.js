/* Aca estara el javascript encargado para el carrito de compras */

// Carrito de compras: agregar productos, mostrar, eliminar y modificar cantidad en mini-carrito

document.addEventListener('DOMContentLoaded', function() {
  // Agregar al carrito desde cualquier página con productos
  document.querySelectorAll('.add-to-cart').forEach(function(btn) {
    btn.addEventListener('click', function() {
      const nombre = btn.getAttribute('data-nombre');
      const precio = parseInt(btn.getAttribute('data-precio'));
      let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
      // Buscar si ya existe el producto
      const idx = carrito.findIndex(item => item.nombre === nombre && item.precio === precio);
      if (idx !== -1) {
        carrito[idx].cantidad += 1;
      } else {
        carrito.push({ nombre, precio, cantidad: 1 });
      }
      localStorage.setItem('carrito', JSON.stringify(carrito));
      if (typeof actualizarMiniCarrito === 'function') {
        actualizarMiniCarrito();
      }
      alert('Producto agregado al carrito');
    });
  });

  // Eliminar producto del carrito
  window.eliminarDelCarrito = function(idx) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito.splice(idx, 1);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    if (typeof actualizarMiniCarrito === 'function') {
      actualizarMiniCarrito();
    }
  };

  // Sumar cantidad
  window.sumarCantidadCarrito = function(idx) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito[idx].cantidad += 1;
    localStorage.setItem('carrito', JSON.stringify(carrito));
    if (typeof actualizarMiniCarrito === 'function') {
      actualizarMiniCarrito();
    }
  };

  // Restar cantidad
  window.restarCantidadCarrito = function(idx) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    if (carrito[idx].cantidad > 1) {
      carrito[idx].cantidad -= 1;
    } else {
      // Si la cantidad es 1 y se resta, eliminar el producto
      carrito.splice(idx, 1);
    }
    localStorage.setItem('carrito', JSON.stringify(carrito));
    if (typeof actualizarMiniCarrito === 'function') {
      actualizarMiniCarrito();
    }
  };

  // Mostrar productos en carrito.html
  const lista = document.getElementById('carrito-lista');
  if (lista) {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    if (carrito.length === 0) {
      lista.innerHTML = '<p>El carrito está vacío.</p>';
    } else {
      let total = 0;
      lista.innerHTML = carrito.map((item, idx) => {
        total += item.precio * item.cantidad;
        return `<div style='display:flex;align-items:center;justify-content:space-between;margin-bottom:0.7rem;border-bottom:1px solid #eee;padding-bottom:0.5rem;'>
          <span>
            <strong>${item.nombre}</strong><br>
            <span class='mini-carrito-item-precio-unitario'>Precio unitario: $${item.precio.toLocaleString()}</span>
            <span style='display:flex;align-items:center;gap:4px;'>
              <button onclick="restarCantidadCarrito(${idx})" style='background:#eee;color:#222;border:none;border-radius:50%;width:22px;height:22px;font-size:1.1rem;cursor:pointer;'>-</button>
              <small>Cantidad: ${item.cantidad}</small>
              <button onclick="sumarCantidadCarrito(${idx})" style='background:#eee;color:#222;border:none;border-radius:50%;width:22px;height:22px;font-size:1.1rem;cursor:pointer;'>+</button>
            </span>
          </span>
          <span style='display:flex;align-items:center;'>
            <span style='margin-right:12px;'>$${(item.precio * item.cantidad).toLocaleString()}</span>
            <button onclick="eliminarDelCarrito(${idx})" style='background:#CC2936;color:#fff;border:none;border-radius:50%;width:28px;height:28px;font-size:1.2rem;cursor:pointer;margin-left:10px;display:flex;align-items:center;justify-content:center;' title='Eliminar'>&times;</button>
          </span>
        </div>`;
      }).join('');
      lista.innerHTML += `<hr><strong>Total: $${total.toLocaleString()}</strong>`;
    }
  }
});

// Actualizar el mini-carrito sidebar (debe estar en global)
window.actualizarMiniCarrito = function() {
  const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  const lista = document.getElementById('mini-carrito-lista');
  const total = document.getElementById('mini-carrito-total');
  const cantidad = document.getElementById('mini-carrito-cantidad');
  if (lista && total && cantidad) {
    if (carrito.length === 0) {
      lista.innerHTML = '<p>El carrito está vacío.</p>';
      total.textContent = 'Total: $0';
      cantidad.textContent = '0';
    } else {
      let suma = 0;
      lista.innerHTML = carrito.map((item, idx) => {
        suma += item.precio * item.cantidad;
        return `<div style='display:flex;align-items:center;justify-content:space-between;margin-bottom:0.7rem;border-bottom:1px solid #eee;padding-bottom:0.5rem;'>
          <span>
            <strong>${item.nombre}</strong><br>
            <span class='mini-carrito-item-precio-unitario'>Precio unitario: $${item.precio.toLocaleString()}</span>
            <span style='display:flex;align-items:center;gap:4px;'>
              <button onclick="restarCantidadCarrito(${idx})" style='background:#eee;color:#222;border:none;border-radius:50%;width:22px;height:22px;font-size:1.1rem;cursor:pointer;'>-</button>
              <small>Cantidad: ${item.cantidad}</small>
              <button onclick="sumarCantidadCarrito(${idx})" style='background:#eee;color:#222;border:none;border-radius:50%;width:22px;height:22px;font-size:1.1rem;cursor:pointer;'>+</button>
            </span>
          </span>
          <span style='display:flex;align-items:center;'>
            <span style='margin-right:12px;'>$${(item.precio * item.cantidad).toLocaleString()}</span>
            <button onclick="eliminarDelCarrito(${idx})" style='background:#CC2936;color:#fff;border:none;border-radius:50%;width:28px;height:28px;font-size:1.2rem;cursor:pointer;margin-left:10px;display:flex;align-items:center;justify-content:center;' title='Eliminar'>&times;</button>
          </span>
        </div>`;
      }).join('');
      total.textContent = 'Total: $' + suma.toLocaleString();
      cantidad.textContent = carrito.reduce((acc, item) => acc + item.cantidad, 0);
    }
  }
};