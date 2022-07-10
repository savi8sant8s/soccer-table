import { Component } from "react";
import CustomFooter from "../components/custom-footer";
import CustomHead from "../components/custom-head";
import CustomMenu from "../components/custom-menu";

export default class NotFound extends Component {
    render() {
        return (
            <div>
                <CustomHead />
                <CustomMenu />
                <div className="container">
                    <div className="text-center text-light">
                        <h1 className="display-6">Arquivos</h1>
                    </div>
                    <div class="mt-5 row justify-content-center">
                        <div className="card" style={{ width: "20rem", textAlign: "justify" }}>
                            <img className="card-img-top" src="sumula.png" alt="Card image cap"></img>
                            <div className="card-body">
                                <h5 className="card-title">Súmula de futebol</h5>
                                <p className="card-text">Modelo útil a qualquer partida. Adapte as suas necessidades.</p>
                                <div className="d-flex flex-row justify-content-start">
                                    <h4 className="p-1">Baixar:</h4>
                                    <h4 className="p-1"><a href="sumula/sumula-futebol.docx" target="_blank" download><span className="btn btn-primary">DOCX</span></a></h4>
                                    <h4 className="p-1"><a href="sumula/sumula-futebol.odt" target="_blank" download><span className="btn btn-secondary">ODT</span></a></h4>
                                    <h4 className="p-1"><a href="sumula/sumula-futebol.pdf" target="_blank" download><span className="btn btn-danger">PDF</span></a></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <CustomFooter />
            </div>
        )
    }
}