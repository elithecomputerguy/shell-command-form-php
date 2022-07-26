<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="description" content="Determine friendliness of the User Input without any background Security and Safety Processes.">
<meta name="keywords" content="Command, Shell Command">
<meta name="author" content="elithecomputerguy">
<meta property="og:title" content="Command">
<meta property="og:url" content="https://github.com/elithecomputerguy">
<meta property="og:description" content="Elithecomputerguy presents the Executable Command in the Server Command Shell.">
<meta property="og:image" content="https://avatars.githubusercontent.com/u/60199254?v=4">
<base href="https://127.0.0.1:443/command.center.php">
<link rel="author" href="https://github.com/elithecomputerguy">
<link rel="license" href="https://creativecommons.org/licenses/by/4.0/">
<link rel="shortcut icon" type="image/x-icon" sizes="32x32" href="https://127.0.0.1:443/favicon-32x32.ico">
<link rel="icon" type="image/png" sizes="48x48" href="https://127.0.0.1:443/favicon-48x48.png">
<link rel="icon" type="image/png" sizes="192x192" href="https://127.0.0.1:443/favicon-192x192.png">
<link rel="apple-touch-icon" type="image/png" sizes="167x167" href="https://127.0.0.1:443/favicon-167x167.png">
<link rel="apple-touch-icon" type="image/png" sizes="180x180" href="https://127.0.0.1:443/favicon-180x180.png">
<link rel="alternate" hreflang="x-default" href="https://127.0.0.1:443/command.center.php?language=en-US">
<link rel="alternate" hreflang="zh-CN" href="https://127.0.0.1:443/command.center.php?language=zh-CN">
<link rel="alternate" hreflang="ko-KR" href="https://127.0.0.1:443/command.center.php?language=ko-KR">
<link rel="alternate" hreflang="hi-IN" href="https://127.0.0.1:443/command.center.php?language=hi-IN">
<link rel="alternate" hreflang="ja-JA" href="https://127.0.0.1:443/command.center.php?language=ja-JA">
<link rel="alternate" hreflang="tr-TR" href="https://127.0.0.1:443/command.center.php?language=tr-TR">
<link rel="alternate" hreflang="it-IT" href="https://127.0.0.1:443/command.center.php?language=it-IT">
<title id="twentyseven">Command</title>
<style type="text/css">
table, th, td { 
	border: .5px solid navy;
	border-collapse: collapse;
	margin-bottom: 20px;
}
table { width: 75%; }
tr.clo { background-color: #f2f2d1; }
tr.cloh { visibility: hidden; }
.ItemHeading th, .ItemHeading td { padding: 5px; }
.ItemDetail th, .ItemDetail td { padding: 10px; }
</style>
<!-- JavaScript Online -->
<!-- What You gonna do when:
	a. You can't go Online;
	b. Portal is not Available;
	c. Linked File has been changed. -->
<script type="text/javascript" src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
<!-- JavaScript unsafe-inline -->
<script language="JavaScript" type="text/javascript">
function toggle(row) {
	let element = document.getElementById( row );
	let num = row.replace(/[^0-9]/g,'');
	let chebox = document.getElementById( 'itemheading' + num ).checked;
	let isOn = element.classList.contains("cloh"); 
	if(isOn && chebox) {
		element.classList.remove("cloh");
		element.classList.add("clo");
		
		let es = document.querySelector("input[name='" + row + "']");
		es.value = 1;
	}
	if(!isOn && !chebox) {
		element.classList.remove("clo");
		element.classList.add("cloh");
		
		let es = document.querySelector("input[name='" + row + "']");
		es.value = '';
	}
}
function passthis(val) {
	let cod = document.querySelector("input[name='command']");
	cod.value = val;
}
function setthis(val) {
	let iso = document.querySelector("input[name='iso']");
	iso.value = val;
}
$(document).ready(function() {
<?php 

	$iso = 'en-US';
	$iso_a = array();
	$iso_a[] = 'en-US';
	$iso_a[] = 'zh-CN';
	$iso_a[] = 'ko-KR';
	$iso_a[] = 'hi-IN';
	$iso_a[] = 'ja-JA';
	$iso_a[] = 'tr-TR';
	$iso_a[] = 'it-IT';
	
	if(isset($_POST['iso'])) {
		if(!empty($_POST['iso']) && in_array($_POST['iso'], $iso_a)) {
			echo "console.log('This are catched from POST.');";
			echo "console.log('".$_POST['iso']."');";
			echo "setthis('".$_POST['iso']."');";
		}
	}
	
	if (isset($_POST['itemdetail1']) && !empty($_POST['itemdetail1'])) {
		echo "document.getElementById('itemheading1').checked = true;";
		echo "toggle('itemdetail1');";
	}
	if (isset($_POST['itemdetail2']) && !empty($_POST['itemdetail2'])) {
		echo "document.getElementById('itemheading2').checked = true;";
		echo "toggle('itemdetail2');";
	}
	if (isset($_POST['itemdetail3']) && !empty($_POST['itemdetail3'])) {
		echo "document.getElementById('itemheading3').checked = true;";
		echo "toggle('itemdetail3');";
	}
	if (isset($_POST['itemdetail4']) && !empty($_POST['itemdetail4'])) {
		echo "document.getElementById('itemheading4').checked = true;";
		echo "toggle('itemdetail4');";
	}
?>
});
</script>
<!-- JavaScript safe-file -->
<script language="JavaScript" type="text/javascript" src="https://127.0.0.1:443/commando.js"></script>
<!-- integrity? -->
</head>
<body onload="commando('<?php echo (isset($_POST['iso']))? $_POST['iso'] : $iso; ?>');">
<!-- Header Main Footer -->
<header>
<!-- Logo and Search Form -->
<nav><!-- Link for Navigation --></nav>
</header>
<main>
<!--	Lang format of "language code-country code" "ISO639-ISO3166"
		International Electrotechnical Commission (IEC) approved standards more or less uses the same. -->
<nav>
<a href="https://127.0.0.1:443/command.center.php?language=en-US" hreflang="en-US" target="_SELF">English</a> - <span id="hundredthirty"> &nbsp; </span> &nbsp;
<a href="https://127.0.0.1:443/command.center.php?language=zh-CN" hreflang="zh-CN" target="_SELF">Chinese</a> - <span id="hundredthirtyone"> &nbsp; </span> &nbsp;
<a href="https://127.0.0.1:443/command.center.php?language=ko-KR" hreflang="ko-KR" target="_SELF">Korean</a> - <span id="hundredthirtytwo"> &nbsp; </span> &nbsp;
<a href="https://127.0.0.1:443/command.center.php?language=hi-IN" hreflang="hi-IN" target="_SELF">Hindi</a> - <span id="hundredthirtythree"> &nbsp; </span> &nbsp;
<a href="https://127.0.0.1:443/command.center.php?language=ja-JA" hreflang="ja-JA" target="_SELF">Japanese</a> - <span id="hundredthirtyfour"> &nbsp; </span> &nbsp;
<a href="https://127.0.0.1:443/command.center.php?language=tr-TR" hreflang="tr-TR" target="_SELF">Turkish</a> - <span id="hundredthirtyfive"> &nbsp; </span> &nbsp;
<a href="https://127.0.0.1:443/command.center.php?language=it-IT" hreflang="it-IT" target="_SELF">Italian</a> - <span id="hundredthirtysix"> &nbsp; </span>
</nav>
<h1 id="hundredthirtyeight">Command</h1>

<table>
<caption id="hundredfourtyone">Step By Step with the Area of Concentration</caption>
<thead>
<tr>
	<th id="hundredfourtyfour">BEGIN</th>
</tr>
</thead>
<tbody>
<tr class="ItemHeading">
	<td>
		<label for="itemheading1" id="hundredfifty">OSINT (Toggle View)</label>
		<input type="checkbox" name="itemheading1" id="itemheading1" onclick="toggle('itemdetail1');">
	</td>
</tr>
<tr class="ItemDetail cloh"  id="itemdetail1">
	<td><ul>
		<li><span id="hundredfiftysix">User login name in the System:</span>
		<a href="javascript:void(0);" onclick="passthis('whoami');">whoami</a></li>
		<li><span id="hundredfiftyeight">More info about the User:</span>
		<a href="javascript:void(0);" onclick="passthis('id');">id</a></li>
		<li><span id="hundredsixty">System main environment details:</span>
		<a href="javascript:void(0);" onclick="passthis('lsb_release -a');">lsb_release -a</a></li>
		<li><span id="hundredsixtytwo">All created Users in the System:</span>
		<a href="javascript:void(0);" onclick="passthis('cat /etc/passwd');">cat /etc/passwd</a></li>
		<li><span id="hundredsixtyfour">All created Groups and Users in them:</span>
		<a href="javascript:void(0);" onclick="passthis('cat /etc/group');">cat /etc/group</a></li>
		<li><span id="hundredsixtysix">Available application instruments in the System:</span>
		<a href="javascript:void(0);" onclick="passthis('apt list --installed');">apt list --installed</a></li>
		<li><span id="hundredsixtyeight">More info about one of those application instruments:</span>
		<a href="javascript:void(0);" onclick="passthis('systemctl status apache2');">systemctl status apache2</a></li>
		<li><span id="hundredseventy">More info about version of the instrument:</span>
		<a href="javascript:void(0);" onclick="passthis('openssl version');">openssl version</a></li>
		<li><span id="hundredseventytwo">Assess capabilities of the System:</span>
		<a href="javascript:void(0);" onclick="passthis('openssl speed md5');">openssl speed md5</a></li>
		<li><span id="hundredseventyfour">More info about the processes in the System:</span>
		<a href="javascript:void(0);" onclick="passthis('top -b -n 1');">top -b -n 1</a></li>
		<li><span id="hundredseventysix">More info about the Files and Directories:</span>
		<a href="javascript:void(0);" onclick="passthis('ls -l /var/www/html');">ls -l /var/www/html</a></li>
		<li><span id="hundredseventyeight">More about the Networks of the System (Internal, Wire, Wi-Fi):</span>
		<a href="javascript:void(0);" onclick="passthis('ip addr');">ip addr</a></li>
		<li><span id="hundredeighty">Browse the File in the Document Root:</span> https://127.0.0.1/languages.xml</li>
		</ul>
	</td>
</tr>
<tr class="ItemHeading">
	<td>
		<label for="itemheading2" id="hundredeightysix">Active INT (Toggle View)</label>
		<input type="checkbox" name="itemheading2" id="itemheading2" onclick="toggle('itemdetail2');">
	</td>
</tr>
<tr class="ItemDetail cloh"  id="itemdetail2">
	<td><ul>
		<li><span id="hundredninetytwo">Access Internal Network:</span>
		<a href="javascript:void(0);" onclick="passthis('ping -c 10 192.168.8.1');">ping -c 10 192.168.8.1</a></li>
		<li><span id="hundredninetyfour">Create Directory:</span>
		<a href="javascript:void(0);" onclick="passthis('mkdir /var/www/html/fishy');">mkdir /var/www/html/fishy</a></li>
		<li><span id="hundredninetysix">Download File from External Network:</span>
		<a href="javascript:void(0);" onclick="passthis('wget https://avatars.githubusercontent.com/u/60199254?v=4');">wget https://avatars.githubusercontent.com/u/60199254?v=4</a></li>
		<li><span id="hundredninetyeight">Create Some File in the System:</span>
		<a href="javascript:void(0);" onclick="passthis('touch /var/www/html/active.code');">touch /var/www/html/active.code</a></li>
		<li><span id="twohundred">Insert Some Code to the File:</span>
		<a href="javascript:void(0);" onclick="passthis('echo ^^^^^^^ &gt;&gt; /var/www/html/active.code');">echo ^^^^^^ >> /var/www/html/active.code</a></li>
		<li><span id="twohundredtwo">Remove Some File in the System:</span>
		<a href="javascript:void(0);" onclick="passthis('rm /var/www/html/active.code');">rm /var/www/html/active.code</a></li>
		<li><span id="twohundredfour">Remove entire Directory of the System:</span>
		<a href="javascript:void(0);" onclick="passthis('rm -rf /var/www/html');">rm -rf /var/www/html</a></li>
		<li><span id="twohundredsix">Change Permissions of the Files and Directories:</span>
		<a href="javascript:void(0);" onclick="passthis('chmod 777 /var/www/html/active.code');">chmod 777 /var/www/html/active.code</a></li>
		<li><span id="twohundredeight">Look for Configuration of the System Server for plans i.e. to insert the Custom ".htaccess" Config File:</span>
		<a href="javascript:void(0);" onclick="passthis('less /etc/apache2/apache2.conf');">less /etc/apache2/apache2.conf</a></li>
		</ul>
	</td>
</tr>
<tr class="ItemHeading">
	<td>
		<label for="itemheading3" id="twohundredfifteen">Multiple Actions as Active INT (Toggle View)</label>
		<input type="checkbox" name="itemheading3" id="itemheading3" onclick="toggle('itemdetail3');">
	</td>
</tr>
<tr class="ItemDetail cloh" id="itemdetail3">
	<td><ul>
		<li><span id="twohundredtwentyone">Sensitive Data Disclosure A (1):</span>
		<a href="javascript:void(0);" onclick="passthis('touch /var/www/html/active.php');">touch /var/www/html/active.php</a></li>
		<li><span id="twohundredtwentythree">Sensitive Data Disclosure A (2):</span>
		<a href="javascript:void(0);" onclick="passthis('echo &quot;&lt;?php phpinfo(); ?&gt;&quot; &gt;&gt; /var/www/html/active.php');">echo &quot;&lt;?php phpinfo(); ?&gt;&quot; &gt;&gt; /var/www/html/active.php</a></li>
		<li><span id="twohundredtwentyfive">Sensitive Data Disclosure A (3):</span>
		<a href="javascript:void(0);" onclick="passthis('/usr/bin/php /var/www/html/active.php');">/usr/bin/php /var/www/html/active.php</a></li>
		<li><span id="twohundredtwentyseven">Sensitive Data Disclosure B (1):</span>
		<a href="javascript:void(0);" onclick="passthis('touch /var/www/html/.htaccess');">touch /var/www/html/.htaccess</a></li>
		<li><span id="twohundredtwentynine">Sensitive Data Disclosure B (2):</span> echo &quot;php_value engine off&#92;n&#92;nForceType text/plain&quot; &gt;&gt; /var/www/html/.htaccess</li>
		<li><span id="twohundredthirty">Sensitive Data Disclosure B (3): Browse the File in the Document Root https://127.0.0.1/command.center.php (Document Root req. "AllowOverride All"; req. Server Restart)</span></li>
		</ul>
	</td>
</tr>
<tr class="ItemHeading">
	<td>
		<label for="itemheading4" id="twohundredthirtysix">Conclusions (Toggle View)</label>
		<input type="checkbox" name="itemheading4" id="itemheading4" onclick="toggle('itemdetail4');">
	</td>
</tr>
<tr class="ItemDetail cloh" id="itemdetail4">
	<td><ol>
		<li><ul>
			<li><span id="twohundredfourtythree">OSINT could be described with these words: "Reconnaissance", "Intelligence Gathering", "Information Gathering". And all of this could be managed by using simple command of shell_exec().</span></li>
			<li><span id="twohundredfourtyfour">Around the Interwebs You should be able to find a lot of various code You need, but "Secure Programming" and Paranoic "Validation", and "Sanitization" usually are time consuming, not profitable to begin with, if everyone abide the rules and authorities anyway.</span></li>
			<li><span id="twohundredfourtyfive">In PHP Configuration there are possible to specify disable_functions = "exec, system". This would turn off these potentially dangerious functions. There could be used Approach by disabling everything and by step by step enabling only what You have.</span></li>
		</ul></li>
		<li><ul>
			<li><span id="twohundredfourtyeight">Active Actions to the System through "Untrusted Input" could be misused with undesired outcomes. Server Configuration "AllowOverride All" are available in shared hosting.</span></li>
			<li><span id="twohundredfourtynine">Instead of using Your own Server prefer Shared Hosting and Cloud Solutions, because they has to take care of Security as best as they can.</span></li>
			<li><span id="twohundredfifty">If such Platforms does not use Responsible disclosure policy for being able to report various Vulnerabilities and Flaws, does not provide at least short guideline and even if they have, but are too slow in their management, then the Service could be called as Poor Quality.</span></li>
		</ul></li>
		<li><ul>
			<li><span id="twohundredfiftythree">Compound of Actions (more than one) allows to create more sophisticated, complex Attacks.</span></li>
			<li><span id="twohundredfiftyfour">If the Country does not enforce minimal Requirements for the Software Applications, then there will be no Quality in Vulnerability Management and repeatition of bad code samples and patterns which would happen more often.</span></li>
			<li><span id="twohundredfiftyfive">There could be created scanning instruments which would do analysis in I. Static Code, II. Testing Environment, but there are challenge when number of different Technologies in place and Software Application are used by different Privilege and Role Accounts with various labels on the information.</span></li>
		</ul></li>
		</ol>
	</td>
</tr>
</tbody>
<tfoot>
<tr>
	<th id="twohundredsixtythree">END</th>
</tr>
</tfoot>
</table>
<?php include_once('/var/www/html/commando.html'); ?>
<?php include_once('/var/www/html/commando.php'); ?>
<h2 id="twohundredsixtynine">Diagnostic Data:</h2>
<?php echo 'POST: '; var_export($_POST); ?>
</main>
<footer>
<!-- Contact Us, About Us, Privacy Policy -->
<address><!-- Contacts Info of the Site Owner --></address>
</footer>
</body>
</html>
