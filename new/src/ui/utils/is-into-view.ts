const maxRange = 0.5 * window.innerHeight;

export const isIntoView = (target: HTMLElement | null) => {
	if (!target) return false;

	const wTop = window.pageYOffset;  
	const tTop = target.offsetTop;
	const tBottom = target.offsetHeight + target.offsetTop;
	
	const inTopRange = Math.abs(wTop - tTop) > maxRange;
	const inBottomRange = Math.abs(wTop - tBottom) < maxRange;

	return inTopRange && inBottomRange;
}