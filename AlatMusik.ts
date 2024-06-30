class AlatMusik {
    public Bahan = 'kayu';
    public Main : string = 'Petik';

    constructor (main : string) {
        this.Main = main
    }

    playing () {
        console.log (`Alat Musik ini dimainkan dengan cara di ${this.Main}`)
    }
}

class Gitar extends AlatMusik {

    constructor (main : string) {
        super(main)
    }

    play () {
        console.log('Alat musik ini memiliki cara yang unik saat dimainkan')
    }
}

class Piano extends AlatMusik {

    constructor (main : string) {
        super(main)
    }

    play () {
        console.log('Alat musik ini perlu duduk untuk memainkannya')
    }
}

console.log(new Gitar('Petik').playing());
console.log(new Piano('Tekan').playing());