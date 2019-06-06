
/**
 *  forEach function executes a provided function for each element in the array.
 * 
 */
function forEach() {
    let myArray = ['Deeg', 'Danny', 'Alan', 'Tom', 'Vicky', 'Shazad', 'Adrian'];

    myArray.forEach((x) => {
        if (x.length > 4) {
            console.log(x);
        }
    });
}


/**
 * filter function
 * 
 */
function filter() {
    let myArray2 = ['Deeg', 'Danny', 'Alan', 'Tom', 'Vicky', 'Shazad', 'Adrian'];
    let edit = myArray2.filter((x) => {
        if (x.length > 4) {
            return true;
        }
        return false;
    });
    console.log(edit);
}

function map() {
    let myArray3 = ['Deeg', 'Danny', 'Alan', 'Tom', 'Vicky', 'Shazad', 'Adrian'];
    let edit = myArray3.map((x) => {
        return 'Hi ' + x;
    });
    console.log(edit);
}

function reduce() {
    let myArray4 = ['Deeg', 'Danny', 'Alan', 'Tom', 'Vicky', 'Shazad', 'Adrian'];
    let edit = myArray4.reduce((acc, item, index) => {
        return acc + item;
    }, null);
    console.log(edit);
}