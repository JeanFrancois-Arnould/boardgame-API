
const Boardgame = require('../models/boardGame');

const boardgameController = {
    allBoardgames: async (req, res) => {
        const games = await Boardgame.findAll;
        res.json(games);
    },

    oneBoardgames: async (req, res) => {
        const { id } = req.params;
        const findGames = await Boardgame.findOne(id);
        res.json(findGames);
    },

    newBoardgame: async (request, response) => {
        // les infos du jeu à ajouter
        const newGameData = request.body;
        // si newGamedata.duration est un object on le formate en minutes 
        if (typeof newGameData.duration === "object") {
            newGameData.duration = 60 * newGameData.duration.hours + newGameData.duration.minutes;
        }
        
        const newGame = new Boardgame(newGameData);

        await newGame.save();

        // sans await, il va me manquer
        // la certitude que tout s'est bien passé
        // l'id
        response.json(newGame);
    }
};
module.exports = boardgameController;