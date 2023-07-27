console.log('****** Part Supply *******');
// REQUIRED FEATURES

// 1. Create a variable called 'partsNeeded' with a value of the number 40 
//    & console.log the variable
console.log('1. Number of partsNeeded:');
let partsNeeded = 40;
console.log('partsNeeded:', partsNeeded);

// 2. Create a variable call 'supplyChanges' set it to an array containing
//    the following numbers: 3, 5, -6, 0, 7, 11
console.log('2. Array of supplyChanges:');
let supplyChanges = [3, 5, -6, 0, 7, 11];
console.log(supplyChanges);

// 3. Console log the value of the second item in the 'supplyChanges' array
console.log('3. Second value in the supplyChanges array is: ', supplyChanges[1]);

// 4. The last item was added by mistake. Remove it from the 'supplyChanges' 
//    array & console.log the value removed.
console.log('4. Removed item: ', supplyChanges.pop());

// 5. A delivery of 25 more parts arrived. Add the value 25 to the end of the array
console.log('5. Adding 25 to supplyChanges.');
supplyChanges.push(25);
console.log(supplyChanges);

// 6. Write a `for` loop that shows each value in the 'supplyChanges' array
//    Use a console.log formatted as follows, where x is the value from the array
//    - if it is a positive number (greater than 0), log 'Added x parts.' 
//    - if the value is 0, log 'No Change.'
//    - if the value is negative, format the log as 'Removed x parts.' 
console.log('6. Showing supplyChanges...');
// I chose to remove the negative sign to avoid double negatives.
for (let i = 0; i < supplyChanges.length; i ++){
    let amount = supplyChanges[i];
    console.log(amount === 0 ? 'No Change.': amount > 0 ? `Added ${amount} parts`: `Removed ${amount * -1} parts`); 
};


// STRETCH GOALS
console.log('---  Stretch Goals  ---');
// 7. Rewrite the `for` loop from #6 as a `for of` loop. 
console.log('\n7. Showing supplyChanges with "for of" loop');
for (const amount2 of supplyChanges) {
    console.log(amount2 === 0 ? 'No Change.': amount2 > 0 ? `Added ${amount2} parts`: `Removed ${amount2 * -1} parts`);
};

// 8. Write a loop to determine the total number of parts available by
//    adding up all the numbers in the 'supplyChanges' array.
console.log('\n8. Total supplies available is:');
let totalParts = 0;
for (const partToSum of supplyChanges) {
    totalParts += partToSum;
};
console.log('There are', + totalParts + ' total parts.');


// 9. We have a large stash of parts in our warehouse that we 
//    need to box up and get ready for shipment. 
//    There are 572 parts in total, and each box holds 7 parts.
//    Use a `while` loop to keep adding parts to boxes until
//    no more boxes can be filled.
//    Then log how many boxes were filled, and how many parts are left over.
console.log('9. Filling boxes with a "while" loop');
let leftOverParts = 572;
let boxesFilled = 0;
while (leftOverParts > 6) {
    boxesFilled += 1;
    leftOverParts -= 7;
};
console.log(`${boxesFilled} boxes were filled and ${leftOverParts} were left over.`);

