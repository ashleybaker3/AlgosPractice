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

/* 
    Given an array of integers
    return the index where the smallest integer is located
    return -1 if there is no smallest integer (array is empty) 
    since -1 is not a valid index, this indicates it couldn't be found
    If the smallest integer occurs more than once, return the index of the first one.
*/

const nums1 = [5, 2, 3];
const expected1 = 1;

const nums2 = [5, 4, 2, 2, 3];
const expected2 = 2;

const nums3 = [];
const expected3 = -1;

/**
 * Returns the index of the smallest number from the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {number} Index of smallest number or -1 if empty given array.
 */
function indexOfMinVal(nums) {
    if(!nums[0]) {
        return -1;
    }

    let min = nums[0];
    let minIdx = 0;

    for(i=1;i<nums.length;i++) {
        if(nums[i]<min) {
            min = nums[i];
            minIdx = i;
        }
    }

    return minIdx;
}

// Tests
const result1 = indexOfMinVal(nums1);
console.log(result1, "should be", expected1);

const result2 = indexOfMinVal(nums2);
console.log(result2, "should be", expected2);

const result3 = indexOfMinVal(nums3);
console.log(result3, "should be", expected3);