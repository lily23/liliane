var myApp = angular.module('myModule', []);
        
         var arr = [];
        myApp.controller('myController', '$scope', 'nameListService', 'questionListService', 'answerListService', function($scope, nameListService, questionListService, 
        answerListService) {

            $scope.getName = function() {
                $scope.studentArray = "";
                getRandomStudents();
                $scope.studentArray = arr; 
                   
                 };
                
        });
        function getRandomStudents(){
         var names=["jane","mary","john","tom"];
        var questions=["What does DOM stand for?","What is an object?", "What does MVC stand for?","What does $scope do in angularJS?"];
        var answers = ["Document Object Model", "a particular instance of a class", "Model View Controller","application object"];
        arr=[];
         for(var i = 0; i < 4; i++){
                   var namePicked = Math.floor(Math.random() * names.length); 
                   var nameShown = names.splice(namePicked, 1);
                   var questionPicked = Math.floor(Math.random() * questions.length); 
                   var questionShown = questions.splice(questionPicked, 1); 
                   var answersPicked = Math.floor(Math.random() * answers.length);
                   var answerShown = answers.splice(answersPicked, 1);
                  arr.push({ nameAnswered: nameShown[0], questionAsked: questionShown[0], studentAnswer: answerShown[0], answeredCorrect:  ""});    
            }
        }
        function reply_click(clicked_id)
        {
            
            var point = document.getElementsByClassName(clicked_id)[0].innerHTML;
            document.getElementsByClassName(clicked_id)[0].innerHTML = parseInt(point) + 1;
        }
        
              function getName()
         {
            nameListService.getNameList()
            .then(
                //what to do if $http.get was successful
                function(response){
                    console.log(response.data);
                    var names = response.data;
                    reply_click();                
                },
                //what to do if $http.get was unsuccessful            
                function(response){
                    console.log(response);                
                    var names = [];
            }
        );
    }
    
     var names;
     
        
     
    ///// NAMES LIST FACTORY //////////////////////////////////////////////////
     myApp.factory('nameListService', ['$http', function($http){
    
        //factory allows us to specify an object to send back
        var nameListService = {};
    
        //get current rest conditions
        nameListService.getNameList = function(){
            return $http.get("names.json");
        };
        
        return nameListService;
    }]);
    
    ///// QUESTION LIST FACTORY //////////////////////////////////////////////////
    myApp.factory('questionListService', ['$http', function($http){
    
        //factory allows us to specify an object to send back
        var questionListService = {};
    
        //get current rest conditions
        questionListService.getQuestion = function(){
            return $http.get("questions.json");
        };
        
        return questionListService;
    }]);  
    
    ///// ANSWRS LIST FACTORY //////////////////////////////////////////////////
     myApp.factory('answerListService', ['$http', function($http){
    
        //factory allows us to specify an object to send back
        var answerListService = {};
    
        //get current rest conditions
        answerListService.getQuestion = function(){
            return $http.get("answers.json");
        };
        
        return answerListService;
    }]);  
    

