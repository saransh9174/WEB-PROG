<!DOCTYPE html>
<html>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>
<body>

<div ng-app="">
  <form>
    First Name: <input type="text" ng-model="firstname"></br>
    Check to show a header:
    <input type="checkbox" ng-model="myVar"></br>
    pick a topic:
    <input type="radio" ng-model="myVar1" value="dogs">Dogs</input>
    <input type="radio" ng-model="myVar1" value="dogs">Suss</input>
  </form>
  <h1 ng-show="myVar">My Header</h1>
  <h1>You entered: {{firstname}}</h1>
</div>


<p>Change the name inside the input field, and you will see the name in the header changes accordingly.</p>

</body>
</html>
