class Kue {
    constructor(gula, aksesoris, berat) {
        this._bahan = "Tepung";
        this._gula = gula;
        this._aksesoris = aksesoris;
        this._berat = berat;
    }
    // getter
    get bahan() {
        return this._bahan;
    }
    get gula() {
        return this._gula;
    }
    get aksesoris() {
        return this._aksesoris;
    }
    get berat() {
        return this._berat;
    }

    // setter
    set bahan(val) {
        this._bahan = val;
    }
    set gula(val) {
        this._gula = val;
    }
    set aksesoris(val) {
        this._aksesoris = val;
    }
    set berat(val) {
        this._berat = val;
    }
}

// objek
// const kuePutu = new Kue("gula jawa", "gula putih", 200);
// console.log(kuePutu);

class KuePutu extends Kue {
    constructor(gulaLevel, ...batman) {
        super(...batman);
        this._gulaLevel = gulaLevel;
    }
    // get 
    get gulaLevel() {
        return this._gulaLevel;
    }

    // set
    set gulaLevel(gulaLevel) {
        this._gulaLevel = gulaLevel;
    }
}

class KueCubit extends Kue {
    constructor(...superman) {
        super(...superman);
        this._bahan = ["Telur", "Tepung"];
    }
}

class KueKetawa extends Kue {
    constructor(...flash) {
        super(...flash);
        this._bahan = ["Telur", "Tepung"];
    }
}

const KueCubitCoklat = new KueCubit('gula putih', 'gosong', 200);
console.log(KueCubitCoklat);