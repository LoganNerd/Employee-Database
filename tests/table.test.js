const table = require("./utils/generateTable.js")

describe("table", () => {
    describe("generateTable", () => {
        it("should print a table of employees and their role on a card", () => {
            const str = "name - role";
            const filled = "logan - intern";

            const result = new table().filled(str);

            expect(result).toEqual(filled);
        });
    });
});