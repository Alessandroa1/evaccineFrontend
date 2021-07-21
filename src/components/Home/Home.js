import React, {Component} from 'react'
import {Table, Button, message, Menu} from 'antd'
import Column from 'antd/lib/table/Column'
import PessoaDataService from '../../services/PessoaDataService'
import  './Home.css'
import Header from '../Header/Header'
import { Link } from 'react-router-dom'


export default class Home extends Component {

    constructor(props){
        super(props)
        this.state ={
            pessoas: [],
            message: null
        }
    }

    componentDidMount(){
        this.refreshPessoas();
    }

    refreshPessoas(){
        PessoaDataService.retriveAllPessoas()
            .then(
                response => {
                    console.log(response)
                    this.setState({pessoas: response.data})
                }
            )
    }
    

    
 

    handleAgendar(pessoa) {
        console.log("Agendou:", pessoa);
        this.props.history.push(`/cadastrovacinacao/${pessoa}`);
    }

    handleEditar(pessoa) {
        console.log("Editou:", pessoa);
        this.props.history.push(`/cadastropacientes/${pessoa.codigo}`);
    }
    

    

    render(){

        const { pessoas } = this.state;
        return(
            <div className="caixa"> 
            
                <Header></Header> 
                   
               <h2>Listar Agendamentos</h2> 

               <div className="col-md-5">
                   <div className="col-md-7">
                       <table className="table table-boderless table-stripped">
                           <thead className="thead-light">
                               <tr>
                                   <td> Código </td>
                                   <td> Nome </td>
                                   <td> Cpf </td>
                                   <td> Telefone </td>
                                   <td> Email </td>
                                   <td> Data Nascimento </td>
                                   <td> Idade </td>                             
                               </tr>
                           </thead>
                           <tbody>
                           {pessoas.map(pessoa =>(
                         <tr key={pessoa.data}>                       
                         <td>{pessoa.codigo} </td>  
                         <td>{pessoa.nome} </td> 
                         <td>{pessoa.cpf} </td> 
                         <td>{pessoa.telefone}</td> 
                         <td>{pessoa.email} </td>
                         <td>{pessoa.dataNascimento} </td>  
                         <td>{pessoa.idade} </td>
                         <a className="btn btn-primary"  onClick={() => this.handleEditar(this.editarPessoa(`${pessoa.codigo}`))}>Editar
                            <i className="fas fa-pencil-alt"></i>
                         </a>
                        <a className="btn btn-danger" onClick={() => this.handleExcluir(`${pessoa.codigo}`)}>Excluir</a>                         
                        </tr> 
                                    
                     ))} 
                           </tbody>
                       </table>
                   </div>
               </div>                 
                       
                                  
            </div>
        )
    }

}

