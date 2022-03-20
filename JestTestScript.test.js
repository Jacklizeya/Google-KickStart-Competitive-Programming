// Change the name of the file
const kickStartFunction = require('./1');
 
describe("kickStartFunction tests", () => {
 test('test1', () => {
   // arrange and act
   var result = kickStartFunction(1,2)
 
   // assert
   expect(result).toBe(3);
 });
 
 test("test2", () => {
   // arrange and act
   var result = kickStartFunction(10,2)
 
   // assert
   expect(result).toBe(8);
 });
 
 test("test3", () => {
   // arrange and act
   var result = kickStartFunction(2,8)
 
   // assert
   expect(result).toBe(16);
 });
})


// Run it by jest command (if it is already installed Globally)
