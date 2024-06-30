class OrangTua {
   public Nama = 'Idah';
   public Rambut = 'hitam';
   private 
   protected skill = ['makan', 'tidur', 'main']

    constructor (nama: string){
        this.Nama = nama
    }

    sapaan () {
        console.log(`Halo perkenalkan Nama saya ${this.Nama}`)
    }
    
}

class Anak extends OrangTua {

    constructor (nama: string) {
        super(nama)
    }


    pekerjaan () {
        console.log('Saya seorang petani')
    }
}

console.log(new Anak('Jono').sapaan())