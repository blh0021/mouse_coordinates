$('body').on("mousemove", function (e) {
	console.log("X: " + e.clientX + "\nY: " + e.clientY);
	chrome.runtime.sendMessage({x: e.clientX, y: e.clientY}, function(response) {
	console.log(response.farewell);
	});
});

