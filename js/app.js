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

//create a function to hide color choices. Choice is argument of the classname that will be hidden and elements to be shown.
function hideColorChoices(choice){
	let selection = event.target;
		for(let i = 0; i < colorChoices.length; i += 1){
			if(colorChoices[i].className === choice){
				colorChoices[i].style.display = 'none';
			} else{colorChoices[i].style.display = 'block';}
		}
}

//create a function to show all of the choices
function showAllChoices(){
	let selection = event.target;
		for(let i = 0; i < colorChoices.length; i+=1){
		colorChoices[i].style.display = 'block';
		}
}

//create a functino that will take a class name as an argument.
function setDefaultOption(nameOfClass){
  for(i=0; i<colorChoices.length; i+=1){//for each item in the array of colorChoices
    if(colorChoices[i].style.display === 'block' && colorChoices[i].className === nameOfClass){//If it has a block style display and matches the className passed as an arg.
          colorChoices[i].defaultSelected = true;//set it as the default selected.
          //this function ensures that once user switches between the shirt type options,
          //they will not be able to pick a color specific to the other shirt type.
    }
  }
}

shirtDesignDropdown.addEventListener('change', () => {//on a change
	let selection = event.target;
		if(selection.value === 'js puns' ){//if the value of the selected is the js puns
			hideColorChoices('hearts');//hide the heart colors
      setDefaultOption('puns');//default selection is a pun color.
		}
		else if(selection.value === 'heart js'){//if the value of the selected is heart js
			hideColorChoices('puns');//hide the pun colors
      setDefaultOption('hearts');//default selection is a heart color.
		}
		else{showAllChoices();}//neither heart nor pun? show it all.


})

let checkboxAllLabels = document.getElementsByClassName('checkbox');//get all items in the document with the checkbox class name (labels)
let allCheckbox = document.getElementsByClassName('box');//get all of the checkboxes.
let costArray = []; //make an empty array

function getCosts(){//create a function called getCosts
	for(i=0; i<checkboxAllLabels.length; i += 1){//for each item in the checkboxAll
		let currentBox = checkboxAllLabels[i];//let currentBox be the current checkbox
		let currentBoxValue = currentBox.innerText;//let currentBoxValue be the innerText content of the current checkbox. Also parse that value for adding purposes
		function pricingValue(){//create a function called pricing value.
			let price = parseInt(currentBoxValue.substr(currentBoxValue.length - 3));//let price equal the last 3 string char of the  currentBoxValue, parsed to an integer.
			costArray.push(price);//push the value to the cost array.
		}
		pricingValue();//run pricingValue
	}
}

getCosts();//run getCosts

let totalPrice;
let activitiesLearning = document.getElementsByClassName('activities');
console.log(activitiesLearning);

activitiesLearning.addEventListener('change', function checkPrice(){
	for(i=0; i<allCheckbox.length; i += 1){
		let checker = allCheckbox[i];
		if(checker.checked){totalPrice = totalPrice + costArray[i];}
		else if(checker.checked = false){totalPrice = totalPrice - costArray[i];}
		console.log(totalPrice);
	}
})

