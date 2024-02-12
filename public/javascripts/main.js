console.log('script loaded and work!');

const buttonToBeClicked = document.querySelector('.btn');
console.log('buttonToBeClicked:', buttonToBeClicked);


buttonToBeClicked.addEventListener("click", () => {
    console.log('starting for load files!');
    window.location.assign('./file/123', '_blank');
});

//file/123