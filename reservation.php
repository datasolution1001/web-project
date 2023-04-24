<?php
$adate = $_POST["arr_date"];
$edate = $_POST["end_date"];
$numPerson = $_POST["num-person"];
$fname = $_POST["fullname"];
$femail = $_POST["email"];
$fcin = $_POST["cin"];
$fphone = $_POST["phone"];
$fpass = $_POST["password"];
$fcountry = $_POST["country"];
$fdestination = $_POST["dest"];
$fgenre = $_POST["genre"];

//connection to the data base
$conn = new mysqli('localhost', 'root', '', 'hotello');
mysqli_report(MYSQLI_REPORT_ALL );
$sql = "insert into reservation(arrDate, endDate, numPerson, name, email, cin, phone, pass, country, destination, genre)
        values ('$adate', '$edate', '$numPerson', '$fname', '$femail', '$fcin', '$fphone', '$fpass', '$fcountry', '$fdestination', '$fgenre')";

    $result = $conn->query($sql);
    if($result) {
        echo "Your booking for ".$fdestination." is coming up on ".$adate;
    } else {
        echo "Something has gone wrong! ".$sql->errorno;
        
    }


?>