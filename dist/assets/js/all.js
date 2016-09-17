/* 
 * JS Script
 */




(function () {
    var View = {
        renderList: function (data) {
            $("#posts").html("");
            data.forEach(function (item) {
                $('#posts').append($("#template").tmpl(item));
            });
        }
    };

    var Controller = {
        init: function () {
            Model.getData(function (response) {
                View.renderList(response);
            }, function () {
                alert("Error");
            });
        }
    };

    var Model = {
        getData: function (resolve, reject) {
            $.ajax({
                url: "data.json",
                type: "GET",
                success: resolve,
                error: reject
            });
        }
    };

    Controller.init();
}());