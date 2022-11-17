-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 29, 2022 at 01:14 AM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ucanteen`
--

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int(10) NOT NULL,
  `buyer_id` int(10) DEFAULT NULL,
  `seller_id` int(10) DEFAULT NULL,
  `order_id` int(10) DEFAULT NULL,
  `order_status` varchar(10) DEFAULT NULL,
  `order_accept_time` timestamp NULL DEFAULT NULL,
  `scheduled_time` timestamp NULL DEFAULT NULL,
  `product_name` text NOT NULL,
  `qty` int(11) NOT NULL,
  `price` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `product_id` int(10) NOT NULL,
  `shop_id` int(10) DEFAULT NULL,
  `product_name` varchar(30) DEFAULT NULL,
  `image_link` text DEFAULT NULL,
  `description` text NOT NULL,
  `quantity` int(10) DEFAULT NULL,
  `category` varchar(20) DEFAULT NULL,
  `price` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`product_id`, `shop_id`, `product_name`, `image_link`, `description`, `quantity`, `category`, `price`) VALUES
(1, 3, 'Borgir', '/images/burger.jpeg', 'IT IS BORGIR', 2, 'Burger', 180),
(2, 3, 'Pizza', '/images/pizza.jpeg', 'IT IS pizzzaaaa', 2, 'Pizza', 500),
(3, 4, 'Borgir', '/images/burger2.jpeg', 'IT IS BORGIR', 2, 'Burger', 280),
(4, 4, 'Pizza', '/images/pizza2.jpeg', 'IT IS pizzzaaaaa', 2, 'Pizza', 600),
(5, 3, 'Pasta', '/images/productPic-1664244030054.jpg', 'its pastaaaaaa', NULL, NULL, 299),
(6, 3, 'Pastaa', '/images/productPic-1664245968717.jpg', 'its pastaaaaaa', NULL, NULL, 299),
(7, 4, 'Special Pasta', '/images/productPic-1664246591758.jpg', 'Yummy pasta', NULL, NULL, 389),
(8, 3, 'Club Sandwich', '/images/productPic-1664405278549.jpg', 'Made with egg chicken and bread', NULL, NULL, 25);

-- --------------------------------------------------------

--
-- Table structure for table `user_info`
--

CREATE TABLE `user_info` (
  `user_id` int(10) NOT NULL,
  `user_name` varchar(10) DEFAULT NULL,
  `pass` text DEFAULT NULL,
  `first_name` varchar(20) DEFAULT NULL,
  `last_name` varchar(20) DEFAULT NULL,
  `user_type` varchar(10) DEFAULT NULL,
  `image_link` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user_info`
--

INSERT INTO `user_info` (`user_id`, `user_name`, `pass`, `first_name`, `last_name`, `user_type`, `image_link`) VALUES
(1, '011181013', '1234', 'Nova', 'Azad', 'student', ''),
(2, '011182100', '1234', 'K.M Zawad', 'Monsur', 'student', ''),
(3, 'Khans', '1234', 'Khans', 'Kitchen', 'vendor', '/images/khans.jpg'),
(4, 'olympia', '1234', 'olympia', 'Kitchen', 'vendor', '/images/olympia.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`product_id`);

--
-- Indexes for table `user_info`
--
ALTER TABLE `user_info`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `product_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `user_info`
--
ALTER TABLE `user_info`
  MODIFY `user_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
