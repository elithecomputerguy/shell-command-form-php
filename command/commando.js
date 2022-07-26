function getSearchParameters() {
    var prmstr = window.location.search.substr(1);
    return prmstr != null && prmstr != "" ? transformToAssocArray(prmstr) : {};
}

function transformToAssocArray( prmstr ) {
    var params = {};
    var prmarr = prmstr.split("&");
    for ( var i = 0; i < prmarr.length; i++) {
        var tmparr = prmarr[i].split("=");
        params[tmparr[0]] = tmparr[1];
    }
    return params;
}

function commando(val) {
	const lan_availa = new Array ('en-US','zh-CN','ko-KR','hi-IN','ja-JA','tr-TR','it-IT');
	var lan_select = 'en-US';
	var obj_params = getSearchParameters();
	var iso = document.querySelector("input[name='iso']");
	if(val.length !== 0)
	{
		if(lan_availa.indexOf(val) !== -1)
		{
			lan_select = val;
		}
	}
	
	var arr_params = Object.values(obj_params);
	if(arr_params.length !== 0)
	{
		for (i=0;i<arr_params.length;i++)
		{
			if(lan_availa.indexOf(arr_params[i]) !== -1)
			{
				lan_select = arr_params[i];
				iso.value = arr_params[i];
			}
		}
	}
		
	if (window.XMLHttpRequest)
	{
		xmlhttp=new XMLHttpRequest();
		xmlhttp.open("GET", "https://127.0.0.1:443/languages.xml", false);
		xmlhttp.send();
		xmlDoc=xmlhttp.responseXML;
		
		var x=xmlDoc.getElementById(lan_select);
		
		window.onload = init(x);
	}
	else
	{
		console.log('Error: no support for XMLHttpRequest.');
		console.log('That is really hard to do, i.e. for the MS.');
	}
}

function init(x) {
	/* Some Browser Apps allows to change <meta> and (or) has a list of names and properties which could be changed */
	$('meta[name="description"]').remove();
    $('head').append( '<meta name="description" content="' + x.getElementsByTagName("five")[0].childNodes[0].nodeValue + '">' );
    $('meta[name="keywords"]').remove();
    $('head').append( '<meta name="keywords" content="' + x.getElementsByTagName("six")[0].childNodes[0].nodeValue + '">' );
    $('meta[name="author"]').remove();
    $('head').append( '<meta name="author" content="' + x.getElementsByTagName("seven")[0].childNodes[0].nodeValue + '">' );
    $('meta[property="og:title"]').remove();
    $('head').append( '<meta property="og:title" content="' + x.getElementsByTagName("eight")[0].childNodes[0].nodeValue + '">' );
    $('meta[property="og:description"]').remove();
    $('head').append( '<meta property="og:description" content="' + x.getElementsByTagName("ten")[0].childNodes[0].nodeValue + '">' );
    $('#twentyseven').text(x.getElementsByTagName("twentyseven")[0].childNodes[0].nodeValue);
	$('#hundredthirty').html(x.getElementsByTagName("hundredthirty")[0].childNodes[0].nodeValue);
	$('#hundredthirtyone').html(x.getElementsByTagName("hundredthirtyone")[0].childNodes[0].nodeValue);
	$('#hundredthirtytwo').html(x.getElementsByTagName("hundredthirtytwo")[0].childNodes[0].nodeValue);
	$('#hundredthirtythree').html(x.getElementsByTagName("hundredthirtythree")[0].childNodes[0].nodeValue);
	$('#hundredthirtyfour').html(x.getElementsByTagName("hundredthirtyfour")[0].childNodes[0].nodeValue);
	$('#hundredthirtyfive').html(x.getElementsByTagName("hundredthirtyfive")[0].childNodes[0].nodeValue);
	$('#hundredthirtysix').html(x.getElementsByTagName("hundredthirtysix")[0].childNodes[0].nodeValue);
	$('#hundredthirtyeight').text(x.getElementsByTagName("hundredthirtyeight")[0].childNodes[0].nodeValue);
	$('#hundredfourtyone').html(x.getElementsByTagName("hundredfourtyone")[0].childNodes[0].nodeValue);
	$('#hundredfourtyfour').html(x.getElementsByTagName("hundredfourtyfour")[0].childNodes[0].nodeValue);
	$('#hundredfifty').html(x.getElementsByTagName("hundredfifty")[0].childNodes[0].nodeValue);
	$('#hundredfiftysix').html(x.getElementsByTagName("hundredfiftysix")[0].childNodes[0].nodeValue);
	$('#hundredfiftyeight').html(x.getElementsByTagName("hundredfiftyeight")[0].childNodes[0].nodeValue);
	$('#hundredsixty').html(x.getElementsByTagName("hundredsixty")[0].childNodes[0].nodeValue);
	$('#hundredsixtytwo').html(x.getElementsByTagName("hundredsixtytwo")[0].childNodes[0].nodeValue);
	$('#hundredsixtyfour').html(x.getElementsByTagName("hundredsixtyfour")[0].childNodes[0].nodeValue);
	$('#hundredsixtysix').html(x.getElementsByTagName("hundredsixtysix")[0].childNodes[0].nodeValue);
	$('#hundredsixtyeight').html(x.getElementsByTagName("hundredsixtyeight")[0].childNodes[0].nodeValue);
	$('#hundredseventy').html(x.getElementsByTagName("hundredseventy")[0].childNodes[0].nodeValue);
	$('#hundredseventytwo').html(x.getElementsByTagName("hundredseventytwo")[0].childNodes[0].nodeValue);
	$('#hundredseventyfour').html(x.getElementsByTagName("hundredseventyfour")[0].childNodes[0].nodeValue);
	$('#hundredseventysix').html(x.getElementsByTagName("hundredseventysix")[0].childNodes[0].nodeValue);
	$('#hundredseventyeight').html(x.getElementsByTagName("hundredseventyeight")[0].childNodes[0].nodeValue);
	$('#hundredeighty').html(x.getElementsByTagName("hundredeighty")[0].childNodes[0].nodeValue);
	$('#hundredeightysix').html(x.getElementsByTagName("hundredeightysix")[0].childNodes[0].nodeValue);
	$('#hundredninetytwo').html(x.getElementsByTagName("hundredninetytwo")[0].childNodes[0].nodeValue);
	$('#hundredninetyfour').html(x.getElementsByTagName("hundredninetyfour")[0].childNodes[0].nodeValue);
	$('#hundredninetysix').html(x.getElementsByTagName("hundredninetysix")[0].childNodes[0].nodeValue);
	$('#hundredninetyeight').html(x.getElementsByTagName("hundredninetyeight")[0].childNodes[0].nodeValue);
	$('#twohundred').html(x.getElementsByTagName("twohundred")[0].childNodes[0].nodeValue);
	$('#twohundredtwo').html(x.getElementsByTagName("twohundredtwo")[0].childNodes[0].nodeValue);
	$('#twohundredfour').html(x.getElementsByTagName("twohundredfour")[0].childNodes[0].nodeValue);
	$('#twohundredsix').html(x.getElementsByTagName("twohundredsix")[0].childNodes[0].nodeValue);
	$('#twohundredeight').html(x.getElementsByTagName("twohundredeight")[0].childNodes[0].nodeValue);
	$('#twohundredfifteen').html(x.getElementsByTagName("twohundredfifteen")[0].childNodes[0].nodeValue);
	$('#twohundredtwentyone').html(x.getElementsByTagName("twohundredtwentyone")[0].childNodes[0].nodeValue);
	$('#twohundredtwentythree').html(x.getElementsByTagName("twohundredtwentythree")[0].childNodes[0].nodeValue);
	$('#twohundredtwentyfive').html(x.getElementsByTagName("twohundredtwentyfive")[0].childNodes[0].nodeValue);
	$('#twohundredtwentyseven').html(x.getElementsByTagName("twohundredtwentyseven")[0].childNodes[0].nodeValue);
	$('#twohundredtwentynine').html(x.getElementsByTagName("twohundredtwentynine")[0].childNodes[0].nodeValue);
	$('#twohundredthirty').html(x.getElementsByTagName("twohundredthirty")[0].childNodes[0].nodeValue);
	$('#twohundredthirtysix').html(x.getElementsByTagName("twohundredthirtysix")[0].childNodes[0].nodeValue);
	$('#twohundredfourtythree').html(x.getElementsByTagName("twohundredfourtythree")[0].childNodes[0].nodeValue);
	$('#twohundredfourtyfour').html(x.getElementsByTagName("twohundredfourtyfour")[0].childNodes[0].nodeValue);
	$('#twohundredfourtyfive').html(x.getElementsByTagName("twohundredfourtyfive")[0].childNodes[0].nodeValue);
	$('#twohundredfourtyeight').html(x.getElementsByTagName("twohundredfourtyeight")[0].childNodes[0].nodeValue);
	$('#twohundredfourtynine').html(x.getElementsByTagName("twohundredfourtynine")[0].childNodes[0].nodeValue);
	$('#twohundredfifty').html(x.getElementsByTagName("twohundredfifty")[0].childNodes[0].nodeValue);
	$('#twohundredfiftythree').html(x.getElementsByTagName("twohundredfiftythree")[0].childNodes[0].nodeValue);
	$('#twohundredfiftyfour').html(x.getElementsByTagName("twohundredfiftyfour")[0].childNodes[0].nodeValue);
	$('#twohundredfiftyfive').html(x.getElementsByTagName("twohundredfiftyfive")[0].childNodes[0].nodeValue);
	$('#twohundredsixtythree').html(x.getElementsByTagName("twohundredsixtythree")[0].childNodes[0].nodeValue);
	$("input[type='submit']").attr("value", x.getElementsByTagName("twohundredsixtysevenitwelve")[0].childNodes[0].nodeValue); 
	$('#twohundredsixtynine').text(x.getElementsByTagName("twohundredsixtynine")[0].childNodes[0].nodeValue);
	
}
