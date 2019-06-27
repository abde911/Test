operatorA = [
  { prefix: 1, price: 0.9 },
  { prefix: 268, price: 5.1 },
  { prefix: 46, price: 0.17 },
  { prefix: 4620, price: 0.0 },
  { prefix: 468, price: 0.15 },
  { prefix: 4631, price: 0.15 },
  { prefix: 4673, price: 0.9 },
  { prefix: 46732, price: 1.1 }
];

operatorB = [
  { prefix: 1, price: 0.92 },
  { prefix: 44, price: 0.5 },
  { prefix: 46, price: 0.01 },
  { prefix: 467, price: 1.0 },
  { prefix: 48, price: 0.2 }
];
phone_number = "4620-1455-555";
cleanStr = str => {
  return str.replace(/\D/gm, "");
};

matchTheLogestNumberInOperator = (phone_number, operator) => {
  let maxLen = 0;
  let result = {
    prefix: 0,
    price: 0
  };
  operator.map(item => {
    const prefix = item.prefix;
    const prefixLength = (prefix + "").length;
    const cleanPhoneNumber = cleanStr(phone_number);

    if (cleanPhoneNumber.slice(0, prefixLength) === prefix + "") {
      if (maxLen < prefixLength) {
        maxLen = prefixLength;
        result.price = item.price;
        result.prefix = prefix;
      }
    }
  });
  return result;
};

findTheCheapestOperator = (phone_number, operators) => {
  let cheap_price = Number.MAX_SAFE_INTEGER;
  let op_name = operators[0].op_name;
  operators.map(operator => {
    const minPriceInOperator = matchTheLogestNumberInOperator(
      phone_number,
      operator.operator 
    );
    if (cheap_price > minPriceInOperator.price) {
      cheap_price = minPriceInOperator.price;
      op_name = operator.op_name;
    }
  });
  return op_name;
};
console.log(
  findTheCheapestOperator(phone_number, [
    { op_name: "A", operator : operatorA },
    { op_name: "B", operator : operatorB }
  ])
);
