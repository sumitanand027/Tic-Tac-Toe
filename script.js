const firstbox = document.querySelector('#first-box');
const secondbox = document.querySelector('#second-box');
const thirdbox = document.querySelector('#third-box');
const fourthbox = document.querySelector('#fourth-box');
const fifthbox = document.querySelector('#fifth-box');
const sixthbox = document.querySelector('#sixth-box');
const seventhbox = document.querySelector('#seventh-box');
const eightbox = document.querySelector('#eight-box');
const ninthbox = document.querySelector('#ninth-box');
const result = document.querySelector('#result');

// O is 0 and X is 1
// starts with 1 ( X )

let turn = 0;
var allBoxes = [firstbox, secondbox, thirdbox, fourthbox, fifthbox, sixthbox, seventhbox, eightbox, ninthbox];
let markedBoxes = [];


for (let i = 0; i < 9; i++) {
    let curBox = allBoxes[i];
    curBox.addEventListener('mouseover', function () {
        console.log( 'ON BOX 1')
        let present = markedBoxes.includes(curBox);
        if (!present) {
            if (turn == 1)
                curBox.classList.add('add-cross-background');
            else
                curBox.classList.add('add-circle-background');
        }
    });

    curBox.addEventListener('mouseout', function () {
        let present = markedBoxes.includes(curBox);
        if (!present) {
            if (curBox.classList.contains('add-cross-background'))
                curBox.classList.remove('add-cross-background');
            if (curBox.classList.contains('add-circle-background'))
                curBox.classList.remove('add-circle-background');
        }
    });

    curBox.addEventListener('click', function () {
        markedBoxes.push(curBox);

        let check = checkWinner();
        // check = 0 circle is winner , check = 1 cross is winner , check = 2 board is completely filled , check = 3 to continue 

        if (check == 0) {
            result.innerHTML = 'Circle is Winner';
            setTimeout( function() {
                result.innerHTML = '';
            } , 3000);            
            markedBoxes = [];
            removeMarkedClass();
            turn = 1;
        }
        else if (check == 1) {
            result.innerHTML = 'Cross is winner';
            setTimeout( function() {
                result.innerHTML = '';
            } , 3000); 
            markedBoxes = [];
            turn = 1;
            removeMarkedClass();
        }
        else if (check == 2) {
            result.innerHTML = 'Draw';
            setTimeout( function() {
                result.innerHTML = '';
            } , 3000); 
            markedBoxes = [];
            turn = 1;
            removeMarkedClass();
        } else {
            if (turn == 1)
                turn = 0;
            else
                turn = 1;
        }
    });
}

function removeMarkedClass() {
    for (let i = 0; i < 9; i++) {
        if( allBoxes[i].classList.contains( 'add-cross-background') )  
            allBoxes[i].classList.remove( 'add-cross-background');
        if( allBoxes[i].classList.contains( 'add-circle-background') )
            allBoxes[i].classList.remove( 'add-circle-background');
    }
}

function checkWinner() {

    if (checkForclass('add-cross-background')) {
        return 1;
    }

    if (checkForclass('add-circle-background')) {
        return 0;
    }

    if (checkFilled()) {
        return 2;
    }

    return 3;
}

function checkFilled() {
    for (let i = 0; i < 9; i++) {
        if (!allBoxes[i].classList.contains('add-cross-background') && !allBoxes[i].classList.contains('add-circle-background'))
            return 0;
    }
    return 1;
}

function checkForclass(cls) {
    if (allBoxes[0].classList.contains(cls) && allBoxes[1].classList.contains(cls) && allBoxes[2].classList.contains(cls))
        return 1;
    if (allBoxes[3].classList.contains(cls) && allBoxes[4].classList.contains(cls) && allBoxes[5].classList.contains(cls))
        return 1;
    if (allBoxes[6].classList.contains(cls) && allBoxes[7].classList.contains(cls) && allBoxes[8].classList.contains(cls))
        return 1;
    if (allBoxes[0].classList.contains(cls) && allBoxes[3].classList.contains(cls) && allBoxes[6].classList.contains(cls))
        return 1;
    if (allBoxes[1].classList.contains(cls) && allBoxes[4].classList.contains(cls) && allBoxes[7].classList.contains(cls))
        return 1;
    if (allBoxes[2].classList.contains(cls) && allBoxes[5].classList.contains(cls) && allBoxes[8].classList.contains(cls))
        return 1;
    if (allBoxes[0].classList.contains(cls) && allBoxes[4].classList.contains(cls) && allBoxes[8].classList.contains(cls))
        return 1;
    if (allBoxes[2].classList.contains(cls) && allBoxes[4].classList.contains(cls) && allBoxes[6].classList.contains(cls))
        return 1;
    return 0;
}