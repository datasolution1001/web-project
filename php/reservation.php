<?php

$db = new PDO('sqlite:Hotello.db');
    $sql = "insert into reservation (arr_date, end_date, num_person, fullname, email, cin, phone, pass, genre) 
    values (:arr_date, :end_date, :num_person, :fullname, :email, :cin, :phone, :pass, :genre)";
    $stmt = $db->prepare($sql);

    $arr_date = filter_input(INPUT_POST, 'arr_date');
    $stmt->bindValue(':arr_date', $arr_date, PDO::PARAM_DATE);

    $end_date = filter_input(INPUT_POST, 'end_date');
    $stmt->bindValue(':end_date', $end_date, PDO::PARAM_DATE);

    $num_person = filter_input(INPUT_POST, 'num_person');
    $stmt->bindValue(':num_person', $num_person, PDO::PARAM_STR);

    $fullname = filter_input(INPUT_POST, 'fullname');
    $stmt->bindValue(':fullname', $fullname, PDO::PARAM_STR);

    $email = filter_input(INPUT_POST, 'email');
    $stmt->bindValue(':fullname', $fullname, PDO::PARAM_STR);

    $cin = filter_input(INPUT_POST, 'cin');
    $cin->bindValue(':cin', $cin, PDO::PARAM_STR);

    $phone = filter_input(INPUT_POST, 'phone');
    $stmt->bindValue(':phone', $phone, PDO::PARAM_STR);

    $pass = filter_input(INPUT_POST, 'pass');
    $stmt->bindValue(':pass', $pass, PDO::PARAM_STR);

    $genre = filter_input(INPUT_POST, 'genre');
    $stmt->bindValue(':genre', $genre, PDO::PARAM_STR);

    $success = $stmt->execute();
    if($success) {
        echo "Reservation has been added successfully we will contact soon ";
    }
    else {
        echo "wrong";
    }
?>
