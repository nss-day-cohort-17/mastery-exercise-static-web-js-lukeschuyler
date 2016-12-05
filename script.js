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

myObject.height = document.querySelector('#tree-height').value;

var numbOfSpaces = myObject.height;

var numbOfChars = 1;

        // conditional statement for whether fields are valid

        if ((myObject.height === '') || (myObject.character.value === '')) {
             
             alert('Both fields must have a value')

             } else {

            //  if valid than run the loop for the christmas tree

            console.log("```\n");

            for (var i = 0; i < myObject.height; i++ ) {

                var blankSpace = ' '.repeat(numbOfSpaces);

                var printChars = myObject.character.value.repeat(numbOfChars);

                console.log(blankSpace + printChars + blankSpace + '\n');

                 numbOfSpaces -= 1;

                 numbOfChars += 2;

        }
                console.log("```\n");

    }

};



// Event Listeners


growTree.addEventListener("click", function (e) {
    e.preventDefault();
    tree(treeSpecs);
});

document.getElementById('tree-height').addEventListener('keypress', function (e) {
    var key = e.which || e.keyCode;
    if (key === 13) { 
        tree(treeSpecs);
    }
});

document.getElementById('character').addEventListener('keypress', function (e) {
    var key = e.which || e.keyCode;
    if (key === 13) { 
        tree(treeSpecs);
    }
});
