DROP TABLE IF EXISTS initTable;
CREATE TABLE IF NOT EXISTS initTable
(
    id   int primary key auto_increment     not null,
    name varchar(255) default 'RANDOM NAME' not null
);