const { Router } = require('express');
const boardgameController = require('./controllers/boardGameController');
const { validateBody } = require('./services/validator');
const boardgameSchema = require('./schemas/boardgame');
const boardGame = require('./models/boardGame')
const router = Router();


//GET
/**
 * affiche tout les boardGames de la BDD
 * @route GET boardgames
 * @group boardgames - trouver les boardGames
 * @returns {array} 200 - la collection de boardGame
 */
router.get('/boardgames', boardgameController.allBoardgames);

/**
 * affiche un boardGames de la BDD
 * @route GET /boardgames/{id}
 * @group boardgames - trouver un boardGame
 * @param {string} id.path
 * @returns {array} 200 - un boardGame spécifique
 */
router.get('/boardgames/:id', boardgameController.oneBoardgames);

//POST
/**
 * créé un boardGames dans la BDD
 * @route POST /boardgames
 * @group boardgames - ajouter un nouveau jeux
 * @param {boardGame.model} boardGame.body - le nom du jeux
 * @returns {array} 200 - nouveau boardGame créé
 */
router.post('/boardgames', validateBody(boardgameSchema) , boardgameController.newBoardgame);

module.exports = router;