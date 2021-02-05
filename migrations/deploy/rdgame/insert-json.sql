-- Deploy boardgame:rdgame/insert-json to pg

BEGIN;

-- une version monoparam qui bénéficie de la souplesse du connecteur pg
-- l'objet passé en param côté JS est transformé en sa représentation JSON côté SQL
CREATE FUNCTION new_boardgame(game json) RETURNS boardgame AS $$
INSERT INTO boardgame(
	"name", min_age,
	min_players, max_players,
	"type", note,
	duration, creator
) VALUES
(
	game->>'name', (game->>'minAge')::int,
	(game->>'minPlayers')::int, (game->>'maxPlayers')::int,
	game->>'type', (game->>'note')::int, 
	(game->>'duration' || ' minutes')::interval, game->>'creator'
)
RETURNING *;
$$ LANGUAGE sql;

COMMIT;
