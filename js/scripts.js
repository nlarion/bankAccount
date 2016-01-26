// Uncomment this to see the example spec test pass. Delete if you don't need it!
// var helloWorld = function(){
//   return false;
// };


function Account(fullName, balance) {
  this.fullName = fullName;
  this.balance = balance;
}

Account.prototype.withdrawal = function(amount){
  this.balance += amount * -1;
}

Account.prototype.deposit = function(amount){
  this.balance += amount;
}
// Contact.prototype.fullName = function() {
//   return this.firstName + " " + this.lastName;
// }


var globals = {liIds:0};

$(document).ready(function() {

  $("form#new-account").submit(function(event) {
    event.preventDefault();
    var inputtedFullName = $("input#new-name").val();
    var inputtedInitialDeposit = $("input#initial-deposit").val();
    var newAccount = new Account(inputtedFullName, inputtedInitialDeposit);

    globals.liIds++ // increment the id

    $("ul#accounts").append("<li><span class='contact' id='hover"+globals.liIds+"'>" + newAccount.fullName + "</span></li>");

    // $("#hover"+globals.liIds).hover( function(){
    //   console.log("test");
    //   $(this).append($("<span> ***</span>"));
    // }, function (){
    //   $(this).find("span:last").remove();
    // });

    clearInput();

    $(".contact").last().click(function() {
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.fullName());
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
      $("ul#addresses").text("");
      newContact.address.forEach(function(address){
        $("ul#addresses").append("<li>" + address.fullAddress() + "</li>");
      });
    });
    $('.contactAddress').not($(".contactAddress")[0]).remove();
  });
});


function clearInput() {
  $("input#new-first-name").val("");
  $("input#new-last-name").val("");
  $("input#new-street-address").val("");
  $("input#new-city").val("");
  $("input#new-state").val("");
}
