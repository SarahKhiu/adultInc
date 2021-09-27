/*!40101 SET NAMES utf8 */;
/*!40014 SET FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET SQL_NOTES=0 */;
DROP TABLE IF EXISTS Apptransaction_data;
CREATE TABLE `Apptransaction_data` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(100) DEFAULT NULL,
  `Categories` varchar(100) DEFAULT NULL,
  `transactionid` varchar(100) DEFAULT NULL,
  `Amount` varchar(100) DEFAULT NULL,
  `Remarks` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4;
INSERT INTO Apptransaction_data(user_id,username,Categories,transactionid,Amount,Remarks) VALUES(1,'mchaffyn0','Bills','1','$4.55','Bills'),(2,'mchaffyn0','Mortgage','2','$5.55','Mortgage'),(3,'mchaffyn0','Groceries','3','$2.25','Groceries'),(4,'tpanton1','Entertainment','4','$4.55','Entertainment'),(5,'tpanton1','Entertainment','5','$8.33','Entertainment'),(6,'aeast2','Bills','6','$3.55','Bills'),(7,'haccombe3','Entertainment','7','$3.55','Entertainment'),(8,'haccombe3','Bills','8','$8.33','Bills'),(9,'aalden4','Groceries','9','$2.25','Groceries'),(10,'aalden4','Mortgage','10','$2.30','Mortgage'),(11,'mbosward5','Entertainment','11','$3.50','Entertainment'),(12,'rocorhane6','Bills','12','$2.25','Bills'),(13,'rocorhane6','Entertainment','13','$2.30','Entertainment'),(14,'rocorhane6','Groceries','14','$8.33','Groceries'),(15,'rocorhane6','Entertainment','15','$5.55','Entertainment'),(16,'ggoodey7','Groceries','16','$4.55','Groceries'),(17,'sgoghin8','Entertainment','17','$5.55','Entertainment'),(18,'gfudger9','Entertainment','18','$5.55','Entertainment'),(19,'gfudger9','Entertainment','19','$5.55','Entertainment');