(function ($) {
	"use strict";

	$.fn.src = function () {
		var self = this;
		if (self.length === 0)
			return self;
		if (arguments.length === 0) {
			var srcList = [];
			var i, max = self.length;
			for (i = 0; i < max; i += 1) {
				var ele = self[i];
				srcList.push(ele.src);
			}
			if (srcList.length === 1)
				srcList = srcList[0];
			return srcList;
		} else {
			var i, max = self.length;
			for (i = 0; i < max; i += 1) {
				var ele = self[i];
				var src = '';
				if (arguments.length === 1 && Array.isArray(arguments[0]))
					src = arguments[0][i];
				else
					src = arguments[i];
				ele.src = src;
			}
			return self;
		}
	};

	$.fn.class = function () {
		var self = this;
		if (self.length === 0)
			return self;
		if (arguments.length === 0) {
			var classList = [];
			var i, max = self.length;
			for (i = 0; i < max; i += 1) {
				var ele = self[i];
				var clsList = ele.classList;
				if(clsList.length === 0)
					clsList = null;
				else if (clsList.length === 1)
					clsList = clsList[0];
				else {
					var list = [];
					var j, max2 = clsList.length;
					for (j = 0; j < max2; j += 1) {
						list.push(clsList[j]);
					}
					clsList = list;
				}
				classList.push(clsList);
			}
			if (classList.length <= 1)
				classList = classList[0];
			return classList;
		}
	};
}(jQuery));