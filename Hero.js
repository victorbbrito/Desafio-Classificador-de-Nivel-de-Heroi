class Hero{
    constructor(name, age, type){
        this.name = name;
        this.age = age;
        this.type = type;
    }

    atack(){
        let atackType;
        
        if(this.type === 'Mago'){
            atackType = 'Magia';
        }

        else if (this.type === 'Guerreiro'){
            atackType = 'Espada';
        }

        else if (this.type === 'Monge'){
            atackType = 'Artes Marciais';
        }

        else if (this.type === 'Ninja'){
            atackType = 'Shuriken';
        }

        console.log(`O ${this.type} atacou usando ${atackType}`);
    }
}


const hero1 = new Hero('Naruto', 17, 'Ninja');
const hero2 = new Hero('Saitama', 25, 'Monge');
const hero3 = new Hero('Gandalf', 1000, 'Mago');
const hero4 = new Hero('Conan', 30, 'Guerreiro');

hero1.atack();
hero2.atack();
hero3.atack();
hero4.atack();
