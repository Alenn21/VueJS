const app = new Vue({
    el: '#app',
        data: {
            titulo: 'Productos para venta',
            message: 'Gestión de Productos',
            menu: ['Inicio', 'Productos', 'Contacto'],
            productos: [
                { nombre: 'Libro1', precio: 1000, stock: 10, editable: false },
                { nombre: 'Libro2', precio: 1100, stock: 20, editable: false },
                { nombre: 'Libro3', precio: 1200, stock: 0, editable: false },
                { nombre: 'Libro4', precio: 1300, stock: 40, editable: false }
            ],
            nuevo: '',
            valor: 0,
            totalStock: 0,
            totalPrecio: 0
        },
        methods: {
            agregarProducto() {
                if (this.nuevo !== '' && this.valor >= 0) {
                    this.productos.push({
                        nombre: this.nuevo,
                        precio: this.valor,
                        stock: 0,
                        editable: false
                    });
                    this.nuevo = '';
                    this.valor = 0;
                }
                console.log("Producto agregado");
            },
            eliminarProducto(index) {
                this.productos.splice(index, 1);
                console.log("Producto eliminado");
            },
            toggleEdit(index) {
                this.productos[index].editable = !this.productos[index].editable;
                console.log(`Producto ${index} editado: ${this.productos[index].editable}`);
            }
        },
        computed: {
            sumarStock() {
                this.totalStock = 0;
                for (let pt of this.productos) {
                    this.totalStock += pt.stock;
                }
                return this.totalStock;
            },
            sumarPrecio() {
                this.totalPrecio = 0;
                for (let pt of this.productos) {
                    this.totalPrecio += pt.precio * pt.stock;
                }
                return this.totalPrecio;
            }
        }
});