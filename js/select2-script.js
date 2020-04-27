$(document).ready(function () {
	var data = [
		"Banana",
		"Orange",
		"Apple",
		"Mango",
		"Pasta",
		"Onion",
		{
			id: "Chopped-Tomatoes",
			text: "Chopped Tomatoes",
		},
		"Pepper",
	];

	$(".food-selector").select2({
		data: data,
		tags: true,
		tokenSeparators: [","],
		placeholder: "Start typing...",
		allowClear: true,
		width: "resolve",
	});
});
