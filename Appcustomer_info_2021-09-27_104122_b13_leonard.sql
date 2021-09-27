/*!40101 SET NAMES utf8 */;
/*!40014 SET FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET SQL_NOTES=0 */;
DROP TABLE IF EXISTS Appcustomer_info;
CREATE TABLE `Appcustomer_info` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(100) DEFAULT NULL,
  `userpassword` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4;
INSERT INTO Appcustomer_info(user_id,username,userpassword) VALUES(1,'mchaffyn0','374283328326830'),(2,'tpanton1','345799681775509'),(3,'aeast2','374622624774443'),(4,'haccombe3','337941748231320'),(5,'aalden4','347475488124195'),(6,'mbosward5','378298197677986'),(7,'rocorhane6','376711748182548'),(8,'ggoodey7','374283361623671'),(9,'sgoghin8','337941229734297'),(10,'gfudger9','374283625683016');