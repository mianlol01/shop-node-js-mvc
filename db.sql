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
-- Electronics
INSERT INTO Product (name_product, stock, category_producto, price) VALUES ('Smartwatch', 40, 1, 199.99);
INSERT INTO Product (name_product, stock, category_producto, price) VALUES ('Tablet', 25, 1, 499.99);
INSERT INTO Product (name_product, stock, category_producto, price) VALUES ('Camera', 15, 1, 299.99);

-- Books
INSERT INTO Product (name_product, stock, category_producto, price) VALUES ('Science Fiction Book', 80, 2, 24.99);
INSERT INTO Product (name_product, stock, category_producto, price) VALUES ('History Book', 60, 2, 29.99);
INSERT INTO Product (name_product, stock, category_producto, price) VALUES ('children''s book', 120, 2, 14.99);

-- Clothing
INSERT INTO Product (name_product, stock, category_producto, price) VALUES ('Jeans', 150, 3, 39.99);
INSERT INTO Product (name_product, stock, category_producto, price) VALUES ('Jacket', 90, 3, 59.99);
INSERT INTO Product (name_product, stock, category_producto, price) VALUES ('Sneakers', 110, 3, 49.99);

-- Home & Kitchen
INSERT INTO Product (name_product, stock, category_producto, price) VALUES ('Blender', 50, 4, 89.99);
INSERT INTO Product (name_product, stock, category_producto, price) VALUES ('Coffee Maker', 70, 4, 79.99);
INSERT INTO Product (name_product, stock, category_producto, price) VALUES ('Cookware Set', 30, 4, 129.99);

-- Sports & Outdoors
INSERT INTO Product (name_product, stock, category_producto, price) VALUES ('Yoga Mat', 60, 5, 19.99);
INSERT INTO Product (name_product, stock, category_producto, price) VALUES ('Dumbbells', 40, 5, 39.99);
INSERT INTO Product (name_product, stock, category_producto, price) VALUES ('Bicycle', 20, 5, 299.99);

-- Toys & Games
INSERT INTO Product (name_product, stock, category_producto, price) VALUES ('Board Game', 50, 6, 29.99);
INSERT INTO Product (name_product, stock, category_producto, price) VALUES ('Action Figure', 70, 6, 19.99);
INSERT INTO Product (name_product, stock, category_producto, price) VALUES ('Puzzle', 90, 6, 14.99);

-- Health & Personal Care
INSERT INTO Product (name_product, stock, category_producto, price) VALUES ('Vitamins', 100, 7, 24.99);
INSERT INTO Product (name_product, stock, category_producto, price) VALUES ('Shampoo', 80, 7, 9.99);
INSERT INTO Product (name_product, stock, category_producto, price) VALUES ('Toothbrush', 120, 7, 4.99);

-- Automotive
INSERT INTO Product (name_product, stock, category_producto, price) VALUES ('Car Wax', 50, 8, 14.99);
INSERT INTO Product (name_product, stock, category_producto, price) VALUES ('Tire Inflator', 30, 8, 39.99);
INSERT INTO Product (name_product, stock, category_producto, price) VALUES ('Car Cover', 20, 8, 59.99);

-- Beauty
INSERT INTO Product (name_product, stock, category_producto, price) VALUES ('Lipstick', 70, 9, 19.99);
INSERT INTO Product (name_product, stock, category_producto, price) VALUES ('Foundation', 60, 9, 29.99);
INSERT INTO Product (name_product, stock, category_producto, price) VALUES ('Perfume', 40, 9, 49.99);

-- Groceries
INSERT INTO Product (name_product, stock, category_producto, price) VALUES ('Organic Apples', 100, 10, 2.99);
INSERT INTO Product (name_product, stock, category_producto, price) VALUES ('Almond Milk', 80, 10, 3.99);
INSERT INTO Product (name_product, stock, category_producto, price) VALUES ('Pasta', 150, 10, 1.99);