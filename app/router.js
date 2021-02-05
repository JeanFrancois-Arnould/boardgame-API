const { Router } = require('express');
const boardgameController = require('./controllers/boardGameController');

const router = Router();


//GET
router.get('/boardgames', boardgameController.allBoardgames);
router.get('/boardgames/:id', boardgameController.oneBoardgames);

//POST
router.post('/boardgames', boardgameController.newBoardgame);
module.exports = router;