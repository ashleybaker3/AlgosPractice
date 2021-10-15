/* 
  Given an array of ints, find all the non-consecutive integers
  A number is non-consecutive if it is NOT exactly 1 larger than the previous element.
  The first element is never considered non-consecutive.
  Return an array of objects where each object contains the number itself
  and it's index.
*/

const nums1 = [1, 2, 3, 4, 6, 7, 8, 10];
const expected1 = [
    { i: 4, n: 6 },
    { i: 7, n: 10 },
];

const nums2 = [1,3];
const expected2 = [
    { i: 1, n: 3 }
]

const nums3 = [];
const expected3 = null;

const nums4 = [1,2,3,4,5];
const expected4 = [];


/**
 * Finds all the non-consecutive (out of order) numbers from the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedNums
 * @typedef {Array<{i: number, n: number}>} NonConsecNums Array of objects.
 * @property {number} i The index of the non consecutive number.
 * @property {number} n The non consecutive number itself.
 * @returns {NonConsecNums}
 */
function allNonConsecutive(sortedNums) {
    if(!sortedNums[0]) {
        return null;
    }
    const expectedNums = [];
    for(i=1;i<sortedNums.length;i++) {
        if(sortedNums[i-1]!==(sortedNums[i]-1)) {
        let entry = { i: i, n: sortedNums[i] };
        expectedNums.push(entry);
        }
    }
    return expectedNums;
}

console.log(allNonConsecutive(nums1));
console.log(allNonConsecutive(nums2));
console.log(allNonConsecutive(nums3));
console.log(allNonConsecutive(nums4));