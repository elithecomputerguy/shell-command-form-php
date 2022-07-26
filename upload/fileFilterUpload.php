<?php

$dir = "./folder/";
$ext = array("jpeg","jpg", "jpg2", "gif", "png");
$mime_type = array("image/jpeg","image/jp2","image/gif","image/png");
$isGood = 0;

if (isset($_FILES) && !empty($_FILES)) {
    $filename = $dir.basename($_FILES['Upload']['name']);
    $filenameArray = pathinfo($filename);
    
    if (file_exists($filename)) {
        echo "<span id='fiftyeightithirteen'>The file already exists</span><br>";
        $isGood = 1;
    }
    
    if ($_FILES['Upload']['size'] > 50000) {
        echo "<span id='fiftyeightieighteen'>File is over 50kB in size</span><br>";
        $isGood = 1;
    }
    
    if (!in_array($filenameArray['extension'],$ext)) {
        echo "<span id='fiftyeightitwentythree'>File Type is not Allowed (Upload jpeg, jpg, gif, png)</span><br>";
        $isGood = 1;
    }
    
    $command = "file --mime-type ".$_FILES['Upload']['tmp_name'];
    $concern_mime = shell_exec( $command );
    foreach($mime_type as $mt) {
         $get = strpos($mt, trim($_FILES['Upload']['type']), 0);
         if ($get === false) {
             $found = 0;
        } else {
            $found = 1;
            break;
        }
    }
    if ($found === 0) {
        echo "<span id='fiftyeightithirtynine'>File Mime Type is not Allowed</span><br>";
        $isGood = 1;
    }
    
    if ($isGood != 1) {
        if (move_uploaded_file($_FILES['Upload']['tmp_name'], $filename)){
            echo "<p><span id='fiftyeightifourtyfive'>File was uploaded</span> --> ".$_FILES['Upload']['name']."<br/>";
        } else {
            echo "<span id='fiftyeightifourtyseven'>Upload failed</span> ".$_FILES['Upload']['name']."<br/>";
        }
    }
    
    echo "<span id='fiftyeightififtyone'>The following information about File from $ FILES array:</span><br/>";
    echo "<br/>";
    echo "<span id='fiftyeightififtythree'>File Name:</span>".$_FILES['Upload']['name']."<br/>";
    echo "<span id='fiftyeightififtyfour'>File Type:</span>".$_FILES['Upload']['type']."<br/>";
    echo "<span id='fiftyeightififtyfive'>File Size:</span>".$_FILES['Upload']['size']."<br/>";
}
?>
<br>
<a href="./upload.filter.php" id="fiftyeightififtynine">Back</a>
