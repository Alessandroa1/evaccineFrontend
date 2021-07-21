import axios from 'axios'

const API_URL = 'http://localhost:8080/'

axios.interceptors.request.use((config)=>{
    config.headers['Authorization']=`Basic YWxlOjEyMw==`
    return config
})
 class PessoaDataService{

    retriveAllPessoas(){
        return axios.get(`${API_URL}pessoas`)
    }

    updatePessoa(pessoa, codigo){
        return axios.put(`${API_URL}pessoas/${codigo}`, pessoa)
    }
    buscarPessoa(pessoa, codigo){
        return axios.get(`${API_URL}pessoas/${codigo}`, pessoa)
    }
    excluirPessoa(pessoa, codigo){
        return axios.delete(`${API_URL}pessoas/${codigo}`, pessoa)
    }


    inserirPessoa = pessoa => {
        return axios.post(`${API_URL}pessoas`,pessoa)
            .catch(error => {
                throw error;
            })
        }       
}

export default new PessoaDataService()
