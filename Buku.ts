class Buku {
    public Halaman = 'kertas'
    public Tema : string = 'Nyata' 

    constructor (tema : string) {
        this.Tema = tema
    }

    tampilan () {
        console.log(`Buku ini memiliki tema tentang sesuatu yang ${this.Tema}`)
    }
}

class Fiksi extends Buku {

    constructor (tema : string) {
        super(tema)
    }

    pembahasan () {
        console.log('Buku ini memuat berbagai macam dongeng')
    }
}

class NonFiksi extends Buku {
    constructor (tema : string) {
        super(tema)
    }

    pembahasan () {
        console.log('Buku ini membahas berbagai hal dari dunia nyata ')
    }
}

console.log(new NonFiksi('nyata').tampilan());
console.log(new Fiksi('Fiksi').tampilan());