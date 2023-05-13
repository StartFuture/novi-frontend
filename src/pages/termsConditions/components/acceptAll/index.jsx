export const acceptAll = (e) => {
  let checkboxList = document.querySelectorAll("input[name=acceptTerm]");
  
  //Accept all terms and conditions input[name=acceptAll]
  if (e.target.checked === true) {
    for (let i = 0; i < checkboxList.length; i++) {
      checkboxList[i].checked = true;
    }
  } else {
    for (let i = 0; i < checkboxList.length; i++) {
      checkboxList[i].checked = false;
    }
  }
};
