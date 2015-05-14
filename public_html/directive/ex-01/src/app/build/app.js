angular.module('myApp', [])
        .directive('myDirective', function () {

            return {
                restrict: 'E',
                template: "<a href='htpp://www.google.com'>Click me to go Google</a>"

            };

        });

 