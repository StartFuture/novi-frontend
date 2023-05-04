export default function rmAcceptAll() {
    document.querySelectorAll("input[name=acceptTerm]").onclick = function(e) {
        let check = e.target.checked;
        let acceptAll = document.getElementById("acceptAll");

        if ( check !== true ) {
            acceptAll.checked = false;
        };
    };
};