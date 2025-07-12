-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 12, 2025 at 09:34 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `std_wallets`
--

-- --------------------------------------------------------

--
-- Table structure for table `card_history`
--

CREATE TABLE `card_history` (
  `history_id` int(11) NOT NULL,
  `card_number` varchar(20) DEFAULT NULL,
  `action_type` varchar(20) DEFAULT NULL,
  `action_detail` varchar(255) DEFAULT NULL,
  `amount` decimal(10,2) DEFAULT NULL,
  `action_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `student_card_basic`
--

CREATE TABLE `student_card_basic` (
  `student_id` varchar(20) NOT NULL,
  `full_name` varchar(100) DEFAULT NULL,
  `card_number` varchar(20) DEFAULT NULL,
  `balance` double(10,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `student_card_basic`
--

INSERT INTO `student_card_basic` (`student_id`, `full_name`, `card_number`, `balance`) VALUES
('612345', 'ชัชพล กี้เจริญ', 'STD612345', 40.00),
('670911', 'ธนกร ศรีสุข', 'STD670911', 150.00),
('670912', 'ปวีณา จิตสงบ', 'STD670912', 85.50);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `card_history`
--
ALTER TABLE `card_history`
  ADD PRIMARY KEY (`history_id`),
  ADD KEY `card_number` (`card_number`);

--
-- Indexes for table `student_card_basic`
--
ALTER TABLE `student_card_basic`
  ADD PRIMARY KEY (`student_id`),
  ADD UNIQUE KEY `card_number` (`card_number`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `card_history`
--
ALTER TABLE `card_history`
  MODIFY `history_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `card_history`
--
ALTER TABLE `card_history`
  ADD CONSTRAINT `card_history_ibfk_1` FOREIGN KEY (`card_number`) REFERENCES `student_card_basic` (`card_number`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
