var userInputField = document.getElementById("user-input-field");
var cardHolder = document.getElementById("card-holder");
var famousPeople =	[
			  {	  title: "Secretary",
				  name: "Alexander Hamilton",
				  bio: "He was an influential interpreter and promoter of the U.S. Constitution, as well as the founder of the nation's financial system, the Federalist Party, the United States Coast Guard, and The New York Post newspaper. ",
				  image: "https://www.biography.com/.image/c_fill,cs_srgb,dpr_1.0,g_face,h_300,q_80,w_300/MTE5NDg0MDU0OTg3MjQ1MDcx/alexander-hamilton-9326481-1-401.jpg",
				  lifespan: {
				    birth: 1757,
				    death: 1804
				  }
				},
					  {title: "Vice President",
				  name: "Aaron Burr",
				  bio: "Burr served as a Continental Army officer in the Revolutionary War, after which he became a successful lawyer and politician. He was elected twice to the New York State Assembly, was appointed New York state attorney general , was chosen as a United States senator from the state of New York, and reached the apex of his career as vice president.",
				  image: "https://www.biography.com/.image/c_fill,cs_srgb,dpr_1.0,g_face,h_300,q_80,w_300/MTE4MDAzNDEwNDY3NjUzMTM0/aaron-burr-9232241-1-402.jpg",
				  lifespan: {
				    birth: 1756,
				    death: 1836
				  }
				},
					 { title: "Mrs",
				  name: "Elizabeth Schuyler Hamilton",
				  bio: "Co-founder and deputy director of the first private orphanage in New York City.",
				  image: "http://images.8tracks.com/cover/i/009/913/241/Mrs._Elizabeth_Schuyler_Hamilton-9793.jpg?rect=0,71,861,861&q=98&fm=jpg&fit=max",
				  lifespan: {
				    birth: 1757,
				    death: 1854
				  }
				},
					  {title: "Major General",
				  name: "Marie-Joseph Paul Yves Roch Gilbert du Motier, Marquis de Lafayette ",
				  bio: "A French aristocrat and military officer who fought in the American Revolutionary War. A close friend of George Washington, Alexander Hamilton, and Thomas Jefferson, Lafayette was a key figure in the French Revolution of 1789 and the July Revolution of 1830.",
				  image: "https://www.biography.com/.image/c_fill,cs_srgb,dpr_1.0,g_face,h_300,q_80,w_300/MTIwNjA4NjM0MjM1OTQ2NTA4/marquis-de-lafayette-21271783-1-402.jpg",
				  lifespan: {
				    birth: 1757,
				    death: 1834
				  }
				},
					  {title: "Mister",
				  name: "Hercules Mulligan",
				  bio: "A tailor and spy during the American Revolutionary War.",
				  image: "https://pixel.nymag.com/imgs/daily/vulture/2016/12/26/26-george-michael-1.w190.h190.2x.jpg",
				  lifespan: {
				    birth: 1740,
				    death: 1825
				  }
				},
					  {title: "King",
				  name: "George William Frederick",
				  bio: "King of Great Britain and Ireland until the union of the two countries on, after which he was King of the United Kingdom of Great Britain and Ireland until his death. He was concurrently Duke and prince-elector of Brunswick-Lüneburg in the Holy Roman Empire until his promotion to King of Hanover on 12 October 1814.",
				  image: "https://www.biography.com/.image/c_fill,cs_srgb,dpr_1.0,g_face,h_300,q_80,w_300/MTMxNjM0MjYxMTQ4MDUyMDk5/king-george-iii-wikicommonsjpg.jpg",
				  lifespan: {
				    birth: 1760,
				    death: 1820
				  }
				}
					]

for (var i = 0; i < famousPeople.length; i++) {
	var historyCard = "";
	historyCard += `<header>${famousPeople[i].title} ${famousPeople[i].name}</header>`
	historyCard += `<section>${famousPeople[i].bio}<br> <img src=${famousPeople[i].image}></section>`
	historyCard += `<footer>Born: ${famousPeople[i].lifespan.birth}<br>Died: ${famousPeople[i].lifespan.death} </footer>`
	cardHolder.children[i].innerHTML = historyCard;
	cardHolder.children[i].className += " person__container";
	cardHolder.children[i].id += `person--${i}`;
}

function personElementSelector(selectedEl) {
	classSelected = document.getElementsByClassName("selected");
		if (selectedEl.classList[2] === "selected") {
			selectedEl.classList.toggle("selected");
		} 
		else {
			while (classSelected.length)
			classSelected[0].classList.remove("selected");
			selectedEl.classList.toggle("selected");
		}
		if (selectedEl.classList[2] === "selected") {
			userInputField.focus();
			userInputField.value = selectedEl.children[1].childNodes["0"].textContent;
		} 
		else {
		userInputField.blur();
		}

}

function clickElement(event) {
	if (event.target.parentElement.localName === "person") {
		selectedEl = event.target.parentNode;
		personElementSelector(selectedEl)
	} 
	else if (event.target.localName === "person") {
		selectedEl = event.target;
		personElementSelector(selectedEl)		
	}
	else {
		selectedEl = event.target.parentNode.parentNode;
		personElementSelector(selectedEl)		
	}
}

function copyText(event) {
	if (event.keyCode !== 13) {
		selectedEl.children[1].childNodes["0"].textContent = userInputField.value;
	} 
	else {
		userInputField.blur();
		userInputField.value = "";
	    classSelected[0].classList.remove("selected");
	}
}

// Now containerEl will have elements in it
var containerEl = document.getElementsByClassName("person__container");

// Event listeners are created
for (var i = 0; i < containerEl.length; i++) {
  // Logic to execute when the element is clicked
  containerEl[i].addEventListener("click", function(event) {
  	clickElement(event);
  });
};

userInputField.addEventListener("keyup", function(event) {
	copyText(event);

});


