class Hewan {
    public Kaki : number = 4;
    public Mata = 2;
    public Mulut = 1;
    public AlatBergerak : string = 'kaki';

    constructor (jalan: string) {
        this.AlatBergerak = jalan
    }

    bergerak () {
        console.log(`Hewan ini bergerak menggunaka ${this.AlatBergerak}`)
    }
}

class Mamalia extends Hewan {

    constructor (jalan : string) {
        super(jalan)
    }

    kebiasan () {
        console.log('Hewan ini biasanya bernafas ')
    }
}

class Burung extends Hewan {

    constructor (jalan : string) {
        super(jalan)
    }

    kebiasan () {
        console.log('Hewan ini biasanya bernafas ')
    }
}

console.log(new Mamalia('Kaki').bergerak());

console.log(new Burung('Sayap').bergerak());