-- phpMyAdmin SQL Dump
-- version 4.1.4
-- http://www.phpmyadmin.net
--
-- Client :  127.0.0.1
-- Généré le :  Dim 20 Octobre 2024 à 17:40
-- Version du serveur :  5.6.15-log
-- Version de PHP :  5.4.24

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de données :  `cinema`
--

-- --------------------------------------------------------

--
-- Structure de la table `acteur`
--

CREATE TABLE IF NOT EXISTS `acteur` (
  `acteur_ID` int(60) NOT NULL,
  `Nom` varchar(60) NOT NULL,
  `Prénom` varchar(60) NOT NULL,
  `date_naissence` date NOT NULL,
  `nb_film` int(60) NOT NULL,
  PRIMARY KEY (`acteur_ID`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Contenu de la table `acteur`
--

INSERT INTO `acteur` (`acteur_ID`, `Nom`, `Prénom`, `date_naissence`, `nb_film`) VALUES
(1, 'DURIS', 'Romain', '1974-05-28', 60),
(2, 'EXARCHOPOULOS', 'ADELE', '1993-11-22', 23),
(3, 'BORHINGER', 'RICHARD', '1942-06-16', 132),
(4, 'GALABRU', 'MICHEL', '1922-10-27', 277),
(5, 'PARILLAUD', 'ANNE', '1960-05-06', 35),
(6, 'FORD', 'HARRISON', '1942-06-13', 64),
(7, 'FISHER', 'CARRIE', '1956-10-21', 74),
(8, 'SALDANA', 'ZOE', '1978-06-19', 31),
(9, 'WEAVER', 'SIGOURNEY ', '1949-10-08', 66),
(10, 'RENO', 'JEAN', '1948-06-30', 75);

-- --------------------------------------------------------

--
-- Structure de la table `casting`
--

CREATE TABLE IF NOT EXISTS `casting` (
  `film_ID` int(60) NOT NULL,
  `acteur_ID` int(60) NOT NULL,
  `role` varchar(60) NOT NULL,
  `nb_jour_tourner` int(60) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Contenu de la table `casting`
--

INSERT INTO `casting` (`film_ID`, `acteur_ID`, `role`, `nb_jour_tourner`) VALUES
(1, 1, 'François', 100),
(1, 2, 'JULIA', 100),
(2, 5, 'NIKITA', 68),
(2, 10, 'VICTORE LE NETTOYEUR', 9),
(3, 6, 'HAN SOLO', 201),
(3, 7, 'PRINCESSE LEIA', 203),
(4, 8, 'NEYTIRI', 50),
(4, 9, 'Dr. Grace augustine ', 45);

-- --------------------------------------------------------

--
-- Structure de la table `distributeur`
--

CREATE TABLE IF NOT EXISTS `distributeur` (
  `distributeur_ID` int(60) NOT NULL,
  `distributeur` varchar(60) NOT NULL,
  `Pays_ID` int(60) NOT NULL,
  PRIMARY KEY (`distributeur_ID`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Contenu de la table `distributeur`
--

INSERT INTO `distributeur` (`distributeur_ID`, `distributeur`, `Pays_ID`) VALUES
(1, 'GAUMONGT', 1),
(2, '20th Century', 2);

-- --------------------------------------------------------

--
-- Structure de la table `film`
--

CREATE TABLE IF NOT EXISTS `film` (
  `film_ID` int(60) NOT NULL,
  `titre` varchar(60) NOT NULL,
  `genre1` varchar(60) NOT NULL,
  `genre2` varchar(60) DEFAULT NULL,
  `date_de_sortie` date NOT NULL,
  `realisateur_ID` int(60) NOT NULL,
  `distributeur_ID` int(60) NOT NULL,
  `dure` int(60) NOT NULL,
  PRIMARY KEY (`film_ID`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Contenu de la table `film`
--

INSERT INTO `film` (`film_ID`, `titre`, `genre1`, `genre2`, `date_de_sortie`, `realisateur_ID`, `distributeur_ID`, `dure`) VALUES
(1, 'SUBWAY', 'DRAME', 'ROMENTIQUE', '1985-04-10', 1, 1, 104),
(2, 'NIKITA', 'DRAME', 'ROMENTIQUE', '1990-02-21', 1, 1, 118),
(3, 'star warz', 'action', 'SF', '1983-10-19', 2, 2, 133),
(4, 'Avatar', 'action', 'SF', '2009-10-16', 3, 2, 170);

-- --------------------------------------------------------

--
-- Structure de la table `pays`
--

CREATE TABLE IF NOT EXISTS `pays` (
  `Pays_ID` int(11) NOT NULL,
  `Libelle` varchar(60) NOT NULL,
  PRIMARY KEY (`Pays_ID`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Contenu de la table `pays`
--

INSERT INTO `pays` (`Pays_ID`, `Libelle`) VALUES
(1, 'France'),
(2, 'USA');

-- --------------------------------------------------------

--
-- Structure de la table `réalisateur`
--

CREATE TABLE IF NOT EXISTS `réalisateur` (
  `realisateur_ID` int(60) NOT NULL,
  `Nom` varchar(60) NOT NULL,
  `Prénom` varchar(60) NOT NULL,
  `date_naissence` date NOT NULL,
  `nb_film_ecrit` int(60) NOT NULL,
  `nb_film_produit` int(60) NOT NULL,
  PRIMARY KEY (`realisateur_ID`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Contenu de la table `réalisateur`
--

INSERT INTO `réalisateur` (`realisateur_ID`, `Nom`, `Prénom`, `date_naissence`, `nb_film_ecrit`, `nb_film_produit`) VALUES
(1, 'BASSON', 'LUC', '1959-03-18', 40, 99),
(2, 'LUCAS', 'GEORGES', '1944-05-14', 79, 64),
(3, 'CAMERON', 'JAMES', '1954-08-16', 22, 23);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
