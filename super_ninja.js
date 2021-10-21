class Ninja {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }
    sayName() {
        this.name = this.name;
        console.log(`Ninjas name ${ this.name }`);
    }
    showStats() {
        console.log(`${this.health}`);
        console.log(`${this.speed}`);
        console.log(`${this.strength}`);

    }
    drinkSake(){
        this.health += 10
        console.log(`${this.health}`)
    }
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();

class Sensei extends Ninja {
    constructor(name) {
        super(name)
        this.name = name;
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }
    speakWisdom() {
        super.drinkSake();
        console.log("Now he is wise");
    }
}
const superSensei = new Sensei("James")
superSensei.speakWisdom();