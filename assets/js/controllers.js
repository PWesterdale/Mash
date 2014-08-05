'use strict';

/* Controllers */

angular.module('mash.controllers', [])
	.controller('homeCtrl', ['$scope', 'Flickr', '$location', '$routeParams', function($scope, flickr, $location, $rp) {

		$scope.photos = {};

		if($rp.tag){
			flickr.setTag($rp.tag);
		}

		$scope.tags = flickr.getTags().join(', ');

		$scope.viewPhoto = function(id){
			$location.url('/photo/' + id);
		};

		flickr.getStream('all', function(err, data){
			if(err){
				$scope.error = 'It looks like we can\'t connect to Flickr! Please try again later!';
			} else {
				$scope.photos = data;
			}
		});

	}])
	.controller('detailCtrl', ['$scope', 'Flickr', '$routeParams', '$location', '$sce', function($scope, flickr, $rp, $location, $sce) {

		$scope.photo = flickr.getPhoto($rp.id);

		$scope.viewTag = function(tag){
			$location.url('/home/' + tag);
		}

		$scope.goBack = function(){
			$location.url('/home');
		}
	
		if(!$scope.photo){
			$location.url('/home');
		} else {
			$scope.photo.tags = $scope.photo.tags.split(' ');
		}

	}]);