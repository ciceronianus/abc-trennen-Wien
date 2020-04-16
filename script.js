/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
// source: https://stackoverflow.com/questions/43622127/filtering-table-multiple-columns/43622296

function filterTable(event) {
    var filter = event.target.value.toUpperCase();
    var rows = document.querySelector("#ABCtable tbody").rows;
    
    for (var i = 0; i < rows.length; i++) {
        var firstCol = rows[i].cells[0].textContent.toUpperCase();
        var secondCol = rows[i].cells[1].textContent.toUpperCase();
        if (firstCol.indexOf(filter) > -1 || secondCol.indexOf(filter) > -1) {
            rows[i].style.display = "";
        } else {
            rows[i].style.display = "none";
        }      
    }
}

document.querySelector('#ABCinput').addEventListener('keyup', filterTable, false);