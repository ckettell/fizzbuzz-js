describe("FizzBuzz", function() {

var fizzBuzz = new FizzBuzz

describe('knows when a number is', function() {

  it('divisible by 3', function() {

    expect(fizzBuzz.isDivisibleByThree(3)).toBe(true);

    });

    it('not divisible by 3', function() {

      expect(fizzBuzz.isDivisibleByThree(1)).toBe(false);

    });

    it('divisible by 5', function() {

      expect(fizzBuzz.isDivisibleByFive(10)).toBe(true);
    });

    it('not divisible by 5', function() {

      expect(fizzBuzz.isDivisibleByFive(11)).toBe(false);
    });

    it('is divisible by 15', function() {

      expect(fizzBuzz.isDivisibleByFifteen(30)).toBe(true);
    });

    it('not divisible by 15', function() {

      expect(fizzBuzz.isDivisibleByFifteen(17)).toBe(false);
    });

  });

});
