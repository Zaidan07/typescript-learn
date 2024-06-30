class Kendaraan {
    public Roda : number = 4;
    public LampuSen = 4;
    
    constructor (roda: number) {
        this.Roda = roda
    }

    berjalan () {
        console.log(`Kendaraan ini berjalan dengan ${this.Roda} roda`)
    }
}

class Mobil extends Kendaraan {

    constructor (roda: number) {
        super(roda)
    }

    digunakan () {
        console.log('Mobil ini dapat digunakan untuk 4 orang atau lebih')
    }

}

class Motor extends Kendaraan {
    
    constructor (roda: number) {
        super(roda)
    }

    digunakan () {
        console.log('Motor ini dapat digunakan untuk 2  orang')
    }
}

console.log(new Motor(2).berjalan())

console.log(new Mobil(4).berjalan())