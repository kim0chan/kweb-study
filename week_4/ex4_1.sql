CREATE TABLE `student` (
    `name` VARCHAR(20) NOT NULL,
    `id` INT NOT NULL AUTO_INCREMENT,
    `admission_year` INT NOT NULL,
    `major` VARCHAR(20) NOT NULL,
    `phone_number` VARCHAR(11) NOT NULL,
    `address` VARCHAR(60) NOT NULL,
    `credit_all` INT NOT NULL DEFAULT 0,
    `credit_avg` DOUBLE NOT NULL DEFAULT 0.0,
    `in_school` TINYINT(1) NOT NULL DEFAULT 1,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;