describe("Calculator", function () {
    it("Should be able to add 2 numbers", function () {

        // Arrange: Where we prepare the environment.

        var num1 = 100,
            num2 = 200,
            expectedResult = 300;


        // Act: Where we perform our actual operation.

        var result = add(num1, num2);

        // Assert: Where we verify outcome.

        expect(result).toBe(expectedResult);
    });
});
