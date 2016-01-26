// Example spec. Uncomment if you want to see it run in spec-runner.html! Then uncomment the function in scripts.js
// describe('helloWorld', function(){
//   it("is going to be false", function(){
//     expect(helloWorld()).to.equal(false);
//   });
// });

describe('Account', function(){
  it("creates new account with given properties", function(){
  var testAccount = new Account("Jonathon",400);
  expect(testAccount.fullName).to.equal("Jonathon");
  expect(testAccount.balance).to.equal(400);
  });
});
describe('Withdrawal', function(){
  it("removes amount given from balance", function(){
  var testAccount = new Account("Jonathon",400);
  testAccount.withdrawal(100);
  expect(testAccount.balance).to.equal(300);
  });
});
describe('Deposit', function(){
  it("adds amount given to balance", function(){
  var testAccount = new Account("Jonathon",400);
  testAccount.deposit(100);
  expect(testAccount.balance).to.equal(500);
  });
});
