var region = {
    boeny : [],
    sofia : [],
    sava : [],
    bongolava : [],
    vakinankaratra : []
};

var catégorie = {
    commerce: [],
    informatique: [],
    agriculture: []
}; 

var searchContainer = document.querySelector('.search'),
    hidden = document.querySelector('.out'),
    hiddenIn = hidden.cloneNode(true),
    searchInput = document.querySelector('.search_input'),
    searchButton = document.querySelector('.search_button');
var retour = hidden.remove();
console.log(searchContainer);


searchButton.addEventListener('click',function(){
    searchContainer.insertBefore(hiddenIn,searchInput);
    console.log(hiddenIn);
})