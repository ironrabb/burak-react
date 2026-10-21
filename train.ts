// MIT TASK X
function countOccurrences(obj: any, target: string): number {
  let count = 0;

  // 1. Object ekanligini va null emasligini tekshiramiz
  if (typeof obj === "object" && obj !== null) {
    // 2. Object ichidagi barcha kalitlarni aylanib chiqamiz
    for (const key in obj) {
      // 3. Agar kalit biz qidirayotgan stringga teng bo'lsa
      if (key === target) {
        count++;
      }

      // 4. Agar qiymat object bo'lsa, rekursiya qilib ichiga kiramiz
      if (typeof obj[key] === "object" && obj[key] !== null) {
        count += countOccurrences(obj[key], target);
      }
    }
  }

  return count;
}

const data = {
  model: "Bugatti",
  steer: {
    model: "HANKOOK",
    size: 30,
  },
};

console.log(countOccurrences(data, "model"));
console.log(countOccurrences(data, "size"));
console.log(countOccurrences(data, "name"));
export {};
