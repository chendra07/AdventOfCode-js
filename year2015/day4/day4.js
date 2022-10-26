const crypto = require("crypto");

function q1(puzzle) {
  let hashResult;
  let positiveNumber = -1;

  do {
    ++positiveNumber;
    hashResult = crypto
      .createHash("md5")
      .update(`${puzzle}${positiveNumber}`)
      .digest("hex");
  } while (hashResult.substr(0, 5) !== "00000");

  console.log(
    `(q1) hash puzzle "${puzzle}" is ${hashResult} with lowest positive number: ${positiveNumber}`
  );
}

function q2(puzzle) {
  let hashResult;
  let positiveNumber = -1;

  do {
    ++positiveNumber;
    hashResult = crypto
      .createHash("md5")
      .update(`${puzzle}${positiveNumber}`)
      .digest("hex");
  } while (hashResult.substr(0, 6) !== "000000");

  console.log(
    `(q2) hash puzzle "${puzzle}" is ${hashResult} with lowest positive number: ${positiveNumber}`
  );
}

const puzzle = "yzbqklnj";
q1(puzzle);
q2(puzzle);

// rules:
// hash the code -> have 5 zeroes from index 0 to 4 (q1)
// hash the code -> have 6 zeroes from index 0 to 5 (q2)
// find the lowest positive number
