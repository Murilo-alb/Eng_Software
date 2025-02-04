mysqlmysqlmysqlmysql-- --------------------------------------------------------
-- Servidor:                     127.0.0.1
-- Versão do servidor:           10.4.32-MariaDB - mariadb.org binary distribution
-- OS do Servidor:               Win64
-- HeidiSQL Versão:              12.7.0.6850
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Copiando estrutura do banco de dados para website
DROP DATABASE IF EXISTS `website`;
CREATE DATABASE IF NOT EXISTS `website` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;
USE `website`;

-- Copiando estrutura para tabela website.alunos
DROP TABLE IF EXISTS `alunos`;
CREATE TABLE IF NOT EXISTS `alunos` (
  `Cod_aluno` int(11) NOT NULL AUTO_INCREMENT,
  `Nome_aluno` varchar(50) DEFAULT NULL,
  `Tempoquiz_aluno` varchar(50) DEFAULT NULL,
  `Tempomemoria_aluno` int(3) DEFAULT NULL,
  PRIMARY KEY (`Cod_aluno`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- Copiando dados para a tabela website.alunos: ~1 rows (aproximadamente)
DELETE FROM `alunos`;
INSERT INTO `alunos` (`Cod_aluno`, `Nome_aluno`, `Tempoquiz_aluno`, `Tempomemoria_aluno`) VALUES
	(1, 'Thales', '150', 5);

-- Copiando estrutura para tabela website.professor
DROP TABLE IF EXISTS `professor`;
CREATE TABLE IF NOT EXISTS `professor` (
  `Cod_prof` int(11) NOT NULL AUTO_INCREMENT,
  `Login_prof` varchar(50) DEFAULT NULL,
  `Senha_prof` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`Cod_prof`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Copiando dados para a tabela website.professor: ~1 rows (aproximadamente)
DELETE FROM `professor`;
INSERT INTO `professor` (`Cod_prof`, `Login_prof`, `Senha_prof`) VALUES
	(1, 'admin', 'admin');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
