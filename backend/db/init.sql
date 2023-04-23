DROP TABLE IF EXISTS trains;
CREATE TABLE IF NOT EXISTS trains
(
    id   int primary key auto_increment     not null,
    name varchar(255) default 'RANDOM NAME' not null,
    createdAt datetime not null default now(),
    updatedAt datetime not null default now()
);

DROP TABLE IF EXISTS schedule;
CREATE TABLE IF NOT EXISTS schedule
(
    id   int primary key auto_increment     not null,
    trainId int not null,
    from_city varchar(64) not null,
    to_city varchar(64) not null,
    day varchar(16) not null,
    time varchar(5) not null,
    createdAt datetime not null default now(),
    updatedAt datetime not null default now(),
    foreign key (trainId)
        references trains(id)
        ON DELETE CASCADE
);
