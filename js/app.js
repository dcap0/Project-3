
	//find the input box for name.
	const nameInput = document.getElementById('name');
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

	const shirtDesignDropdown = document.getElementById('design');//assign the design dropdown to a variable.
	const colorChoices = document.getElementById('color');//assign color dropdown to variable.
	const defaultColor = document.getElementById('default');//assign default option in color dropdown to variable.


		function defaultHide(){
			for(let i = 0; i < colorChoices.length; i+=1){
			colorChoices[i].style.display = 'none';
			}
		}
		defaultHide();

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
	function hideAllChoices(){
		let selection = event.target;
			for(let i = 0; i < colorChoices.length; i+=1){
			colorChoices[i].style.display = 'none';
			}
	}

	const colorInput = document.getElementById('colors-js-puns');

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

	$(colorInput).css('display', 'none');

	shirtDesignDropdown.addEventListener('change', () => {//on a change
		let selection = event.target;
			if(selection.value === 'js puns' ){//if the value of the selected is the js puns
				$(colorInput).css('display', 'block');
				hideColorChoices('hearts');//hide the heart colors
				setDefaultOption('puns');//default selection is a pun color.
			}
			else if(selection.value === 'heart js'){//if the value of the selected is heart js
				$(colorInput).css('display', 'block');
				hideColorChoices('puns');//hide the pun colors
				setDefaultOption('hearts');//default selection is a heart color.
			}
			else{$(colorInput).css('display', 'none');}//hide the box
	})

	let checkboxAllLabels = document.getElementsByClassName('checkbox');//get all items in the document with the checkbox class name (labels)
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

	function compareSelected(testerValue, selected){//function that takes 2 args
	$(`.checkbox:contains(${testerValue})`).children().attr('disabled', true);//checkbox's label contains first argument, add disabled attribute to all of it's children.
	if(selected.checked){//if 2nd arg is checked.
		$(selected).attr('disabled', false);//2nd arg will not be disabled
	}
	}

	function compareUnselected(testerValue, selected){
		$(`.checkbox:contains(${testerValue})`).children().attr('disabled', false);//checkbox label contains first arg when unchecked, enable checkbox.
	}


	for(let i=0; i<activitiesLearning.length; i+=1){//loop through all of the checkboxes.
		activitiesLearning[i].addEventListener('change', function(){//apply a change listener to box its on.
			let checked = activitiesLearning[i];
			let checkedParentText=$(checked).parent().text()
			if(this.checked){ //if box is checked
				let checkedLabel = checkboxAllLabels[i].innerText;//let checkedlabel be the current label's text
				let compareLabel = checkedLabel.substr(-22);//let compareLabel be the last 22 characters of the checkedLabel
				totalPrice = totalPrice + costArray[i];//add the total price of the course to the grand total
				compareSelected(compareLabel, this);//run compareSelected function with compareLabel and the checked box as args.
				$(this).addClass("select_ed");
			}
			else{//if box is unchecked
				let checkedLabel = checkboxAllLabels[i].innerText;//let checkedlabel be the current label's text
				let compareLabel = checkedLabel.substr(-22);//let compareLabel be the last 22 characters of the checkedLabel
				totalPrice = totalPrice - costArray[i];//subtract value from cost array
				compareUnselected(compareLabel, this);
				$(this).removeClass("select_ed");
			}//otherwise let totalPrice be the difference
			document.getElementById('pbox').innerHTML = '';//blank out whatever is currently showing in h2.
			priceLister("Total: $" +totalPrice);//append the totalPrice to the h2 element.
		})
	}

	//Get all of the divs related to the dropdown,
	const paymentDrop = document.getElementById('payment');
	const creditCard = document.getElementById('credit-card');
	const paypal = document.getElementById('paypal');
	const bitcoin = document.getElementById('bitcoin');

	function hidePayments(){//create a function that will hide all of the selections
		$(creditCard).hide();
		$(paypal).hide();
		$(bitcoin).hide();
	}

	hidePayments();//hide payments by default.

	paymentDrop.addEventListener('change', () => {//listen for a change in the dropdown
		let paymentSelection = event.target;//whatever is selected by the drop will be the variable
			if (paymentSelection.value === 'select_method'){//if the value of the variable is 'select_method'
				hidePayments();//hide everything
			}
			else if (paymentSelection.value === 'credit card') {//or if its credit card
				hidePayments();//hide everything
				$(creditCard).show();//show credit card
			}
			else if (paymentSelection.value === 'paypal') {//or if its paypal
				hidePayments();//hide everything
				$(paypal).show();//show paypal
			}
			else if (paymentSelection.value === 'bitcoin') {//or if its bitcoin
				hidePayments();//hide all
				$(bitcoin).show();//show bitcoin
			}
	})
});

////////////////////////////////////////////////////////////////////

const allBoxes = document.getElementsByClassName('box');
const registrationHead = document.getElementById('activities_legend');

function boxCheck(){
	let x = 0;
	for(let i=0; i<allBoxes.length; i++){
		if($(allBoxes).hasClass('select_ed') === false){
			x++;
		}
	}
	if(x > 0){
		tfArray[2] = false;
		$(registrationHead).addClass('thisInvalid');
	} else {
		tfArray[2] = true;
		$(registrationHead).removeClass('thisInvalid');
	}
}

const submitBtn = document.getElementById('submit');
let tfArray = []
const validArray = [true, true, true, true, true, true];

function valid(validField){
	$(validField).removeClass('thisInvalid');
}

function invalid(invalidField){
	$(invalidField).addClass('thisInvalid');
}

function nameCheck(){
	if(nameInput.value === ''){
		tfArray[0] = false;
		invalid(nameInput);
	} else {
		tfArray[0] = true;
		valid(nameInput);
	}
}

const userEmail = document.getElementById('mail');

function emailCheck(){
	thisEmail = userEmail.value;
	if (thisEmail.includes("@")){
		tfArray[1] = true;
		valid(userEmail);
	} else {
		tfArray[1] = false;
		invalid(userEmail);
	}
}

/*
for the credit card validation.
If the div with id 'credit-card' DOES NOT HAVE style='display: none;' AND the strings match.
 3 functions, one for CC number, one for zip, one for CVV.

 paymentDrop is the dropdown box
creditCard is the actual div where the inputs are.
*/

const ccNumber = document.getElementById('credit-card');
const ccInput = document.querySelector('#cc-num');
const bitcoinDiv = document.querySelector('#bitcoin');
const paypalDiv = document.querySelector('#paypal');
const zipInput = document.querySelector('#zip');
const cvvInput = document.querySelector('#cvv');

console.log

function paymentCheck(selection){
	if($(selection).css('display') == 'block'){
		valid(ccInput);
		valid(zipInput);
		valid(cvvInput);
		tfArray[3] = true;
		tfArray[4] = true;
		tfArray[5] = true;
	}
}

function ccNumberCheck(){
	if($(ccNumber).css('display') == 'block' && ccInput.value.length > 12 && ccInput.value.length < 17){
		tfArray[3] = true;
		valid(ccInput);
	} else {
		tfArray[3] = false;
		invalid(ccInput);
	}
}

function ccZipCheck(){
	if($(ccNumber).css('display') == 'block' && zipInput.value.length === 5){
		tfArray[4] = true;
		valid(zipInput);
	} else {
		tfArray[4] = false;
		invalid(zipInput);
	}
}

function cvvCheck(){
	if($(ccNumber).css('display') == 'block' && cvvInput.value.length === 3){
		tfArray[5] = true;
		valid(cvvInput);
	} else {
		tfArray[5] = false;
		invalid(cvvInput);
	}
}

let finalValid = false;

function validateA(){
	for(let i=0; i<validArray.length; i++){
		if(tfArray[i] === false){
			$(document.querySelector('.thisInvalid')).focus();
			break;
		} else {
			finalValid = true;
		}
	}
}

let form = document.querySelector('form');

function validateB(){
	if(finalValid === true){
		//trigger submission
		console.log('testGood');
	} else {console.log('testBad');}
}

$(submitBtn).click(
	function(e){
		e.preventDefault();
		nameCheck();
		emailCheck();
		boxCheck();
		ccNumberCheck();
		ccZipCheck();
		cvvCheck();
		paymentCheck(bitcoinDiv);
		paymentCheck(paypalDiv);
		validateA();
		validateB();
	}
)
