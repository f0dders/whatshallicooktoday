$(document).ready(function () {
    $(".food-selector").on("select2:select", function (e) {
        $(':input[type="submit"]').removeAttr("disabled");
    });
    // Not working yet:
    // $(".food-selector").on("select2:clear", function (e) {
    //     // Do something
    //     $(':input[type="submit"]').attr('disabled', 'disabled');
    // });
});

function appendResults() {
    let selector = document.querySelectorAll("li.select2-selection__choice");
    let str = "";
    for (var i = 0; i < selector.length; i++) {
        str += selector[i].title + " ";
    }
    let params = new URLSearchParams(window.location.search);
    params.set("q", str.trim(str));
    window.history.replaceState({}, "", `${window.location.pathname}?${params}`);
    location.reload();
}

function clearResults() {
    $('.food-selector').val(null).trigger('change');
}
