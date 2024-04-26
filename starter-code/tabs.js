const planetsName = document.querySelector('.planets-name')
const planetsDescription = document.querySelector('.planets-description')
const planetsDistance = document.querySelector('.planets-distance')
const planetsTimeTravel = document.querySelector('.planets-time-travel')
const tabList = document.querySelector('[role="tablist"]')
const tabs = tabList.querySelectorAll('[role="tab"]')
console.log(tabList);

let tabFocus = 0

tabList.addEventListener('keydown', changeTabFocus)

tabs.forEach((tab) => {
    tab.addEventListener('click', changeTabPanel)
})

function changeTabPanel(e) {
    const targetTab = e.target
    const targetPanel = targetTab.getAttribute("aria-controls")
    const tabContainer = targetTab.parentNode
    const mainContainer = tabContainer.parentNode
    const targetImg = targetTab.getAttribute("data-image")
    
    tabContainer.querySelector('[aria-selected="true"]').setAttribute("aria-selected", false)
    targetTab.setAttribute("aria-selected", true)

    hideContent(mainContainer, '[role="tabpanel"]');
    showContent(mainContainer, [`#${targetPanel}`]);
    hideContent(mainContainer, 'picture')
    showContent(mainContainer, [`#${targetImg}`])
}

function hideContent(parent, content) {
    parent.querySelectorAll(content).forEach((item)=> {
        item.setAttribute("hidden", true)
    })
}

function showContent(parent, content) {
    parent.querySelector(content).removeAttribute('hidden');
}

function changeTabFocus(e) {
    const keydownLeft = 37;
    const keydownRight = 39;

    if(e.keyCode === keydownLeft || e.keyCode === keydownRight) {
        tabs[tabFocus].setAttribute("tabindex", -1)

        if(e.keyCode === keydownRight) {
            tabFocus++
            if(tabFocus >= tabs.length) {
                tabFocus = 0
            }
        } else {
            tabFocus--
            if(tabFocus < 0) {
                tabFocus = tabs.length - 1
            }
        }
        tabs[tabFocus].setAttribute("tabindex", 0)
        tabs[tabFocus].focus()
    }
}


// let allPlanets = []
// planets()

// function planets() {
//     fetch('data.json')
//     .then (res => res.json())
//     .then (res => {
//         allPlanets = allPlanets.concat(res.destinations)
//         allPlanets.forEach((planete) => {
//             planetsName.textContent = planete.name
//             planetsDescription.textContent = planete.description
//             planetsDistance.textContent = planete.distance
//             planetsTimeTravel.textContent = planete.travel
//         })
//     })
// }