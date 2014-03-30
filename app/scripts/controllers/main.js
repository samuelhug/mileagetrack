'use strict';

angular.module('mileagetrackApp')
  .controller('MainCtrl', function ($scope, $location, Auth) {

    // If the user is logged in, redirect then to the dashboard.
    if (Auth.isLoggedIn())
      $location.path('/dashboard');

    $scope.userForm = {};

    $scope.userForm.partial = '/partials/user/signup.html';

    // Toggles between displaying a login form or a signup form.
    $scope.userForm.toggle = function () {
      if ($scope.userForm.partial === '/partials/user/signup.html')
        $scope.userForm.partial = '/partials/user/login.html';
      else
        $scope.userForm.partial = '/partials/user/signup.html';
    };
  });
