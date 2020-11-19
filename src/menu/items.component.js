(function(){
    'use strict';

    angular.module('MenuApp')
    .component('menuItems',{
        templateUrl:'src/menu/template/itemdetail.template.html',
        bindings:{
            item:'<'
        }
    })
})();