
if (localStorage.getItem('data') != null) {
    values = JSON.parse(localStorage.data);
    for (var i = 0; i < values.length; i++) {
        table(values[i].sku, values[i].name, values[i].select, values[i].price);
    } 
}

function addProduct() {
    const skuValue = document.querySelector("#sku").value;
    const nameValue = document.querySelector("#name").value;
    const selectValue = document.querySelector("#select").value;
    const priceValue = document.querySelector("#price").value;
    
    let product = {
        sku: skuValue,
        name: nameValue,
        select: selectValue,
        price: priceValue
    }
    
    let products = [];
    products.push(product);
    console.log(products);

    //Secção Salvar Array
    new_data = product;
    if(localStorage.getItem('data') == null){
        localStorage.setItem('data', '[]');
    }
    
    old_data = JSON.parse(localStorage.getItem('data'));
    old_data.push(new_data);

    localStorage.setItem('data', JSON.stringify(old_data))
    
    //Secção Tabela
    if(localStorage.getItem('data')) {
        table(product.sku, product.name, product.select, product.price)
    }
    

}

function editProduct() {
    var table = document.getElementById("table")
    values = JSON.parse(localStorage.data); 
    
}

function delProduct() {

}

function table(v1, v2, v3, v4) {
    var table = document.getElementById("table")
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
   
    const btnEdit = document.createElement("button"); 
    const btnDel =  document.createElement("button");
    btnEdit.setAttribute('onclick', 'editValue()')
    btnDel.setAttribute('onclick', 'delValue()')
    btnEdit.innerHTML = "Editar";
    btnDel.innerHTML = "Excluir";
    cell1.innerHTML = v1;
    cell2.innerHTML = v2; 
    cell3.innerHTML = v3;
    cell4.innerHTML = v4; 
    cell5.append(btnEdit, btnDel);
}