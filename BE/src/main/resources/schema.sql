use airbnb_db;

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


drop table if exists stay;
create table stay
(
    id              bigint auto_increment primary key,
    image_url       varchar(500),
    location        varchar(500),
    category        varchar(100),
    title           varchar(100),
    description     varchar(500),
    price_per_night int,
    coordinate      double,

    host_key int,
    host_id         bigint references host (id)
);

drop table if exists host;
create table host
(
    id        bigint auto_increment primary key,
    name      varchar(50),
    image_url varchar(500)
);


drop table if exists review;
create table review
(
    id              bigint auto_increment primary key,
    rating          double,
    review_contents varchar(500),
    stay_key        int,
    stay            bigint references stay (id)
);

drop table if exists `option`;
create table `option`
(
    id              bigint auto_increment primary key,
    max_guest_count int,
    room_type       varchar(100),
    bed_count       int,
    bathroom_count  int,
    stay            bigint references stay (id)
);

drop table if exists amenity;
create table amenity
(
    id           bigint auto_increment primary key,
    amenity_type varchar(100),
    stay_key     int,
    stay         bigint references stay (id)
);


drop table if exists `user`;
create table `user`
(
    id   bigint auto_increment primary key,
    name varchar(50)
);

drop table if exists reservation;
create table reservation
(

    id             bigint auto_increment primary key,
    check_in_date  date,
    check_out_date date,

    stay_key       int,
    stay           bigint references stay (id),
    user_id        bigint references `user` (id)
);

drop table if exists guest;
create table guest
(
    id          bigint auto_increment primary key,
    adult       int,
    child       int,
    infant      int,
    `reservation` bigint references reservation (id)
);

drop table if exists wish;
create table wish
(
    id   bigint auto_increment primary key,
    stay bigint references stay (id),
    user bigint references `user` (id)
);
