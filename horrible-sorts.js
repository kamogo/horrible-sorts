(function () {
	//I recommend this
	'use strict';
	function defineHorribleSorts() {
		var HorribleSorts = {};

		HorribleSorts.shuffle = function shuffle(array) {
			var currentIndex = array.length,
			temporaryValue,
			randomIndex;
			while (0 !== currentIndex) {
				randomIndex = Math.floor(Math.random() * currentIndex);
				currentIndex -= 1;
				temporaryValue = array[currentIndex];
				array[currentIndex] = array[randomIndex];
				array[randomIndex] = temporaryValue;
			}
			return array;
		}
		
		HorribleSorts.Bogosort = function Bogosort(array){
			for(var i=1;i<array.length;i++){
				if(array[i]<array[i-1]){
					Bogosort(HorribleSorts.shuffle(array));
				}
			}
			return array;
		}
		
		
		HorribleSorts.MiracleSort = function MiracleSort(array){
			var str = "";
			for(var i=0;i<array.length;i++){
				str+= String.fromCodePoint(0x1F64F);
			}
			console.log(str);
			return array;
		}
		
		HorribleSorts.ShortSort = function ShortSort(array){
			for(var i=1;i<array.length;i++){
				if(array[i]<array[i-1]){
					return array.splice(0, i);
				}
			}
			return array;
		}
		
		HorribleSorts.RefreshSort = function ShortSort(array){
			for(var i=1;i<array.length;i++){
				if(array[i]<array[i-1]){
					location.reload();
				}
			}
			return array;
		}
		
		HorribleSorts.DropSort = function DropSort(array){
			for(var i=1;i<array.length;i++){
				if(array[i]<array[i-1]){
					array.splice(i,1);
					i--;
				}
			}
			return array;
		}
		
		return HorribleSorts;
	}
	//define globally if it doesn't already exist
	if (typeof(HorribleSorts) === 'undefined') {
		window.HorribleSorts = defineHorribleSorts();
	} else {
		console.log("HorribleSorts is already defined.");
	}
})(window);
