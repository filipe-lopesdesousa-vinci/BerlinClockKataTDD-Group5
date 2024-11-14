import { Main } from "../src/app.js";
let main = new Main();
describe("Berlin Clock - testing bottom minutes line (0 to 9)", function () {
  it("Main should return 0000 for the bottom line when given XX:X0:XX", function () {
    const result = main.getBottomMinutes("XX:X0:XX");

    expect(result).toBe("0000");
  });

  it("Main should return Y000 for the bottom line when given XX:X1:XX", function () {
    const result = main.getBottomMinutes("XX:X1:XX");

    expect(result).toBe("Y000");
  });

  it("Main should return YY00 for the bottom line when given XX:X2:XX", function () {
    const result = main.getBottomMinutes("XX:X2:XX");

    expect(result).toBe("YY00");
  });

  it("Main should return YYY0 for the bottom line when given XX:X3:XX", function () {
    const result = main.getBottomMinutes("XX:X3:XX");

    expect(result).toBe("YYY0");
  });

  it("Main should return YYYY for the bottom line when given XX:X4:XX", function () {
    const result = main.getBottomMinutes("XX:X4:XX");

    expect(result).toBe("YYYY");
  });

  it("Main should return 0000 for the bottom line when given XX:X5:XX", function () {
    const result = main.getBottomMinutes("XX:X5:XX");

    expect(result).toBe("0000");
  });

  it("Main should return Y000 for the bottom line when given XX:X6:XX", function () {
    const result = main.getBottomMinutes("XX:X6:XX");

    expect(result).toBe("Y000");
  });
});

describe("Berlin Clock - testing top minutes line (0 to 59)", function () {
  it("Main should return 00000000000 for the top line when given XX:00:XX", function () {
    const result = main.getTopMinutes("XX:00:XX");

    expect(result).toBe("00000000000");
  });

  it("Main should return Y0000000000 for the top line when given XX:05:XX", function () {
    const result = main.getTopMinutes("XX:05:XX");

    expect(result).toBe("Y0000000000");
  });

  it("Main should return Y0000000000 for the top line when given XX:06:XX", function () {
    const result = main.getTopMinutes("XX:06:XX");

    expect(result).toBe("Y0000000000");
  });

  it("Main should return YY000000000 for the top line when given XX:10:XX", function () {
    const result = main.getTopMinutes("XX:10:XX");

    expect(result).toBe("YY000000000");
  });

  it("Main should return YYR00000000 for the top line when given XX:15:XX", function () {
    const result = main.getTopMinutes("XX:15:XX");

    expect(result).toBe("YYR00000000");
  });

  it("Main should return YYRY0000000 for the top line when given XX:20:XX", function () {
    const result = main.getTopMinutes("XX:20:XX");

    expect(result).toBe("YYRY0000000");
  });

  it("Main should return YYRYY000000 for the top line when given XX:25:XX", function () {
    const result = main.getTopMinutes("XX:25:XX");

    expect(result).toBe("YYRYY000000");
  });

  it("Main should return YYRYYR00000 for the top line when given XX:30:XX", function () {
    const result = main.getTopMinutes("XX:30:XX");

    expect(result).toBe("YYRYYR00000");
  });
});

describe("Berlin Clock - testing bottom hours line (0 to 9)", function () {
  it("Main should return 0000 for the bottom line when given X0:XX:XX", function () {
    const result = main.getBottomHours("X0:XX:XX");

    expect(result).toBe("0000");
  });

  it("Main should return R000 for the bottom line when given X1:XX:XX", function () {
    const result = main.getBottomHours("X1:XX:XX");

    expect(result).toBe("R000");
  });

  it("Main should return RR00 for the bottom line when given X2:XX:XX", function () {
    const result = main.getBottomHours("X2:XX:XX");

    expect(result).toBe("RR00");
  });

  it("Main should return RRR0 for the bottom line when given X3:XX:XX", function () {
    const result = main.getBottomHours("X3:XX:XX");

    expect(result).toBe("RRR0");
  });

  it("Main should return RRRR for the bottom line when given X4:XX:XX", function () {
    const result = main.getBottomHours("X4:XX:XX");

    expect(result).toBe("RRRR");
  });

  it("Main should return 0000 for the bottom line when given X5:XX:XX", function () {
    const result = main.getBottomHours("X5:XX:XX");

    expect(result).toBe("0000");
  });
  it("Main should return R000 for the bottom line when given X6:XX:XX", function () {
    const result = main.getBottomHours("X6:XX:XX");

    expect(result).toBe("R000");
  });
});

describe("Berlin Clock - testing Top hours line (0 to 23)", function () {
  it("Main should return 0000 for the top line when given 00:XX:XX", function () {
    const result = main.getTopHours("00:XX:XX");

    expect(result).toBe("0000");
  });

  it("Main should return R000 for the top line when given 05:XX:XX", function () {
    const result = main.getTopHours("05:XX:XX");

    expect(result).toBe("R000");
  });
  it("Main should return R000 for the top line when given 06:XX:XX", function () {
    const result = main.getTopHours("06:XX:XX");

    expect(result).toBe("R000");
  });
  it("Main should return RR00 for the top line when given 10:XX:XX", function () {
    const result = main.getTopHours("10:XX:XX");

    expect(result).toBe("RR00");
  });
});

describe("Berlin Clock - testing seconds lamp", function () {
  it("Main should return R for the seconds lamp when given XX:XX:00", function () {
    const result = main.getSeconds("XX:XX:00");

    expect(result).toBe("R");
  });

  it("Main should return 0 for the seconds lamp when given XX:XX:01", function () {
    const result = main.getSeconds("XX:XX:01");

    expect(result).toBe("0");
  });

  it("Main should return R for the seconds lamp when given XX:XX:02", function () {
    const result = main.getSeconds("XX:XX:02");

    expect(result).toBe("R");
  });

  it("Main should return 0 for the seconds lamp when given XX:XX:03", function () {
    const result = main.getSeconds("XX:XX:03");

    expect(result).toBe("0");
  });
});
