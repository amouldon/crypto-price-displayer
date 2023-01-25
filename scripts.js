const background = document.getElementById('background')
const main = document.getElementById('main')
const btcIcon = document.getElementById('btc-icon')
const ethIcon = document.getElementById('eth-icon')
const coinContainer = document.getElementById('coin-data')
const coinName = document.getElementById('displayed-coin')
const coinPrice = document.getElementById('price')
const btnContainer = document.getElementById('btn-container')
const btcBtn = document.getElementById('btc')
const ethBtn = document.getElementById('eth')

const endpoint = 'live'
const accessKey = 'fbfda4266a1d3d12e89a5e2368b9c702'

const fetchData = async (clicked) => {
    const response = await fetch('http://api.coinlayer.com/api/live?access_key=fbfda4266a1d3d12e89a5e2368b9c702', {
        method: 'GET'
    })
    
    const data = await response.json()
    console.log(data)
    updateDOM(data, clicked)
}

const updateDOM = (data, clicked) => {
    //{clicked == 'BTC' ? coinPrice.innerHTML = `$${data.rates.BTC}` : coinPrice.innerHTML = `$${data.rates.ETH}` } 
    {clicked == 'BTC' ? coinPrice.innerHTML = `$16831.20` : coinPrice.innerHTML = `$1253.22` } 
}

btcBtn.addEventListener('click', () => {
   coinName.innerHTML = 'Bitcoin'
   main.className = 'main-container-btc'
   background.className = 'btc-bg-color'
   btcIcon.className = 'displayed'
   ethIcon.className = 'hidden'
   coinContainer.className = 'display-container-btc'
   btnContainer.className = 'button-container-btc'
   fetchData('BTC')
})

ethBtn.addEventListener('click', () => {
    coinName.innerHTML = 'Ethereum'
    main.className = 'main-container-eth'
    background.className = 'eth-bg-color'
    btcIcon.className = 'hidden'
    ethIcon.className = 'displayed'
    coinContainer.className='display-container-eth'
    btnContainer.className = 'button-container-eth'
    fetchData('ETH')
 })
