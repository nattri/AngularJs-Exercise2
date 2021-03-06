'use strict';

angular.module('movieDB.paginate-filter',[])
	.filter('paginate',function(){
		return function(arr,currentPage,pageSize){
			try{
				return arr.slice((currentPage-1)*pageSize,currentPage*pageSize);
			}catch(err){
				return err;
			}
		}
	})
	.filter('revert',function(){ 			// filter example to reverse a string
		return function(input){
			return input.split(' ').reverse().join(' ');
		}
	});