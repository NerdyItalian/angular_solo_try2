var myApp = angular.module('myApp',[] );

var myFamily = [
    {
    name: "John",
    age: 32,
    relationship: "Husband",
    description: "My partner in crime, the peanut butter to my jelly, and the love of my life",
    image: "/images/john.jpg"
    } ,
    {
    name: "Giovanni",
    age: 1.5,
    relationship: "Son",
    description: "The ray of light in my day who constantly amazes and surprises me.",
    image: "/images/giovanni.jpg"
    },
    {
    name: "Shorty",
    age: 7,
    relationship: "Dog",
    description: "She is a dog who thinks she is a people.",
    image: "/images/shorty.jpg"
    },
    {
    name: "Bosco",
    age: 5,
    relationship: "Dog",
    description: "He is the sweetest (and dumbest) dog I have ever met",
    image: "/images/bosco.jpg"
    },
    {
    name: "Gloria aka Mom",
    age: 59,
    relationship: "Mom",
    description: "I am lucky to call her my mom. She is my rock",
    image: "/images/mom.jpg"
    },
    {
    name: "Maurizio aka Dad",
    age: 62,
    relationship: "Dad",
    description: "He is one of the best people you ever meet. Everyone loves my dad!",
    image: "/images/dad.jpg"
    },
    {
    name: "Erica",
    age: 36,
    relationship: "Sister",
    description: "She is my best friend, the person I tell everything to and the one who will put me in my place.",
    image: "/images/erica.jpg"
    },
    {
    name: "TJ",
    age: 35,
    relationship: "B-Law",
    description: "He is one of the coolest dudes I know and I love him so much! I am glad he is my B-law.",
    image: "/images/tj.jpg"
    },
    {
    name: "Miles",
    age: 6,
    relationship: "Nephew",
    description: "He is my godson, my mister smarty and one of the happiest kids I know.",
    image: "/images/miles.jpg"
    },
    {
    name: "Linus",
    age: 4,
    relationship: "Nephew",
    description: "Linus (aka Brutus) is one of the funniest and kindest kids I have ever known. He is also a complete bulldozer.",
    image: "/images/linus.jpg"
    }
];



myApp.controller("AliciaController", ["$scope", function($scope){
    $scope.persons = myFamily;
    console.log($scope.persons)

}]);