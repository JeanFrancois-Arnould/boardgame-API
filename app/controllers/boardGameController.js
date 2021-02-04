
const Boardgame = require('../models/boardGame');

const boardgameController = {
    allBoardgames : async (req, res) => {
        const games = await Boardgame.findAll();
        res.json(games);
    }
};
module.exports = boardgameController;