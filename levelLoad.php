<?php
   $dbhost = '10.62.79.43';
   $dbuser = 'DeathOnADinosaur';
   $dbpass = 'password';
   $dbdata = "yeet";
   $sql="SELECT * FROM 1_7x7";       
   
   $conn = mysqli_connect($dbhost, $dbuser, $dbpass, $dbdata);//connect

   //if(! $conn ) die('Could not connect: \n' . mysqli_error()); //else echo 'Connected successfully <br>';

   $retval = mysqli_query( $conn, $sql );

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
