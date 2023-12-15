//let accounta = [ 1,2,3,4,5]

 accounta = [
   [2, 8, 7],
   [7, 1, 3],
   [1, 9, 5],
];
 //Първо трябва да събера сумата на всеки индекс от на арраите

var m = function (accounts) {
    let maxWealth = 0;
    
    for (let i = 0; i < accounts.length; i++) {
        
        let currentwealth = 0;
         for (let j = 0; j < accounts.length; j++){
             currentwealth += accounts[i][j];
             
         }
        
        if (currentwealth > maxWealth) {
            maxWealth = currentwealth;
        }
        
    }
    return console.log(maxWealth);
    
};

m(accounta);
