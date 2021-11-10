import { formatMoney } from "~/utils";

describe("format money", () => {
  it("should format number o string to money amount", () => {
    const moneyAmountNumber = formatMoney(5000);
    const moneyAmountString = formatMoney("230000");

    expect(moneyAmountNumber).toBe("$5,000");
    expect(moneyAmountString).toBe("$230,000");
  });
});
