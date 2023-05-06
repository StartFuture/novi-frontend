export const rmAcceptAll = () => {
    let acceptAll = document.getElementById("acceptAll");
    let checkboxList = document.querySelectorAll("input[name=acceptTerm]");
    let countChecks = 0;

    for (let i = 0; i < checkboxList.length; i++) {
        if (checkboxList[i].checked === true) {
            countChecks++;
        }
    }
    
    if ( acceptAll.checked === true && countChecks < 3 ) {
        acceptAll.checked = false;
    }

    if ( acceptAll.checked === false && countChecks === 3 ) {
        acceptAll.checked = true;
    }
};