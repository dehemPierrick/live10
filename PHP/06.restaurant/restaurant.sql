-- MySQL dump 10.13  Distrib 5.7.14, for Win64 (x86_64)
--
-- Host: localhost    Database: restaurant
-- ------------------------------------------------------
-- Server version	5.7.14

/*!40101 SET @OLD_CHARACTER_SET_CLIENT = @@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS = @@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION = @@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE = @@TIME_ZONE */;
/*!40103 SET TIME_ZONE = '+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS = @@UNIQUE_CHECKS, UNIQUE_CHECKS = 0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS = @@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS = 0 */;
/*!40101 SET @OLD_SQL_MODE = @@SQL_MODE, SQL_MODE = 'NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES = @@SQL_NOTES, SQL_NOTES = 0 */;

--
-- Table structure for table `bookings`
--

DROP TABLE IF EXISTS `bookings`;
/*!40101 SET @saved_cs_client = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `bookings` (
  `Id`          INT(11)         NOT NULL AUTO_INCREMENT,
  `Customer_Id` INT(10)         NOT NULL,
  `BookingDate` DATETIME        NOT NULL,
  `Quantity`    INT(2) UNSIGNED NOT NULL,
  PRIMARY KEY (`Id`),
  KEY `booking_customers_Id_fk` (`Customer_Id`)
)
  ENGINE = MyISAM
  AUTO_INCREMENT = 3
  DEFAULT CHARSET = utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bookings`
--

LOCK TABLES `bookings` WRITE;
/*!40000 ALTER TABLE `bookings`
  DISABLE KEYS */;
INSERT INTO `bookings` VALUES (1, 1, '2018-11-08 11:45:00', 8), (2, 1, '2018-11-08 11:45:00', 8);
/*!40000 ALTER TABLE `bookings`
  ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customers`
--

DROP TABLE IF EXISTS `customers`;
/*!40101 SET @saved_cs_client = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `customers` (
  `Id`           INT(11)      NOT NULL AUTO_INCREMENT,
  `FirstName`    VARCHAR(32)  NOT NULL,
  `LastName`     VARCHAR(32)  NOT NULL,
  `Phone`        CHAR(10)     NOT NULL,
  `Email`        VARCHAR(64)  NOT NULL,
  `Password`     VARCHAR(64)  NOT NULL,
  `Address`      VARCHAR(128) NOT NULL,
  `City`         VARCHAR(64)  NOT NULL,
  `ZipCode`      CHAR(5)      NOT NULL,
  `RegisterDate` DATETIME     NOT NULL,
  PRIMARY KEY (`Id`),
  UNIQUE KEY `Email` (`Email`)
)
  ENGINE = InnoDB
  AUTO_INCREMENT = 7
  DEFAULT CHARSET = utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customers`
--

LOCK TABLES `customers` WRITE;
/*!40000 ALTER TABLE `customers`
  DISABLE KEYS */;
INSERT INTO `customers` VALUES
  (1, 'DEDOBBELER', 'Alan', '3351634541', 'aaaa', '$2y$11$c3e87b409637b1c293795eDgJkXhzZr0JgOEP4W9yTQNR24TMNESy',
   '7 Chome 9-2 Quattro room 101, Shinjuku ku', 'Shinjuku', '16012', '2018-11-06 01:06:46'),
  (4, 'bbbb', 'bbbb', 'bbbb', 'bbbb', '$2y$11$ac6e4286b0ebff3e13f3dONH1ii.vA0VTPefScckSF1460Y8h2UPO', 'bbbb', 'bbbb',
   '0', '2018-11-07 23:39:43'),
  (5, 'bbbb', 'bbbb', 'bbbb', 'cccc', '$2y$11$5746fd29033b8be7f9706ugyP3jXWO/NmHUFCqnfAW5rL2heujH.O', 'bbbb', 'bbbb',
   '0', '2018-11-07 23:42:20'),
  (6, 'qsc', 'qsc', '12345612', 'qsc@csq.csq', '$2y$11$269360175a9123da3d153uvWOgtvp4PKbsnF8/EjAR8SQF/XtjjDe', '', '',
   '12345', '2018-11-09 00:47:36');
/*!40000 ALTER TABLE `customers`
  ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `meals`
--

DROP TABLE IF EXISTS `meals`;
/*!40101 SET @saved_cs_client = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `meals` (
  `Id`              INT(11)     NOT NULL AUTO_INCREMENT,
  `Name`            VARCHAR(64) NOT NULL,
  `Description`     TEXT        NOT NULL,
  `Photo`           VARCHAR(32) NOT NULL,
  `QuantityInStock` INT(5)      NOT NULL,
  `BuyPrice`        DOUBLE      NOT NULL,
  `SalePrice`       DOUBLE      NOT NULL,
  PRIMARY KEY (`Id`)
)
  ENGINE = InnoDB
  AUTO_INCREMENT = 8
  DEFAULT CHARSET = utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `meals`
--

LOCK TABLES `meals` WRITE;
/*!40000 ALTER TABLE `meals`
  DISABLE KEYS */;
INSERT INTO `meals` VALUES
  (1, 'Coca-Cola', 'Mmmm, le Coca-Cola avec 10 morceaux de sucres et tout plein de caféine !', 'coca.jpg', 1, 0.6, 3),
  (2, 'Bagel Thon',
   'Notre bagel est constitué d\'un pain moelleux avec des grains de sésame et du thon albacore, accompagné de feuilles de salade fraîche du jour  et d\'une sauce renversante :-)',
   'bagel_thon.jpg', -16, 2.75, 5.5), (3, 'Bacon Cheeseburger',
                                       'Ce délicieux cheeseburger contient un steak haché viande française de 150g ainsi que d\'un buns grillé juste comme il faut, le tout accompagné de frites fraîches maison !',
                                       'bacon_cheeseburger.jpg', 13, 6, 12.5), (4, 'Carrot Cake',
                                                                                'Le carrot cake maison ravira les plus gourmands et les puristes : tous les ingrédients sont naturels !\r\nÀ consommer sans modération',
                                                                                'carrot_cake.jpg', 9, 3, 6.75),
  (5, 'Donut Chocolat',
   'Les donuts sont fabriqués le matin même et sont recouvert d\'une délicieuse sauce au chocolat !',
   'chocolate_donut.jpg', 16, 3, 6.2),
  (6, 'Dr. Pepper', 'Son goût sucré avec de l\'amande vous ravira !', 'drpepper.jpg', 12, 0.5, 2.9), (7, 'Milkshake',
                                                                                                      'Notre milkshake bien crémeux contient des morceaux d\'Oréos et est accompagné de crème chantilly et de smarties en guise de topping. Il éblouira vos papilles !',
                                                                                                      'milkshake.jpg',
                                                                                                      12, 2, 5.35);
/*!40000 ALTER TABLE `meals`
  ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orderdetails`
--

DROP TABLE IF EXISTS `orderdetails`;
/*!40101 SET @saved_cs_client = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `orderdetails` (
  `Id`        INT(11) NOT NULL AUTO_INCREMENT,
  `Meal_Id`   INT(11) NOT NULL,
  `Order_Id`  INT(11) NOT NULL,
  `Quantity`  INT(4)  NOT NULL,
  `PriceEach` DOUBLE  NOT NULL,
  PRIMARY KEY (`Id`),
  KEY `Meal_Id` (`Meal_Id`),
  KEY `Order_Id` (`Order_Id`)
)
  ENGINE = InnoDB
  DEFAULT CHARSET = utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orderdetails`
--

LOCK TABLES `orderdetails` WRITE;
/*!40000 ALTER TABLE `orderdetails`
  DISABLE KEYS */;
/*!40000 ALTER TABLE `orderdetails`
  ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `orders` (
  `Id`          INT(11)     NOT NULL AUTO_INCREMENT,
  `Amount`      DOUBLE      NOT NULL,
  `OrderDate`   DATETIME    NOT NULL,
  `Status`      VARCHAR(32) NOT NULL,
  `Customer_Id` INT(11)     NOT NULL,
  PRIMARY KEY (`Id`)
)
  ENGINE = InnoDB
  DEFAULT CHARSET = utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders`
  DISABLE KEYS */;
/*!40000 ALTER TABLE `orders`
  ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE = @OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE = @OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS = @OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS = @OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT = @OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS = @OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION = @OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES = @OLD_SQL_NOTES */;

-- Dump completed on 2018-11-14 23:08:53
