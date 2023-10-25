const tmenu = document.querySelector(".navbar-conatiner-burger"); // navbar jdida dial borgir
const dmenu = document.getElementById("links"); // dik home catalogue register


 function onClick(){ //func onClick mdeclaria f html 3la dik toggle
if( dmenu.classList.contains("show")) // check if class show deja kayn
    dmenu.classList.remove("show") // ila kan ms7o
else
    dmenu.classList.add("show") // ila kan zido
}
const questionLinks = document.querySelectorAll('.faq .q a');
const answers = document.querySelectorAll('.faq .a');

// Add click event listeners to each question
questionLinks.forEach((link, index) => {
    link.addEventListener('click', () => {
        // Toggle the display of the answer when a question is clicked
        if (answers[index].style.display === 'block') {
            answers[index].style.display = 'none';
        } else {
            answers[index].style.display = 'block';
        }
    });
});