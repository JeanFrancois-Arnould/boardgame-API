const { Router } = require('express');
const boardgameController = require('./controllers/boardGameController');

const router = Router();

router.get('/boardgames', boardgameController.allBoardgames);

module.exports = router;