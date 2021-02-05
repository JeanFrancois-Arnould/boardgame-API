const { Router } = require('express');
const boardgameController = require('./controllers/boardGameController');
const { validateBody } = require('./services/validator');
const boardgameSchema = require('./schemas/boardgame');

const router = Router();

//GET
router.get('/boardgames', boardgameController.allBoardgames);
router.get('/boardgames/:id', boardgameController.oneBoardgames);

//POST
router.post('/boardgames', validateBody(boardgameSchema) , boardgameController.newBoardgame);
module.exports = router;