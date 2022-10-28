CREATE TABLE `student` (
    `name` VARCHAR(20) NOT NULL,
    `id` CHAR(10) NOT NULL AUTO_INCREMENT,
    `admission_year` INT NOT NULL,
    `major` VARCHAR(20) NOT NULL,
    `phone_number` VARCHAR(11) NOT NULL,
    `address` VARCHAR(60) NOT NULL,
    `credit_all` INT NOT NULL,
    `credit_avg` DOUBLE NOT NULL,
    `in_school` TINYINT(1)   NOT NULL,
    PRIMARY KEY(`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;