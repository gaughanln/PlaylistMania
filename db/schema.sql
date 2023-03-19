DROP DATABASE IF EXISTS music_db;
CREATE DATABASE music_db;


USE music_db;

-- WE WILL ONLY USE THIS TO SOURCE THE SCHEMA. WE WILL NEED TO RECREATE THIS IN THE MODELS TOO?

-- CREATE TABLE users (
--     user_id INT PRIMARY KEY AUTO_INCREMENT,
--     email VARCHAR(50) UNIQUE NOT NULL,
--     password VARCHAR(30) NOT NULL
-- );

-- CREATE TABLE playlists (
--     playlist_id INT PRIMARY KEY AUTO_INCREMENT,
--     playlist_name VARCHAR(30) NOT NULL, 
--     description VARCHAR(250),
--     user_id INT NOT NULL,
--     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--     FOREIGN KEY (user_id) REFERENCES users(user_id)
-- );

-- CREATE TABLE songs (
--     song_id INT PRIMARY KEY AUTO_INCREMENT,
--     title VARCHAR(250) NOT NULL,
--     artist VARCHAR(250) NOT NULL,
--     album VARCHAR(250),
--     duration INT NOT NULL,
--     genre VARCHAR(250),
--     UNIQUE (title, artist)
-- );
