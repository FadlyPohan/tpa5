use sql12621050;
SELECT * FROM SequelizeMeta
DROP TABLE SequelizeMeta

SELECT * FROM Users


SELECT * FROM Customers

CREATE TABLE `SequelizeMeta` (
    `name` VARCHAR(255) COLLATE utf8_unicode_ci NOT NULL
)ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
SELECT * FROM users

INSERT INTO SequelizeMeta (name) VALUES ('20230525081324-create-customer');
INSERT INTO SequelizeMeta (name) VALUES ('20230526033847-create-user');

CREATE TABLE `users` (
    `email` VARCHAR(255) NOT NULL,
    `nama` VARCHAR(255) NOT NULL DEFAULT '',
    `password` VARCHAR(255) NOT NULL DEFAULT '',
    PRIMARY KEY (`email`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

COMMIT