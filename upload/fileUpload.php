<?php

$dir = "./folder/";
$filename = $dir.basename($_FILES['Upload']['name']);
$filenameArray = pathinfo($filename);
$ext = array("jpeg","jpg","gif", "png");
$isGood = 0;

if(isset($_FILES)) {
    var_export($_FILES);
}

if (file_exists($filename)) {
    echo "The file already exists<br>";
    $isGood = 1;
}

if ($_FILES['Upload']['size'] > 50000) {
    echo "File is over 50kB in size<br>";
    $isGood = 1;
}

if (!in_array($filenameArray['extension'],$ext)) {
    echo "File Type is not Allowed (Upload jpeg, jpg, gif, png)<br>";
    $isGood = 1;
}

if ($isGood != 1) {
    if (move_uploaded_file($_FILES['Upload']['tmp_name'], $filename)){
        echo "<p>File was uploaded --> ".$_FILES['Upload']['name'];
    } else {
     echo "Upload failed".$_FILES['Upload']['name'];
    }
}

if(isset($_FILES)) {
    echo "The following information about File from $ FILES array:<br/>";
    echo "<br/>";
    echo "File Name:".$_FILES['Upload']['name']."<br/>";
    echo "File Type:".$_FILES['Upload']['type']."<br/>";
    echo "File Size:".$_FILES['Upload']['size']."<br/>";
}
?>
<br>
<a href="./fileUpload.html">Back</a>
