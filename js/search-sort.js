// Search & Sort Functions Library

// LINEAR SEARCH FUNCTION CRITERIA
// Search the anArray argument for the item argument using the linear search algorithm.
// If item found, return index where found, else return -1.
function linearSearch(anArray, item) {
    // loop through array
    for (let i = 0; i < anArray.length; i++) {
        //if item is found
        if (anArray[i] == item) {
            return i;
        }
    }

    // if item is not found
    return -1;
}

// BINARY SEARCH FUNCTION CRITERIA
// Search anArray for the item using the binary search algorithm.
// If item found, return index where found, else return -1.
function binarySearch(anArray, item) {
    // set lower and upper indexes
    let l_index = 0;
    let u_index = anArray.length - 1;

    while (l_index <= u_index) {
        // set middle index
        let m_index = Math.floor((l_index + u_index) / 2);

        // search for value and identify index number
        if (item == anArray[m_index]) {
            return m_index;
        } else if(item < anArray[m_index]) {
            u_index = m_index - 1;
        } else {
            l_index = m_index + 1;
        }
    }
    // if search could not find anything
    return -1;
}