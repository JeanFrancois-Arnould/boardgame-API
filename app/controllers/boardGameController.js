
const Boardgame = require('../models/boardGame');

const boardgameController = {
    /**
     * trouve tout les jeux
     * @param {Express.Response} res - l'objet représentant la réponse
     * @async
     */
    allBoardgames: async (req, res) => {
        const games = await Boardgame.findAll();
        res.json(games);
    },
    /**
     * trouve un jeux
     * @param {Express.Response} res - l'objet représentant la réponse
     * @param {Express.Request} req - l'objet représentant la requête
     * @async
     */
    oneBoardgames: async (req, res) => {
        const { id } = req.params;
        try {
            const findGames = await Boardgame.findOne(id);
            res.json(findGames);
        } catch (err) {
            response.status(404).json(err.message);
        }
        
    },
    /**
     * création d'un nouveau jeux
     * @param {Express.Response} res - l'objet représentant la réponse
     * @param {Express.Request} req - l'objet représentant la requête
     * @async
     */
    newBoardgame: async (request, response) => {
        // les infos du jeu à ajouter
        const newGameData = request.body;
        // si newGamedata.duration est un object on le formate en minutes 
        
        try {
            if (typeof newGameData.duration === "object") {
            newGameData.duration = 60 * newGameData.duration.hours + newGameData.duration.minutes;
        }
        
        const newGame = new Boardgame(newGameData);

        await newGame.save();

        response.json(newGame);
        } catch (err) {
            response.status(400).json(err.message);
        }
        
    }
};
module.exports = boardgameController;