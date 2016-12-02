// Tree Object

var treeSpecs = {
    height: 0,
    character: '',
}


// Variable attatched to html elements

var growTree = document.querySelector('#growtree');

treeSpecs.character = document.querySelector('#character')




// Main grow function

function tree (myObject) {

treeSpecs.height = document.querySelector('#tree-height').value;


var numbOfSpaces = treeSpecs.height;

var numbOfChars = 1;

         if ((treeSpecs.height === '') || (treeSpecs.character.value === '')) {

            console.log(treeSpecs.height)
             
             alert('Both fields must have a value')

         } else {

        console.log("```\n");

        for (var i = 0; i <= treeSpecs.height; i++ ) {

            var blankSpace = ' '.repeat(numbOfSpaces);

            var printChars = treeSpecs.character.value.repeat(numbOfChars)

            console.log(blankSpace + printChars + blankSpace + '\n');

             numbOfSpaces -= 1;

             numbOfChars += 2;

        }
        console.log("```\n");

        console.log(treeSpecs.height);
    }

};



// Event Listeners


growTree.addEventListener("click", tree);

document.getElementById('tree-height').addEventListener('keypress', function (e) {
    var key = e.which || e.keyCode;
    if (key === 13) { 
        tree();
    }
});

document.getElementById('character').addEventListener('keypress', function (e) {
    var key = e.which || e.keyCode;
    if (key === 13) { 
        tree();
    }
});
