
	//find the input box for name.
	let nameInput = document.getElementById('name');
	//focus on it when the page loads.
	window.onload = () => nameInput.focus();

$(document).ready(function () {

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

	//create a function that will take a class name as an argument.
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
	let totalPrice = 0;//Let totalPrice be 0
	let activitiesLearning = document.getElementsByClassName('box');

	function priceBox(){ //function for creating h2 element with ID pbox and appending it.
		let box = document.createElement('h2');
		box.setAttribute('id', 'pbox');
		document.getElementById('activities').appendChild(box);
	}



	function priceLister(cost){ //making a text node and appending it to the h2 element
		let price = document.createTextNode(cost);
		document.getElementById('pbox').appendChild(price);
	}

	priceBox();//Run price box

	let textContent=[];
	$('.checkbox').each(function(){
		textContent.push(this.innerText);
	});

	function compareSelected(testerValue){
		if($(`.checkbox:contains(${testerValue})`)){
				$('.checkbox').children().attr('disabled',true);
		}
	}
	
	for(let i=0; i<activitiesLearning.length; i+=1){//loop throug all of the checkboxes.
		activitiesLearning[i].addEventListener('change', function(){//apply a change listener to box its on.
			if(this.checked){
				totalPrice = totalPrice + costArray[i];
				let checkedLabel = checkboxAllLabels[i].innerText;
				let compareLabel = checkedLabel.substr(-22);
				console.log(compareLabel);
				compareSelected(compareLabel);	
				//get the value of attached label. Label is parent element.
			}
			else{
				totalPrice = totalPrice - costArray[i];
			}//otherwise let totalPrice be the difference
			document.getElementById('pbox').innerHTML = '';//blank out whatever is currently showing in h2.
			priceLister("Total: $" +totalPrice);//append the totalPrice to the h2 element.

		})
	}

	//$('.box').on('change', console.log(this));	
	
});

//if this is selected.
//iterate through labels. If label content matches array value of this, 
//disable label.child().attr('disabled', true)

//Thanks for the follow nmarulo!! Appreciate ya (^-^)





			//while(this.checked){//while the checkbox is checked.
			//	for(y=0;y=allCheckbox.length;y+=1){
			//		if($('#activities').has('label') === checkboxAllLabels[y]){
			//			$(allCheckbox).attr('disabled', true);
			//		} else {
			//			$(allCheckbox).attr('disabled', true);
			//		}
			//	}
			//}












/* 
				if(checkedLabel.substr(-22) === textContent[i].substr(-22) && allCheckbox[i] != this){
						$(activitiesLearning[i]).attr('disabled', true);
					} else {$(allCheckbox[i]).attr('disabled', false);} */

/*for (let i=0;i<activitiesLearning.length; i+=1){
	activitiesLearning[i].addEventListener('change', function(){
		let thing = activitiesLearning[i];
		if(thing.checked){
			let testingValue = textContent;
			for(let y=0;y<activitiesLearning.length; y+=1){
				if(checkboxAllLabels[y] === testingValue[y]){
					allCheckbox[y].hasAttribute('disabled', true);
				} else {allCheckbox[y].hasAttribute('disabled', false);}
			}
		}
	})
}
*/

//if checkbox.checked,Loop through all labels. if label[i].substr(-22) === any other label.subst(-22), disable checkbox of that label
