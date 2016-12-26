import {getUsers} from './api/userApi';
import angular from 'angular';


angular.module("Myapp",[])
.controller("MainController",MainController)


function MainController($scope)
{
  $scope.hello="Hello World!";
}



 


getUsers().then(result=>{
  let usersBody="";

  result.forEach(user=>{
    usersBody+=`<tr>
    <td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
    <td>${user.id}</td>
    <td>${user.firstName}</td>
    <td>${user.lastName}</td>
    <td>${user.email}</td>
    <tr>`
  });

  global.document.getElementById('users').innerHTML=usersBody;
});
