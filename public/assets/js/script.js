$(document).ready(function () {
    $(document).on("click", ".accept-btn", function (event) {
        event.preventDefault();
        console.log(this);
        var request_id = $(this).attr("id");
        console.log(request_id);
        // creates variable for request id to be used to know which request is getting updated with a request_status of true.
        $.ajax({
            method: "PUT",
            url: "/drive/update/" + request_id
        }).then(function (data) {
            console.log(data);
            location.reload();
        });
        

        
    });
});