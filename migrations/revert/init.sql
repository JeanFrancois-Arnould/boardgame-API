-- Revert boardgame:init from pg

BEGIN;

--supression de la table boardgame
DROP TABLE boardgame;

-- supression du domain pint
DROP DOMAIN pint;

COMMIT;
