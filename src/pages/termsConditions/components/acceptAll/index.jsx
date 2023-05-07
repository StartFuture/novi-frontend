export default function acceptAll() {
    document.querySelector("input[name=acceptAll]").onclick = function(e) {
        let check = e.target.checked;
        let checkboxList = document.querySelectorAll("input");

        for (let i = 0 ; i < checkboxList.length ; i++) { 
            checkboxList[i].checked = check;
        };
    };
};