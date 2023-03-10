DROP DATABASE IF EXISTS music_db;
CREATE DATABASE music_db;

USE DATABASE music_db;

CREATE TABLE users (
    email VARCHAR(200) PRIMARY KEY,
    password VARCHAR(200) NOT NULL
);

CREATE TABLE playlists (
    playlist_id INT PRIMARY KEY AUTO_INCREMENT,
    playlist_name VARCHAR(200) NOT NULL, 
    user_id INT NOT NULL,
    description VARCHAR(250),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);