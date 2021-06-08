import { Component } from "react";
import CustomFooter from "./components/custom-footer";
import CustomHead from "./components/custom-head";
import CustomMenu from "./components/custom-menu";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

export default class AppCreateTable extends Component {

    render() {
        return (
            <div>
                <CustomHead />
                <CustomMenu />
                <div className="container-fluid text-center text-light">
                    <h1 className="display-4">Crie uma tabela de futebol agora mesmo!</h1>
                    <p className="lead">Faça uma tabela gratuitamente e de forma rápida. O que você está esperando</p>
                    <a style={{ background: "#F1B24A", color: "white" }} className="btn btn-lg mt-2" href="/criar-tabela">Criar tabela agora</a>

                    <div className="slide-container text-center mt-5">
                        <Slide duration="3000">
                            <div className="each-slide">
                                <h1 className="text-light">Tabela de Pontos corridos</h1>
                                <img height="40%" width="40%" src="rpoints.png" />
                                <p className="text-light">Aceita de 2 a 20 participantes.</p>
                            </div>
                            <div className="each-slide">
                                <h1 className="text-light">Tabela de Mata-Mata</h1>
                                <img height="40%" width="40%" src="elim.png" />
                                <p className="text-light">Aceita de 8, 16 ou 32 participantes.</p>
                            </div>
                            <div className="each-slide">
                                <h1 className="text-light">Tabela Fase de grupos</h1>
                                <img height="40%" width="40%" src="gstage.png" />
                                <p className="text-light">Aceita 4, 8, 16 ou 32 participantes.</p>
                            </div>
                        </Slide>
                    </div>

                    <div className="row mt-5 justify-content-center">
                        <h4>Formatos disponíveis para download:</h4>
                        <div className="col-sm-1 h2 p-1">
                            <p className="badge bg-primary">JPEG</p>
                        </div>
                        <div className="col-sm-1 h2 p-1">
                            <p className="badge bg-secondary">PNG</p>
                        </div>
                        <div className="col-sm-1 h2 p-1">
                            <p className="badge bg-danger">PDF</p>
                        </div>
                    </div>
                    <a style={{ background: "#F1B24A", color: "white" }} className="btn btn-lg mt-2" href="/criar-tabela">Criar tabela agora</a>
                </div>
                <CustomFooter />
            </div>
        )
    }
}