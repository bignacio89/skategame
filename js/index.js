
window.onload = () => {


    const start = document.querySelector('#start-button')
    const menu = document.querySelector('#start-intro')
    const canvas = document.querySelector('#canvas')

    // document.getElementById('start-button').onclick = () => {
    //     skateGame.init()
    // };

    start.addEventListener('click', () => {
        menu.classList.toggle('display-none')
        canvas.classList.toggle('display-none')
        skateGame.init()

    })


};