const r = (min, max) => Math.floor(Math.random() * (max + 1 - min) + min)

function randomBG() {
    const root = document.querySelector('body')
    if (!root) return

    const body = r(1, 5)
    root.removeAttribute('class')
    root.classList.add(`body-${body}`)
}

randomBG()

setInterval(() => {
    randomBG()
}, 2000)
