$(document).ready(function() {
// jQuery references.
// "c" short for Customer.
var cNameInput = $("#customer_name");
var cItemName = $("#item_name");
var cEstWeight = $("#estimated_weight");
var cItemLocation = $("#item_location");


// On click listener for when customer submits form.
$(cmsForm).on("submit", handleFormSubmit);

// Function prevents empty slots, creates an object with customer's data and sends to backend.
function handleFormSubmit(event) {
    event.preventDefault();
    // Will not submit unless every field has data.
    if (!cNameInput.val().trim() || !cItemName.val().trim() || !cEstWeight.val() || !cItemLocation.val()  ) {
      return;
    }
    // If every field has data, make a new object for database to read.
    var newCustomer = {
      customer_name: cNameInput.val().trim(),
      item_name: cItemName.val().trim(),
      estimated_weight: cEstWeight.val().trim(),
      item_location: cItemLocation.val().trim()
    };

    // Sending to the backend.
    submitCustomer(newCustomer);
  }

function submitCustomer (post){
    $.post("/api/customers", post, function() {
    console.log("New customers' data has been posted");
});
}


  
});