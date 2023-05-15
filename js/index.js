const productos = [
	{
		id: 1,
		nombre: 'Café Americano',
		imagen: 'imagenes/pngegg (3).png',
		precio: 1000
	},
	{
		id: 2,
		nombre: 'Café con Leche',
		imagen: 'imagenes/pngegg (4).png',
		precio: 900
	},
	{
		id: 3,
		nombre: 'Café Mocha',
		imagen: 'imagenes/pngegg (5).png',
		precio: 1100
	},
	{
		id: 4,
		nombre: 'Capuccino',
		imagen: 'imagenes/pngegg (6).png',
		precio: 1000
	},
	{
		id: 5,
		nombre: 'Té de Hierbas',
		imagen: 'imagenes/pngegg (7).png',
		precio: 800
	},
	{
		id: 6,
		nombre: 'Sandwich ',
		imagen: 'imagenes/pngegg (8).png',
		precio: 1200
	},
	{
		id: 7,
		nombre: 'Croissant Salado',
		imagen: 'imagenes/pngegg (9).png',
		precio: 2500
	},
	{
		id: 8,
		nombre: 'Dona Glaseada',
		imagen: 'imagenes/pngegg (10).png',
		precio: 3000
	},
	{
		id: 9,
		nombre: 'Magdalena',
		imagen: 'imagenes/pngegg (11).png',
		precio: 700
	},
	{
		id: 10,
		nombre: 'Brownie',
		imagen: 'imagenes/pngegg (12).png',
		precio: 1500
	}
];

const carrito = [];

const productosContainer = document.getElementById('productos');
const carritoContainer = document.createElement('div');
carritoContainer.setAttribute('id', 'carrito');
document.body.appendChild(carritoContainer);

const carritoListContainer = document.getElementById('carrito-list');
const carritoList = carritoListContainer.querySelector('ul');

const btnVaciar = document.getElementById('btn-vaciar');
btnVaciar.addEventListener('click', () => {
	carrito.splice(0, carrito.length);
	actualizarCarrito();
});

function actualizarCarrito() {
	let precioTotal = 0;
	carritoList.innerHTML = '';
	carrito.forEach(producto => {
		const li = document.createElement('li');
		li.innerHTML = `<div class="carrito-item"><img src="${producto.imagen}" alt="${producto.nombre}"><div class="info"><h3>${producto.nombre}</h3><p>Precio: $${producto.precio}</p><button class="btn-quitar" data-id="${producto.id}">x</button></div></div>`;
		carritoList.appendChild(li);
		precioTotal += producto.precio;
	});
	carritoListContainer.querySelector('#total').textContent = precioTotal.toFixed(2);
}

function agregarAlCarrito(id) {
	const producto = productos.find(p => p.id === id);
	carrito.push(producto);
	actualizarCarrito();
}

function quitarDelCarrito(id) {
	const index = carrito.findIndex(p => p.id === id);
	carrito.splice(index, 1);
	actualizarCarrito();
}

productos.forEach(producto => {
	const li = document.createElement('li');
	li.innerHTML = `<div class="producto-item"><img src="${producto.imagen}" alt="${producto.nombre}"><div class="info"><h3>${producto.nombre}</h3><p>Precio: $${producto.precio}</p><button class="btn-agregar" data-id="${producto.id}">Agregar al Carrito</button></div></div>`;
	productosContainer.appendChild(li);
});

productosContainer.addEventListener('click', e => {
	if (e.target.classList.contains('btn-agregar')) {
		const id = parseInt(e.target.getAttribute('data-id'));
		agregarAlCarrito(id);
	}
});

document.addEventListener('click', e => {
	if (e.target.classList.contains('btn-quitar')) {
		const id = parseInt(e.target.getAttribute('data-id'));
		quitarDelCarrito(id);
	}
});