class Arquero {
   
    constructor (){
        this.ataque = 5;
        this.vida = 10;
        this.vidaMax = 10;
        this.nombre = Arquero;
    }
}

class Caballero {

    constructor (){
        this.ataque = 10;
        this.vida = 10;
        this.vidaMax = 10;
        this.nombre = caballero;
    }
}

class Mago {

    constructor (){
        this.ataque = 15;
        this.vida = 20;
        this.vidaMax = 10;
        this.nombre = mago;
    }
}

class Esqueletos {

    constructor (){
        this.ataque = 2;
        this.vida = 5;
        this.nombre = esqueletos;
    }
}

class Hechizero {

    constructor (){
        this.ataque = 3;
        this.vida = 6;
        this.nombre = hechizero;
    }
}

class Polilla {

    constructor (){
        this.ataque = 2;
        this.vida = 3;
        this.nombre = polilla;
    }
}

class Jefe {

    constructor (){
        this.ataque = 2;
        this.vida = 30;
    }
}

export default Arquero;