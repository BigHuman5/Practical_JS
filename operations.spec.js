const { getTwoArgsOperation } = require("./operations");
const { getOneArgOperation } = require("./operations");

describe("Operation getter to function with 2 arguments", () => {
    it("should return addition function", () => {
        expect(getTwoArgsOperation("+").name).toBe("addition");
    });

    it("should return subtraction function", () => {
        expect(getTwoArgsOperation("-").name).toBe("subtraction");
    });

    it("should return multiplication function", () => {
        expect(getTwoArgsOperation("*").name).toBe("multiplication");
    });

    it("should return division function", () => {
        expect(getTwoArgsOperation("/").name).toBe("division");
    });

    it("should return exponentiation function", () => {
        expect(getTwoArgsOperation("^").name).toBe("exponentiation");
    });

    it("should return percent function", () => {
        expect(getTwoArgsOperation("%").name).toBe("percent");
    });

    it("should return max function", () => {
        expect(getTwoArgsOperation("max").name).toBe("max");
    });

    it("should return min function", () => {
        expect(getTwoArgsOperation("min").name).toBe("min");
    });
});

describe("Two arguments operation", () => {
    it("addition", () => {
        expect(getTwoArgsOperation("+")(1, 2)).toBe(3);
    });

    it("subtraction", () => {
        expect(getTwoArgsOperation("-")(1, 2)).toBe(-1);
    });

    it("multiplication", () => {
        expect(getTwoArgsOperation("*")(5, 6)).toBe(30);
    });

    it("division", () => {
        expect(getTwoArgsOperation("/")(6, 3)).toBe(2);
    });

/*    it("division", () => {
        expect(getTwoArgsOperation("/")(6, 0)).toBe('Divider can\'t be zero');
    });*/

    it("exponentiation", () => {
        expect(getTwoArgsOperation("^")(2, 3)).toBe(8);
    });

    it("percent", () => {
        expect(getTwoArgsOperation("%")(10, 50)).toBe(5);
    });

    /*it("percent", () => {
        expect(getTwoArgsOperation("%")(10, -50)).toBe('Percent can\'t be negative');
    });*/

    it("max", () => {
        expect(getTwoArgsOperation("max")(10, 50)).toBe(50);
    });

    it("min", () => {
        expect(getTwoArgsOperation("min")(10, 50)).toBe(10);
    });
});

//

describe("Operation getter to function with 1 argument", () => {
    it("should return sin function", () => {
        expect(getOneArgOperation("sin").name).toBe("sin");
    });

    it("should return cos function", () => {
        expect(getOneArgOperation("cos").name).toBe("cos");
    });

    it("should return tan function", () => {
        expect(getOneArgOperation("tan").name).toBe("tan");
    });

    it("should return sqrt function", () => {
        expect(getOneArgOperation("sqrt").name).toBe("sqrt");
    });
});

describe("One argument operation", () => {
    it("sin", () => {
        expect(getOneArgOperation("sin")(0)).toBe(0);
    });

    it("cos", () => {
        expect(getOneArgOperation("cos")(0)).toBe(1);
    });

    it("tan", () => {
        expect(getOneArgOperation("tan")(0)).toBe(0);
    });

    it("sqrt", () => {
        expect(getOneArgOperation("sqrt")(25)).toBe(5);
    });

    /*it("sqrt", () => {
        expect(getOneArgOperation("sqrt")(-25)).toBe('first can\'t be negative');
    });*/

});