![Title Banner](https://raw.githubusercontent.com/drworm75/WYSIWYG/master/images/wysiwyg-readme.png)

### Description: 

*Create an array of objects that represents famous people.

*Create a text input in your DOM.

*Create a container, block element in your DOM.

*Create a DOM element for each of the objects inside the container. 

*For every even numbered element, have a light yellow background.

*For every odd numbered element, have a light blue background.

*When you click on one of the person elements, a dotted border should appear around it.

*When you click on one of the person elements, the text input should immediately gain focus so that you can start typing.

*When there is a highlighted person element, and you begin typing in the input box, the person's biography should be immediately bound to what you are typing, letter by letter.

*When you press the enter/return key when typing in the input field, then the content of the input field should immediately be blank.

### Final Result:
> Click on a card, and the input field becomes focused.  Hit the enter key, and the field becomes blank, and the card is deselected.  If a seclected card is clicked again, it becomes deselected.  


![Page Screenshot](https://raw.githubusercontent.com/drworm75/WYSIWYG/master/images/wysiwyg-screenshot.png)

### Takehome Lesson:

> There were a few challenged that I encounted in this lesson. The first was not reading the intructions throughly, and I was attempting to make the person info in JavaScript into an object containing objects.  Everything went better once I changed to and array of objects, as noted on the assignment.  

>From there, it was easy enough to add a selected class to each card when it an element of the card was clicked, but more difficult to get the code working that would deselect on a second click, or when another card was clicked.  Then I worked through getting the card selected if part of the card element itself was clicked or the image was clicked.  

>Another issue was the image dissappering when the bio was rewritten, because I was writing directly to the section element.  Spending a good amount of time serching through the DOM, I discovered the textContent field, which edited only the element's text, keeping the image intact.


### How to run (Node must be installed on your machine):
```
git clone https://github.com/drworm75/WYSIWYG.git
cd WYSIWYG.git
npm install http-server -g
http-server -p 8080
```

This will show in your browser at:
`http://localhost:8080`

### Contributors:
[Dwayne Pate](https://github.com/drworm75)