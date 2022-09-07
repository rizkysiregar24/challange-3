// No.1
var emptyShip = new Ship(50, 20);
function Ship(draft, crew) {
    this.draft = draft;
    this.crew = crew;

    this.hasil = function(){
        let rumusHasil = this.draft - (this.crew*1.5)
        console.log('Total Perhitungan Draft:'+ rumusHasil)
        if (rumusHasil > 20) {
            return 'Banyak Nih Muatan Kapalnya'
        }
        else if(rumusHasil <= 20){
            return 'Lebih Banyak Muatan Orangnya'
        }
    }
}   
console.log(emptyShip.hasil())


// No.2
class Animal {
    constructor(name, age, legs, species, status) {
        this.name = name;
        this.age = age;
        this.legs = legs;
        this.species = species;
        this.status = status;
    }
    introduce() {
        return `Hello, my name is ${this.name} and I am ${this.age} year sold.`;
    }
}

class shark extends Animal {
    constructor(name, age, status) {
        super(name, age, 0,'shark', status);
    }
}
class cat extends Animal {
    constructor(name, age, status) {
        super(name, age, 4,'cat' , status);
    }
}
class dog extends Animal {
    constructor(name, age, status, master) {
        super(name, age, 4, 'dog', status);
        this.master = master
    }
    greetMaster(){
        return`Hello ${this.master}`;

    }
}
const hiu = new shark('hiu', 10, 'berenang');
const kucing = new cat('kucing', 2, 'berjalan' );
const anjing = new dog('anjing', 10, 'berjalan', 'rizky');
console.log(kucing);
console.log(anjing);
console.log(hiu);
