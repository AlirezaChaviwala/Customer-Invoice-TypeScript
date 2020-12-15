interface CustomerConfig{
    idVal:number,
    nameVal:string,
    discountVal:number
}

interface AccountConfig{
    accountIdVal:number,
    customerObj:CustomerConfig,
    balanceVal:number
}

interface InvoiceConfig{
    invoiceIdVal:number,
    customerObj:CustomerConfig,
    amountVal:number
}

class Customer{
    id:number;
    name:string;
    discount:number;

    constructor(customerData:CustomerConfig){
        this.id=customerData.idVal;
        this.name=customerData.nameVal;
        this.discount=customerData.discountVal;
    }

    getId():number{
        return this.id;
    }

    getName():string{
        return this.name;
    }

    getDiscount():number{
        return this.discount;
    }

    setDiscount(newDiscount:number){
    this.discount=newDiscount;
    }

    toString():string{
    return `ID: ${this.id}
    Name: ${this.name}
    Discount: ${this.discount}`
    }

}

class CustomerAccount extends Customer{
    accountId:number;
    customerObj:Customer;
    balance:number;

    constructor(accountData:AccountConfig){
        super(accountData.customerObj)
        this.accountId=accountData.accountIdVal;
        this.balance=accountData.balanceVal;
        this.customerObj=new Customer(accountData.customerObj)
    }

    getId():number{
        return this.accountId;
    }

    getCustomer():Customer{
        return this.customerObj;
    }

    getBalance():number{
        return this.balance;
    }

    setBalance(newBalance:number){
        this.balance=newBalance;
    }

    toString():string{
        return `ID: ${this.accountId}
        Balance: ${(this.balance).toFixed(2)}`
    }

    getCustomerName():string{
        return this.customerObj.name;
    }

    deposit(depAmount:number):CustomerAccount{
        this.balance+=depAmount;
        return this;
    }

    withdraw(withdrawAmount:number):CustomerAccount{
        if(withdrawAmount<=this.balance){
            this.balance-=withdrawAmount;
        }else{alert(`amount withdrawn exceeds the current balance!`)}

        return this;
    }
}

class Invoice extends Customer{
    invoiceId:number;
    customerObj:Customer;
    amount:number;

    constructor(invoiceData:InvoiceConfig){
        super(invoiceData.customerObj);
        this.invoiceId=invoiceData.invoiceIdVal;
        this.amount=invoiceData.amountVal;
        this.customerObj=new Customer(invoiceData.customerObj);
    }

    getId():number{
        return this.invoiceId;
    }

    getCustomer():Customer{
        return this.customerObj;
    }

    setCustomer(customerData:CustomerConfig){
        this.customerObj.id=customerData.idVal;
        this.customerObj.name=customerData.nameVal;
        this.customerObj.discount-customerData.discountVal
    }

    getAmount():number{
        return this.amount;
    }

    setAmount(newAmount:number){
        this.amount=newAmount;
    }

    getCustomerName():string{
        return this.customerObj.name;
    }

    getAmountAfterDiscount():number{
        this.amount*=Math.floor(this.customerObj.discount/100);
        return this.amount;
    }
}


let cust1=new Customer({idVal:101,nameVal:'Harry',discountVal:10});

let acc1=new CustomerAccount({accountIdVal:1001,customerObj:{idVal:101,nameVal:'Harry',discountVal:10}, balanceVal:15000})

//let invc1=new Invoice({invoiceIdVal:1,customerObj:{}})

function setAttr(val1, val2, element) {
    for (var i = 0; i < val1.length; i++) {
        element.setAttribute(val1[i], val2[i]);
    }
}

let container=document.createElement('div');
setAttr(['class'],['container'],container);
document.body.append(container);

let titleContainer=document.createElement('div');
setAttr(['class'],['text-center'],titleContainer);
container.append(titleContainer);

let title=document.createElement('h1');
setAttr(['class'],['jumbotron bg-transparent p-5'],title);
title.innerText='Customer and Invoice'
titleContainer.append(title);

let hr=document.createElement('hr');
setAttr(['class'],['my-4'],hr);
container.append(hr);


let cus1div=document.createElement('div');
let cus1details=document.createElement('h3');
cus1details.innerText='Customer Details'
let cus1name=document.createElement('h4');
cus1name.innerText=`Name: ${cust1.getName()}`
let cus1id=document.createElement('p');
cus1id.innerText=`ID: ${cust1.getId()}`
let cus1disc=document.createElement('p');
cus1disc.innerText=`Discount: ${cust1.getDiscount()}`
cus1div.append(cus1details,cus1name,cus1id,cus1disc);
container.append(cus1div);

//let br=document.createElement('br');

let acc1div=document.createElement('div');
let acc1details=document.createElement('h3');
acc1details.innerText='Account Details'
let acc1id=document.createElement('p');
acc1id.innerText=`A/C ID: ${acc1.getId()}`
let acccust1name=document.createElement('p');
acccust1name.innerText=`Name: ${acc1.getCustomerName()}`
let acc1balance=document.createElement('p');
acc1balance.innerText=`Balance: ${acc1.getBalance()}`;
acc1div.append(acc1details,acc1id,acccust1name,acc1balance);

let accfun=document.createElement('div');
setAttr(['class','style'],['row','box-sizing: border-box;'],accfun);
let baldiv=document.createElement('div');
setAttr(['class'],['col-lg-4 col-sm-12 border border-primary rounded'],baldiv);
let balform=document.createElement('form');
let setbaltag=document.createElement('label');
setbaltag.innerText='Set Balance';
setAttr(['for','class'],['setbalfield','d-block mt-3 mb-3'],setbaltag);
let setbalfield=document.createElement('input');
setAttr(['id','type','class','placeholder'],['setbalfield','text','form-control d-block mb-3','Enter amount to set new balance'],setbalfield);
let setbalbut=document.createElement('button');
setbalbut.innerText='Apply';
setAttr(['class','type'],['btn btn-primary mb-3','button'],setbalbut);
setbalbut.onclick=()=>{
    if(setbalfield.value!==''){
        acc1.setBalance(Number(setbalfield.value))
        acc1balance.innerText=`Balance: ${acc1.getBalance()}`;
        setbalfield.value=''
    }
    else{alert('please enter a number')}
}
balform.append(setbaltag,setbalfield,setbalbut);
baldiv.append(balform)
accfun.append(baldiv);

let depdiv=document.createElement('div');
setAttr(['class'],['col-lg-4 col-sm-12 border border-success rounded'],depdiv);
let depform=document.createElement('form');
let deptag=document.createElement('label');
deptag.innerText='Deposit Cash';
setAttr(['for','class'],['depfield','d-block mt-3 mb-3'],deptag);
let depfield=document.createElement('input');
setAttr(['id','type','class','placeholder'],['depfield','text','form-control d-block mb-3','Enter amount to deposit in account'],depfield);
let depbut=document.createElement('button');
depbut.innerText='Apply'
setAttr(['class','type'],['btn btn-primary mb-3','button'],depbut);
depbut.onclick=()=>{
    if(depfield.value!==''){
        acc1.deposit(Number(depfield.value));
        acc1balance.innerText=`Balance: ${acc1.getBalance()}`;
        depfield.value='';
    }
    else{alert('please enter a number')}
}
depform.append(deptag,depfield,depbut);
depdiv.append(depform)
accfun.append(depdiv);

let wddiv=document.createElement('div');
setAttr(['class'],['col-lg-4 col-sm-12 border border-danger rounded'],wddiv);
let wdform=document.createElement('form');
let wdtag=document.createElement('label');
wdtag.innerText='Withdraw Cash';
setAttr(['for','class'],['wdfield','d-block mt-3 mb-3'],wdtag);
let wdfield=document.createElement('input');
setAttr(['id','type','class','placeholder'],['wdfield','text','form-control d-block mb-3','Enter amount to withdraw from account'],wdfield);
let wdbut=document.createElement('button');
wdbut.innerText='Apply'
setAttr(['class','type'],['btn btn-primary mb-3','button'],wdbut);
wdbut.onclick=()=>{
    if(wdfield.value!==''){
        acc1.withdraw(Number(wdfield.value));
        acc1balance.innerText=`Balance: ${acc1.getBalance()}`;
        wdfield.value='';
    }
    else{alert('please enter a number')}
}
wdform.append(wdtag,wdfield,wdbut);
wddiv.append(wdform);
accfun.append(wddiv);

acc1div.append(accfun);
container.append(acc1div);

