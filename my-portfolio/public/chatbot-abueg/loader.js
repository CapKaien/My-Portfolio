window.onload = function() {
    setTimeout(() => {
        document.querySelector('.loader').style.display = 'none'; // Hide loader
        document.querySelector('.container').style.display = 'block'; // Show chat
    }, 2000); 
};