import React, { useEffect, useState } from 'react';
import  './CadastroPacientes.css'
import Header from '../Header/Header'
import PessoaDataService from '../../services/PessoaDataService';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';



    const dadosIniciais = {
      nome:'',
      nomeMae:'',
      cpf:'',
      telefone:'',
      endereço:'',
      email:'',
      dataNascimento:'',
      idade:''    
    }

    

   const CadastroPacientes = () => { 
   const { codigo } = useParams();   
     
    
    
    let [values, setValues] = useState(dadosIniciais);
    const history = useHistory();
    
    useEffect(() => {
     if(codigo) {
        axios.get(`http://localhost:8080/pessoas/${codigo}`)
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

   /* const add = obj =>{
     PessoaDataService.inserirPessoa(obj)
     setValues(dadosIniciais)
   }
   */
    const HandleSubmit = e => {
      e.preventDefault()
      const method = codigo ? 'put' : 'post';
      const url = codigo
      ? `http://localhost:8080/pessoas/${codigo}`
      : `http://localhost:8080/pessoas`
      axios[method](url, values)
      .then((response) => {
        history.push('/listapacientes');
      });
    }

    

    return (

  <div className= 'box'>         
       <div className="header">
      <Header></Header> 
      </div>
		<h2>Cadastro de Pacientes</h2>		
	<div className="form row" id="formulario">
		<form  className="form-group col-md-5" autoComplete="off" onSubmit={HandleSubmit}>
			<label>*Nome do Paciente:</label> 
			<input className="form-control" name="nome" value={values.nome} onChange={onInputChange}   /> 
			
			<label>*Nome da Mãe:</label> 
			<input  className="form-control" name="nomeMae" value={values.nomeMae} onChange={onInputChange} required /> 
			
			<label>*Cpf:</label>
			<input  className="form-control col-md-4"  name="cpf" value={values.cpf} onChange={onInputChange} required /> 			
			
			<label>*Telefone:</label> 
			<input  className="form-control col-md-4" name="telefone" value={values.telefone} onChange={onInputChange} required /> 
			
			<label>Endereço:</label> 
			<textarea  className="form-control" type="text Area" name="endereço" value={values.endereco} onChange={onInputChange} required /> 		
			
			<label>*E-mail:</label>
			<input  className="form-control" name="email" value={values.email} onChange={onInputChange} required />
			
			<label>*Data de Nascimento:</label> 
      <input  className="form-control col-md-3"  name="dataNascimento" value={values.dataNascimento} onChange={onInputChange} required />

      <label>*Idade:</label> 
      <input  className="form-control col-md-2"  name="idade" value={values.idade} onChange={onInputChange} required /> 

			<div className="botao">
				<input type="submit" value="Salvar" className="btn btn-primary " />       
			</div>
		</form>

	</div>
    <script type="text/javascript" src="@{/js/jquery-3.5.1.min.js}"></script>
	<script type="text/javascript" src="@{/bootstrap-4.5.2/js/bootstrap.min.js}"></script>
 
  </div>
    )
}
export default CadastroPacientes;

  
        
        
        



