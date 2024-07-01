/**********************************/
/* Sets variables for the buttons */
/**********************************/

const home = document.getElementById('home');                           // Gets the home button
const about = document.getElementById('about');                         // Gets the about button
const contact = document.getElementById('contact');                     // Gets the contact button

/********************************/
/* Sets variables for the pages */
/********************************/

const homePage = document.getElementById('homePage');                   // Gets the home page
const aboutPage = document.getElementById('aboutPage');                 // Gets the about page   
const contactPage = document.getElementById('contactPage');             // Gets the contact page
const cover = document.getElementById('cover');                         // Gets the cover element

/************************/
/* Sets extra variables */
/************************/



/****************************/
/* Sets initial active page */
/****************************/

let activePage = 'home';                                                // Sets the initial active page to the home page

/**************************************************************/
/*Changes the display of the pages based on the button clicked*/
/**************************************************************/

const pageHandler = () => {                                             // Sets the pageHandler function
    homePage.style.display = 'none';
    aboutPage.style.display = 'none';
    contactPage.style.display = 'none';

    if (activePage === 'home') {                                        // If the homeActive variable is true
        homePage.style.display = 'block';                               // Displays the home page
    } else if (activePage === 'about') {                                // If the aboutActive variable is true
        aboutPage.style.display = 'block';                              // Displays the about page
    } else if (activePage === 'contact') {                              // If the contactActive variable is true
        contactPage.style.display = 'block';                            // Displays the contact page
    }
}

/*********************************************************************************/
/* Sets event listeners for the buttons and adds the active and inactive classes */
/*********************************************************************************/

const switchPage = (page) => {
    cover.classList.add('toRightActive');
    cover.style.zIndex = '10';                                           // Move cover behind the page element
    setTimeout(() => {
        activePage = page;
        pageHandler();

        setTimeout(() => {
            cover.classList.remove('toRightActive');
            setTimeout(() => {
                cover.style.zIndex = '-5';                                  // Move cover behind the page element
            }, 750);                                                       // Match this duration with the CSS transition time
        }, 150);                                                       // Match this duration with the CSS transition time
    }, 750);                                                           // Match this duration with the CSS transition time
};

home.addEventListener('click', () => {                                  // When the home button is clicked
    home.classList.add('active');                                       // Adds the active class to the home button
    home.classList.remove('inactive');                                  // Removes the inactive class from the home button
    
    about.classList.add('inactive');                                    // Adds the inactive class to the about button
    about.classList.remove('active');                                   // Removes the active class from the about button

    contact.classList.add('inactive');                                  // Adds the inactive class to the contact button
    contact.classList.remove('active');                                 // Removes the active class from the contact button

    switchPage('home');                                                 // Calls the switchPage function
});

about.addEventListener('click', () => {                                 // When the about button is clicked
    home.classList.add('inactive');                                     // Adds the inactive class to the home button
    home.classList.remove('active');                                    // Removes the active class from the home button

    about.classList.add('active');                                      // Adds the active class to the about button
    about.classList.remove('inactive');                                 // Removes the inactive class from the about button

    contact.classList.add('inactive');                                  // Adds the inactive class to the contact button
    contact.classList.remove('active');                                 // Removes the active class from the contact button

    switchPage('about');                                                // Calls the switchPage function
});

contact.addEventListener('click', () => {                               // When the contact button is clicked
    home.classList.add('inactive');                                     // Adds the inactive class to the home button
    home.classList.remove('active');                                    // Removes the active class from the home button

    about.classList.add('inactive');                                    // Adds the inactive class to the about button
    about.classList.remove('active');                                   // Removes the active class from the about button

    contact.classList.add('active');                                    // Adds the active class to the contact button
    contact.classList.remove('inactive');                               // Removes the inactive class from the contact button

    switchPage('contact');                                              // Calls the switchPage function
});

/************************************/
/* Initialize the default home page */
/************************************/

document.addEventListener('DOMContentLoaded', () => {
    pageHandler();
});