/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
  // the first, not thinking, solution xDD
    //const distinctNum1 = [...new Set(nums1)]
    //const distinctNum2 = [...new Set(nums2)]
    //const res = [[], []]
  //distinctNum1.map(el => distinctNum2.includes(el) ? null : res[0].push(el))
  //distinctNum2.map(el => distinctNum1.includes(el) ? null : res[1].push(el))
  //return res
  
  // With new Set
    
    nums1 = new Set(nums1)
    nums2 = new Set(nums2)

    for (let item of nums1){
        if (nums2.has(item)) {
            nums1.delete(item)
            nums2.delete(item)
        }
    }
    return [Array.from(nums1),Array.from(nums2)] 
};