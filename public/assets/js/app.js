$(document).ready(function() { 
	$(".devourButton").on("click", function() {
		var id = $(this).attr("burgerID");

		var updatedBurger = {
			devoured: 1
		};

		$.ajax("/api/burgers/" + id, {
			type: "PUT",
			data: updatedBurger
		}).then(function() {
			console.log("updated id ", id);
			location.reload();
			});
	});
});