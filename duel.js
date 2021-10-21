class card {
    constructor(name, cost){
        this.name = name;
        this.cost = cost;
    }
}
class Unit extends card {
    constructor(name, cost, power, resilience){
        super(name, cost);
        this.power = power;
        this.resilience = resilience;
    }    
    displayStats() {
        console.log(`${this.name}`);
        console.log(`cost: ${this.cost}`);
        console.log(`your power level: ${this.power}`);
        console.log(`your resilience level: ${this.resilience}`);
    }
    attack(target){
        if(target instanceof Unit){
            console.log("The Ninja takes a swing!")
            target.resilience -= 1;
        }
    }
}
class effect extends card{
    constructor(name, cost, text, stat, magnitude ){
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }
    displayCard() {
        console.log(`${this.name}`);
        console.log(`cost: ${this.cost}`);
        console.log(`The Card reads: ${this.text}`);
        console.log(`${this.stat}`);
        console.log(`${this.magnitude}`)
    }
    play(target) {
        if( target instanceof Unit ) {
            if(target.magnitude == +3)
                console.log(`${this.text}`)
                target.resilience += this.magnitude;
            if(target.magnitude == -2)
                console.log(`${this.text}`)
                target.resilience += this.magnitude;
            if(target.magnitude == +2)
                console.log(`${this.text}`)
                target.resilience += this.magnitude;
        } 
        else {
            throw new Error( "Target must be a unit!" );
        }
    }
}
const RedBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4);
const HardAlgorithm = new effect("Hard Algorith", 2, "increase targets resilience by 3", "resilience", +3 );
RedBeltNinja.displayStats();
HardAlgorithm.play(RedBeltNinja);
const BlackBeltNinja = new Unit("Black Belt Ninja", 4, 5, 4);
const UPR = new effect("Unhandled Promise Rejection", 1, "reduce target's resilience by 2", "resilience", -2);
UPR.play(RedBeltNinja);
RedBeltNinja.displayStats();
const PairProgramming = new effect("Pair Programming", 3, "increase targets power by 2", "power", +2);
PairProgramming.play(RedBeltNinja);
RedBeltNinja.displayStats();
RedBeltNinja.attack(BlackBeltNinja);
BlackBeltNinja.displayStats();