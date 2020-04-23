$(document).ready(function () {
    var data = ["Banana", "Orange", "Apple", "Mango"];
    
    $(".food-selector").select2({
        data: data,
        tags: true,
        tokenSeparators: [',', ' '],
        placeholder: "Start typing...",
        createTag: function (params) {
            var term = $.trim(params.term);
        
            if (term === '') {
              return null;
            }
        
            return {
              id: term,
              text: term,
              newTag: true // add additional parameters
            }
          }
    });

    let searchParams = new URLSearchParams(window.location.search);
    let searchParamsString = searchParams.get("q");
    if (searchParams.has("q") == true) {
        let searchParamsArray = searchParamsString.split(" ");
        $('.food-selector').val(searchParamsArray);
        $('.food-selector').trigger('change');
    }
});