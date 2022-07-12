 //Variables
const fragment = document.createDocumentFragment();
const navigation = document.querySelector('#navbar__list');
const sections = document.querySelectorAll('section');

//create link element for each section 
function generateNav(id, name){
    const nav = `<a class ="menu__link" data-id="${id}">${name}</a>`;
    return nav;
};
//Calculates size of sections
const size = function (section){
    return Math.floor(section.getBoundingClientRect().top);};

// Build the menu 
navigationBuild();

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

// viewport active class(add & rem0ve function)
const addActive = function(conditional, section){
    if(conditional){
        section.classList.add('your-active-class');
        //box shadow and border is created
        section.style.cssText = "box-shadow:30px 30px 50px 10px #ffb6c1;border-radius:2px;border:2px solid black;";
        //slice section ID 
        const sectionId= section.id.slice(7,8) -1;
        //adds color to background 
        navigation.childNodes[sectionId].style.cssText="background-color:#800080;";
    };
};

 const removeActive = function (section){
    section.classList.remove('your-active-class');
    const sectionId= section.id.slice(7,8) -1;
    //removes background color when navigation is not active 
        navigation.childNodes[sectionId].style.cssText="background-color:#ffffff;";
         //box shadow is removed when section is inactive
    section.style.cssText = "box-shadow:none;border-radius:none";"border:1px solid grey";
};
const activateSection = function(){
    for(section of sections) {
        const elementSize = size(section);

        inviewport = () => elementSize < 300 && elementSize >= -350;

        removeActive(section);
        addActive(inviewport(),section);
    };
};
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
// activates sections
window.addEventListener('scroll' ,activateSection);