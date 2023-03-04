/** 
 * 메뉴
 */

function toggleMenu() {
	const menu = document.getElementById('menu-list');

	if (menu.style.left === '0px') {
		menu.style.left = '-200px';
	} else {
		menu.style.left = '0px';
	}
}