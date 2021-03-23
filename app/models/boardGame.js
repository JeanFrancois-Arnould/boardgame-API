const db = require('../database');
/**
 * @typedef Boardgame
 * @class
 * @property {integer} id.required id du jeux en BDD
 * @property {string} name.required - nom du jeux
 * @property {integer} minAge.required - age min pour jouer
 * @property {integer} minPlayers.required nombre min de joueur
 * @property {integer} maxPlayers - nombre max de joueur peut etre null
 * @property {string} type.required - catégorie de jeux
 * @property {integer} note.required - une note sur 5
 * @property {integer} duration.required - durée en minute
 * @property {string} creator.required - créateur du jeux
 */
class Boardgame {
    id;
    name;
    // camelCase ici, snake_case côté BDD => mise en place de setters
    minAge;
    minPlayers;
    maxPlayers;
    type;
    note;
    duration;
    creator;

    set min_players(val) {
        this.minPlayers = val;
    }

    set max_players(val) {
        this.maxPlayers = val;
    }

    set min_age(val) {
        this.minAge = val;
    }

    constructor(data = {}) {
        for (const prop in data) {
            this[prop] = data[prop];
        }
    }
    /**
     * trouve tout les jeux en BDD
     * @async
     * @static
     * @returns {array<Promise>} tout les jeux en BDD
     */
    static async findAll() {

        const { rows } = await db.query('SELECT * FROM boardgame;');

        return rows.map(game => new Boardgame(game));
    }
    /**
     * trouve un jeux en BDD
     * @param {integer} - l'id du jeux
     * @async
     * @static
     * @returns {array<Promise>} le jeux demandé
     */
    static async findOne(id) {
        const { rows } = await db.query('SELECT * FROM boardgame WHERE id = $1;', [id]);

        return new Boardgame(rows[0]);
    }

    // pas statique car propre à chaque instance
    /**
     * trouve un jeux en BDD
     * @param {array} this - le model du bordgame
     * @async
     * @static
     * @returns {array<Promise>} le nouveau jeux
     */
    async save() {
        // props de this => insérer une ligne dans la bdd
        const { rows } = await db.query(`SELECT * FROM new_boardgame($1);`, [this]); // minAge

        this.id = rows[0].id;
    } 
}

module.exports = Boardgame;