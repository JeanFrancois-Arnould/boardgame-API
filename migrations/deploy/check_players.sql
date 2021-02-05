-- Deploy boardgame:check_players to pg

BEGIN;

-- petit oubli de vérirication
ALTER TABLE boardgame
ADD CONSTRAINT players_order
CHECK (min_players < max_players);

COMMIT;
