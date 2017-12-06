function bookSearch() {
		var search = document.getElementById('search').value
		document.getElementById('results').innerHTML = ""
		console.log(search)

		$.ajax({
																							// this q is a query //
			url: "https://www.googleapis.com/books/v1/volumes?q=" + search,
			dataType: "json",

			success: function(data) {
					for(i = 0; i < data.items.length; i++) {
						results.innerHTML += "<h2>" + data.items[i].volumeInfo.title + " " + data.items[i].volumeInfo.authors + data.items[i].volumeInfo.smallThumbnail + "</h2>"
					}
			},

			type: 'GET'
		});
}
document.getElementById("search")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("button").click();
    }
});
document.getElementById('button').addEventListener('click', bookSearch, false)
