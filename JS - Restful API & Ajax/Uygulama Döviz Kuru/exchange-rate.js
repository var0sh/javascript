class ExchangeRate{
    constructor(){

    };

    async getUnits(unit){
        const unitsResponse = await fetch(`https://v6.exchangerate-api.com/v6/16b02b62e5d713999f5132d9/latest/${unit}`);

        const unitProduced = await unitsResponse.json();

        return {
            unitProduced
        }
    }
}