import axios from 'axios'

const API_URL = 'http://localhost:8080/'

 class AgendaDataService{

    retriveAllAgendas(){
        return axios.get(`${API_URL}agendas`)
    }

    buscarAgenda = codigo => {
        return axios.get(`${API_URL}agendas/${codigo}`)
            .then(response => response.data)
            .catch(error => {
                throw error;
            })
    }  

     inserirAgenda = agenda => {
        return axios.post(`${API_URL}agendas`,agenda)
            .catch(error => {
                throw error;
            })
    } 

    updateAgenda(agenda, codigo) {
        return axios.put(`${API_URL}agendas/${codigo}`, agenda)
          }

    excluirAgenda(agenda, codigo) {
    return axios.delete(`${API_URL}agendas/${codigo}`, agenda)
        }
    }

    

export default new AgendaDataService()