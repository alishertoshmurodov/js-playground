function multiTable(number) {
  const table = [];

  for (let i = 0; i < 10; i++) {
    table.push(`${i + 1} * ${number} = ${(i + 1) * number}`);
  }

  return table.join("\n");
}

console.log(multiTable(5));
