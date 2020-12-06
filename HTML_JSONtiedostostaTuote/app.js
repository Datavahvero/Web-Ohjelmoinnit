document.getElementById('button1').addEventListener('click', loadProduct);

function loadProduct(){
    
    const xhrObject = new XMLHttpRequest();    
    xhrObject.open('GET', 'products.json', true);   

    xhrObject.onload = function(){
        if (this.status === 200){
            const products = JSON.parse(this.responseText);
            let output = '';
            products.forEach( function(product){
                output += `
                    <ul>
                        <li> Tuote: ${product.product} </li>
                        <li> Kategoria: ${product.category} </li>
                        <li> Hinta: ${product.price} </li>
                        <li> Valmistusmaa: ${product.origin} </li>
                    </ul>
                `
            }                              
            );            
            document.getElementById('products').innerHTML = output;
        }        
    }
    xhrObject.send();
}
