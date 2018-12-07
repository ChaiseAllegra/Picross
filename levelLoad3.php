<?php
   $dbhost = '10.62.79.43';
   $dbuser = 'DeathOnADinosaur';
   $dbpass = 'password';
   $dbdata = "yeet";
   $one7="SELECT * FROM 1_7x7";
   $two7="SELECT * FROM 2_7x7";  
   $three7="SELECT * FROM 3_7x7";  
   $one13="SELECT * FROM 1_13x13";
   $two13="SELECT * FROM 2_13x13";  
   $three13="SELECT * FROM 3_13x13";                   
   
   $conn = mysqli_connect($dbhost, $dbuser, $dbpass, $dbdata);//connect

   //if(! $conn ) die('Could not connect: \n' . mysqli_error()); //else echo 'Connected successfully <br>';

   $retval = mysqli_query( $conn, $three7 );

   $data = array();
   //$data=mysqli_fetch_array($retval);//json_encode ($retval);
   //$data=mysqli_fetch_assoc($retval);//json_encode ($retval);
   while($row=mysqli_fetch_assoc($retval)) {
    $data[] = $row;
   }

   $tmp = json_encode($data); 
   //echo $tmp . "<br>";

   echo $tmp;

   /*if($retval) echo("query success <br>"); else echo 'query failed';*/
   mysqli_close($conn);
?>
