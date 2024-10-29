function addDevice() {
    function HTML({ id, title, parag, img }) {
        return `
        <div class="device">
          <div class="device__left">
            <h2><span>${id}.</span>${title}</h2>
            <p>${parag}</p>
          </div>
          <img src="/img/devices/${img}.jpg" alt="${title}" />
        </div>`
    }

    const root = document.getElementById('devices-list')
    if (!root) return

    for (let i = 0; i < listDevice.length; i++) {
        root.insertAdjacentHTML('beforeend', HTML(...listDevice))
    }
}

addDevice()
