const menuBtn = document.querySelector('.menu-btn')
const navSection = document.querySelector('.nav-section')
const navigation = document.querySelector('.navigation')
const closeBtn = document.querySelector('.close-btn')
const listTitles = document.querySelectorAll('.list-title')
const lists = document.querySelectorAll('.list')

let windowWidth = window.innerWidth

// nav bar functionality
const navbarFunctions = () =>{

  windowWidth = window.innerWidth
  console.log(windowWidth)
  
  if(windowWidth < 850){
    // navigation.style.display = 'none'
    navigation.classList.add('pop-off')
    navSection.style.display = 'block'
  }
  if(windowWidth < 500){
    // navSection.style.display = 'none'
    navSection.classList.add('pop-off')
  }
  if(windowWidth > 500){
    navSection.classList.remove('pop-off')
  }
  menuBtn.addEventListener('click', ()=>{
    if(windowWidth < 850){
      // navigation.style.display = 'block'
      navigation.classList.remove('pop-off')
      navigation.classList.add('pop-on')
      closeBtn.classList.remove('none')
      closeBtn.classList.add('block')
    }
    if(windowWidth < 500){
      navSection.style.display = 'block'
      navSection.classList.remove('pop-off')
      navSection.classList.add('pop-on')
    }
    closeBtn.addEventListener('click', ()=>{
      // navigation.style.display = 'none'
      navigation.classList.remove('pop-on')
      navigation.classList.add('pop-off')
      closeBtn.classList.add('none')
      closeBtn.classList.remove('block')
      if(windowWidth < 850){
        navSection.style.display = 'block'
      }
      if(windowWidth < 500){
        // navSection.style.display = 'none'
        navSection.classList.remove('pop-on')
        navSection.classList.add('pop-off')
      }
    })
    
  })
  
  if(windowWidth > 850){
    navigation.style.display = 'flex'
    navigation.classList.remove('pop-off')
    navSection.style.display = 'grid'
    closeBtn.classList.add('none')
    closeBtn.classList.remove('block')
  }
  
}
navbarFunctions()
window.addEventListener('resize', ()=>{
  navbarFunctions()
})

// for adding the hover effect to that ul to show in the display
listTitles.forEach( listTitle => {
  
  listTitle.addEventListener('mouseover', ()=>{
    const ul = listTitle.children[1]
    ul.classList.remove('none')
  })
  listTitle.addEventListener('mouseout', ()=>{
    const ul = listTitle.children[1]
    ul.classList.add('none')
  })

  listTitle.addEventListener('click', ()=>{
    const ul = listTitle.querySelector('.list-items')
    if(ul.classList.contains('none')){
      ul.classList.remove('none')
    }else{
      ul.classList.add('none')
    }
  })
})

// window.addEventListener('DOMContentLoaded', ()=>{
//   const focusText = document.querySelectorAll('.voilet')
  
//   // focusText.forEach( singleText =>{
//   //   singleText.classList.add('voilet-no-rotate')
//   //   const text = singleText.textContent
    
//   //   singleText.innerHTML = ''
//   //   for(i=0; i=text.length; i++){

//   //     const element = document.createElement('span')
//   //     element.classList.add('letter-rotate')
//   //     element.textContent = text[i]
//   //     singleText.appendChild(element)
//   //   }
//   // })
  
// })
