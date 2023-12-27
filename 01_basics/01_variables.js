const accountId = 144553  //can't be changed
let accountEmail = "tanya@gmail.com"

var accountPassword = "12345" //we don't use var anymore cz of issue in block scope and functional scope
accountCity = "Jaipur"//not recommended but correct

let accountState;

/*
accountId = 2; //not allowed
console.log(accountId); //error
*/

accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);
console.table([accountId,accountEmail,accountPassword, accountCity,accountState])
/*
┌─────────┬─────────────┐
│ (index) │   Values    │
├─────────┼─────────────┤
│    0    │   144553    │
│    1    │ 'hc@hc.com' │
│    2    │ '21212121'  │
│    3    │ 'Bengaluru' │
     4       undefined
*/
