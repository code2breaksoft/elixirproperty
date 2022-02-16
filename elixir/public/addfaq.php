<?php
    require("connection.php");
    $qus = $_POST['qus'];
    $ans = $_POST['ans'];
    $sql = "insert into faq(question,answer) values('$qus','$ans')";
    if ($conn->query($sql) === TRUE) {
        error_log("New record created successfully");
      } else {
        error_log("Error: " . $sql . "<br>" . $conn->error);
      }
      
      $conn->close();




















?>