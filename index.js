class Impuesto  {
    constructor(montoBrutoAnual, deducciones) {
        this.montobrutoanual = montoBrutoAnual;
        this.deducciones = deducciones;

    }


}

class Cliente {
    constructor(nombre, Impuesto) {
        this.nombre = nombre;
        this.Impuesto = impuesto;
    }
}

let impuesto = new Impuesto(1000, 15000);
console.log(impuesto.montobrutoanual);
console.log(impuesto.deducciones);