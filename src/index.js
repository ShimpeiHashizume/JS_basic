/**
 * アロー関数
 *  */

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(func3(10, 20));

/**
 * 分割代入
 *  */
// const myProfile = {
//   name: "ずめ",
//   age: 27
// };
// const { name, age } = myProfile;
// console.log(`私の名前は${name}です。年齢は${age}です。`);

// const myProfile2 = ["ずめ", 27];
// const [name, age] = myProfile2;
// console.log(`私の名前は${name}です。年齢は${age}です。`);

/**
 * デフォルト値、引数など
 *  */
// const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん`);
// sayHello("ずめ");

/**
 * スプレッド構文 ...
 *  */
// 配列の展開
// const arr1 = [1, 2];
// console.log(arr1[1]);
// console.log(...arr1);

// まとめる
// const arr2 = [10, 20];
// const arr3 = [30, 40];
// console.log(...arr2, ...arr3);

// 配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];
// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr6);
// console.log(arr4);

/**
 * mapやfilterを使った配列の処理
 *  */
const nameArr = ["田中", "山田", "高橋"];
// for (let i = 0; i < nameArr.length; i++) {
//   console.log(`${i + 1}番目は${nameArr[i]}です。`);
// }
// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2);

// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です。`));

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 0;
// });
// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "高橋") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameArr);

/**
 * 三項演算子
 *  */
// ある条件 ? 条件がtrueのとき : 条件がfalseのとき
// const num = "1300";
// const formattedNum =
//   typeof num === "number" ? num.toLocaleString() : "数値を入れてください。";
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "100を超えています！！" : "許容範囲内です。";
// };
// console.log(checkSum(50, 40));

/**
 * 論理演算子のほんとうの意味を知ろう && ||
 *  */
const flag1 = true;
const flag2 = false;

// if (flag1 || flag2) {
//   console.log("1か2はtrueになります");
// }
// if (flag1 && flag2) {
//   console.log("1も2もtrueになります。");
// }

// ||　は左側がfalseなら右側を返す
// const num = 100;
// const fee = num || "金額未設定です。";
// console.log(fee);

// const num2 = 100;
// const fee2 = num2 && "なにか設定されました。";
// console.log(fee2);
