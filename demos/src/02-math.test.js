const {sum, multiply, divide, average} = require('./02-math.js')

test("add 1 + 3 should be 4", ()=>{
   const result = sum (1,3);
   expect(result).toBe(4)
});

test("should be 4", ()=>{
   const result = multiply (1,4);
   expect(result).toBe(4)
});

test("should divide", ()=> {
  const result = divide(6,3);
  expect (result).toBe(2);
  //TODO: RES0LVE TEST CASE WHEN A VALUE IS A NaN
   const result2 = divide (6,"a");
   expect(result2).toBe(2)
   const result3 = divide (6,0);
   expect (result3). toBeNull ();
});

test ("Avegare of nothing should be 0", () => {
  const values = [];
  const result = average(values);
  expect(result).toBeNull()
})
