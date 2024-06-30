class Makanan {
    public penyajian: string = 'Cepat Saji';
    
    constructor (saji : string) {
        this.penyajian = saji
    }

    sajikan () {
        console.log(`Makanan ini disajikan dengan ${this.penyajian}`)
    }
}

class CepatSaji extends Makanan {

    constructor (saji) {
        super(saji)
    }

    penyaji () {
        console.log('Makanan Cepat Saji dengan bumbu buatan')
    }
}

class Organik extends Makanan {

    constructor (saji) {
        super(saji)
    }

    penyaji () {
        console.log('Makanan organik dengan bumbu dan bahan yang berbahan organik')
    }
}

console.log(new CepatSaji('cepat saji').sajikan());
console.log(new Organik('organik').sajikan());