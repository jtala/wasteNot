$(document).ready(function() {
// jQuery references.
// "c" short for Customer.
var cNameInput = $("#customer_name");
var cItemName = $("#item_name");
var cEstWeight = $("#estimated_weight");
var cItemLocation = $("#item_location");


// On click listener for when customer submits form.
$(cmsForm).on("submit", handleFormSubmit);


});