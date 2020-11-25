const gitLink  = 'https://api.github.com/repos/jefoce/xmi/releases/latest';

const xhr = new XMLHttpRequest();
const isPath = (pathName) => window.location.pathname.includes(pathName);

xhr.open('GET', gitLink);
xhr.onload = function() {

	const git = JSON.parse(xhr?.response);
	const app = {
		ver : git?.tag_name || '',
		link: git?.assets ? git?.assets[0]?.browser_download_url : '#'
	}

	console.log(window.location.pathname);
}
xhr.send();


/**
 * @param {{ver: string; link: string}} info 
 */
function onLoad(info)
{
	if (isPath('index')) {

		document.body.querySelector('#download').href = info.link;
		document.body.querySelector('#version').textContent += info.ver;
		return;
	}

	if (isPath('download')) {
		window.location.replace('https://site.com')
	}
}

