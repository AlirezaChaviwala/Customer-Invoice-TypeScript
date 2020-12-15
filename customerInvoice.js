var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Customer = /** @class */ (function () {
    function Customer(customerData) {
        this.id = customerData.idVal;
        this.name = customerData.nameVal;
        this.discount = customerData.discountVal;
    }
    Customer.prototype.getId = function () {
        return this.id;
    };
    Customer.prototype.getName = function () {
        return this.name;
    };
    Customer.prototype.getDiscount = function () {
        return this.discount;
    };
    Customer.prototype.setDiscount = function (newDiscount) {
        this.discount = newDiscount;
    };
    Customer.prototype.toString = function () {
        return "ID: " + this.id + "\n    Name: " + this.name + "\n    Discount: " + this.discount;
    };
    return Customer;
}());
var CustomerAccount = /** @class */ (function (_super) {
    __extends(CustomerAccount, _super);
    function CustomerAccount(accountData) {
        var _this = _super.call(this, accountData.customerObj) || this;
        _this.accountId = accountData.accountIdVal;
        _this.balance = accountData.balanceVal;
        _this.customerObj = new Customer(accountData.customerObj);
        return _this;
    }
    CustomerAccount.prototype.getId = function () {
        return this.accountId;
    };
    CustomerAccount.prototype.getCustomer = function () {
        return this.customerObj;
    };
    CustomerAccount.prototype.getBalance = function () {
        return this.balance;
    };
    CustomerAccount.prototype.setBalance = function (newBalance) {
        this.balance = newBalance;
    };
    CustomerAccount.prototype.toString = function () {
        return "ID: " + this.accountId + "\n        Balance: " + (this.balance).toFixed(2);
    };
    CustomerAccount.prototype.getCustomerName = function () {
        return this.customerObj.name;
    };
    CustomerAccount.prototype.deposit = function (depAmount) {
        this.balance += depAmount;
        return this;
    };
    CustomerAccount.prototype.withdraw = function (withdrawAmount) {
        if (withdrawAmount <= this.balance) {
            this.balance -= withdrawAmount;
        }
        else {
            alert("amount withdrawn exceeds the current balance!");
        }
        return this;
    };
    return CustomerAccount;
}(Customer));
var Invoice = /** @class */ (function (_super) {
    __extends(Invoice, _super);
    function Invoice(invoiceData) {
        var _this = _super.call(this, invoiceData.customerObj) || this;
        _this.invoiceId = invoiceData.invoiceIdVal;
        _this.amount = invoiceData.amountVal;
        _this.customerObj = new Customer(invoiceData.customerObj);
        return _this;
    }
    Invoice.prototype.getId = function () {
        return this.invoiceId;
    };
    Invoice.prototype.getCustomer = function () {
        return this.customerObj;
    };
    Invoice.prototype.setCustomer = function (customerData) {
        this.customerObj.id = customerData.idVal;
        this.customerObj.name = customerData.nameVal;
        this.customerObj.discount - customerData.discountVal;
    };
    Invoice.prototype.getAmount = function () {
        return this.amount;
    };
    Invoice.prototype.setAmount = function (newAmount) {
        this.amount = newAmount;
    };
    Invoice.prototype.getCustomerName = function () {
        return this.customerObj.name;
    };
    Invoice.prototype.getAmountAfterDiscount = function () {
        this.amount *= Math.floor(this.customerObj.discount / 100);
        return this.amount;
    };
    return Invoice;
}(Customer));
var cust1 = new Customer({ idVal: 101, nameVal: 'Harry', discountVal: 10 });
var acc1 = new CustomerAccount({ accountIdVal: 1001, customerObj: { idVal: 101, nameVal: 'Harry', discountVal: 10 }, balanceVal: 15000 });
//let invc1=new Invoice({invoiceIdVal:1,customerObj:{}})
function setAttr(val1, val2, element) {
    for (var i = 0; i < val1.length; i++) {
        element.setAttribute(val1[i], val2[i]);
    }
}
var container = document.createElement('div');
setAttr(['class'], ['container'], container);
document.body.append(container);
var titleContainer = document.createElement('div');
setAttr(['class'], ['text-center'], titleContainer);
container.append(titleContainer);
var title = document.createElement('h1');
setAttr(['class'], ['jumbotron bg-transparent p-5'], title);
title.innerText = 'Customer and Invoice';
titleContainer.append(title);
var hr = document.createElement('hr');
setAttr(['class'], ['my-4'], hr);
container.append(hr);
var cus1div = document.createElement('div');
var cus1details = document.createElement('h3');
cus1details.innerText = 'Customer Details';
var cus1name = document.createElement('h4');
cus1name.innerText = "Name: " + cust1.getName();
var cus1id = document.createElement('p');
cus1id.innerText = "ID: " + cust1.getId();
var cus1disc = document.createElement('p');
cus1disc.innerText = "Discount: " + cust1.getDiscount();
cus1div.append(cus1details, cus1name, cus1id, cus1disc);
container.append(cus1div);
//let br=document.createElement('br');
var acc1div = document.createElement('div');
var acc1details = document.createElement('h3');
acc1details.innerText = 'Account Details';
var acc1id = document.createElement('p');
acc1id.innerText = "A/C ID: " + acc1.getId();
var acccust1name = document.createElement('p');
acccust1name.innerText = "Name: " + acc1.getCustomerName();
var acc1balance = document.createElement('p');
acc1balance.innerText = "Balance: " + acc1.getBalance();
acc1div.append(acc1details, acc1id, acccust1name, acc1balance);
var accfun = document.createElement('div');
setAttr(['class', 'style'], ['row', 'box-sizing: border-box;'], accfun);
var baldiv = document.createElement('div');
setAttr(['class'], ['col-lg-4 col-sm-12 border border-primary rounded'], baldiv);
var balform = document.createElement('form');
var setbaltag = document.createElement('label');
setbaltag.innerText = 'Set Balance';
setAttr(['for', 'class'], ['setbalfield', 'd-block mt-3 mb-3'], setbaltag);
var setbalfield = document.createElement('input');
setAttr(['id', 'type', 'class', 'placeholder'], ['setbalfield', 'text', 'form-control d-block mb-3', 'Enter amount to set new balance'], setbalfield);
var setbalbut = document.createElement('button');
setbalbut.innerText = 'Apply';
setAttr(['class', 'type'], ['btn btn-primary mb-3', 'button'], setbalbut);
setbalbut.onclick = function () {
    if (setbalfield.value !== '') {
        acc1.setBalance(Number(setbalfield.value));
        acc1balance.innerText = "Balance: " + acc1.getBalance();
        setbalfield.value = '';
    }
    else {
        alert('please enter a number');
    }
};
balform.append(setbaltag, setbalfield, setbalbut);
baldiv.append(balform);
accfun.append(baldiv);
var depdiv = document.createElement('div');
setAttr(['class'], ['col-lg-4 col-sm-12 border border-success rounded'], depdiv);
var depform = document.createElement('form');
var deptag = document.createElement('label');
deptag.innerText = 'Deposit Cash';
setAttr(['for', 'class'], ['depfield', 'd-block mt-3 mb-3'], deptag);
var depfield = document.createElement('input');
setAttr(['id', 'type', 'class', 'placeholder'], ['depfield', 'text', 'form-control d-block mb-3', 'Enter amount to deposit in account'], depfield);
var depbut = document.createElement('button');
depbut.innerText = 'Apply';
setAttr(['class', 'type'], ['btn btn-primary mb-3', 'button'], depbut);
depbut.onclick = function () {
    if (depfield.value !== '') {
        acc1.deposit(Number(depfield.value));
        acc1balance.innerText = "Balance: " + acc1.getBalance();
        depfield.value = '';
    }
    else {
        alert('please enter a number');
    }
};
depform.append(deptag, depfield, depbut);
depdiv.append(depform);
accfun.append(depdiv);
var wddiv = document.createElement('div');
setAttr(['class'], ['col-lg-4 col-sm-12 border border-danger rounded'], wddiv);
var wdform = document.createElement('form');
var wdtag = document.createElement('label');
wdtag.innerText = 'Withdraw Cash';
setAttr(['for', 'class'], ['wdfield', 'd-block mt-3 mb-3'], wdtag);
var wdfield = document.createElement('input');
setAttr(['id', 'type', 'class', 'placeholder'], ['wdfield', 'text', 'form-control d-block mb-3', 'Enter amount to withdraw from account'], wdfield);
var wdbut = document.createElement('button');
wdbut.innerText = 'Apply';
setAttr(['class', 'type'], ['btn btn-primary mb-3', 'button'], wdbut);
wdbut.onclick = function () {
    if (wdfield.value !== '') {
        acc1.withdraw(Number(wdfield.value));
        acc1balance.innerText = "Balance: " + acc1.getBalance();
        wdfield.value = '';
    }
    else {
        alert('please enter a number');
    }
};
wdform.append(wdtag, wdfield, wdbut);
wddiv.append(wdform);
accfun.append(wddiv);
acc1div.append(accfun);
container.append(acc1div);
