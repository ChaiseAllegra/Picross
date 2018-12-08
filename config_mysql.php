<?php
/* Database credentials. Assuming you are running MySQL
server with default setting (user 'root' with no password) */
//phpinfo();
define('DB_SERVER', '10.62.70.129');
define('DB_USERNAME', 'DeathOnADinosaur');
define('DB_PASSWORD', 'password');
define('DB_NAME', 'yeet'); 
 
/* Attempt to connect to MySQL database */
$link = mysqli_connect(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_NAME);
 
// Check connection
if($link === false) {
    die("ERROR: Could not connect. " . mysqli_connect_error());
}
?>