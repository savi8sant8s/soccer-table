import { Component } from "react";

export default class CustomMenu extends Component {

    render() {
        return (
            <nav style={{ background: "#164A41" }} className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid justify-content-between">
                    <a className="navbar-brand" href="/">
                        <img width="80" src="logo.png" />
                    </a>
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <a style={{ color: "#F1B24A" }} className="nav-link" href="/criar-tabela">Criar tabela</a>
                        </li>
                        <li className="nav-item">
                            <a style={{ color: "#F1B24A" }} className="nav-link" href="/arquivos">Arquivos</a>
                        </li>
                        <li className="nav-item">
                            <a style={{ color: "#F1B24A" }} className="nav-link" href="/termos">Termos de uso</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}