// Tree Object

var treeSpecs = {
    height: 0,
    character: '',
}

// Variable attatched to html elements

var growTree = document.querySelector('#growtree');

treeSpecs.character = document.querySelector('#character');

// Event Listener on button

growTree.addEventListener("click", function tree (myObject) {

document.querySelector('#tree-spot').innerHTML = treeSpecs.character.value;

treeSpecs.height = document.querySelector('#tree-height').value;

        for (var i = 0; i < treeSpecs.height; i += 2) {

            if (treeSpecs.height = 1)  {

                

            }

    }

});

//  FUNCTIONS

function treeLines(lineAmount) {



}
// Main Button grow function






// call function



treeLines();
