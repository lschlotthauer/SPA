// script.js

    // create the module and name it scotchApp
        // also include ngRoute for all our routing needs
    var scotchApp = angular.module('scotchApp', ['ngRoute']);

    // configure our routes
    scotchApp.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'pages/home.html',
                controller  : 'mainController'
            })

            // route for the about page
            .when('/about', {
                templateUrl : 'pages/about.html',
                controller  : 'aboutController'
            })

            // route for the contact page
            .when('/contact', {
                templateUrl : 'pages/contact.html',
                controller  : 'contactController'
            });
    });

    // create the controller and inject Angular's $scope
    scotchApp.controller('mainController', function($scope) {
        // create a message to display in our view
        $scope.message = 'Everyone come and see how good I look!';
    });

    scotchApp.controller('aboutController', function($scope) {
        $scope.message = 'Look! I am an about page.';
    });

    scotchApp.controller('contactController', function($scope) {
        $scope.message = 'Contact us! JK. This is just a demo.';
    });

function getRss(){
   $(function(){
        url = 'http://rss.cnn.com/rss/edition.rss';
        $.ajax({
        type: "GET",
        url: document.location.protocol + '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=1000&callback=?&q=' + encodeURIComponent(url),
        dataType: 'json',
        error: function(){
            alert('Unable to load feed, Incorrect path or invalid feed');
        },
        success: function(xml){
            for(var i = 0; i < xml.responseData.feed.entries.length; i++){
                var entry = xml.responseData.feed.entries[i];   
                


                var noticia = {
                    item: entry.item,
                    titulo: entry.title,
                    link: entry.link,
                    description: entry.description,
                    category: entry.category,
                    pubDate: entry.pubDate,
                    thumbnail: entry.thumbnail,
                    enclosure: entry.enclosure
                };
                console.log(noticia);
            } 
            //values = xml.responseData.feed.entries;
            //console.log(values);
        }
    });
    });
}