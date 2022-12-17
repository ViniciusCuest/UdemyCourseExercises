//This is my way to resolve the exercises present on Javascript Basics for Beginners from Udemy Course
class ControlFlow {
   greaterBetweenTwoNumbers(num1, num2) {

      if (num1 === num2)
         return 'The numbers are equal';

      return num1 > num2 ? `${num1} greater than ${num2}` : `${num2} greater than ${num1}`;
   };

   isLandscape(width, height) {
      return width > height;
   };

   fizzBuzz(value) {
      const cond_analysis = (val) => {
         if ((value % 3 === 0) && (value % 5 === 0))
            return 'FizzBuzz';

         if (value % 3 === 0)
            return 'Fizz';

         if (value % 5 === 0)
            return 'Buzz';

         return val;
      }

      return typeof value !== 'number' ? NaN : cond_analysis(value);
   };

   checkSpeed(speed) {

      const limit = 70;
      const aboveSpeedTolerance = 5;
      const maxPointsAcquired = 12

      const pointsAcquired = Math.floor((speed - limit) / aboveSpeedTolerance);

      return pointsAcquired >= maxPointsAcquired ? `Supended, ${pointsAcquired} points acquired` : 'Ok';
   };

   oddOrEven(limit) {
      for (let i = 1; i <= limit; i++)
         console.log(i, `${(i % 2 === 0) ? 'EVEN' : 'ODD'}`);
   };

   countTruthy(data) {
      let count = 0;
      data.map((val) => {
         if (!!val)
            count++;
      });

      return count;
   };

   showProperties(obj) {
      for (let prop in obj)
         typeof obj[prop] === 'string' && console.log(`${prop}: ${obj[prop]}`);
   };

   sumMultiplesThreeFive(limit) {
      let sum = 0;

      for (let i = 0; i <= limit; i++)
         if ((i % 3 === 0) || (i % 5 === 0))
            sum += i;

      return sum;
   };

   calculateGrade(marks) {
      const calculateAvg = (values) => {
         let sum = 0;
         for (let i = 0; i < values.length; i++)
            sum += values[i];

         return (sum / values.length);
      }

      let avg = calculateAvg(marks);

      return avg >= 6 ? `Approved, Grade: ${avg}` : `Failed, Grade: ${avg}`;
   };

   showStars(numRows) {
      for (let stars = 1; stars <= numRows; stars++) {
         let pattern = '';
         for (let j = 0; j < stars; j++)
            pattern += '*';

         console.log(pattern, stars);
      }
   }
}

class ObjectsEx {
   showAddress(address) {

      let fullAddress = '';

      for (let obj in address)
         fullAddress += ` ${address[obj]}`;

      return fullAddress;
   }

   //Factory function
   createAddress(street, city, zipCode) {
      return { street, city, zipCode }
   }

}

//Constructor function
function Address(street, city, zipCode) {
   this.street = street;
   this.city = city;
   this.zipCode = zipCode
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numbers.pop(); //Remove the last element of an Array
numbers.shift(); //Remove the first element of an Array
numbers.splice(5, 2); //Remove based on its index - Params (index to remove, quantity of items to be removed after the selected index)

numbers.concat([11, 12, 13]); //Combining two arrays

numbers.length = 0; //Emptying an array
numbers.splice(0, numbers.length); //Remove all elements of an array;
numbers = []; //Emptying an array


const {
   greaterBetweenTwoNumbers,
   isLandscape,
   fizzBuzz,
   checkSpeed,
   oddOrEven,
   countTruthy,
   showProperties,
   sumMultiplesThreeFive,
   calculateGrade,
   showStars
} = new ControlFlow();

const {
   showAddress,
   createAddress,
} = new ObjectsEx();


console.log(greaterBetweenTwoNumbers(10, 20)); // Returns a String
console.log(isLandscape(400, 200)); // Returns a Boolean
console.log(fizzBuzz(20)); // Returns a (unknown) -> [String, Nan, Number]
console.log(checkSpeed(200)); // Returns a String
oddOrEven(10); // Returns a String
console.log(
   countTruthy(['1', '', undefined, null, 5454215, NaN, 'Vinicius', '', {}, { data: 'Nome' }, 0, false])
); // Returns a Number
showProperties({
   name: 'Vinicius',
   age: 19,
   online: true,
   last_update: '16-12-2022'
});
console.log(sumMultiplesThreeFive(10)); // Returns a Number
console.log(calculateGrade([10, 7.5, 8])); // Returns a Number
showStars(5);
console.log(showAddress({
   street: 'Street 1',
   city: 'Los Angeles',
   zipCode: '0',
}));

console.log(createAddress('A', 'B', 'C'));

let constructorAddress = new Address('A', 'B', 'C');

console.log(constructorAddress);