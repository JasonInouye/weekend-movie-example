CREATE TABLE "category" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (100) NOT NULL
);

INSERT INTO "category" ("name")
VALUES ('funny'), ('cohort'), ('cartoon'), ('nsfw'), ('meme')
;

CREATE TABLE "favorites" (
    "id" SERIAL PRIMARY KEY,
    "url" VARCHAR (500) NOT NULL
);

CREATE TABLE "category_favorites"(
  "id" SERIAL PRIMARY KEY,
  "favorites_id" INT REFERENCES "favorites" NOT NULL,
  "category_id" INT REFERENCES "category" NOT NULL
);

INSERT INTO "category_favorites" ("favorites_id", "category_id")
VALUES 
(1,1), (1,3), (1,4),      -- Avatar
(2,1), (2,4), (2,3),    -- Beauty
(3,3),                    -- Cpt Marvel
(4,4), (4,5),             -- Nemo
(5,3),                    -- Gone Girl
(6,4),                   -- Potter
(3,4),(7,2),              -- Bond
(8,4),                    -- Pi
(9,4),                    -- Monsters
(10,4),                   -- Star Wars
(11,1), (11,5),          -- Martian
(12,3), (12,4),           -- Social Net
(13,4), (13,5), (13,3),  -- Titanic
(14,3), (14,2), (14,4);
