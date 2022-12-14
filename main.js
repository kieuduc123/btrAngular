var myApp = angular.module("myApp", []);


myApp.service("RegisterService" , function(){
var uid = 1;
var users = [{
'id' : 0,
'name' : 'Kieu Duc',
'email' : 'duckt@gmail.com',
'password': 'kieu trung duc',
'phone' : '0394555586'}]; 
 
 // Save User
 this.save = function(user)  
 {
 if(user.id == null)                       
 {
 user.id = uid++;
 users.push(user);
 }
 else
 {
 for(var i in users)
 {
 if(users[i].id == user.id)
 {
 users[i] = user;
 }
 }
 }
 };
 
 // Search User
 this.get = function(id)
 {
 for(var i in users )
 {
 if( users[i].id == id)
 {
 return users[i];
 }
 }
 };
 
 // Delete User
 this.delete = function(id)
 {
 for(var i in users)
 {
 if(users[i].id == id)
 {
 users.splice(i,1);
 }
 }
 }; 
 
 // List Users
 this.list = function()
 {
 return users;
 }; 
});
 
// Register Controller 
myApp.controller("RegisterController" , function($scope , RegisterService){
    console.clear();
    $scope.ifSearchUser = false;
    $scope.title ="User List";
    $scope.users = RegisterService.list();
    $scope.saveUser = function()
    {
    console.log($scope.user);
    if($scope.user == null || $scope.user == angular.undefined)
    return;
    RegisterService.save($scope.user);
    $scope.user = {};
    }; 
    $scope.delete = function(id)
    {
    RegisterService.delete(id);
    if($scope.user != angular.undefined && $scope.user.id == id)
    {
    $scope.user = {};
    }
    }; 
    $scope.edit = function(id)
    {
    $scope.user = angular.copy(RegisterService.get(id));
    }; 
    $scope.searchUser = function(){
    if($scope.title == "User List"){
    $scope.ifSearchUser=true;
    $scope.title = "Back";
    }
    else
    {
    $scope.ifSearchUser = false;
    $scope.title = "User List";
    }   
    };
    $scope.submitForm = function(isValid){
        if(isValid){
            alert('form is Valid')
        }
    }

    $scope.submitForm = function(isValid){
        if(isValid){
            alert('form is Valid')
        }
    }
});
