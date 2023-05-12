class Impuesto {
    constructor(montoBrutoAnual, deducciones) {
        if (typeof montoBrutoAnual !== 'number' || typeof deducciones !== 'number') {
            throw new Error('El valor debe ser un número')
        }
        this.montobrutoanual = montoBrutoAnual
        this.deducciones = deducciones
    }

    // GETTERS
    get monto_bruto_anual() {
        return `MONTO BRUTO ANUAL: ${this.montobrutoanual}`
    }

    get get_deducciones() {
        return `DEDUCCIONES: ${this.deducciones}`
    }

    // SETTERS
    set monto_bruto_anual(setMontoBruto) {
        this.montobrutoanual = setMontoBruto
    }
}

// CLASE CLIENTES
class Cliente {
    constructor(nombre, Impuesto) {
        this.nombre = nombre
        this.Impuesto = impuesto
    }
}

let impuesto = new Impuesto(1000, 15000)
console.log(impuesto.montobrutoanual)
console.log(impuesto.deducciones)
console.log(impuesto.monto_bruto_anual)
