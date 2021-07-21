import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';


import ListaPessoas from './components/ListaPessoas/ListaPessoas';
import Login from './components/Login/Login';
import CadastroPacientes from './components/CadastroDePacientes/CadastroPacientes';

import ListaAgendamento from './components/ListaAgendamento/ListaAgendamento';
import FormularioCadastro from './components/CadastroVacinacao/FormularioCadastro';
import  Home  from './components/Home/Home'


function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path= "/" exact component={Login} />
                <Route path= "/home" exact component={Home} />              
                <Route path= "/listapacientes" exact component={ListaPessoas} /> 
                <Route path= "/cadastropacientes/:codigo?" exact component={CadastroPacientes} />
                <Route path= "/cadastrovacinacao/:codigo?" exact component={FormularioCadastro} />
                <Route path= "/listaagendamentos" exact component={ListaAgendamento} />        
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;