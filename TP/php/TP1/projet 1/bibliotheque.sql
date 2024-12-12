-- phpMyAdmin SQL Dump
-- version 4.1.4
-- http://www.phpmyadmin.net
--
-- Client :  127.0.0.1
-- Généré le :  Lun 02 Décembre 2024 à 15:35
-- Version du serveur :  5.6.15-log
-- Version de PHP :  5.4.24

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de données :  `bibliotheque`
--

-- --------------------------------------------------------

--
-- Structure de la table `adherents`
--

CREATE TABLE IF NOT EXISTS `adherents` (
  `ID_Adherent` varchar(60) NOT NULL,
  `Nom` varchar(60) NOT NULL,
  `Prenom` varchar(60) NOT NULL,
  `Date_naissance` date NOT NULL,
  `Date_adhesion` date NOT NULL,
  `Adresse` varchar(60) NOT NULL,
  `Num_tel` varchar(60) NOT NULL,
  `mail` varchar(60) NOT NULL,
  PRIMARY KEY (`ID_Adherent`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Contenu de la table `adherents`
--

INSERT INTO `adherents` (`ID_Adherent`, `Nom`, `Prenom`, `Date_naissance`, `Date_adhesion`, `Adresse`, `Num_tel`, `mail`) VALUES
('1', 'haddou', 'allya', '2007-01-19', '2023-02-20', 'Montfavet', '07070707', 'allya@gmail.com'),
('2', 'NL', 'Erwann', '2000-05-16', '2021-02-20', 'paris', '0606666', 'Erwann@gmail.com'),
('3', 'James', 'Cristian', '2003-12-24', '2024-02-25', 'paris', '07070707', 'Cristian@gmail.com');

-- --------------------------------------------------------

--
-- Structure de la table `livres`
--

CREATE TABLE IF NOT EXISTS `livres` (
  `Reference_livre` varchar(60) NOT NULL,
  `Nbre_pages` int(60) NOT NULL,
  `ID_Auteur` varchar(60) NOT NULL,
  `Date_publication` date NOT NULL,
  `Genre` varchar(60) NOT NULL,
  `Disponibilité` tinyint(1) NOT NULL,
  `Nbre_emprunts` int(60) NOT NULL,
  `Etat` varchar(60) NOT NULL,
  `Nbre_exemplaire` int(60) NOT NULL,
  PRIMARY KEY (`Reference_livre`),
  KEY `ID_Auteur` (`ID_Auteur`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Contenu de la table `livres`
--

INSERT INTO `livres` (`Reference_livre`, `Nbre_pages`, `ID_Auteur`, `Date_publication`, `Genre`, `Disponibilité`, `Nbre_emprunts`, `Etat`, `Nbre_exemplaire`) VALUES
('One Piece', 208, '1', '1999-10-20', 'shonen', 100, 5, 'bon', 85555),
('codeur', 500, '2', '2018-05-08', 'educatif', 120, 4, 'bon', 50000),
('Komi Can''t Communicate', 192, '3', '2019-07-10', 'romence', 120, 3, 'moins bon', 100);

-- --------------------------------------------------------

--
-- Structure de la table `table auteurs`
--

CREATE TABLE IF NOT EXISTS `table auteurs` (
  `ID_Auteur` varchar(60) NOT NULL,
  `Nom` varchar(60) NOT NULL,
  `Prenom` varchar(60) NOT NULL,
  `Date_naissance` date NOT NULL,
  PRIMARY KEY (`ID_Auteur`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Contenu de la table `table auteurs`
--

INSERT INTO `table auteurs` (`ID_Auteur`, `Nom`, `Prenom`, `Date_naissance`) VALUES
('1', 'echiro', 'Oda', '1975-01-01'),
('2', 'NL', 'Mael', '2005-08-08'),
('3', 'Tomohito', 'Oda', '1991-03-10');

-- --------------------------------------------------------

--
-- Structure de la table `table  emprunts`
--

CREATE TABLE IF NOT EXISTS `table  emprunts` (
  `ID_emprunt` int(60) NOT NULL,
  `Date_emprunt` date NOT NULL,
  `Duree` int(60) NOT NULL,
  `Id_Adherent` varchar(60) NOT NULL,
  `Reference_livre` varchar(60) NOT NULL,
  PRIMARY KEY (`ID_emprunt`),
  KEY `l` (`Id_Adherent`,`Reference_livre`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Contenu de la table `table  emprunts`
--

INSERT INTO `table  emprunts` (`ID_emprunt`, `Date_emprunt`, `Duree`, `Id_Adherent`, `Reference_livre`) VALUES
(1, '2024-02-20', 10, '1', 'Komi Can''t Communicate'),
(2, '2024-02-02', 120, '3', 'One Piece'),
(3, '2024-02-20', 360, '2', 'codeur');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
