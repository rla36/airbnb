use airbnb_db;

drop table host;
create table if not exists host
(
    id       bigint auto_increment primary key,
    name     varchar(50),
    imageURL varchar(500)
);

drop table if exists `theme`;
create table `theme`
(
    id    bigint auto_increment primary key,
    title varchar(100)
);

drop table if exists close_attraction;
create table close_attraction
(
    id        bigint auto_increment primary key,
    location  varchar(500),
    image_url varchar(500),
    type      varchar(50),
    `time`    int,
    theme_key int,
    theme     bigint references theme (id)
);

drop table if exists theme_stay_content;
create table theme_stay_content
(
    id        bigint auto_increment primary key,
    title     varchar(100),
    image_url varchar(500),
    theme_key int,
    theme     bigint references theme (id)
);
