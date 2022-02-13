<?php
    require("connection.php");
    $title = $_POST['title'];
    $body = $_POST['body'];
    $img = $_FIlES['img']['name'];
    $sql = "insert into blog(title,img,body)values('$title','$img','$body')";
    if ($conn->query($sql) === TRUE) {
        error_log("New record created successfully");
      } else {
        error_log("Error: " . $sql . "<br>" . $conn->error);
      }
      
      $conn->close();
?>