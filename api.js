$.ajax({
    type: "GET",
    url: "https://jsonplaceholder.typicode.com/users",
    dataType: "JSON",
    success: function(response) {
        console.log(response);
    }
});