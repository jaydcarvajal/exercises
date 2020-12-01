/*
	- Append to moving images on the page from the giphy api
	- If a moving image is clicked, change it to the still image
	- If a still image is clicked, change it to the moving image

	Notes:
		- you will be storing the follow data attribute values per image
			- moving image url
			- still image url
			- the current image type (moving or still)
		- when an image is clicked on
			- you will re-define the src of the picture
			- you will re-define the data attribute value of the current image type
*/

var apiKey = "N1Jcsyk7Lh2PH5H6qdL4LIFuZ5Jbn9GC";
var giphySearchTerm = "one piece";
var giphySearchTermForUrl = giphySearchTerm.split(" ").join("+");
var numberOfResults = "1";
var giphyApiUrl = "http://api.giphy.com/v1/gifs/search?q=" + giphySearchTermForUrl + "&api_key=" + apiKey + "&limit=" + numberOfResults;
$.ajax({
	type: 'GET',
	url: giphyApiUrl,
	error: function(err){
		if(err.status == 403){
			alert("Please make sure you have entered a valid api key")
		}
	},
	success: function(response){
		console.log(response);
		console.log(response.data);
		console.log(response.data[0].images.fixed_height.url);
		var x=1;
		
		var imagesDiv = $("<div id='imageAdd'>");
		for(var i = 0; i < response.data.length; i++){
			img = $('<img>');
			img.attr('id','image'+i);
			img.attr('src', response.data[i].images.fixed_height.url);
			imagesDiv.append(img);
			console.log(imagesDiv);
		}
		$('#giphy-images').append(imagesDiv);
		x=0;
		$("#giphy-images").click(function(){
			if (x==0) {
				for(var i = 0; i < response.data.length; i++){
					img = $('<img>');
					img.attr('id','image'+i);
					img.attr('src', response.data[i].images.fixed_height_still.url);
					imagesDiv.append(img);
					console.log(imagesDiv);
				}
				var list = document.getElementById("imageAdd");
		  		list.removeChild(list.childNodes[0]); 
				$('#giphy-images').append(imagesDiv);
				x=1;
			} else {
				for(var i = 0; i < response.data.length; i++){
					img = $('<img>');
					img.attr('id','image'+i);
					img.attr('src', response.data[i].images.fixed_height.url);
					imagesDiv.append(img);
					console.log(imagesDiv);
				}
				var list = document.getElementById("imageAdd");
		  		list.removeChild(list.childNodes[0]); 
				$('#giphy-images').append(imagesDiv);
				x=0;
			}
  			});
		  

	}
});


