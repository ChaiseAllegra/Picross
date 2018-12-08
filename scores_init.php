<?php
   $dbhost = '10.62.70.129';
   $dbuser = 'DeathOnADinosaur';
   $dbpass = 'password';
   $dbdata = "yeet";
   $conn = mysqli_connect($dbhost, $dbuser, $dbpass, $dbdata);
   
   if(! $conn ) {
      die('Could not connect: \n' . mysqli_error());
   }

   $sql = "CREATE TABLE IF NOT EXISTS high_scores (
            player varchar(20) NOT NULL,
            score INT NOT NULL,
            mode varchar(20) NOT NULL,
            errors INT NOT NULL
    )";

    $retval2 = mysqli_query ( $conn, $sql );