import React, {Component} from 'react'
import {Table, Button, message, Menu} from 'antd'
import Column from 'antd/lib/table/Column'
import PessoaDataService from '../../services/PessoaDataService'
import  './ListaPessoas.css'
import Header from '../Header/Header'
import { Link } from 'react-router-dom'


export default class ListaPessoas extends Component {

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
                    this.setState({pessoas: response.data})
                }
            )
    }
    

    

    handleAgendar(codigo) {
        console.log("Agendou:", codigo);
        this.props.history.push(`/cadastrovacinacao/${codigo}`);
    }

    handleEditar(codigo) {
        console.log(codigo);
        this.props.history.push(`/cadastropacientes/${codigo}`);
    }
    

    handleExcluir(codigo) {
        console.log("Excluiu:", codigo);
        this.props.history.excluir(`/listaagendamentos/${codigo}`);
    }

    render(){
        return(
            <div className="caixa"> 
            
                <Header></Header> 
                   
               <h2>Pacientes Cadastrados</h2> 
             
                    <Table dataSource={this.state.pessoas}>                       
                        <Column title="NOME" dataIndex="nome" key="nome" />
                        <Column title="CPF" dataIndex="cpf" key="cpf" />
                        <Column title="TELEFONE" dataIndex="telefone" key="telefone" />
                        <Column title="ENDEREÇO" dataIndex="endereço" key="endereço" />
                        <Column title="EMAIL" dataIndex="email" key="email" />
                        <Column title="DATA NASC." dataIndex="dataNascimento" key="dataNascimento" />
                        <Column title="IDADE" dataIndex="idade" key="idade" />                                                                        
                         <Column title="AGENDAR VACINAÇÃO"  
                        render={(text, record) => (<Button  type="primary" onClick={() => this.handleAgendar()}>Agendar</Button>)} />
                         <Column title="EDITAR"render={(text, record) => (<Button  type="primary" onClick={() => this.handleEditar(`${record.codigo}`)}> Editar </Button>)} />
                        <Column title="EXCLUIR"render={(text, record) => (<Button  type="danger" onClick={() => this.handleExcluir(`${record.codigo}`)}> Excluir </Button>)} />
                    </Table>               
            </div>
        )
    }

}

