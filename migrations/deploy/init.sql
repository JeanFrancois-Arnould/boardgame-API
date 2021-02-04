-- Deploy boardgame:init to pg

BEGIN;

--vérification de la validité de l'age en int positif
CREATE DOMAIN pint AS int CHECK ( value > 0 );

-- la table recensant ma collection de jeux

CREATE TABLE boardgame (
    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" text NOT NULL,
    min_age pint NOT NULL,
    min_players pint NOT NULL,
    max_players pint,
    note int NOT NULL,
    "type" text NOT NULL, -- future table séparée + clef étrangère
    duration interval NOT NULL,
    creator text NOT NULL -- future table séparée + clef étrangère
);

COMMIT;
