const coffeeShop = {
    beans: 40,
  
    drinkRequirements: {
      latte: 10,
      americano: 5,
      doubleShot: 15,
      frenchPress: 12
    },
  
    makeDrink: function (drinkType) {
      const drinks = Object.keys(this.drinkRequirements)
      let cupBeans = Object.values(this.drinkRequirements)
      let isExist = false
      let cup = 0

      for(let i=0; i<drinks.length; i++) {
          if(drinks[i] == drinkType) {
            isExist = true
            cup = cupBeans[i]
          } 
      }

      if(isExist && cup < this.beans) {
        this.beans -= cup
        } else {
        console.log("Sorry, we don't make")
    }
    }
}
  
  coffeeShop.makeDrink("latte"); 
  console.log(coffeeShop)
  coffeeShop.makeDrink("americano");
  console.log(coffeeShop)
  coffeeShop.makeDrink("filtered"); //should alert/console "Sorry, we don't make filtered"
  console.log(coffeeShop)
  coffeeShop.makeDrink("doubleShot");
  console.log(coffeeShop)
  coffeeShop.makeDrink("frenchPress"); //should alert/console "Sorry, we're all out of beans"
  console.log(coffeeShop)
  