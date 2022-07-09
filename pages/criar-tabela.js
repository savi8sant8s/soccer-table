import { Component } from "react";
import CustomFooter from "../components/custom-footer";
import CustomHead from "../components/custom-head";
import CustomMenu from "../components/custom-menu";
import Swal from "sweetalert2";
import axios from "axios";

export default class CreateTable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            type: "1",
            participants: "",
            shuffle: "1",
            roundTrip: "0"
        };
        this.handleChange = this.handleChange.bind(this);
        this.filterForm = this.filterForm.bind(this);
        this.correctForm = this.correctForm.bind(this);
        this.showCustomAlertError = this.showCustomAlertError.bind(this);
        this.onCreateTable = this.onCreateTable.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    onCreateTable() {
        if (this.correctForm()) {
            let form = this.filterForm();
            axios.post(`/api/soccer-table`, form).then((res) => {
                this.loading = false;
                switch (res.data.status) {
                    case "TABLE_GENERATED_SUCCESS":
                        sessionStorage.setItem("soccerTable", JSON.stringify(res.data));
                        window.location.href = "/tabela";
                        break;
                    case "PARAMS_INVALID":
                        this.showCustomAlertError("Parâmetros inválidos", "Tente novamente.");
                        break;
                    case "NAME_INVALID":
                        this.showCustomAlertError("Nome de competição inválido");
                        break;
                    case "TYPE_INVALID":
                        this.showCustomAlertError("Tipo de competição inválido");
                        break;
                    case "CPARTICPANTS_INVALID":
                        let message = {
                            1: "Pontos corridos só aceita de 2 a 20 participantes pares.",
                            2: "Elimininatórias só aceita 4, 8, 16 ou 32 participantes.",
                            3: "Fase de grupos só aceita 8, 16 ou 32 participantes."
                        }[form.type];
                        this.showCustomAlertError("Quantidade de participantes inválida", message);
                        break;
                    case "SHUFFLE_INVALID":
                        this.showCustomAlertError("Tipo de embaralhar inválido");
                        break;
                    case "RTRIP_INVALID":
                        this.showCustomAlertError("Tipo de ida e volta inválido");
                        break;
                    default:
                        this.showCustomAlertError("Problema inesperado", "Tente novamente.");
                }

            });
        }
    }

    filterForm() {
        return {
            name: this.state.name,
            participants: this.state.participants.split(","),
            roundTrip: Number(this.state.roundTrip),
            shuffle: Number(this.state.shuffle),
            type: Number(this.state.type)
        }
    }

    correctForm() {
        let form = this.filterForm();
        let checkForm = {
            name: new RegExp(/^([a-zA-Zà-úÀ-Ú0-9]|-|_|\s){5,50}$/).test(form.name),
            type: new RegExp(/^[1-3]$/).test(form.type),
            participants: form.participants.length >= 0 && form.participants.length % 2 == 0,
            shuffle: new RegExp(/^[0-1]$/).test(form.shuffle),
            roundTrip: new RegExp(/^[0-1]$/).test(form.roundTrip)
        };
        if (!checkForm.name) {
            this.showCustomAlertError("Nome de competição inválido", "Evite utilizar caracteres especiais como: (,),^,*,&,%,$,#,@.");
            return false;
        }
        else if (!checkForm.type) {
            this.showCustomAlertError("Tipo de competição inválido");
            return false;
        }
        else if (!checkForm.roundTrip) {
            this.showCustomAlertError("Tipo de ida e volta inválido");
            return false;
        }
        else if (!checkForm.shuffle) {
            this.showCustomAlertError("Tipo de embaralhar inválido");
            return false;
        }
        else if (!checkForm.participants) {
            this.showCustomAlertError("Quantidade de participantes inválida", "Deve ter uma quantidade par de participantes.");
            return false;
        }
        return true;
    }

    showCustomAlertError(title, message = "Verifique o preenchimento do campo.") {
        Swal.fire({
            title: title,
            html: message,
            icon: "error",
            confirmButtonColor: "#164A41",
            confirmButtonText: "Entendi"
        });
    }

    render() {
        return (
            <div>
                <CustomHead />
                <CustomMenu />
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="jumbotron text-center text-light p-2">
                            <h1 className="display-5">Criar tabela de futebol fácil e rápido</h1>
                            <p className="lead">Preencha os campos abaixo:</p>
                        </div>
                        <div className="col-sm-6">
                            <div className="card" style={{ background: "#F1B24A", color: "#164A41" }}>
                                <div id="form" className="card-body">
                                    <div className="mb-3">
                                        <label className="form-label"><strong>Nome da competição:</strong></label>
                                        <input name="name" value={this.state.name} onChange={this.handleChange} placeholder="Ex.: Copa dos amigos" type="text" className="form-control" />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label"><strong>Tipo de competição:</strong></label>
                                        <select name="type" value={this.state.type} onChange={this.handleChange} className="form-select">
                                            <option value="1">Pontos corridos (2 a 20 participantes)</option>
                                            <option value="2">Eliminatória (4, 8, 16 ou 32 participantes)</option>
                                            <option value="3">Fase de grupos (8, 16 ou 32 participantes)</option>
                                        </select>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label"><strong>Ida e volta:</strong></label>
                                        <select name="roundTrip" value={this.state.roundTrip} onChange={this.handleChange} className="form-select">
                                            <option value="1">Sim</option>
                                            <option value="0">Não</option>
                                        </select>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label"><strong>Embaralhar:</strong></label>
                                        <select name="shuffle" value={this.state.shuffle} onChange={this.handleChange} className="form-select">
                                            <option value="1">Sim</option>
                                            <option value="0">Não</option>
                                        </select>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label"><strong>Participantes (separados por vírgula):</strong></label>
                                        <textarea name="participants" value={this.state.participants} onChange={this.handleChange} placeholder="Ex.: Tabajara FC, Carcará EC..." type="text" className="form-control"></textarea>
                                    </div>
                                    <div className="col text-center">
                                        <button style={{ background: "#164A41", color: "white" }} className="btn" type="button" onClick={this.onCreateTable}>Criar Tabela</button>
                                    </div>
                                </div>
                            </div>
                            <div className="text-light mt-5">
                                <h4 className="text-center">Dúvidas frequentes:</h4>
                                <ul style={{textAlign: "justify"}} className="list-group list-group-flush">
                                    <li style={{background: "rgba(0, 0, 0, 0.1)"}} className="list-group-item text-light">
                                        <h5>Como são embaralhados os participantes?</h5>
                                    R - os participantes são embaralhados na lista reordenando cada participante a partir de um número aleatório gerado pelo sistema.
                                </li>
                                    <li style={{background: "rgba(0, 0, 0, 0.1)"}} className="list-group-item text-light">
                                        <h5>Como são geradas as rodadas?</h5>
                                        R - nos tipos de competição <strong>pontos corridos e fase de grupos</strong> as rodadas são geradas baseando-se no algoritmo de torneio <a style={{color: "#F1B24A"}} target="_blank" href="https://pt.wikinew.wiki/wiki/Round-robin_tournament">Round-robin.</a><br></br>
                                    Já no modelo de eliminatória os confrontos são gerados por pares próximos. Exemplo: 1º contra 2º, 3º contra 4º, e assim sucessivamente.
                                </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <CustomFooter />
            </div>
        )
    }
}