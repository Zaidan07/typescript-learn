class Perabotan {
    public Bahan = 'kayu';
    public Kaki = 4;
    public Kegunaan : string = 'duduk'

    constructor (kegunaan : string) {
        this.Kegunaan = kegunaan
    }

    penggunaan () {
        console.log(`Perabotan ini digunakan untuk ${this.Kegunaan}`)
    }
}

class Meja extends Perabotan {

    constructor (kegunaan : string) {
        super(kegunaan)
    }

    pakai () {
        console.log('Meja ini terbuat dari kayu yang kokoh')
    }
}

class Kursi extends Perabotan {

    constructor (kegunaan : string) {
        super(kegunaan)
    }

    pakai () {
        console.log('Kayu ini terbuat dari kayu yang kokoh')
    }
}

console.log(new Meja('meletakkan barang').penggunaan());
console.log(new Kursi('duduk').penggunaan());