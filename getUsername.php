<?php
   $dbhost = '10.62.68.176';
   $dbuser = 'DeathOnADinosaur';
   $dbpass = 'password';
   $dbdata = "yeet";
                 
   
   $conn = mysqli_connect($dbhost, $dbuser, $dbpass, $dbdata);//connect
   //if(! $conn ) die('Could not connect: \n' . mysqli_error()); //else echo 'Connected successfully <br>';

   //$data=mysqli_fetch_array($retval);//json_encode ($retval);
   //$data=mysqli_fetch_assoc($retval);//json_encode ($retval);
   session_start();
    $tmp = json_encode($_SESSION['username']);
    echo $tmp; 

   /*if($retval) echo("query success <br>"); else echo 'query failed';*/
   mysqli_close($conn);
?>
