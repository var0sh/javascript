document.querySelector('#getEmployee').addEventListener('click', loadEmployee);

function loadEmployee(){

    var loadImage = document.querySelector('#loading');
    loadImage.style.display = 'block'

    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'employees.json', true/*Asenkron*/);

    setTimeout(() => {
        xhr.onload = function(){ // .onload => Sorgunun sonlandığını bildiriyor.
            loadImage.style.display = 'none'
            if(this.status === 200){
                let employees = JSON.parse(this.responseText);
                let html = "";
    
                employees.forEach(employee => {
                    html += `
                            <tr>
                                <td>${employee.firstName}</td>
                                <td>${employee.lastName}</td>
                                <td>${employee.age}</td>
                                <td>${employee.retired}</td>
                            </tr>
                    `;
                });
                
                document.querySelector('#employees').innerHTML = html;
    
                // console.log(this.responseText); // Bu şekil de yazdırdığımız da string bir ifade olarak çıktısını alırız. Bunu objeye çevirmemiz gerekiyor;
                // console.log(JSON.parse(this.responseText));
            }
        }
        
        xhr.send()

    }, 1500);

}