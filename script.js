function updateSubtotal() {
    let price1 = parseFloat(document.querySelector('.price').innerHTML.replace('$', '')) || 0;
    let price2 = parseFloat(document.querySelector('.price2').innerHTML.replace('$', '')) || 0;
    let price3 = parseFloat(document.querySelector('.price3').innerHTML.replace('$', '')) || 0;
    let price4 = parseFloat(document.querySelector('.price4').innerHTML.replace('$', '')) || 0;
    let shipping = parseFloat(document.querySelector(".shipping").innerHTML.replace('$', '')) || 0;
    let tax = parseFloat(document.querySelector(".tax").innerHTML.replace('$', '')) || 0;

    let subtotal = price1 + price2 + price3 + price4;
    document.querySelector('.subtotal').innerHTML = "$" + subtotal.toFixed(2);
    document.querySelector(".total-amt").innerHTML = "$" + (subtotal + shipping + tax).toFixed(2)
}
function handleCounter(increaseButton, decreaseButton, counterElement, priceElement, incrementValue, pay) {
    let count = 0;

    increaseButton.addEventListener('click', () => {
        count += 1;
        counterElement.innerHTML = count;
        let currentPrice = parseFloat(priceElement.innerHTML.replace('$', ''));
        let newPrice = currentPrice + incrementValue;
        priceElement.innerHTML = "$" + newPrice.toFixed(2);
        updateSubtotal();
        shipping.innerHTML = "$" + 2
    });

    decreaseButton.addEventListener('click', () => {
        if (count > 0) {
            count -= 1;
            counterElement.innerHTML = count;
            let currentPrice = parseFloat(priceElement.innerHTML.replace('$', ''));
            let newPrice = currentPrice - incrementValue;
            if (newPrice < 0) newPrice = 0;
            priceElement.innerHTML = "$" + newPrice.toFixed(2);
            updateSubtotal();
        }

    });
    pay.addEventListener('click', () => {
        document.querySelector('.promo').style.display = "flex"
    })
}

handleCounter(
    document.querySelector(".increase"),
    document.querySelector(".decrease"),
    document.getElementById("counter"),
    document.querySelector('.price'),
    12.99,
    document.querySelector(".pay")
);
handleCounter(
    document.querySelector(".increase2"),
    document.querySelector(".decrease2"),
    document.getElementById("counter2"),
    document.querySelector('.price2'),
    9.99,
    document.querySelector(".pay")
);
handleCounter(
    document.querySelector(".increase3"),
    document.querySelector(".decrease3"),
    document.getElementById("counter3"),
    document.querySelector('.price3'),
    30,
    document.querySelector(".pay")
);
handleCounter(
    document.querySelector(".increase4"),
    document.querySelector(".decrease4"),
    document.getElementById("counter4"),
    document.querySelector('.price4'),
    32.99,
    document.querySelector(".pay")
);
