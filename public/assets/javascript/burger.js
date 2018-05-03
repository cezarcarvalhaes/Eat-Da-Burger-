$(document).ready(function (){
    //Add a new burger function
    $("#add-burger").on("click", function(event){
        event.preventDefault();
        var newBurger = $("#new-burger").val().trim();
        console.log(newBurger)

        $.post("/api/burgers", {burger_name: newBurger}).then(
            function() {
                console.log('New burger: ' + newBurger);
                location.reload();
            }
        )
    });

    //Devour a burger!


})