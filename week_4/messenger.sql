CREATE TABLE `users` (
    `userid` CHAR(10) NOT NULL AUTO_INCREMENT,
    `userpw` VARCHAR(20) NOT NULL,
    `username` VARCHAR(20) NOT NULL,
    `profile_photo` VARCHAR(100) NOT NULL,
    `profile_bio` VARCHAR(100) NOT NULL,
    `is_retired` TINYINT(1) NOT NULL DEFAULT 0,
    `admission_date` DATETIME NOT NULL,
    PRIMARY KEY(`userid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `channels` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(20) NOT NULL,
    `creator_id` INT NOT NULL,
    `link` VARCHAR(100) NOT NULL,
    `capacity` INT NOT NULL,
    `is_deleted` TINYINT(1) NOT NULL DEFAULT 0,
    `creation_date` DATETIME NOT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`creator_id`) REFERENCES `users`(`userid`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- chats / blocks table code here
CREATE TABLE `chats` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `content` TEXT NOT NULL,
    `sender` INT NOT NULL,
    `channel` INT NOT NULL,
    `date_sent` DATETIME NOT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`sender`) REFERENCES `users`(`userid`) ON DELETE CASCADE,
    FOREIGN KEY (`channel`) REFERENCES `channels`(`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `blocks` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `blocker` INT NOT NULL,
    `blockee` INT NOT NULL,
    `date` DATETIME NOT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`blocker`) REFERENCES `users`(`userid`) ON DELETE CASCADE,
    FOREIGN KEY (`blockee`) REFERENCES `users`(`userid`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `follows` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `follower` INT NOT NULL,
    `followee` INT NOT NULL,
    `date` DATETIME NOT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`follower`) REFERENCES `users`(`userid`) ON DELETE CASCADE,
    FOREIGN KEY (`followee`) REFERENCES `users`(`userid`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
