import { useEffect, useState } from 'react';

export const _useProgramInfo = () => {
	const [link, setLink] = useState('#');
  const [version, setVersion] = useState('0.0.0.0');

	useEffect(() => {
		fetch("https://api.github.com/repos/jefoce/xmi/releases/latest").then(async (res: any) => {
      const { tag_name, assets } = await res.json();

      tag_name && setVersion(tag_name);
      assets && setLink(assets[0]?.browser_download_url || "#");
    });
	}, []);

	return { link, version };
};
