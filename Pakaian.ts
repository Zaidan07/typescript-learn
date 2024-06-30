class Pakaian {
    public Bahan : string = 'kain';
    public Lubang = 4;


    constructor (bahan : string) {
        this.Bahan = bahan
    }

    dibuat () {
        console.log(`Pakaian ini dibuat dengan ${this.Bahan}`)
    }
}

class PakaianPria extends Pakaian{

    constructor (bahan : string) {
        super(bahan)
    }

    jenis (){
        console.log('Pakaian ini hanya digunakan oleh Pria')
    }
}

class PakaianWanita extends Pakaian{

    constructor (bahan : string) {
        super(bahan)
    }

    jenis (){
        console.log('Pakaian ini hanya digunakan oleh Wanita')
    }
}

console.log(new PakaianPria('Kain biasa').dibuat());
console.log(new PakaianWanita('Kain sutra').dibuat());