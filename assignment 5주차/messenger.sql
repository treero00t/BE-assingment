 CREATE TABLE `users` (
    id INT PRIMARY KEY,
    user_id VARCHAR(50) NOT NULL,
    user_password VARCHAR(100) NOT NULL,
    nickname VARCHAR(50) NOT NULL,
    profile_pic_url TEXT,
    status_message VARCHAR(100) NOT NULL,
    is_withdrawn BOOLEAN DEFAULT 0,
    enroll_date DATETIME

 ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
 CREATE TABLE `channels` (
    id INT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    creator_id INT NOT NULL,
    channel_url TEXT,
    capacity INT,
    is_withdrawn BOOLEAN DEFAULT 0,
    created_date DATETIME,
    FOREIGN KEY (creator_id) REFERENCES users(id)

 ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
  CREATE TABLE `chats` (
    id INT PRIMARY KEY,
    content TEXT NOT NULL,
    sender_id INT NOT NULL,
    channel_id INT NOT NULL,
    chat_created_date DATETIME,
    FOREIGN KEY (sender_id) REFERENCES users(id),
    FOREIGN KEY (channel_id) REFERENCES channels(id)
 ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
  CREATE TABLE `follows` (
    id INT PRIMARY KEY,
    follower INT NOT NULL,
    followee INT NOT NULL,
    follw_date DATETIME,
    FOREIGN KEY (follower) REFERENCES users(id),
    FOREIGN KEY (followee) REFERENCES users(id)
 ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
 CREATE TABLE `blocks` (
    id INT PRIMARY KEY,
    blocker INT NOT NULL,
    blockee INT NOT NULL,
    block_date DATETIME,
    FOREIGN KEY (blocker) REFERENCES users(id),
    FOREIGN KEY (blockee) REFERENCES users(id)
 ) ENGINE=InnoDB DEFAULT CHARSET=utf8;