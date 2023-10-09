import axios from "axios";

const URL =  'https://api.thecatapi.com/v1/images/search?limit=10';

const gatinhos = async () =>{
    try{
        const resposta = await axios.get(URL);
        return resposta.data;
    }catch(error){
        throw error
    }
}
export default gatinhos;