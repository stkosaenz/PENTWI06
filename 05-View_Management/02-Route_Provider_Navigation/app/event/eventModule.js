

(function () {

	angular.module('eventModule', [])
		.factory('MainTitle', [function () {


			return {
				title: "Young Game Maker"
			};
		}])
		// Using Chrome 200 ok app
		.value('basePath', 'http://127.0.0.1:8887/05-View_Management/02-Route_Provider_Navigation/')
		.filter('searchCity', function () {
			return function (items, search) {
				var filtered = [];
				if (!search) { return items; }
				angular.forEach(items, function (item) {

					if (angular.lowercase(item.title).indexOf(angular.lowercase(search)) != -1) {
						filtered.push(item);
					}

				});
				return filtered;
			};
		})

		.config([function () {
			console.log("Event Module:: config");
		}])
		.run([function () {
			console.log("Event Module::running");
		}])
		.controller('EventCtrl', ['$scope', '$location', 'basePath', 'MainTitle', function ($scope, $location, basePath, mainTitle) {
			this.title = mainTitle.title;

			this.menu = [
				{
					name: "Events",
					href: "index.html"
				},
				{
					name: "Contact",
					href: "contact.html"
				}
			]

			this.index = 0;
			this.eventIndex = 0;
			this.basePath = basePath;

			this.setIndex = function (val) {
				this.index = parseInt(val);
				/* THIS IS JUST FOR EXAMPLE PURPOSES */

				if (this.index == 0) {
					$location.url('localhost')
				}
				if (this.index == 1) {
					$location.path('contact')
				}
			}

			this.getIndex = function () {
				return (this.index);
			}

			this.setEventIndex = function (val) {
				this.eventIndex = val;
			}
			this.getEventIndex = function () {
				return (this.eventIndex);
			}

			this.events = [
				{
					title: "New York",
					itemTitle: mainTitle.title,
					description: " is a one day event that teaches kids how to code",
					imgName: "newyork",
					date: Date.parse("January 24 2015")
				},
				{
					title: "Seattle",
					itemTitle: mainTitle.title,
					description: " is a one day event that teaches kids how to code",
					imgName: "seattle",
					date: Date.parse("February 24 2015")
				},
				{
					title: "San Francisco",
					itemTitle: mainTitle.title,
					description: " is a one day event that teaches kids how to code",
					imgName: "sanfran",
					date: Date.parse("April 24 2015")
				},
				{
					title: "Vancouver",
					itemTitle: mainTitle.title,
					description: " is a one day event that teaches kids how to code",
					imgName: "vancouver",
					date: Date.parse("March 24 2015")
				},
				{
					title: "Brighton",
					itemTitle: mainTitle.title,
					description: " is a one day event that teaches kids how to code",
					imgName: "brighton",
					date: Date.parse("September 24 2015")
				},

				{
					title: "London",
					itemTitle: mainTitle.title,
					description: " is a one day event that teaches kids how to code",
					imgName: "London",
					date: Date.parse("September 26 2015")
				},

			]

		}])
		.controller('EventItemCtrl', ['$scope', 'MainTitle', function ($scope, mainTitle) {

		}])
		.controller('EventTabCtrl', ['$scope', function ($scope) {
			this.tab = 0;
			this.setTab = function (val) {
				this.tab = val;
			}
			this.getTab = function (val) {
				return (this.tab);
			}

		}])

		// directives
		.directive('eventItem', function () {
			return {
				restrict: 'E', //E = element, A = attribute, C = class, M = comment   
				/*      
				scope: {
					//@ reads the attribute value, = provides two-way binding, & works with functions
					title: '@'         },
					*/
				templateUrl: 'app/event/eventItem.html',

				controller: function ($scope) {
					console.log("do stuff")

				}, //Embed a custom controller in the directive
				link: function ($scope, element, attrs) { } //DOM manipulation
			}
		});


})();