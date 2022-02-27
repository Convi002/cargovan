-- phpMyAdmin SQL Dump
-- version 4.9.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Feb 22, 2022 at 06:33 AM
-- Server version: 5.7.26
-- PHP Version: 7.4.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `eclogistics`
--

--
-- Dumping data for table `novedades`
--

INSERT INTO `novedades` (`id`, `titulo`, `subtitulo`, `cuerpo`, `img_id`) VALUES
(1, 'Ultrack to purchase Power Moves Transport fleet', '', 'Ultrack Systems, a business that provides GPS tracking and monitoring solutions, has signed a memorandum of understanding to purchase Power Moves Transport.\r\n\r\nPower Moves Transport has a solid track record in the business of shipping cars throughout the U.S., Ultrac said.\r\n\r\nThe deal is still subject to due diligence and will involve an exchange in shares. A purchase price was not revealed.\r\n\r\n\r\nUltrack logo\r\n“This important 100% acquisition of a seasoned U.S.A. trucking company immediately adds value to Ultrack’s bottom line while expanding our corporate reach into likeminded horizontal markets,” said Ultrack CEO Michael Marsbergen.\r\n\r\n“Furthermore, this acquisition immediately expands Ultrack’s footprint into strategic USA locations so that Ultrack can be thought of more as a ‘North American’ company and not simply a ‘Canadian’ company.”\r\n\r\nUltrack Systems, located in Concord, Ont., is a publicly traded company that develops and distributes monitoring and tracking systems for leasing, transportation, construction, and disposal businesses.\r\n\r\nIt also plans to launch an electronic logging device in 2022.', NULL),
(2, 'Ontario to remove tolls on Hwy. 412 and 418', '', 'Ontario is eliminating tolls on highways 412 and 418 that run between highways 401 and 407 in Durham Region.\r\n\r\n“Some things don’t happen overnight but at the end of the day these tolls are gone,” Ontario Premier Doug Ford said when announcing the change to be effective April 5.\r\nThe two highways represented the only tolled north-south highways in the province. Durham Region Chairman John Henry and mayors from within the region have been among those advocating for the tolls to be removed.\r\n\r\n\r\n“The previous government unfairly targeted drivers and businesses in Durham Region by imposing tolls on Highway 412 and 418, leaving them underutilized while local streets became increasingly gridlocked,” said Transportation Minister Caroline Mulroney. “As we move forward with new highways, our government has been clear that we will not repeat the mistakes of the past and impose these types of cost burdens on Ontarians.”\r\n\r\nBut toll rates on the privately held and operated Hwy. 407 remain unaffected.\r\n\r\nThe 407 itself saw an 8% increase in traffic compared to 2020.\r\n\r\nThe privately held 407 toll route collected just over a billion in revenue in 2021, compared to $908 million in 2020, leaving 407 International with $212.4 million in net revenue. Earnings before interest and other taxes, depreciation and amortization totaled $859 million in 2021.\r\n\r\n\r\n\r\nHave your say\r\n\r\nThis is a moderated forum. Comments will no longer be published unless they are accompanied by a first and last name and a verifiable email address. (Today\'s Trucking will not publish or share the email address.) Profane language and content deemed to be libelous, racist, or threatening in nature will not be published under any circumstances.', NULL),
(9, 'dsadsa', 'dsadsa', 'dsadsadsa', 'mxuwbe2lfqqvp8tccmhv'),
(10, 'fdasfdsa', 'fdasfdsa', 'fdsafdsafadfa', 'labxc4qwpj607dpuf8u3'),
(11, 'hola11222', 'hola11222', 'hola11222', 'af8b0ueodtxkokjmzxrl');

--
-- Dumping data for table `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `password`) VALUES
(1, 'Maria', '81dc9bdb52d04dc20036dbd8313ed055');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
