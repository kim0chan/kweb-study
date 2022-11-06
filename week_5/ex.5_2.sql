--1--
select `users`.`id`, `users`.`name`, `tickets`.`seat_number`
from `tickets` inner join `users` on `users`.`id` = `tickets`.`user` and `train`=11
order by `seat_number`;

--2--
select `users`.`id`, `users`.`name`, count(*) as `trains_count`, sum(`trains`.`distance`)/10 as `total_distance`
from `users` inner join `tickets` on `users`.`id`=`tickets`.`user`
    inner join `trains` on `trains`.`id`=`tickets`.`train`
group by `users`.`id`
order by `total_distance` desc
limit 6;

--3--
select `trains`.`id`, `types`.`name` as `type`, `src`.`name` as `src_stn`, `dst`.`name` as `dsc_stn`, timediff(`arrival`, `departure`) as `travel_time`
from `trains` inner join `types` on `types`.`id`=`trains`.`type`
    inner join `stations` as `src` on `src`.`id`=`trains`.`source`
    inner join `stations` as `dst` on `dst`.`id`=`trains`.`destination`
order by `travel_time` desc
limit 6;

--4--
select `trains`.`id`, `types`.`name` as `type`, `src`.`name` as `src_stn`, `dst`.`name` as `dec_stn`, `trains`.`departure`, `trains`.`arrival`, `trains`.`distance`