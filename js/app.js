//find the input box for name.
let nameInput = document.getElementById('name');
//focus on it when the page loads.
window.onload = () => nameInput.focus();

let jobRoleElement = document.getElementById('other-title');
let titleDropdown = document.getElementById('title');
let otherSelection = document.getElementById('other-selector');
console.log(jobRoleElement);
console.log(titleDropdown);
console.log(otherSelection);

//hide jobRoleElement
() => $(jobRoleElement).hide();

titleDropdown.addEventListener('change', () => {
  if(titleDropdown.hasAttribute('other-selector') === true ){
    $(jobRoleElement).show();
  }else{$(jobRoleElement).hide();}
})



//if this.id
