import React, { useState, useEffect  } from 'react';
import  './FormularioCadastro.css'
import { useHistory, useParams } from "react-router-dom";
import Header from '../Header/Header'
import AgendaDataService from '../../services/AgendaDataService';
import { message } from 'antd';
import axios from 'axios';




    const dadosIniciais = {
        nomePaciente:'',
        nomeVacina: '',
        laboratorio:'',
        dose:'',
        dataAgendamento:'',
        horaAgendamento:'',
        endereco:'',
        codigo:''
    }
    const FormularioCadastro = () => {
    const { codigo } = useParams(); 
      
    let [values, setValues] = useState(dadosIniciais)
    const history = useHistory();

    useEffect(() => {
      if(codigo) {
         axios.get(`http://localhost:8080/agendas/${codigo}`)
           .then((response)=>{
             console.log(response.data);
             setValues(response.data);
         })
      }
     },[]);
   
    const onInputChange = e => {
      let {name, value} = e.target
      setValues ({
          ...values,
          [name]: value
      })
    }  
     
  
    /*const addInsert = obj =>{
      AgendaDataService.inserirAgenda(obj)
      setValues(dadosIniciais)
   }
   */   
    const HandleSubmit = e => {
      e.preventDefault()
     // addInsert(values)

      const method = codigo ? 'put' : 'post';
      const url = codigo
      ? `http://localhost:8080/agendas/${codigo}`
      : `http://localhost:8080/agendas`
      axios[method](url, values)
      .then((response) => {
        history.push('/listaagendamentos');
      });
    }     
        

    return (

  <div className= 'box'>         
       <div className="header">
      <Header></Header> 
      </div>
		<h2>Agendamentos</h2>		
	<div className="form row" id="formulario">
		<form  className="form-group col-md-5" id="form" autoComplete="off" onSubmit={HandleSubmit}>
			<label>*Nome do Paciente:</label> 
			<input className="form-control" name="nomePaciente" value={values.nomePaciente} onChange={onInputChange}   /> 
			
			<label>*Nome da Vacina:</label> 
			<input  className="form-control" name="nomeVacina" value={values.nomeVacina} onChange={onInputChange} required /> 
			
			<label>*Laboratório:</label>
			<input  className="form-control" name="laboratorio" value={values.laboratorio} onChange={onInputChange} required /> 			
			
			<label>*Dose:</label> 
			<input  className="form-control col-md-5c" name="dose" value={values.dose} onChange={onInputChange} required /> 
			
			<label>Data da Aplicação:</label> 
			<input  className="form-control col-md-5" type="date" name="dataAgendamento" value={values.dataAgendamento} onChange={onInputChange} required /> 		
			
			<label>*Hora:</label>
			<input  className="form-control col-md-5" name="horaAgendamento" value={values.horaAgendamento} onChange={onInputChange} required />
			
			<label>*Endereço:</label> 
      <textarea  className="form-control" type="text" name="endereco" value={values.endereco} onChange={onInputChange} required />
            
			<div className="botao">
				<input type="submit" value="Salvar" className="btn btn-primary "/>        
			</div>
		</form>

	</div>
    <script type="text/javascript" src="@{/js/jquery-3.5.1.min.js}"></script>
	<script type="text/javascript" src="@{/bootstrap-4.5.2/js/bootstrap.min.js}"></script>
 
  </div>
    )
}
export default FormularioCadastro;
