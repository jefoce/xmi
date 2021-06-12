const gitLink  = 'https://api.github.com/repos/jefoce/xmi/releases/latest';
const isProperty = (pathName) => window.location.search.includes(pathName);

const xhr = new XMLHttpRequest();

xhr.open('GET', gitLink);
xhr.onload = function() {

	const git = JSON.parse(xhr?.response);
	const info = {
		ver : git?.tag_name ? ' ' + git?.tag_name : '',
		link: git?.assets ? git?.assets[0]?.browser_download_url : '#'
	}

	onLoad(info);
}
xhr.send();


/**
 * @param {{ver: string; link: string}} info 
 */
function onLoad(info)
{
	if (isProperty('download') && !!info.link) {
		
		window.location.href = info.link;
		window.history.replaceState(null, null, window.location.pathname);
	}

	// Index Page
	document.body.querySelector('#download').href = info.link;
	document.body.querySelector('#version').textContent += info.ver;
}

