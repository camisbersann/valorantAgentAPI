import axios from "axios";

const URL ='https://valorant-api.com/v1/agents?isPlayableCharacter=true';

const valorantAgente = async () =>{
    try{
        const resposta = await axios.get(URL);
        return resposta.data;
    }catch (error){
        throw error;
    }
}
export default valorantAgente;