//faire apparaitre le menu au click sur le burger
const menuToggle = document.querySelector('.menu-toggle')
const navMobile = document.querySelector('.nav-mobile')

menuToggle.addEventListener('click', ()=>{    
    navMobile.classList.toggle('show')    
})

//faire apparaitre le premier menu déroulant
const mobilItems = document.querySelectorAll('.mobile-item')
let previouslyOpenedItem = null

mobilItems.forEach(mobilItem =>{
    mobilItem.addEventListener('click',(e)=>{
        e.stopPropagation()
        const dropdown = mobilItem.querySelector('.dropdown')
        const isOpen = mobilItem.classList.contains('bold')

        //si un onglet à déjà été ouvert, on le ferme et on enleve la class=bold
        if(previouslyOpenedItem && previouslyOpenedItem !== mobilItem){
            previouslyOpenedItem.classList.remove('bold');
            previouslyOpenedItem.querySelector('.dropdown').classList.remove('show1')
        }

        // Ouvrir ou fermer l'élément actuel
        mobilItem.classList.toggle('bold');
        dropdown.classList.toggle('show1');

        if(!isOpen){
            previouslyOpenedItem = mobilItem
        } else {
            previouslyOpenedItem = null
        }
        // Retirer la classe bold des premiers menu-deroulant
        const dropdownItems = mobilItem.querySelectorAll('.dropdown .drop-item');
        dropdownItems.forEach(item => {
            item.classList.remove('bold');
        });           
            console.log('ça passe')
    })       
}) 

const mobils = document.querySelectorAll('.mobil')

mobils.forEach(mobil =>{
    mobil.addEventListener('click', (e)=>{
        e.stopPropagation()
        /*mobil.classList.add('bold')
        const sousMenu = mobil.querySelector('.sous-menu')        
        sousMenu.classList.toggle('show1')*/

        const sousMenus = mobil.querySelector('.sous-menu')
        const isOpen = mobil.classList.contains('bold')

        if(previouslyOpenedItem && previouslyOpenedItem !== mobil){
            previouslyOpenedItem.classList.remove('bold');
            previouslyOpenedItem.querySelector('.sous-menu').classList.remove('show1')
        }

        // Ouvrir ou fermer l'élément actuel
        mobil.classList.toggle('bold');
        sousMenus.classList.toggle('show1');

        if(!isOpen){
            previouslyOpenedItem = mobil
        } else {
            previouslyOpenedItem = null
        }
        // Retirer la classe bold des sous-menu
        const dropdownItems = mobil.querySelectorAll('.sous-menu .sous-sous-menu');
        dropdownItems.forEach(item => {
            item.classList.remove('bold');
        });    
            
            console.log('ça passe')

    })
})

//faire apparaitre le dernier sous-sous-menu
const sousItems = document.querySelectorAll('.sous-item')

sousItems.forEach(sousItem =>{
    sousItem.addEventListener('click', (e)=>{
        e.stopPropagation()
        sousItem.classList.toggle('bold')
        const itemFond = sousItem.querySelector('.itemFond')
        itemFond.classList.toggle('show1')
    })
})

//fermer le menu mobile
const retourMenu = document.querySelector('.retour-menu')
retourMenu.addEventListener('click', ()=>{
    const navMobile = document.querySelector('.nav-mobile')
    navMobile.classList.remove('show')
})
        
        

        