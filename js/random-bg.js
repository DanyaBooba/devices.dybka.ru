function randomBG() {
    const root = document.querySelector('body')
    if (!root) return

    const body = Math.floor(Math.random() * (6 - 1) + 1);
    root.classList.add(`body-${body}`)
}

randomBG()
