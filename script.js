// Tree Object

var treeSpecs = {
    height: 0,
    character: '',
}

// Variable attatched to html elements

var growTree = document.querySelector('#growtree');

treeSpecs.character = document.querySelector('#character');

// Event Listener on button

growTree.addEventListener("click", function tree () {

treeSpecs.height = document.querySelector('#tree-height').value;

var treeSpot = document.querySelector('#tree-spot');

var numbOfSpaces = treeSpecs.height;

var numbOfChars = 1;

        console.log("```\n");

        for (var i = 0; i <= treeSpecs.height; i++ ) {

            var blankSpace = ' '.repeat(numbOfSpaces);

            var printChars = treeSpecs.character.value.repeat(numbOfChars)

            console.log(blankSpace + printChars + blankSpace + '\n');

             numbOfSpaces -= 1;

             numbOfChars += 2;

        }
        console.log("```\n");
});

//  FUNCTIONS

function treeLines(lineAmount) {



}
// Main Button grow function




// call function



treeLines();





// " ``` <br>" + '\s'.repeat(numbOfSpaces) + treeSpecs.character.value.repeat(numbOfChars) + '\s'.repeat(numbOfSpaces) + '<br>';
