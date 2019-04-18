var shopper = {
    fruits: "bananas",
    amount: 4,
    isPlenty: 3,
    getMore : function() {
        if(this.amount >= this.isPlenty){
        return "We need " + this.amount + " more " + this.fruits;
        }}
 }

 console.log(shopper.getMore())