DROP DATABASE IF EXISTS wasteNot_db;
CREATE DATABASE wasteNot_db;
USE wasteNot_db;


CREATE TABLE drivers (
    driver_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    driver_name VARCHAR(30) NOT NULL
);