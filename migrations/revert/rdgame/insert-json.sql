-- Revert boardgame:rdgame/insert-json from pg

BEGIN;

DROP FUNCTION new_boardgame(json);

COMMIT;
