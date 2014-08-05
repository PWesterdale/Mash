'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('mash.services', [])
.factory('Flickr', function($http){

	var flickr = {
		photos: {},
		tags: ['maldives'],
		clearTags : function(){
			this.tags = ['maldives'];
		},
		setTag : function(tag){
			this.tags = [tag];
		},
		getTags : function(){
			return this.tags;
		},
		getStream : function(tagMode, cb){
			var endPoint = 'https://api.flickr.com/services/feeds/photos_public.gne';

			if(!this.tags.length){
				this.clearTags();
			}

			var params = {
				tags : this.getTags().join(','),
				tagmode : tagMode
			};

			this.getData(endPoint, params, function(err, data){
				cb(err, data);
			});
		},
		getFromGroup : function(groupId, cb) {
			var endPoint = 'https://api.flickr.com/services/feeds/groups_pool.gne';
			var params = {
				id: groupId
			};
			this.getData(endPoint, params, function(err, data){
				cb(err, data);
			});
		},
		getPhoto : function(id){
			if(!this.photos.items) return false;
			return this.photos.items[id];
		},
		getData : function(endPoint, params, cb){
			var self = this;
			if(!params){
				params = {
					format : 'json',
					jsoncallback : 'JSON_CALLBACK'
				};
			} else {
				params.format = 'json';
				params.jsoncallback = 'JSON_CALLBACK';
			}

			$http.jsonp(endPoint, {params : params})
				.success(function(data, status){
					self.photos = data;
					cb(null, data);
				})
				.error(function(data, status){
					cb(data, null);
				})
		}
	}

	return flickr;

});