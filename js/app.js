//find the input box for name.
let nameInput = document.getElementById('name');
//focus on it when the page loads.
window.onload = () => nameInput.focus();
//input box for job role.
let jobRoleElement = document.getElementById('other-title');
//this is the dropdown box for other title.
let titleDropdown = document.getElementById('title');

//create function to hide elements
function hideElement(element){
  element.style.display = 'none'
}
//hide jobRoleElement by default
hideElement(jobRoleElement);
//create function that shows jobRoleElement
function showElement(element){
  element.style.display = 'block'
}

//listen for a change in the titleDropdown
titleDropdown.addEventListener('change', function(event){
  let selection = event.target; //create a variable = the target of the event
  if(selection.value === 'other'){showElement(jobRoleElement);} else {hideElement(jobRoleElement);}
})//if value is other, show text box. Otherwise? Don't.

let shirtDesignDropdown = document.getElementById('design');//assign the design dropdown to a variable.
let colorChoices = document.getElementById('color');//assign color dropdown to variable.
let defaultColor = document.getElementById('default');//assign default option in color dropdown to variable.

function hideColorChoices(choice){
	let selection = event.target;
		for(let i = 0; i < colorChoices.length; i += 1){
			if(colorChoices[i].className === choice){
				colorChoices[i].style.display = 'none';
			} else{colorChoices[i].style.display = 'block';}
		}
}

function showAllChoices(){
	let selection = event.target;
		for(let i = 0; i < colorChoices.length; i+=1){
		colorChoices[i].style.display = 'block';
		}
}

shirtDesignDropdown.addEventListener('change', () => {
	let selection = event.target;
		if(selection.value === 'js puns' ){
			defaultColor.setAttribute('selected', 'selected');
			hideColorChoices('hearts');
		}	
		else if(selection.value === 'heart js'){
			defaultColor.setAttribute('selected', 'selected');
			hideColorChoices('puns');
		}
		else{showAllChoices();}
		
})


/*
function arrayHide(array){
  for(let i=0; i < array.lengthl; i += 1){
	    if(array[i].className === )


//listen for a change in the shirtDesignDropdown
shirtDesignDropdown.addEventListener('change', function(event){
  let selection = event.target;//create a variable to listen for the target.
    if(selection.value === 'heart js'){arrayHide(jsPuns);}
    else if (selection.value === 'js puns') {arrayHide(heartJs);}
});

console.log(shirtDesignDropdown);
console.log(heartJs);
console.log(jsPuns);
*/
