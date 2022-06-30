let active = false;

function makeOrange(color: string): void {
    document.body.style.backgroundColor = color;
}

chrome.action.onClicked.addListener((tab) => {
	chrome.action.setPopup({
		popup: "Login.html"	
	});
});