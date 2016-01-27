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
      var account = e.toElement.getAttribute("id");
      account = account.replace(/account/g,"");
      $("#show-account").show();
      $(".buttonDiv").empty();
      $("#show-account h2").text(newAccount.fullName);
      $(".balance").text(newAccount.balance);
      $(".buttonDiv").append("<input type='text' class='form-control' id='amount'><button id='w"+account+"'>Withdrawal</button><button id='d"+account+"'>Deposit</button>")
      $('#w'+account).last().click(function() {
        var amount = parseInt($('#amount').val());
        globals.accounts[account].withdrawal(amount);
        $(".balance").text(globals.accounts[account].balance);
      });
      $('#d'+account).last().click(function() {
        var amount = parseInt($('#amount').val());
        globals.accounts[account].deposit(amount);
        $(".balance").text(globals.accounts[account].balance);
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
