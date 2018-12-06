<?php
   $dbhost = '10.62.79.43';
   $dbuser = 'DeathOnADinosaur';
   $dbpass = 'password';
   $dbdata = "yeet";
   $sql="SELECT `one` FROM 1_7x7 WHERE 1";       
   
   $conn = mysqli_connect($dbhost, $dbuser, $dbpass, $dbdata);//connect

   if(! $conn ) die('Could not connect: \n' . mysqli_error()); else echo 'Connected successfully <br>';

   $retval = mysqli_query( $conn, $sql );
   $data=json_encode ($retval);
   
   echo $data;

   if($retval) echo("query success <br>"); else echo 'query failed';
   
   mysqli_close($conn);
?>