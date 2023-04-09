/*Toggle hamburger menu*/
document.querySelector('.open-btn').addEventListener('click', function() {
    document.querySelector('nav').style.display = 'block';
    document.querySelector('.open-btn').style.display = 'none';
    document.querySelector('.close-btn').style.display = 'block';
});

/*Toggle close button*/
document.querySelector('.close-btn').addEventListener('click', function() {
    document.querySelector('nav').style.display = 'none';
    document.querySelector('.open-btn').style.display = 'block';
    document.querySelector('.close-btn').style.display = 'none';
});