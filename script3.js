//écouteur du burger pour faire apparaitre le mobile-menu
const menutoggle = document.querySelector(".menu-toggle")
const navlinks = document.querySelector(".nav-links")

menutoggle.addEventListener('click', ()=>{
    navlinks.classList.toggle('mobile-menu')    
})
/*
const mobileItems = document.querySelectorAll('.mobile-item')
const mobileItems3 = document.querySelectorAll('.mobile-item3')

if(mobileItems){
    mobileItems.forEach(mobilItem=>{
        mobilItem.addEventListener('click', (e)=>{
            e.stopPropagation()
            mobilItem.classList.toggle('bold')
            const dropdown= mobilItem.querySelector('.dropdown')
            dropdown.classList.toggle('show')
        })
    })
}

if(mobileItems3){
    mobileItems3.forEach(mobileItem3=>{
        mobileItems3.addEventListener('click', (e)=>{
            e.stopPropagation()
            mobileItems3.classList.toggle('bold')
            const dropdown1 = mobileItems3.querySelector('.dropdown1')
        dropdown1.classList.toggle('show1')
        })    
    })
}*/

/*mobileItems.forEach(item =>{
    item.addEventListener('click', (e)=>{
        item.classList.toggle("bold")
        e.stopPropagation()
        const itemsMenu = item.querySelectorAll('.item-menu')
        const itemsMenu1 = item.querySelector('item-menu1')
        
            if(itemsMenu){
                itemsMenu.classList.toggle('show')
            }
            if(itemsMenu1){
                itemsMenu.classList.toggle('show1')
            }
            
        })
    
})*/

const mobils = document.querySelectorAll('.mobil')
mobils.forEach(mobil=>{
    mobil.addEventListener('click', (e)=>{
        mobil.classList.toggle("bold")   
        e.stopPropagation()        
        const itemsSousMenu = mobil.querySelectorAll('.item-sous-menu')
        itemsSousMenu.forEach(itemSousMenu=>{
            itemSousMenu.classList.toggle('show')
        })           
    })
})

const sousItems = document.querySelectorAll('.sous-item')
sousItems.forEach(sousItem=>{
    sousItem.addEventListener('click', (e)=>{
        sousItem.classList.toggle("bold")
        e.stopPropagation()
        const itemsFond = sousItem.querySelectorAll('.itemFond')
        itemsFond.forEach(itemFond=>{
            itemFond.classList.toggle('show')
        })
        
    })
})

//pour menu desktop



/*const navitems = document.querySelectorAll(".nav-item, .nav-item3")

navitems.forEach(navitem =>{
    navitem.addEventListener('click',()=>{
        
        navitem.classList.toggle("bold")
        const dropdown = navitem.querySelector(".dropdown")
        const dropdown1 = navitem.querySelector(".dropdown1")
        if(dropdown1){
            dropdown1.classList.toggle("show1")
            console.log("ça passe")
        }
        if(dropdown){
            dropdown.classList.toggle("show")
        }                
    })
})*/
