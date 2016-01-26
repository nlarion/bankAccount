var globals = {liIds:0, accounts:[]};

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

$(document).ready(function() {
  $("form#new-account").submit(function(event) {
    event.preventDefault();
    var inputtedFullName = $("input#new-name").val();
    var inputtedInitialDeposit = parseInt($("input#initial-deposit").val());
    var newAccount = new Account(inputtedFullName, inputtedInitialDeposit);

    $("ul#accounts").append("<li><span class='contact' id='account"+globals.liIds+"'>" + newAccount.fullName + "</span></li>");
    clearInput();
    $(".contact").last().click(function(e) {
      var foo = e.toElement.getAttribute("id");

      console.log(foo);

      $("#show-account").show();
      $(".buttonDiv").empty();
      $("#show-account h2").text(newAccount.fullName);
      $(".balance").text(newAccount.balance);
      $(".buttonDiv").append("<button id='"+foo+"'>Withdrawal</button>")
      $('#'+foo).last().click(function() {
        console.log(this);
      });

      // $(".testButton").prop("value", globals.liIds);
    });
    $('.contactAddress').not($(".contactAddress")[0]).remove();
    globals.accounts.push(newAccount);
    globals.liIds++ // increment the id
  });

  $(".testButton").click(function(){
    newAccount.withdrawal(100);
    $(".balance").text(newAccount.balance);
    console.log(newAccount);
  })
});

function clearInput() {
  $("input#new-first-name").val("");
  $("input#new-last-name").val("");
  $("input#new-street-address").val("");
  $("input#new-city").val("");
  $("input#new-state").val("");
}
