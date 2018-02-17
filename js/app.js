//find the input box for name.
let nameInput = document.getElementById('name');
//focus on it when the page loads.
window.onload = () => nameInput.focus();
//input box for job role.
let jobRoleElement = document.getElementById('other-title');
//this is the dropdown box for other title.
let titleDropdown = document.getElementById('title');

//create function to hide jobRoleElement
function hideOtherText(){
  jobRoleElement.style.display = 'none'
}
//hide jobRoleElement by default
hideOtherText();
//create function that shows jobRoleElement
function showOtherText(){
  jobRoleElement.style.display = 'block'
}

//listen for a change in the titleDropdown
titleDropdown.addEventListener('change', function(event){
  let selection = event.target //create a variable = the target of the event
  if(selection.value === 'other'){showOtherText();} else {hideOtherText();}
}) 
