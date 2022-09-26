DROP TABLE IF EXISTS pokedex;

CREATE TABLE pokedex(
  ID INT PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  type VARCHAR(50) NOT NULL,
  caught BOOLEAN NOT NULL
);

INSERT INTO pokedex (id, name, type, caught)
VALUES (1,'Squirtle', 'Water', true);

INSERT INTO pokedex (id, name, type, caught)
VALUES (2, 'Charmander', 'Fire', false);