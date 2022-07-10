import { Component } from "react";
import CustomFooter from "../components/custom-footer";
import CustomHead from "../components/custom-head";
import CustomMenu from "../components/custom-menu";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

export default class AppCreateTable extends Component {

    render() {
        return (
            <div>
                <CustomHead />
                <CustomMenu />
                <div className="container-fluid text-center text-light">
                    <h1 className="display-6">Crie uma tabela de futebol agora mesmo!</h1>
                    <p className="lead">Faça gratuitamente e de forma rápida. O que você está esperando!?</p>
                    <a style={{ background: "#F1B24A", color: "white" }} className="btn btn-lg mt-2" href="/criar-tabela">Criar tabela agora</a>

                    <div className="slide-container text-center mt-5">
                        <Slide duration="3000">
                            <div className="each-slide">
                                <h1 className="text-light">Tabela de Pontos Corridos</h1>
                                <img height="40%" width="40%" src="rpoints.png" />
                                <p className="text-light mt-2">Aceita de 2 a 20 participantes.</p>
                            </div>
                            <div className="each-slide">
                                <h1 className="text-light">Tabela de Mata-Mata</h1>
                                <img height="40%" width="40%" src="elim.png" />
                                <p className="text-light mt-2">Aceita 8, 16 ou 32 participantes.</p>
                            </div>
                            <div className="each-slide">
                                <h1 className="text-light">Tabela de Fase de Grupos</h1>
                                <img height="40%" width="40%" src="gstage.png" />
                                <p className="text-light mt-2">Aceita 4, 8, 16 ou 32 participantes.</p>
                            </div>
                        </Slide>
                    </div>

                    <h4 className="mt-5">Formatos disponíveis para download:</h4>
                    <div className="d-flex flex-row justify-content-center">
                        <h4 className="p-1"><span className="badge bg-primary">JPEG</span></h4>
                        <h4 className="p-1"><span className="badge bg-secondary">PNG</span></h4>
                        <h4 className="p-1"><span className="badge bg-danger">PDF</span></h4>
                    </div>
                    
                    <h4 className="mt-3">Compartilhe:</h4>
                    <div className="d-flex flex-row justify-content-center mt-2">
                        <div className="p-1">
                            <a href="https://www.facebook.com/sharer/sharer.php?u=https://tabeladefutebol.com.br/" target="_blank" style={{ width: "50px", borderRadius: "5px", background: "#3B5998", color: "white" }} className="fa fa-facebook nav-link"></a>
                        </div>
                        <div className="p-1">
                            <a href={`http://twitter.com/share?text=Crie tabelas de futebol gratuitamente&url=https://tabeladefutebol.com.br/&hashtags=tabeladefutebol, criarcampeonatofutebol`} target="_blank" style={{ width: "50px", borderRadius: "5px", background: "#55ACEE", color: "white" }} className="fa fa-twitter nav-link"></a>
                        </div>
                        <div className="p-1">
                            <a href={`https://www.linkedin.com/shareArticle?mini=true&url=https://tabeladefutebol.com.br/&title=Crie tabelas de futebol gratuitamente&summary=Crie campeonatos de fase de grupos, pontos corridos ou mata-mata gratuitamente para gerenciar suas competições.`} target="_blank" style={{ width: "50px", borderRadius: "5px", background: "#007bb5", color: "white" }} className="fa fa-linkedin nav-link"></a>
                        </div>
                        <div className="p-1">
                            <a href="whatsapp://send?text=Crie tabelas de futebol gratuitamente: https://tabeladefutebol.com.br/" target="_blank" style={{ width: "50px", borderRadius: "5px", background: "#25d366", color: "white" }} className="fa fa-whatsapp nav-link"></a>
                        </div>
                    </div>
                </div>

                <CustomFooter />
            </div>
        )
    }
}