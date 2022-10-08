const HOUSES_ENDPOINT ='https://ancient-taiga-31359.herokuapp.com/api/houses';

class HousesApi {
    get = async ( ) => {
        try{
            const resp = await fetch(HOUSES_ENDPOINT);
        const data = await resp.json();
        return data;
        } catch (e) {
            console.log('nope', e)
        }
    }
    
    put = async (house) => {
        try{
            const resp = await fetch(`${HOUSES_ENDPOINT}/${house.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(house)
            });
            return await resp.json

        }catch(e){
            console.log('looks like your put method had an issue')
        }
        
    
    } 
}

export const housesApi = new HousesApi();