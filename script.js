//your JS code here. If required.

const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

function removeArticles(bandName) {
    return bandName.replace(/\b(a |an |the )\b/gi, '').trim();
}

const sortedBands = bands.sort((a, b) => removeArticles(a) > removeArticles(b) ? 1 : -1);
			   
const ultag = document.createElement("ul");
ultag.id = "band";

sortedBands.forEach((item) =>{
	const liTag = document.createElement("li");
	liTag.textContent = item;
	ultag.appendChild(liTag);
});

document.body.appendChild(ultag);