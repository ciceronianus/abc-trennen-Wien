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

/*gelbe Tonne*/
// var gelbeTonneMatches = document.getElementsByClassName("gelbe_tonne");

// console.log(gelbeTonneMatches);
// console.log(gelbeTonneMatches.length)

// for (var i=0; i<gelbeTonneMatches.length; i++){
//     gelbeTonneMatches.item(i).classList.add('w3-tag');
//     gelbeTonneMatches.item(i).classList.add('w3-yellow');
//     console.log(gelbeTonneMatches.item(i).classList);
// }

function findAllMarks(){
    var allMarks = document.getElementsByTagName("mark");
    console.log(allMarks);
    console.log(allMarks.length);

    for (var i=0; i<allMarks.length; i++){
        console.log(allMarks.item(i).className);
        switch (allMarks.item(i).className){
            case "gelbe_tonne":
           
                allMarks.item(i).classList.add('w3-tag');
                allMarks.item(i).classList.add('w3-yellow');
              
                break;
            case "biotonne":
                allMarks.item(i).classList.add('w3-tag');
                allMarks.item(i).classList.add('w3-brown');
                break;
            case "altpapier":
                allMarks.item(i).classList.add('w3-tag');
                allMarks.item(i).classList.add('w3-red');
                break;
            case "glascontainer":
                    allMarks.item(i).classList.add('w3-tag');
                    allMarks.item(i).classList.add('w3-green');
                    break;
            case "restmull":
                allMarks.item(i).classList.add('w3-tag');
                allMarks.item(i).classList.add('w3-orange');
                break;

            default:
                allMarks.item(i).classList.add('w3-tag');
                allMarks.item(i).classList.add('w3-pale-yellow');
        }
        
        
      
    }
}

findAllMarks();