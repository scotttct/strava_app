$url =  'https://www.strava.com/oauth/token?';
$oauthFields = array(
	        'client_id' => $44242,
		'client_secret' => $469a81b5bfb679b8576db8607d2054d3c3b698eb,
		'refresh_token' => $5ac5800179163d8735503431c9139ff962fa08f7,
		'grant_type' => 'refresh_token');

$parameters = http_build_query($oauthFields);

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url.$parameters);
curl_setopt($ch, CURLOPT_POST, count($oauthFields));
curl_setopt($ch, CURLOPT_POSTFIELDS, $parameters);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_USERAGENT, 'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1; .NET CLR 1.0.3705; .NET CLR 1.1.4322)');

$urlResponse = curl_exec($ch);
curl_close($ch);
$obj =json_decode($urlResponse, true);

$access_token = $obj['access_token'];
$refresh_token = $obj['refresh_token'];
