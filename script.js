function convert(suma, price) {
    var msg;
    var change = suma - price;
    var dolar = change < 0 ? Math.ceil(change) : Math.floor(change);


    var t = parseInt((change * 100) % 100);
    msg = "Ваша решта:" + dolar + " долари " + t + " центів(по номіналу " + dolar + " долари ";

    var mas = [50, 25, 10, 5, 1];

    var k;
    for (var i = 0; i < mas.length; i++) {
        k = parseInt(t / mas[i]);
        for (var j = 0; j < k; j++)
            msg += mas[i] + " центів "
        t = t % mas[i];
    }
    msg += ")";
    return msg;
}

function calc() {
    var sum = document.getElementById('sum').value;
    var price = document.getElementById('price').value;
    var result = convert(sum,price);
    var output = document.getElementById('output');
    output.innerText = result;
}
