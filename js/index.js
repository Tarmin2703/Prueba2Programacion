const productos = [
	{
		id: 1,
		nombre: 'Café Americano',
		imagen: 'imagenes/cafe-americano.jpg',
		precio: 1000
	},
	{
		id: 2,
		nombre: 'Café con Leche',
		imagen: 'imagenes/cafe-con-leche.jpg',
		precio: 900
	},
	{
		id: 3,
		nombre: 'Café Mocha',
		imagen: 'imagenes/cafe-mocha.jpg',
		precio: 1100
	},
	{
		id: 4,
		nombre: 'Capuccino',
		imagen: 'imagenes/capuccino.jpg',
		precio: 1000
	},
	{
		id: 5,
		nombre: 'Té de Hierbas',
		imagen: 'imagenes/te-hierbas.jpg',
		precio: 800
	},
	{
		id: 6,
		nombre: 'Sandwich de Jamón y Queso',
		imagen: 'imagenes/sandwich-jamon-queso.jpg',
		precio: 1200
	},
	{
		id: 7,
		nombre: 'Croissant de Jamón y Queso',
		imagen: 'imagenes/croissant-jamon-queso.jpg',
		precio: 2500
	},
	{
		id: 8,
		nombre: 'Bagel con Queso Crema',
		imagen: 'imagenes/bagel-queso-crema.jpg',
		precio: 3000
	},
	{
		id: 9,
		nombre: 'Magdalena',
		imagen: 'imagenes/magdalena.jpg',
		precio: 1300
	},
	{
		id: 10,
		nombre: 'Brownie',
		imagen: 'imagenes/brownie.jpg',
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