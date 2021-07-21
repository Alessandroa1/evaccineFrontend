import React, { useState } from 'react';
import  './login.css'
import UsuarioDataService from '../../services/UsuarioDataService'

const Login = (props) => {

  const dadosIniciais = {
      login:'',
      senha:''
    }
    
    let [values, setValues] = useState(dadosIniciais)

    const onInputChange = e => {
      let {name, value} = e.target
console.log(e.target.name);
console.log(e.target.value);
      setValues ({
          ...values,
          [name]: value
      })
    }

    const addEdit = obj =>{
     UsuarioDataService.inserirUsuario(obj)
   }
   
    const HandleSubmit = e => {
      e.preventDefault()
      addEdit(values)
    }
    
    
        return(

          <div className="container">      
             <h1>Bem-Vindo ao eVaccine !</h1>
             <div className="form row" id="formulario">
		<form  className="form-group col-md-4" autoComplete="off" onSubmit={HandleSubmit}>

			<label>*Usuário:</label> 
			<input className="form-control" name="login" value={values.login} onChange={onInputChange} required /> 
			
			<label>*Senha:</label> 
			<input  className="form-control" type='password' name="senha" value={values.senha} onChange={onInputChange} required /> 
      <div className="botao">
				<input type="submit" value="Logar" className="btn btn-primary "  />       
			</div>
      </form>
      </div>
      </div>
        )
    }
    export default Login;