function generate() {
  let str = "";
  for (let i = 1; i <= 220; i++) {
    str += `("${new Date(2022, 0, i).getFullYear()}.${formate(
      new Date(2022, 0, i).getMonth() + 1
    )}.${formate(new Date(2022, 0, i).getDate())}",
     "Name_${i}",
       ${rand(4, 300)},
       ${rand(100, 6500)}),`;
  }
  return str;
}

function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(generate());

function formate(num) {
  if (String(num).length === 1) return "0" + String(num);
  return String(num);
}
