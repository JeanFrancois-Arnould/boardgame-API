const db = require('../database');

//model Activ-Record
class Boardgame {
    id;
    name;
    minAge;
    minPlayers;
    maxPlayers;
    duration;
    creator;
    
    // setters car camelCase => JS et snake_case => BDD 
    
    set min_players(val){
        this.minPlayers =val;
    };
    set max_players(val){
        this.maxPlayers =val;
    };
    set min_age(val){
        this.minAge =val;
    };

    constructor(data= {}){
        for (const prop in data) {
            this[prop] = prop[data];
        }
    }
    /**
     * trouve toute les instances de Boardgame
     * 
     */
    static async findAll(){
        
        const { rows } = await db.query('SELECT * FROM boardgame;');

        return rows.map(game => new Boardgame(game));
    }

    static async findOne(id) {
        const { rows } = await db.query('SELECT * FROM boardgame WHERE id = $1;', [id]);

        return new Boardgame(rows[0]);
    }

};

module.exports = Boardgame;