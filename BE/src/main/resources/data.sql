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


insert into host(`name`, image_url) values ("Jong", "JongImage.jpg");
insert into stay(image_url, location, category, title, description, coordinate, host_id)
    values("https://github.com/codesqurd-master-DD/fe-w12-airbnb/blob/main/dist/img/way_1.jpg?raw=true",
           "서초구", "아파트", "Spacious and Comfortable cozy house #4", "강남역 5번 출구에서 도보로 이동 가능", 1111, 1);
insert into review(rating, review_contents) values(4.8, "좋아요");
insert into review(rating, review_contents, stay) values(4.8, "나쁘지 않아요", 1);
insert into `option`(max_guest_count, room_type, bed_count, bathroom_count, stay)
    values(3, "원룸", 1, 1,1);
insert into amenity(amenity_type, stay) values("KITCHEN", 1);
insert into amenity(amenity_type, stay) values("WIFI", 1);
insert into amenity(amenity_type, stay) values("AIR_CONDITIONING", 1);
insert into amenity(amenity_type, stay) values("HAIR_DRIER", 1);
