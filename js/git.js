const gitLink  = 'https://api.github.com/repos/jefoce/xmi/releases/latest';
const version  = document.body.querySelector('#version');
const download = document.body.querySelector('#download');

const xhr = new XMLHttpRequest();

xhr.open('GET', gitLink);
xhr.onload = function() {

	const git = JSON.parse(xhr?.response);
	const app = {
		ver : git?.tag_name,
		link: git?.assets ? git?.assets[0]?.browser_download_url : ''
	}

	download.href = app?.link || '#';
	version.textContent += !!app?.ver ? ` ${app?.ver}` : '';
}
xhr.send();