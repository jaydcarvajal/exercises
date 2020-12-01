/*
	Using the giphy api:
	- Append 10 giphy images to the page based on 1 search term
	- When an image is clicked on, remove the image from the dom
*/
var apiKey = "N1Jcsyk7Lh2PH5H6qdL4LIFuZ5Jbn9GC";
var giphySearchTerm = "one piece";
var giphySearchTermForUrl = giphySearchTerm.split(" ").join("+");
var numberOfResults = "10";
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

		
		var imagesDiv = $("<div id='imageAdd'>");
		for(var i = 0; i < response.data.length; i++){
			img = $('<img>');
			img.attr('id','image'+i);
			img.attr('src', response.data[i].images.fixed_height.url);
			imagesDiv.append(img);
			console.log(imagesDiv);
		}
		$('#giphy-images').append(imagesDiv);

		  

	}
});

$("div").click(function(){ 
	var list = document.getElementById("imageAdd");
  		list.removeChild(list.childNodes[0]);   
  	});