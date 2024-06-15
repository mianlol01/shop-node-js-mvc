CREATE DATABASE BasicDB

USE BasicDB

CREATE TABLE Category (
id_category INT PRIMARY KEY IDENTITY NOT NULL, 
name_category NVARCHAR(100) NOT NULL)

CREATE TABLE Product (
    id_product INT PRIMARY KEY IDENTITY,
    name_product NVARCHAR(100) NOT NULL,
    stock INT NOT NULL DEFAULT 0,
	category_producto INT NOT NULL FOREIGN KEY REFERENCES Category(id_category), 
    price DECIMAL(18, 2) NOT NULL
);

INSERT INTO Category (name_category) VALUES ('Electronics');
INSERT INTO Category (name_category) VALUES ('Books');
INSERT INTO Category (name_category) VALUES ('Clothing');
INSERT INTO Category (name_category) VALUES ('Home & Kitchen');
INSERT INTO Category (name_category) VALUES ('Sports & Outdoors');
INSERT INTO Category (name_category) VALUES ('Toys & Games');
INSERT INTO Category (name_category) VALUES ('Health & Personal Care');
INSERT INTO Category (name_category) VALUES ('Automotive');
INSERT INTO Category (name_category) VALUES ('Beauty');
INSERT INTO Category (name_category) VALUES ('Groceries');

INSERT INTO Product (name_product, stock, category_producto, price) VALUES ('Smartphone', 50, 1, 699.99);
INSERT INTO Product (name_product, stock, category_producto, price) VALUES ('Laptop', 30, 1, 999.99);
INSERT INTO Product (name_product, stock, category_producto, price) VALUES ('Novel', 100, 2, 19.99);
INSERT INTO Product (name_product, stock, category_producto, price) VALUES ('T-shirt', 200, 3, 9.99);
INSERT INTO Product (name_product, stock, category_producto, price) VALUES ('Headphones', 75, 1, 49.99);