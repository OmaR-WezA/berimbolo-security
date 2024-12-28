-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 28, 2024 at 02:38 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ff`
--

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `customer_name` varchar(255) NOT NULL,
  `customer_email` varchar(255) NOT NULL,
  `customer_address` text NOT NULL,
  `total_amount` decimal(10,2) NOT NULL,
  `order_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `customer_name`, `customer_email`, `customer_address`, `total_amount`, `order_date`) VALUES
(1, '‪Omar Fahem‬‏', 'omarfahem11@gmail.com', 'محمد سلام, المطريه, 11753, Egypt', 299.99, '2024-12-23 20:24:52'),
(2, '‪Omar Fahem‬‏', 'omarfahem11@gmail.com', 'محمد سلام, المطريه, 11753, Egypt', 199.99, '2024-12-23 20:26:20'),
(3, '‪Omar Fahem weza‬‏', 'omarfahem11@gmail.com', 'محمد سلام, المطريه, 11753, Egypt', 49.99, '2024-12-23 20:30:18'),
(4, '‪Omar Fahem‬‏', 'omarfahem11@gmail.com', 'محمد سلام, المطريه, 11753, Egypt', 99.99, '2024-12-23 20:32:15'),
(5, '‪Omar weza‬‏', 'omarfahem11@gmail.com', 'naxs, المطريه, 11753, Egypt', 129.99, '2024-12-23 20:42:16'),
(6, 'قسليبرؤ', 'omarfahem11@gmail.com', 'لسبل, المطريه, 11753, Egypt', 49.99, '2024-12-23 21:08:42'),
(7, 'weza', '1234@gmail.com', 'weza, weza, weza, weza', 129.99, '2024-12-23 21:31:34'),
(8, 'we', '1234@gmail.com', 'we, we, we, we', 1999.90, '2024-12-23 21:34:27'),
(9, '‪Omar Fahem‬‏', 'omarfahem11@gmail.com', 'محمد سلام, المطريه, 11753, Egypt', 129.99, '2024-12-28 14:17:29'),
(10, '‪Omar Fahem‬‏', 'omarfahem11@gmail.com', 'محمد سلام, المطريه, 11753, Egypt', 129.99, '2024-12-28 14:19:39');

-- --------------------------------------------------------

--
-- Table structure for table `order_items`
--

CREATE TABLE `order_items` (
  `id` int(11) NOT NULL,
  `order_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `product_name` varchar(255) NOT NULL,
  `quantity` int(11) NOT NULL,
  `price` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `order_items`
--

INSERT INTO `order_items` (`id`, `order_id`, `product_id`, `product_name`, `quantity`, `price`) VALUES
(1, 1, 6, 'Security System Hub', 1, 299.99),
(2, 2, 11, 'Security Camera with AI', 1, 199.99),
(3, 3, 7, 'Smart Light Bulb', 1, 49.99),
(4, 4, 16, 'Smart Smoke Detector', 1, 99.99),
(5, 5, 2, 'HD Security Camera', 1, 129.99),
(6, 6, 3, 'Motion Sensor', 1, 49.99),
(7, 7, 2, 'HD Security Camera', 1, 129.99),
(8, 8, 1, 'Smart Door Lock', 10, 199.99),
(9, 9, 2, 'HD Security Camera', 1, 129.99),
(10, 10, 2, 'HD Security Camera', 1, 129.99);

-- --------------------------------------------------------

--
-- Table structure for table `purchases`
--

CREATE TABLE `purchases` (
  `id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `product_name` varchar(255) NOT NULL,
  `quantity` int(11) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `customer_email` varchar(255) NOT NULL,
  `purchase_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `purchases`
--

INSERT INTO `purchases` (`id`, `product_id`, `product_name`, `quantity`, `price`, `customer_email`, `purchase_date`) VALUES
(1, 1, 'Smart Door Lock', 1, 199.99, 'customer@example.com', '2024-12-23 20:19:52'),
(2, 3, 'Motion Sensor', 1, 49.99, 'customer@example.com', '2024-12-23 20:20:15'),
(3, 5, 'Window Sensor', 1, 39.99, 'customer@example.com', '2024-12-23 20:21:50'),
(4, 1, 'Smart Door Lock', 1, 199.99, 'customer@example.com', '2024-12-23 20:22:04'),
(5, 1, 'Smart Door Lock', 1, 199.99, 'customer@example.com', '2024-12-23 20:23:55'),
(6, 6, 'Security System Hub', 1, 299.99, 'customer@example.com', '2024-12-23 20:24:17'),
(7, 11, 'Security Camera with AI', 1, 199.99, 'customer@example.com', '2024-12-23 20:26:04');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`, `created_at`) VALUES
(1, 'weza', 'omarfahem11@gmail.com', '$2a$10$Q5HOP5YmIaqMtNPU.x2bAOtOtsws6.d3dKOJo9NuoRxf6AmVFwNz6', '2024-12-23 18:41:49'),
(2, 'u2', '1234@gmail.com', '$2a$10$Yx6/f87gvzRa.Ji5H58nCOrLlqsg3XIzMI7zYCmxxWJDdzhEQMIky', '2024-12-23 18:55:32');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `order_items`
--
ALTER TABLE `order_items`
  ADD PRIMARY KEY (`id`),
  ADD KEY `order_id` (`order_id`);

--
-- Indexes for table `purchases`
--
ALTER TABLE `purchases`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `order_items`
--
ALTER TABLE `order_items`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `purchases`
--
ALTER TABLE `purchases`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `order_items`
--
ALTER TABLE `order_items`
  ADD CONSTRAINT `order_items_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
