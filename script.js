function $(id) {
	return document.getElementById(id);
}
const menuBars = $("menu-bars");
const overlay = $("overlay");
const nav1 = $("nav-1");
const nav2 = $("nav-2");
const nav3 = $("nav-3");
const nav4 = $("nav-4");
const nav5 = $("nav-5");
const navItems = [nav1, nav2, nav3, nav4, nav5];
// Control navigation Animation
function navAnimation(direction1, direction2) {
	navItems.forEach((nav, i) => {
		nav.classList.replace(
			`slide-${direction1}-${i + 1}`,
			`slide-${direction2}-${i + 1}`
		);
	});
}

function toggleNav() {
	// Toggle: Menu bars open/closed
	menuBars.classList.toggle("change");
	// Toggle: Menu active
	overlay.classList.toggle("overlay-active");
	if (overlay.classList.contains("overlay-active")) {
		// Animated In -Overlay
		overlay.classList.replace("overlay-slide-left", "overlay-slide-right");

		// Animated IN - Nav Items
		navAnimation("out", "in");
	} else {
		// Animated Out -Overlay
		overlay.classList.replace("overlay-slide-right", "overlay-slide-left");
		// Animated OUT - Nav Items
		navAnimation("in", "out");
	}
}

// Event listener
menuBars.addEventListener("click", toggleNav);
navItems.forEach((nav) => {
	nav.addEventListener("click", toggleNav);
});
