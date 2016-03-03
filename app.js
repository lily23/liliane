var myApp = angular.module('myModule', []);
        
         var arr = [];
        myApp.controller('myController', function($scope) {

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