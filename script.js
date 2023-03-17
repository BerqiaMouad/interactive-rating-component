const ratings = document.querySelectorAll('.btn');
const thankYou_rating = document.querySelector('.rating_number');
const rating_component = document.querySelector('.rating_component');
const thankyou_component = document.querySelector('.thank_you_component');

// variable to store the span that is clicked
let current_rating = null;

ratings.forEach(rating => {
    rating.addEventListener('click', () => {
        // we check if the rating is already on focus
        if(rating === current_rating){
            rating.classList.remove('active');
            current_rating = null;
        }
        else {
            // we check if there is a rating on focus to remove the focus from it
            if(current_rating !== null){
                current_rating.classList.remove('active');
            }

            // we make the currently clicked rating on focus
            rating.classList.add('active');
            current_rating = rating;
        }
    })
});

function show_thankyou(){
    // get the rating and add it to the result message
    thankYou_rating.textContent = current_rating.textContent;
    
    // make the rating component invisible and the thank you component on top of it
    thankyou_component.classList.add('showen');
    rating_component.classList.remove('showen');
}