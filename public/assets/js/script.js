$(document).ready(function () {
    $(document).on("click", ".accept-req", function (event) {
        event.preventDefault();

        var request_id = $(this).children(".id").val();
        // creates variable for request id to be used to know which request is getting updated with a request_status of true.
        $.ajax({
            method: "PUT",
            url: "/requests/update/" + request_id
        }).then(function (data) {

            location.reload();
        });
        
        
    });
});