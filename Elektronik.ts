class Elektronik {
    public Energi : string = 'listrik';
    public Layar = 1;

    constructor (energi : string) {
        this.Energi = energi
    }

    onOff () {
        console.log(`Perangkat elektronik ini menggunakan ${this.Energi} sebagai daya nya`)
    }
}

class Televisi extends Elektronik {

    constructor (energi : string) {
        super(energi)
    }

    flexibilitas () {
        console.log ('Barang Elektronik ini sangat tidak flexibel untuk dibawa-bawa')
    }
}

class Smartphone extends Elektronik {
    
    constructor (energi : string) {
        super(energi)
    }

    flexibilitas () {
        console.log('Barang elektronik ini mudah untuk dibawa-bawa')
    }
}

console.log(new Televisi('listrik').onOff());
console.log(new Smartphone('Baterai').onOff());