-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jan 04, 2022 at 10:09 AM
-- Server version: 5.7.24
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
-- Database: `mangas`
--

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `firstname` varchar(45) NOT NULL,
  `lastname` varchar(45) NOT NULL,
  `email` varchar(60) NOT NULL,
  `username` varchar(45) NOT NULL,
  `password` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `firstname`, `lastname`, `email`, `username`, `password`) VALUES
(18, 'Ouwaysou', 'Noblet', 'noblet.ouwaysgta5@gmail.com', 'Dsaquel', '$2y$10$Zrw5LmjB/gAbNg8dIX0Xze.vAXiDjtSckDlDH7hDw85wMhhPx/cYi'),
(19, 'Ouways', 'Noblet', 'noblet.ouwaysgta5@gmail.com', 'Dsaquel', '$2y$10$liNGt97bjW.Cj/74FRoqpev2ipyeHqMlB8WkAEexntRRwmLXW9sIi'),
(21, 'fghfghh', 'hhghg', 'habiba.chahdi@gmail.com', 'tata', '$2y$10$9nILcJdAaeM838DMsuoQaurTe332/kLy4O8B3Co6aIdEtcYhVD5kK'),
(22, 'Brandon', 'Blond', 'dsfsdfdsf@gmail.com', 'BrandonDu93', 'oe'),
(23, 'Brandon', 'Blond', 'dsfsdfdsf', 'BrandonDu93', '$2y$10$vPrX8A26ZaHmR//QP3USo.VDFC//NpWaFtmAaohl5EvdBIlUkCb42');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
