(function(){
    'use strict';

    angular.module('ShoppingList', [])
    .controller('ToBuyListController', ToBuyListController)
    .controller('BoughtItemsListController', BoughtItemsListController)
    .provider('ShoppingListService', ShoppingListServiceProvider);


    ToBuyListController.$inject = ['ShoppingListService'];
    function ToBuyListController(ShoppingListService) {
      var list = this;
    
      list.items = ShoppingListService.getItemsToBuy();

      list.removeItem = function (itemIndex) {
        ShoppingListService.removeItemToBuy(itemIndex);
      };
    }

    
    BoughtItemsListController.$inject = ['ShoppingListService'];
    function BoughtItemsListController(ShoppingListService) {
      var list = this;
    
      list.items = ShoppingListService.getItemsBought();
    }


    // If not specified, maxItems assumed unlimited
    function ShoppingListService() {
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

    function ShoppingListServiceProvider(){
        var provider = this;

        provider.$get = function(){
            var shoppingList = new ShoppingListService();
            return shoppingList;
        }
    }

})();
