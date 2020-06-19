let mealsState = []
let ruta = 'login' // login, register, orders

const stringToHTML = (s) => {
    const parser = new DOMParser()
    const doc = parser.parseFromString(s, 'text/html')
    return doc.body.firstChild
}

const renderItem = (item) => {
    const element = stringToHTML(`<li data-id="${item._id}">${item.name}</li>`) // Template string ` `
    element.addEventListener('click', () => {
        const mealslist = document.getElementById('meals-lists')
        Array.from(mealslist.children).forEach(x => x.classList.remove('selected'))
        element.classList.add('selected')
        const mealsIdInput = document.getElementById('meals-id')
        mealsIdInput.value = item._id
    })
    return element
}

const renderOrder = (order, meals) => {
    const meal = meals.find(meal => meal._id === order.meal_id)
    const element = stringToHTML(`<li data-id="${order._id}">${meal.name} - ${order.user_id}</li>`) // Template string ` `
    
    return element
}

const inicializaFormulario = () => {
        const orderForm = document.getElementById('order')
    orderForm.onsubmit = (e) => {
        e.preventDefault()
        const submit = document.getElementById('submit')
        submit.setAttribute('disabled', true)
        const mealId = document.getElementById('meals-id')
        const mealIdValue = mealId.value
        
        // Validación 
        if (!mealIdValue) {
            alert('Debe seleccionar un plato.')
            return
        }

        const order = {
            meal_id: mealIdValue,
            user_id: 'chanchito triste',
        }

        fetch('http://127.0.0.1:3000/api/orders', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(order)
        }).then(x => x.json())
        .then(respuesta => {
            const renderedOrder = renderOrder(respuesta, mealsState)
            const ordersList = document.getElementById('orders-list')
            ordersList.appendChild(renderedOrder)
            submit.removeAttribute('disabled')
        })
    }
}

const inicializaDatos = () => {
    fetch('https://serverless-jsk.jask05.vercel.app/api/meals')
        .then(response => response.json())
        .then(data => {
            mealsState = data
            const mealslist = document.getElementById('meals-lists')
            const submit = document.getElementById('submit')
            const listItems = data.map(renderItem)
            listItems.forEach(element => mealslist.appendChild(element))
            mealslist.removeChild(mealslist.firstElementChild)
            submit.removeAttribute('disabled')
            fetch('https://serverless-jsk.jask05.vercel.app/api/orders')
                .then(response => response.json())
                .then(ordersData => {
                    const ordersList = document.getElementById('orders-list')
                    const listOrders = ordersData.map(orderData => renderOrder(orderData, data))
                    
                    ordersList.removeChild(ordersList.firstElementChild)
                    listOrders.forEach(element => ordersList.appendChild(element))
                    // console.log(ordersData)
                })
        })
}

window.onload = () => {
    const loginForm = document.getElementById('login-form')
    loginForm.onsubmit = (e) => {
        e.preventDefault()
        const email = document.getElementById('email').value
        const password = document.getElementById('password').value
        // fetch('http://localhost:3000/api/auth/register', {
        fetch('http://localhost:3000/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({ email, password })
        })
    }
    // inicializaFormulario()
    // inicializaDatos()
}