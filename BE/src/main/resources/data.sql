use airbnb_db;

insert into `theme`(title) values("가까운 여행지 둘러보기");
insert into `theme`(title) values("어디서나, 여행은 살아보는 거야!");

insert into close_attraction(location, image_url, type, `time`, theme) values("서울", "image.jpg", "차", 30, 1);
insert into close_attraction(location, image_url, type, `time`, theme) values("의정부시", "daeguImage.jpg", "차", 30, 1);
insert into close_attraction(location, image_url, type, `time`, theme) values("대구", "image.jpg", "차", 210, 1);
insert into close_attraction(location, image_url, type, `time`, theme) values("대전", "daeguImage.jpg", "차", 120, 1);
insert into close_attraction(location, image_url, type, `time`, theme) values("광주", "image.jpg", "차", 240, 1);
insert into close_attraction(location, image_url, type, `time`, theme) values("수원시", "daeguImage.jpg", "차", 45, 1);
insert into close_attraction(location, image_url, type, `time`, theme) values("울산", "image.jpg", "차", 270, 1);
insert into close_attraction(location, image_url, type, `time`, theme) values("부천시", "daeguImage.jpg", "차", 45, 1);

insert into theme_stay_content(title, image_url, `theme`) values("자연생활을 만끽할 수 있는 숙소", "image1.jpg", 2);
insert into theme_stay_content(title, image_url, `theme`) values("독특한 공간", "image2.jpg", 2);
insert into theme_stay_content(title, image_url, `theme`) values("반려동물 동반 가능", "image3.jpg", 2);
insert into theme_stay_content(title, image_url, `theme`) values("집 전체", "image3.jpg", 2);

