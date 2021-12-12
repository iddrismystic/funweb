const fbyt = document.getElementsByClassName(".fbyt")
const box = `
<script type="text/javascript">
	atOptions = {
		'key' : 'df8d1a1bd99e58263575d069892cee07',
		'format' : 'iframe',
		'height' : 250,
		'width' : 300,
		'params' : {}
	};
	document.write('<scr' + 'ipt type="text/javascript" src="http' + (location.protocol === 'https:' ? 's' : '') + '://www.variousformatscontent.com/df8d1a1bd99e58263575d069892cee07/invoke.js"></scr' + 'ipt>');
</script>
`
fbyt.innerHTML = box;
