const ui = new UI();
const selectOne = document.querySelector('#selectOne');
const selectTwo = document.querySelector('#selectTwo');
const convertBtn = document.querySelector('#convertBtn');
const from = document.querySelector('#from')
const at = document.querySelector('#at')
const fromInput = document.querySelector('#fromInput')
const alert = document.querySelector('#alert')


selectOne.addEventListener('change', (e) => {
    
    let unitValueFrom = e.target.value;
    
    if(unitValueFrom){
        from.innerHTML = unitValueFrom;
    }
})

selectTwo.addEventListener('change', (e) => {
    
    let unitValueAt = e.target.value;
    
    if(unitValueAt){
        at.innerHTML = unitValueAt;
    }
})

convertBtn.addEventListener('click', e => {
    
    if((from.innerHTML === ' ' || from.innerHTML === '') || (at.innerHTML === '' || at.innerHTML === ' ') || fromInput.value === '' || fromInput.value === ' '){

        alert.innerHTML = '<span class="alert bg-danger mt-5">Boşluklar var!</span>'

    }else{

        alert.innerHTML = '';

        ui.calculateUnits(fromInput.value, from.innerHTML, at.innerHTML)

        // unit.getUnits(from.innerHTML)
        // .then(res => {
        //     const allUnits = res.unitProduced.conversion_rates;
        //     const result = Object.entries(allUnits);

        //     console.log(result);

        //     ui.calculateUnits(result, from.innerHTML, at.innerHTML)
        // })

        // .catch(err => {
            
        // });

    }
})