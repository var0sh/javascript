const unit = new ExchangeRate();
const atInput = document.querySelector('#atInput')

class UI {

    showUnit(text){

    }

    calculateUnits(value, from, at){
        unit.getUnits(from)
        .then((res) => {
            const allUnits = res.unitProduced.conversion_rates;
            const allUnitsArr = Object.entries(allUnits);
            allUnitsArr.forEach(item => {
                if(item[0] == at){
                    let groundAt = item[1];
                    let result = groundAt * value;
                    atInput.value = result.toFixed(2);
                }
            });
        }).catch((err) => {
            
        });
    }

}