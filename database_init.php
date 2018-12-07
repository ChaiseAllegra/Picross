<?php
   $dbhost = '10.62.79.43';
   $dbuser = 'DeathOnADinosaur';
   $dbpass = 'password';
   $conn = mysqli_connect($dbhost, $dbuser, $dbpass);
   
   if(! $conn ) {
      die('Could not connect: \n' . mysqli_error());
   }
   
   //echo 'Connected successfully <br>';
   
   $sql = 'CREATE DATABASE IF NOT EXISTS yeet';

   $retval = mysqli_query( $conn, $sql );

   $dbdata = "yeet";
   $conn = mysqli_connect($dbhost, $dbuser, $dbpass, $dbdata);

   /* if(! $conn ) {
        die('Could not connect 2: <br>' . mysqli_error());
    }*/
//---------------------------------LEVEL 1 7x7-----------------------------//
   $sql2 = "CREATE TABLE IF NOT EXISTS 1_7x7 (
            one INT NOT NULL,
            two INT NOT NULL,
            three INT NOT NULL,
            four INT NOT NULL,
            five INT NOT NULL,
            six INT NOT NULL,
            seven INT NOT NULL
    )";

    $retval2 = mysqli_query ( $conn, $sql2 );

    $row1 = "INSERT INTO 1_7x7 (one,two,three,four,five,six,seven)
    VALUES (1, 0, 0, 0, 0, 0, 1);";
    mysqli_query($conn, $row1);
    $row2 = "INSERT INTO 1_7x7 (one,two,three,four,five,six,seven)
    VALUES (0, 1, 0, 0, 0, 1, 0);";
    mysqli_query($conn, $row2);
    $row3 = "INSERT INTO 1_7x7 (one,two,three,four,five,six,seven)
    VALUES (0, 0, 1, 0, 1, 0, 0);";
    mysqli_query($conn, $row3);
    $row4 = "INSERT INTO 1_7x7 (one,two,three,four,five,six,seven)
    VALUES (0, 0, 0, 1, 0, 0, 0);";
    mysqli_query($conn, $row4);
    $row5 = "INSERT INTO 1_7x7 (one,two,three,four,five,six,seven)
    VALUES (0, 0, 1, 0, 1, 0, 0);";
    mysqli_query($conn, $row5);
    $row6 = "INSERT INTO 1_7x7 (one,two,three,four,five,six,seven)
    VALUES (0, 1, 0, 0, 0, 1, 0);";
    mysqli_query($conn, $row6);
    $row7 = "INSERT INTO 1_7x7 (one,two,three,four,five,six,seven)
    VALUES (1, 0, 0, 0, 0, 0, 1);";
    mysqli_query($conn, $row7);
//-------------------------------------------------------------------------//

//---------------------------------LEVEL 2 7x7-----------------------------//
    $sql2 = "CREATE TABLE IF NOT EXISTS 2_7x7 (
        one INT NOT NULL,
        two INT NOT NULL,
        three INT NOT NULL,
        four INT NOT NULL,
        five INT NOT NULL,
        six INT NOT NULL,
        seven INT NOT NULL
    )";

    $retval2 = mysqli_query ( $conn, $sql2 );

    $row1 = "INSERT INTO 2_7x7 (one,two,three,four,five,six,seven)
    VALUES (0, 0, 1, 0, 1, 0, 0);";
    mysqli_query($conn, $row1);
    $row2 = "INSERT INTO 2_7x7 (one,two,three,four,five,six,seven)
    VALUES (0, 1, 0, 1, 0, 1, 0);";
    mysqli_query($conn, $row2);
    $row3 = "INSERT INTO 2_7x7 (one,two,three,four,five,six,seven)
    VALUES (1, 1, 1, 1, 1, 1, 1);";
    mysqli_query($conn, $row3);
    $row4 = "INSERT INTO 2_7x7 (one,two,three,four,five,six,seven)
    VALUES (1, 0, 0, 1, 0, 0, 1);";
    mysqli_query($conn, $row4);
    $row5 = "INSERT INTO 2_7x7 (one,two,three,four,five,six,seven)
    VALUES (0, 1, 0, 0, 1, 0, 0);";
    mysqli_query($conn, $row5);
    $row6 = "INSERT INTO 2_7x7 (one,two,three,four,five,six,seven)
    VALUES (0, 0, 0, 1, 0, 1, 0);";
    mysqli_query($conn, $row6);
    $row7 = "INSERT INTO 2_7x7 (one,two,three,four,five,six,seven)
    VALUES (0, 0, 0, 1, 1, 0, 0);";
    mysqli_query($conn, $row7);
//-------------------------------------------------------------------------//

//---------------------------------LEVEL 3 7x7-----------------------------//
    $sql2 = "CREATE TABLE IF NOT EXISTS 3_7x7 (
        one INT NOT NULL,
        two INT NOT NULL,
        three INT NOT NULL,
        four INT NOT NULL,
        five INT NOT NULL,
        six INT NOT NULL,
        seven INT NOT NULL
    )";

    $retval2 = mysqli_query ( $conn, $sql2 );

    $row1 = "INSERT INTO 3_7x7 (one,two,three,four,five,six,seven)
    VALUES (0, 0, 0, 1, 0, 0, 1);";
    mysqli_query($conn, $row1);
    $row2 = "INSERT INTO 3_7x7 (one,two,three,four,five,six,seven)
    VALUES (0, 1, 0, 1, 0, 0, 0);";
    mysqli_query($conn, $row2);
    $row3 = "INSERT INTO 3_7x7 (one,two,three,four,five,six,seven)
    VALUES (0, 0, 1, 1, 0, 0, 0);";
    mysqli_query($conn, $row3);
    $row4 = "INSERT INTO 3_7x7 (one,two,three,four,five,six,seven)
    VALUES (0, 0, 0, 1, 1, 0, 0);";
    mysqli_query($conn, $row4);
    $row5 = "INSERT INTO 3_7x7 (one,two,three,four,five,six,seven)
    VALUES (0, 0, 1, 1, 0, 0, 0);";
    mysqli_query($conn, $row5);
    $row6 = "INSERT INTO 3_7x7 (one,two,three,four,five,six,seven)
    VALUES (0, 1, 0, 1, 0, 0, 0);";
    mysqli_query($conn, $row6);
    $row7 = "INSERT INTO 3_7x7 (one,two,three,four,five,six,seven)
    VALUES (1, 0, 0, 1, 0, 0, 0);";
    mysqli_query($conn, $row7);
//-------------------------------------------------------------------------//

//---------------------------------LEVEL 1 13x13---------------------------//
$sql2 = "CREATE TABLE IF NOT EXISTS 1_13x13 (
    one INT NOT NULL,
    two INT NOT NULL,
    three INT NOT NULL,
    four INT NOT NULL,
    five INT NOT NULL,
    six INT NOT NULL,
    seven INT NOT NULL
    eight INT NOT NULL,
    nine INT NOT NULL,
    ten INT NOT NULL,
    eleven INT NOT NULL,
    twelve INT NOT NULL,
    thirteen INT NOT NULL,
)";

$retval2 = mysqli_query ( $conn, $sql2 );

$row1 = "INSERT INTO 1_13x13 (one,two,three,four,five,six,seven)
VALUES (0, 0, 0, 1, 0, 0, 1);";
mysqli_query($conn, $row1);
$row2 = "INSERT INTO 1_13x13 (one,two,three,four,five,six,seven)
VALUES (0, 1, 0, 1, 0, 0, 0);";
mysqli_query($conn, $row2);
$row3 = "INSERT INTO 1_13x13 (one,two,three,four,five,six,seven)
VALUES (0, 0, 1, 1, 0, 0, 0);";
mysqli_query($conn, $row3);
$row4 = "INSERT INTO 1_13x13 (one,two,three,four,five,six,seven)
VALUES (0, 0, 0, 1, 1, 0, 0);";
mysqli_query($conn, $row4);
$row5 = "INSERT INTO 1_13x13 (one,two,three,four,five,six,seven)
VALUES (0, 0, 1, 1, 0, 0, 0);";
mysqli_query($conn, $row5);
$row6 = "INSERT INTO 1_13x13 (one,two,three,four,five,six,seven)
VALUES (0, 1, 0, 1, 0, 0, 0);";
mysqli_query($conn, $row6);
$row7 = "INSERT INTO 1_13x13 (one,two,three,four,five,six,seven)
VALUES (1, 0, 0, 1, 0, 0, 0);";
mysqli_query($conn, $row7);
$row8 = "INSERT INTO 1_13x13 (one,two,three,four,five,six,seven)
VALUES (1, 0, 0, 1, 0, 0, 0);";
mysqli_query($conn, $row8);
$row9 = "INSERT INTO 1_13x13 (one,two,three,four,five,six,seven)
VALUES (1, 0, 0, 1, 0, 0, 0);";
mysqli_query($conn, $row9);
$row10 = "INSERT INTO 1_13x13 (one,two,three,four,five,six,seven)
VALUES (1, 0, 0, 1, 0, 0, 0);";
mysqli_query($conn, $row10);
$row11 = "INSERT INTO 1_13x13 (one,two,three,four,five,six,seven)
VALUES (1, 0, 0, 1, 0, 0, 0);";
mysqli_query($conn, $row11);
$row12 = "INSERT INTO 1_13x13 (one,two,three,four,five,six,seven)
VALUES (1, 0, 0, 1, 0, 0, 0);";
mysqli_query($conn, $row12);
$row13 = "INSERT INTO 1_13x13 (one,two,three,four,five,six,seven)
VALUES (1, 0, 0, 1, 0, 0, 0);";
mysqli_query($conn, $row13);

//-------------------------------------------------------------------------//
//---------------------------------LEVEL 2 13x13------------------------------//
$sql2 = "CREATE TABLE IF NOT EXISTS 2_13x13 (
    one INT NOT NULL,
    two INT NOT NULL,
    three INT NOT NULL,
    four INT NOT NULL,
    five INT NOT NULL,
    six INT NOT NULL,
    seven INT NOT NULL
    eight INT NOT NULL,
    nine INT NOT NULL,
    ten INT NOT NULL,
    eleven INT NOT NULL,
    twelve INT NOT NULL,
    thirteen INT NOT NULL,
)";

$retval2 = mysqli_query ( $conn, $sql2 );

$row1 = "INSERT INTO 2_13x13 (one,two,three,four,five,six,seven)
VALUES (0, 0, 0, 1, 0, 0, 1);";
mysqli_query($conn, $row1);
$row2 = "INSERT INTO 2_13x13 (one,two,three,four,five,six,seven)
VALUES (0, 1, 0, 1, 0, 0, 0);";
mysqli_query($conn, $row2);
$row3 = "INSERT INTO 2_13x13 (one,two,three,four,five,six,seven)
VALUES (0, 0, 1, 1, 0, 0, 0);";
mysqli_query($conn, $row3);
$row4 = "INSERT INTO 2_13x13 (one,two,three,four,five,six,seven)
VALUES (0, 0, 0, 1, 1, 0, 0);";
mysqli_query($conn, $row4);
$row5 = "INSERT INTO 2_13x13 (one,two,three,four,five,six,seven)
VALUES (0, 0, 1, 1, 0, 0, 0);";
mysqli_query($conn, $row5);
$row6 = "INSERT INTO 2_13x13 (one,two,three,four,five,six,seven)
VALUES (0, 1, 0, 1, 0, 0, 0);";
mysqli_query($conn, $row6);
$row7 = "INSERT INTO 2_13x13 (one,two,three,four,five,six,seven)
VALUES (1, 0, 0, 1, 0, 0, 0);";
mysqli_query($conn, $row7);
$row8 = "INSERT INTO 2_13x13 (one,two,three,four,five,six,seven)
VALUES (1, 0, 0, 1, 0, 0, 0);";
mysqli_query($conn, $row8);
$row9 = "INSERT INTO 2_13x13 (one,two,three,four,five,six,seven)
VALUES (1, 0, 0, 1, 0, 0, 0);";
mysqli_query($conn, $row9);
$row10 = "INSERT INTO 2_13x13 (one,two,three,four,five,six,seven)
VALUES (1, 0, 0, 1, 0, 0, 0);";
mysqli_query($conn, $row10);
$row11 = "INSERT INTO 2_13x13 (one,two,three,four,five,six,seven)
VALUES (1, 0, 0, 1, 0, 0, 0);";
mysqli_query($conn, $row11);
$row12 = "INSERT INTO 2_13x13 (one,two,three,four,five,six,seven)
VALUES (1, 0, 0, 1, 0, 0, 0);";
mysqli_query($conn, $row12);
$row13 = "INSERT INTO 2_13x13 (one,two,three,four,five,six,seven)
VALUES (1, 0, 0, 1, 0, 0, 0);";
mysqli_query($conn, $row13);

//-------------------------------------------------------------------------//
//---------------------------------LEVEL 2 13x13------------------------------//
$sql2 = "CREATE TABLE IF NOT EXISTS 3_13x13 (
    one INT NOT NULL,
    two INT NOT NULL,
    three INT NOT NULL,
    four INT NOT NULL,
    five INT NOT NULL,
    six INT NOT NULL,
    seven INT NOT NULL
    eight INT NOT NULL,
    nine INT NOT NULL,
    ten INT NOT NULL,
    eleven INT NOT NULL,
    twelve INT NOT NULL,
    thirteen INT NOT NULL,
)";

$retval2 = mysqli_query ( $conn, $sql2 );

$row1 = "INSERT INTO 3_13x13 (one,two,three,four,five,six,seven)
VALUES (0, 0, 0, 1, 0, 0, 1);";
mysqli_query($conn, $row1);
$row2 = "INSERT INTO 3_13x13 (one,two,three,four,five,six,seven)
VALUES (0, 1, 0, 1, 0, 0, 0);";
mysqli_query($conn, $row2);
$row3 = "INSERT INTO 3_13x13 (one,two,three,four,five,six,seven)
VALUES (0, 0, 1, 1, 0, 0, 0);";
mysqli_query($conn, $row3);
$row4 = "INSERT INTO 3_13x13 (one,two,three,four,five,six,seven)
VALUES (0, 0, 0, 1, 1, 0, 0);";
mysqli_query($conn, $row4);
$row5 = "INSERT INTO 3_13x13 (one,two,three,four,five,six,seven)
VALUES (0, 0, 1, 1, 0, 0, 0);";
mysqli_query($conn, $row5);
$row6 = "INSERT INTO 3_13x13 (one,two,three,four,five,six,seven)
VALUES (0, 1, 0, 1, 0, 0, 0);";
mysqli_query($conn, $row6);
$row7 = "INSERT INTO 3_13x13 (one,two,three,four,five,six,seven)
VALUES (1, 0, 0, 1, 0, 0, 0);";
mysqli_query($conn, $row7);
$row8 = "INSERT INTO 3_13x13 (one,two,three,four,five,six,seven)
VALUES (1, 0, 0, 1, 0, 0, 0);";
mysqli_query($conn, $row8);
$row9 = "INSERT INTO 3_13x13 (one,two,three,four,five,six,seven)
VALUES (1, 0, 0, 1, 0, 0, 0);";
mysqli_query($conn, $row9);
$row10 = "INSERT INTO 3_13x13 (one,two,three,four,five,six,seven)
VALUES (1, 0, 0, 1, 0, 0, 0);";
mysqli_query($conn, $row10);
$row11 = "INSERT INTO 3_13x13 (one,two,three,four,five,six,seven)
VALUES (1, 0, 0, 1, 0, 0, 0);";
mysqli_query($conn, $row11);
$row12 = "INSERT INTO 3_13x13 (one,two,three,four,five,six,seven)
VALUES (1, 0, 0, 1, 0, 0, 0);";
mysqli_query($conn, $row12);
$row13 = "INSERT INTO 3_13x13 (one,two,three,four,five,six,seven)
VALUES (1, 0, 0, 1, 0, 0, 0);";
mysqli_query($conn, $row13);
//-------------------------------------------------------------------------//

/*if($retval)
        echo("Success db <br>");

    if($retval2)
        echo("Success tbl <br>");
    else echo("failure");

    if(! $retval ) {
        die('Could not create database: <br>' . mysqli_error(0));
    }
   
   echo "Database yeet created successfully\n";*/
   mysqli_close($conn);
?>