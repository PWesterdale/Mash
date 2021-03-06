'use strict';

/* Directives */

angular.module('mash.directives', [])
.directive('timesince', function () {
	return {
		restrict : 'AE',
		link: function(scope, element, attrs) {
			if (attrs.published) {
				scope.$watch(attrs.published, function (newVal) {
					var time = moment(newVal.published);
					element.text(time.fromNow());
				});
			}
		}
	};
})
.directive('flickravatar', function () {
	return {
		restrict : 'AE',
		link: function(scope, element, attrs) {
			if (attrs.author) {
				scope.$watch(attrs.author, function (newVal) {
					element.css({
						width: '26px',
						height: '26px',
						display: 'inline-block',
						'margin-right' : '10px',
						'border-radius': '13px',
						'background': "url('http://www.flickr.com/buddyicons/" + newVal + ".jpg') 50% 50%",
						'vertical-align' : 'middle'
					});
				});
			}
		}
	};
});