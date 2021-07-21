import { Component } from "react";
import {Table, Button, message} from 'antd'
import Column from 'antd/lib/table/Column'
import AgendaDataService from '../../services/AgendaDataService';
import Header from '../Header/Header'
import Axios from 'axios'
import axios from "axios";



 export default class ListaAgendamento extends Component {

    constructor(props){
        super(props)
        this.state ={
            agendas: [],
            message: null
        }
    }

    componentDidMount(){
        this.refreshAgendas();
    }

    refreshAgendas(){
        AgendaDataService.retriveAllAgendas()
            .then(
                response => {
                    console.log(response)
                    this.setState({agendas: response.data})
                }
            )
    } 

 /* handleExcluir(codigo){
    axios.delete(`http://localhost:8080/agendas/${codigo}`)
    .then(
        response => {
            console.log(response.data);
        }
    )    
    } */

    handleExcluir(codigo) {
     axios.delete(`http://localhost:8080/agendas/${codigo}`)
     .then(
        response => {
            console.log(response.data);
        }
     )
    }
        


    handleEditar(codigo) {       
        this.props.history.push(`/cadastrovacinacao/${codigo}`);        
    }     
    
         
        
   
   
    
 /*  HandleExcluir(codigo) => {
        if(window.confirm('Deseja Realmente Excluir esse Registro ?')){
          axios.delete(`http://localhost:8080/agendas/${codigo}`)
          .then((response) => {
            (window.confirm('Registro excluído com sucesso!!'))
          });
        }
      }*/

    

    render(){
        return(
            <div className="caixa"> 
            
                <Header></Header> 
                   
               <h2>Agendamentos Cadastrados</h2> 
             
                    <Table dataSource={this.state.agendas}>                       
                        <Column title="NOME DO PACIENTE " dataIndex="nomePaciente" key="nomePaciente" />
                        <Column title="NOME DA VACINA" dataIndex="nomeVacina" key="nomeVacina" />
                        <Column title="LABORATÓRIO" dataIndex="laboratorio" key="laboratorio" />
                        <Column title="DOSE" dataIndex="dose" key="dose" />
                        <Column title="DATA" dataIndex="dataAgendamento" key="dataAgendamento" />
                        <Column title="HORA" dataIndex="horaAgendamento" key="horaAgendamento" /> 
                        <Column title="LOCAL" dataIndex="endereco" key="endereco" />                                                                     
                        <Column title="EDITAR"render={(text, record) => (<Button  type="primary" onClick={() => this.handleEditar(record.codigo)}>Editar</Button>)} />
                        <Column title="EXCLUIR"render={(text, record) => (<Button  type="danger" onClick={() => this.handleExcluir(record.codigo)}>Deletar</Button>)} />
                    </Table>
                                       
            </div>
        )
    }

}
                                     
            
                      














/*
            <>
            <Grid container>
                <Grid item xs={11}>
                    <TableContainer component={Paper}>
                        <Table size="small">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Nome da Vacina</TableCell>
                                    <TableCell>Laboratório</TableCell>
                                    <TableCell>Dose</TableCell>
                                    <TableCell>Data</TableCell>
                                    <TableCell>Hora</TableCell>
                                    <TableCell>Local</TableCell>
                                    <TableCell align="center" colSpan={2}>Ações</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {vacinas.map(vacina => (
                                    <TableRow key={vacina.codigo}>
                                        <TableCell width="25%">{vacina.nome}</TableCell>
                                        <TableCell width="25%">{vacina.laboratorio}</TableCell>
                                        <TableCell width="20%">{vacina.dose}</TableCell>
                                        <TableCell width="20%">{vacina.data}</TableCell>
                                        <TableCell width="20%">{vacina.hora}</TableCell>
                                        <TableCell width="30%">{vacina.local}</TableCell>
                                        <TableCell width="5%" align="center">
                                            <IconButton color="secondary" component={Link} to={`/cadastrovacinacao/cadastrovacinacao/${vacina.id}`}>
                                                <EditIcon />
                                            </IconButton>
                                        </TableCell>
                                        <TableCell width="5%" align="center">
                                            <IconButton color="primary" onClick={() => this.handleExcluir(vacina.codigo)}>
                                               
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
            </>
        )
    }
}*/