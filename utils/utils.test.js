const expect = require('expect')
const utils = require("./utils")

it('should add two numbers', () => {
  var res = utils.add(33,11)
  expect(res).toBe(44).toBeA('number');

  // if(res !== 44){
  //   throw new Error(`Expected 44, but got ${res}`)
  // }
})

it('should add square a numbers', () => {
  var res = utils.square(5)
  expect(res).toBe(25).toBeA('number')
  // if(res !== 25){
  //   throw new Error(`Expected 25, but got ${res}`)
  // }
})


it('should verify first and last name are set', () =>{
  var user = {age: 28, location: "NY"}
  var userObj = utils.setName(user,"hui wang")
  expect(userObj.firstName).toBe("hui").toBeA('string')
  expect(userObj).toInclude({lastName: "wang"})

  console.log(userObj)
})
