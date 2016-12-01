// Tree Object

var treeSpecs = {
    height: 0,
    character: '',
}

// Variable attatched to html elements

var growTree = document.querySelector('#growtree');

var treeHeight = document.querySelector('#tree-height');

treeSpecs.character = document.querySelector('#character');

// Event Listener on button

growTree.addEventListener("click", function tree (myObject) {

document.querySelector('#tree-spot').innerHTML = treeSpecs.character.value;



});

//  FUNCTIONS

function treeLines() {


   
}

// Main Button grow function






// call function



treeLines();
