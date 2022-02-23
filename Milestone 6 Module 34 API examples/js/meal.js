document.getElementById('toast-area').style.display = 'none';

const loadMeal = () =>{
    const searchField = document.getElementById('search-input');
    const searchValue = searchField.value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`
    fetch(url)
        .then(response => response.json())
        .then(data => showMeal(data.meals))

        document.getElementById('search-input').value ="";
}

const showMeal = (data) =>{
    console.log(data);
    const showMeal = document.getElementById('show-meal');
    showMeal.innerHTML = '';
    for (const meal of data) {
        const div = document.createElement('div');
        div.classList.add('col-lg-4');
        div.innerHTML = `<div onclick="mealDetails(${meal.idMeal})" class="card mb-3" style="max-width: 540px;">
                            <div class="row g-0">       
                            <div class="col-md-4">
                                <img src="${meal.strMealThumb}" class="img-fluid rounded-start h-100" alt="...">
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                <h5 class="card-title">${meal.strMeal}</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                            </div>
                        </div>`;
        showMeal.appendChild(div);
    }
}

const mealDetails =(id) => {
    console.log(id);
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
    fetch(url)
        .then(response => response.json())
        .then(data => showMealDetails(data.meals))
}

const showMealDetails = (data) => {
    const toastField = document.getElementById('toast-area');
    toastField.innerHTML = '';
    const div = document.createElement('div');
    for (const meal of data) {
        div.innerHTML = `<div class="toast show text-center position-absolute top-50 start-50 translate-middle" role="alert" aria-live="assertive" aria-atomic="true">
                                    <div class="toast-body">
                                        <div class="card mx-auto" style="width: 18rem;">
                                            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                                            <div class="card-body">
                                                <h5 class="card-title">${meal.strMeal}</h5>
                                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                <a href="${meal.strYoutube}" class="btn btn-primary">YouTube</a>
                                            </div>
                                        </div>
                                        <div class="mt-2 pt-2 border-top">
                                            <button type="button" class="btn btn-primary btn-sm">Take action</button>
                                            <button type="button" class="btn btn-secondary btn-sm" data-bs-dismiss="toast">Close</button>
                                        </div>
                                    </div>
                                </div>`;
        toastField.appendChild(div);
        document.getElementById('toast-area').style.display = 'block';
    }

}