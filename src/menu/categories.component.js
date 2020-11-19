(function(){
    'use strict';

    angular.module('MenuApp')
    .component('menuCategories',{
        templateUrl:'src/menu/template/category.template.html',
        bindings:{
            items:'<'
        }
    })
})();