(function(){
    'use strict';

    angular.module('ShoppingList', [])
    .controller('ShoppingListController1', ShoppingListController1)
    .controller('ShoppingListController2', ShoppingListController2)
    .provider('ShoppingListService', ShoppingListServiceProvider);


    ShoppingListController1.$inject = ['ShoppingListService'];
    function ShoppingListController1(ShoppingListService) {
      var list = this;
    
      list.items = ShoppingListService.getItemsToBuy();

      list.removeItem = function (itemIndex) {
        ShoppingListService.removeItemToBuy(itemIndex);
      };
    }

    
    ShoppingListController2.$inject = ['ShoppingListService'];
    function ShoppingListController2(ShoppingListService) {
      var list = this;
    
      list.items = ShoppingListService.getItemsBought();
    }


    // If not specified, maxItems assumed unlimited
    function ShoppingListService() {
        var service = this;
      
        // List of shopping items to buy
        var itemsToBuy = [
                                {name: "oatmeal cookies", quantity: 12},
                                {name: "sparkling water", quantity: 5},
                                {name: "protein bar", quantity: 12},
                                {name: "steaks", quantity: 4},
                                {name: "chicken", quantity: 1},
                                {name: "chocolate cookies", quantity: 12},
                                {name: "spinach", quantity: 1}
                            ];

        // List of shoppin items already bought
        var itemsBought = []

        service.removeItemToBuy = function(index){
            itemsBought.push(itemsToBuy[index]);
            itemsToBuy.splice(index, 1);
        }

        service.getItemsToBuy = function () {
          return itemsToBuy;
        };

        service.getItemsBought = function () {
            return itemsBought;
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
