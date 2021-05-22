$.ajax({
    type: "get",
    url: "https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian",
    success: function (response) {

        for ( let i = 0; i < response.meals.length; i++) {
            let newitem = `<div class='col-md-3 m-2 shadow-lg p-3 mb-5 bg-white rounded text-center'>
             <p>${response.meals[i].strMeal}</p>
            <img src=${response.meals[i].strMealThumb} alt="meal" class="img-fluid">
            <p>Code: ${response.meals[i].idMeal}</p>
            </div>`

            $("#myitems").append(newitem)
        }
    },
    error: function (error) {
        console.log(error)
    }
})