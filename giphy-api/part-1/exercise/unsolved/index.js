/*
	- Based on a search (text input and button)
	- Return results from the giphy api
	- When another search is executed, clear the current content and replace it with new content
  - As a bonus, display the giphy content in a modal
	- If a search is empty, alert the user and dont hit the api, display a toast for the error
	- If the api key is not entered in the url, alert the user based on the api error, display a toast for the error
*/
//key in order to gain access to the api
// Get the modal
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



var apiKey = "N1Jcsyk7Lh2PH5H6qdL4LIFuZ5Jbn9GC";
//api input search term

 $("button").click(function(){
    var giphySearchTerm = document.getElementById("input").value;
    console.log(giphySearchTerm);
    var giphySearchTermForUrl = giphySearchTerm.split(" ").join("+");
//number of results went from the api response
var numberOfResults = "10";
//api url with inputs from above
var giphyApiUrl = "http://api.giphy.com/v1/gifs/search?q=" + giphySearchTermForUrl + "&api_key=" + apiKey + "&limit=" + numberOfResults;
 $.ajax({
	type: 'GET',
	//using the giphy url from above
	url: giphyApiUrl,
	error: function(err){
		//if the api key is empty, it will throw a forbidden error
		//meaning you dont have access to the api
		if(err.status == 403){
			alert("Please make sure you have entered a valid api key")
		}
	},
	success: function(response){
		//logging the responses from the api call
		console.log(response);
		console.log(response.data);
		console.log(response.data[0].images.fixed_height.url);

		//appending the images from the api call based on the search term and number of results to the dom
		var imagesDiv = $("<div>");
		for(var i = 0; i < response.data.length; i++){
			img = $('<img>');
			img.attr('src', response.data[i].images.fixed_height.url);
			imagesDiv.append(img);
		}
		$('#giphy-content').append(imagesDiv);
	}
});
 });

$(".close").click(function(){
document.getElementById("giphy-content").innerHTML="";
 });


