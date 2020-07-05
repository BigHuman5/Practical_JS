const addition = (arg1, arg2) => arg1 + arg2;

const subtraction = (minuend, subtrahend) => minuend - subtrahend;

const multiplication = (multiplicand, multiplier) => multiplicand * multiplier;

const division = (dividend, divider) => {
    if (divider !== 0) {
        return dividend / divider;
    } else {
        throw new Error('Divider can\'t be zero');
    }
};

const exponentiation = (basis, power) => Math.pow(basis, power);

const percent = (basis, percent) => {
    if (percent >= 0) {
        return basis * (percent / 100);
    } else {
        throw new Error('Percent can\'t be negative');
    }
};

const min = (first,second) => Math.min(first,second);

const max = (first,second) => Math.max(first,second);

const twoArgsOperations = {
    "+": addition,
    "-": subtraction,
    "*": multiplication,
    "/": division,
    "^": exponentiation,
    "%": percent,
    "min": min,
    "max": max
}

const getTwoArgsOperation = (selector) => {
    const operation = twoArgsOperations[selector];
    return operation !== undefined ? operation : () => { throw Error("Operation not implemented") };
}

module.exports = { getTwoArgsOperation };
