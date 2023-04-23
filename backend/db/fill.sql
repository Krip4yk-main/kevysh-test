insert into trains (name)
values ('Bongo'),
       ('Cat'),
       ('Dog');

insert into schedule (trainId, from_city, to_city, day, time)
values (1, 'a', 'b', 'Monday', '15:00'),
       (1, 'a', 'b', 'Wednesday', '15:00'),
       (1, 'a', 'b', 'Friday', '15:00'),
       (2, 'a', 'c', 'Sunday', '10:30'),
       (2, 'a', 'c', 'Sunday', '20:30'),
       (3, 'a', 'b', 'Friday', '5:00');
