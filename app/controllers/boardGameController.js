
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

        const newGame = new Boardgame(newGameData);

        await newGame.save();

        // sans await, il va me manquer
        // la certitude que tout s'est bien passé
        // l'id
        response.json(newGame);
    }
};
module.exports = boardgameController;