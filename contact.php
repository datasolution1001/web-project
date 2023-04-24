<?php


$fname = $_POST["fname"];
$femail = $_POST["femail"];
$fmessage = $_POST["fmessage"];

//connection to the data base
$conn = new mysqli('localhost', 'root', '', 'hotello');

$sql = "insert into contact(fname, femail, fmessage)
        values ('$fname', '$femail', '$fmessage')";

    if ($conn->query($sql) === TRUE) {
        echo "Thanks for contacting us! We will be in touch with you shortly.";
    }
    else {
        echo "Somthing went wrong!".$sql."<br/>".$conn->error;
    }



?>