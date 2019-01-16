$(document).ready(function () {
    $(document).on("click", ".btn", function (event) {
        event.preventDefault();
        if (this.val() === "driver") {
            
            $.ajax({
                method: "GET",
                url: "/driver"
            }).then(function (response) {
                console.log(response);
            });

        } else if (this.val() === "customer") {
            $.ajax({
                method: "GET",
                url: "/customer"
            }).then(function (response) {
                console.log(response);
            });
        }
    });
});