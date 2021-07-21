import React, {Component} from 'react'
import  './Header.css'
import { Link } from 'react-router-dom'

export default class Header extends Component {

    render(){

        return(
          <nav className="Navbar">
              <ul>
              <Link to="/home" className="navbar-item">HOME</Link>
              <Link to="/cadastropacientes" className="navbar-item">CADASTRO PACIENTES</Link>
              <Link to="/listapacientes" className="navbar-item">LISTA PACIENTES</Link>
              <Link to="/cadastrovacinacao" className="navbar-item">AGENDAMENTO VACINAÇÃO</Link>
              <Link to="/listaagendamentos" className="navbar-item">LISTA VACINAÇÃO</Link>
              </ul>
          </nav>
           
        )
    
    
    }



}