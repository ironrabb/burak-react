// MIT TASK Z
function sumEvens(arr: number[]): number {
  return arr.reduce((sum, num) => {
    // Agar son 2 ga bo'linsa (juft bo'lsa), qo'shamiz
    return num % 2 === 0 ? sum + num : sum;
  }, 0);
}
console.log(sumEvens([1, 2, 3]));
console.log(sumEvens([10, 15, 20, 25]));
console.log(sumEvens([]));
// // MIT TASK Y
// function findIntersection(arr1: number[], arr2: number[]): number[] {
//   // 1-arraydan 2-arrayda mavjud bo'lganlarini filtrlaymiz
//   return arr1.filter((num) => arr2.includes(num));
// }
// console.log(findIntersection([1, 2, 3], [3, 2, 0]));
// console.log(findIntersection([5, 6, 7], [7, 8, 9]));
// console.log(findIntersection([1, 2], [3, 4]));
// // MIT TASK X
// function countOccurrences(obj: any, target: string): number {
//   let count = 0;

//   // 1. Object ekanligini va null emasligini tekshiramiz
//   if (typeof obj === "object" && obj !== null) {
//     // 2. Object ichidagi barcha kalitlarni aylanib chiqamiz
//     for (const key in obj) {
//       // 3. Agar kalit biz qidirayotgan stringga teng bo'lsa
//       if (key === target) {
//         count++;
//       }

//       // 4. Agar qiymat object bo'lsa, rekursiya qilib ichiga kiramiz
//       if (typeof obj[key] === "object" && obj[key] !== null) {
//         count += countOccurrences(obj[key], target);
//       }
//     }
//   }

//   return count;
// }

// const data = {
//   model: "Bugatti",
//   steer: {
//     model: "HANKOOK",
//     size: 30,
//   },
// };

// console.log(countOccurrences(data, "model"));
// console.log(countOccurrences(data, "size"));
// console.log(countOccurrences(data, "name"));
export {};
