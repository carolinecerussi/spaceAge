import Age from "../src/age.js";

describe ("Age", () => {

  test ("should correctly create an age object with input number", () =>  {
  const age = new Age(12);
  expect (age.earth).toEqual(12);
  })
//passed!//

test ("should correctly output the start age into Mercury years ", () => {
  const age = new Age(12)
  expect (age.toMercury()).toEqual(50 );
})
//passed! 10:24 am// after good fail and then finding function to help pass//

test ("should correctly output the start age into Venus years", () => {
  const age = new Age(12)
  expect (age.toVenus()).toEqual(19.35);
})
//failed 10:32good fail when looking to define function//
//passed 10:38 after creating new function in age.js folder//

test ("should correctly ouput the start age into Mars years", () => {
  const age = new Age(12)
  expect (age.toMars()).toEqual(6.38);
})
//10:41 good fail when looking to define toMars function//
//10:43 passed test with function in age.js that updates mars age//

test("should correctly output the start age into Jupiter years", () => {
  const age = new Age(12)
  expect(age.toJupiter()).toEqual(1.01)
})
//10:45 good fail when looking to define the to Jupiter function ///

})