 //Variables
const fragment = document.createDocumentFragment();
const navigation = document.querySelector('#navbar__list');
const sections = document.querySelectorAll('section');

//create link element for each section 
function generateNav(id, name){
    const nav = `<a class ="menu__link" data-id="${id}">${name}</a>`;
    return nav;
};

// Build the menu 
navigationBuild()

// build the nav
function navigationBuild(){
    //for loop to create sections in HTML file
    for (let x=0; x < sections.length; x++){
        const menuItem = document.createElement('li');
        const sectionId= sections[x].getAttribute('id');
        const sectionDataNav = sections[x].getAttribute('data-nav');
        menuItem.innerHTML = generateNav(sectionId, sectionDataNav);
        //add sections to fragment document
        fragment.appendChild(menuItem);
    }
    //add fragment document to navbarlist in HTML
    const navBarLi = document.getElementById('navbar__list')
    navBarLi.appendChild(fragment);
};
 //viewport active class(add & rem0ve function)

 // activates section
window.addEventListener('scroll', (event) => {

    // create new variable for section again 
    const sectionsLi = document.querySelectorAll('section');
  
    // looping through sections
    sectionsLi.forEach( section => {
  
      // calculates size 
      const size = section.getBoundingClientRect().top;

      if (size > 300 && size < 350) {
        const active = section.classList.add('activate');//add class active 
        //box shadow and border is created
        section.style.cssText = "box-shadow:30px 30px 50px 10px #ffb6c1;border-radius:2px;border:2px solid black;";
        //slice section ID 
        const sectionId= section.id.slice(7,8) -1;
        //adds color to background 
        navigation.childNodes[sectionId].style.cssText="background-color:#800080;";
        active(size(),section);
        inActive(section);
      } else {
       const inActive = section.classList.remove('activate');//remove class active
        const sectionId= section.id.slice(7,8) -1;
        //removes background color when navigation is not active 
        navigation.childNodes[sectionId].style.cssText="background-color:#ffffff;";
         //box shadow is removed when section is inactive
    section.style.cssText = "box-shadow:none;border-radius:none";"border:1px solid grey";
      }
    });
  });
// adds Smooth scroll function
function scrollToElement(event){
    if(event.target.nodeName === 'A'){
        const scrollSection = event.target.getAttribute('data-id');
        const section = document.getElementById(scrollSection);
        section.scrollIntoView({behavior: "smooth"});
    }
}
//Add EventListener
navigation.addEventListener('click', function(event){
    scrollToElement(event)
})