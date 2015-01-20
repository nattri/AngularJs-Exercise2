'use strict';

angular.module('movieDB.genre',['ui.bootstrap'])
	.controller('genreCtrl',['$scope','movieAPIservice','$filter','$routeParams',function($scope,movieAPIservice,$filter,$routeParams){

		$scope.currentPage=1;
		$scope.pageSize = 6;
		$scope.genreName = $routeParams.genreName;
		$scope.pageTitle = $scope.genreName + " Movies";

		movieAPIservice.getMovies().success(function(data){ 		// genre filtering is not working may be due to json
			$scope.movieList = $filter('filter')(data,function(movie){
				return $filter('filter')(movie.genres,{name:$scope.genreName}).length;
			});
			console.log($scope.movieList);
		});

		movieAPIservice.getGenres().success(function(data){
			$scope.genreList = data;
		});
	}]);