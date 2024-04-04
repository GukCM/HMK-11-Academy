let selectedRating = 0;

const loopItems = (className, callback) => {
    const items = document.getElementsByClassName(className);
    for (let index = 0; index < items.length; index++) {
        callback(items[index]);
    }
};

const changeActive = (element) => {
    loopItems('rating-item', (el) => el.classList.remove('active'));
    element.classList.add('active');
    selectedRating = element.innerHTML;
    console.log(selectedRating);
}

const changeContainer = () => {
    if (selectedRating === 0){
        alert("Please select a rating.");
    } else {
        const container = document.querySelector('.container');
        container.classList.remove('active');
        const ratingDisplay = document.getElementsByClassName('selected-rating');
        ratingDisplay[0].innerText = selectedRating;
        const container2 = document.querySelector('.container-2');
        container2.classList.add('active');
    }
};

const init = () => {
    loopItems('rating-item', (el) => 
      el.addEventListener('click', () => changeActive(el))
    );

    loopItems('submit-btn', (el) => 
      el.addEventListener('click', () => changeContainer())
    );
};

init();
