(function(){
    'use strict';

    angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);


    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
      var list = this;
    
      list.items = ShoppingListCheckOffService.getItemsToBuy();

      list.removeItem = function (itemIndex) {
        ShoppingListCheckOffService.removeItemToBuy(itemIndex);
      };
    }

    
    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
      var list = this;
    
      list.items = ShoppingListCheckOffService.getItemsBought();
    }


    // If not specified, maxItems assumed unlimited
    function ShoppingListCheckOffService() {
        var service = this;
      
        // List of shopping items to buy
        var toBuy = [
                                {name: "oatmeal cookies", quantity: 12},
                                {name: "sparkling water", quantity: 5},
                                {name: "protein bar", quantity: 12},
                                {name: "steaks", quantity: 4},
                                {name: "chicken", quantity: 1},
                                {name: "chocolate cookies", quantity: 12},
                                {name: "spinach", quantity: 1}
                            ];

        // List of shoppin items already bought
        var bought = []

        service.removeItemToBuy = function(index){
            bought.push(toBuy[index]);
            toBuy.splice(index, 1);
        }

        service.getItemsToBuy = function () {
          return toBuy;
        };

        service.getItemsBought = function () {
            return bought;
        };
  
    }

})();
