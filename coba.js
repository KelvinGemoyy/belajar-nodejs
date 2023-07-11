function cetakNama(nama) {
    return `Halo, nama saya ${nama}`;
}

const PI = 3.14;

const tmnVirtual = {
    nama : 'Muhammad Kelvin Raditya',
    umur : 16,
    cetakTmnVirtual() {
        return `Haii, nama saya ${this.nama} dan umur saya ${this.umur} dan saya masih single hehehe...`
    }
}

// module.exports.cetakNama = cetakNama;
// module.exports.PI = PI;
// module.exports.tmnVirtual = tmnVirtual

module.exports = {
    cetakNama : cetakNama,
    PI : PI,
    tmnVirtual : tmnVirtual,
}

// module.exports = {cetakNama,PI,tmnVirtual};
 
// 5 Element CSS Ajaib


// 1. Clipping Pat
