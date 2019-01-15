DROP DATABASE IF EXISTS wasteNot_db;
CREATE DATABASE wasteNot_db;
USE wasteNot_db;

CREATE TABLE customer_requests (
    request_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    customer_name VARCHAR(30) NOT NULL,
    item_name VARCHAR(30) NOT NULL,
    estimated_weight INT NOT NULL,
    item_location VARCHAR(100) NOT NULL,
    request_status NOT NULL BOOLEAN DEFAULT FALSE,
    drivers_id INT
);

CREATE TABLE drivers (
    driver_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    driver_name VARCHAR(30) NOT NULL
);