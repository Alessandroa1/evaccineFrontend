import axios from 'axios'

const API_URL = 'http://localhost:8080/'

 class UsuarioDataService{

inserirUsuario = login => {
    return axios.post(`${API_URL}`,login)
        .catch(error => {
            throw error;
        })

    }
}
 export default new UsuarioDataService()