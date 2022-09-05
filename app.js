
let option = prompt (`Elja Tu Marca de Calzado Favorita:
1:Nike
2:Adidas
3:Puma
4:Reebok
`)


const productos = [
    {id: 1, producto:"Nike AirMax", precio: 5490, disponible: true},
    {id: 2, producto:"Adidas Coreracer", precio: 4290, disponible: true},
    {id: 3, producto:"Puma Xray Deportivo", precio: 4990, disponible: true},
    {id: 4, producto:"Reebok Triplehall", precio: 2880, disponible: true},
    {id: 5, producto:"New Balance Lifestyle", precio: 3990, disponible: true},
]



for (const producto of productos) {
console.log (producto.id);
console.log (producto.producto);

}

function sumar (Numero1, Numero2, Numero3, Numero4, Numero5)
let resultado = Numero1 + Numero2 + Numero3 + Numero4 + Numero5
console.log (sumar(5490, 4290, 4990, 2880, 3990)) 