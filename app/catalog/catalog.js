'use strict';

angular.module('movieDB.catalog',['ui.bootstrap'])
	.controller('catalogCtrl',['$scope','movieAPIservice',function($scope,movieAPIservice){

		$scope.currentPage=1;
		$scope.pageSize = 6;
		$scope.pageTitle = "Most watched Movies";

		movieAPIservice.getMovies().success(function(data){
			$scope.movieList = data;
		});

		movieAPIservice.getGenres().success(function(data){
			$scope.genreList = data;
		});
	}]);