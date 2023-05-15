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
    constructor(nombre, impuesto) {
        console.log(typeof impuesto)
        if (typeof nombre !== 'string') {
            throw new Error('El valor debe ser un string')
        }
        if (!(impuesto instanceof Impuesto)) {
            throw new Error('El valor debe ser un object')
        }
        this.nombre = nombre
        this.impuesto = impuesto
    }

    // (monto_bruto_anual - deducciones) * 21%
    calcularImpuesto() {
        let montoBrutoAnual = this.impuesto.montobrutoanual
        let deducciones = this.impuesto.deducciones

        return (montoBrutoAnual - deducciones) * (21 / 100)
    }
}

// INSTANCIAMOS IMPUESTOS
let impuesto = new Impuesto(12000000, 2000000)
console.log(impuesto.montobrutoanual)
console.log(impuesto.deducciones)

// INSTANCIAMOS CLIENTES
let cliente = new Cliente('NayarethNain', impuesto)
console.log(cliente.nombre)
console.log(cliente.calcularImpuesto())
