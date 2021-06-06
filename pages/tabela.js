import { Component } from "react";
import CustomFooter from "./components/custom-footer";
import CustomHead from "./components/custom-head";
import CustomMenu from "./components/custom-menu";
import Swal from "sweetalert2";

export default class CreateTable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            soccerTable: {
                competition: {
                    typeId: "",
                    type: "",
                    name: "",
                    stage: ""
                },
                msg: "",
                status: "",
                table: [],
                timestamp: ""
            },
            typefile: "pdf"
        };
        this.onDownloadTable = this.onDownloadTable.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    async componentDidMount() {
        let soccerTable = JSON.parse(sessionStorage.getItem("soccerTable"));
        if (soccerTable == undefined) {
            this.showAlertTableNotExists();
        }
        else {
            this.setState({ soccerTable: soccerTable });
        }
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    showAlertTableNotExists() {
        Swal.fire({
            title: "Oops!!",
            html: "Você ainda não gerou nenhuma tabela.",
            icon: "info",
            confirmButtonColor: "#164A41",
            confirmButtonText: "Entendi",
        }).then(() => {
            window.location.href = "/";
        });
        setTimeout(() => {
            window.location.href = "/";
        }, 5000);
    }

    onDownloadTable() {
        let table = document.getElementById("table");
        let name = this.state.soccerTable.competition.name;

        switch (this.state.typefile) {
            case "pdf":
                html2pdf(table, { margin: 0, filename: `${name}.pdf`, image: { type: 'jpeg', quality: 1 } });
                break;
        }

    }

    render() {
        const runningPoints =
            <table id="table" className="table bg-white text-center">
                <thead>
                    <tr className="bg-dark">
                        <th></th>
                        <th>
                            <p className="h3 text-light"><strong>{this.state.soccerTable.competition.name}</strong></p>
                        </th>
                        <th></th>
                    </tr>
                </thead>
                {this.state.soccerTable.table.map((round, x) =>
                    <tbody key={x}>
                        <tr className="bg-secondary text-light">
                            <td>Mandante</td>
                            <td className="h4"><strong>{round.description}</strong></td>
                            <td>Visitante</td>
                        </tr>
                        {round.games?.map((game, y) =>
                            <tr key={y}>
                                <td>{game.host}</td>
                                <td className="text-muted">X</td>
                                <td>{game.visitor}</td>
                            </tr>
                        )}
                    </tbody>
                )}
            </table>;

        const eliminatory =
            <table id="table" className="table bg-white text-center">
                <thead>
                    <tr className="bg-dark">
                        <th></th>
                        <th>
                            <p className="h3 text-light"><strong>{this.state.soccerTable.competition.name}</strong></p>
                        </th>
                        <th></th>
                    </tr>
                    <tr className="bg-secondary text-light">
                        <td></td>
                        <td className="h4"><strong>Fase {this.state.soccerTable.competition.stage}</strong></td>
                        <td></td>
                    </tr>
                </thead>
                {this.state.soccerTable.table.map((round, x) =>
                    <tbody key={x}>
                        <tr>
                            <td></td>
                            <td className="h5">{round.description}</td>
                            <td></td>
                        </tr>
                        {round.confrontrations?.map((game, y) =>
                            <tr key={y}>
                                <td>{game.host}</td>
                                <td className="text-muted">X</td>
                                <td>{game.visitor}</td>
                            </tr>
                        )}
                    </tbody>
                )}
            </table>;

        const table = {
            1: runningPoints,
            2: eliminatory
        }[this.state.soccerTable.competition.typeId];

        return (
            <div>
                <CustomHead />
                <CustomMenu />
                <div className="container-fluid pt-3">
                    <div id="presentation" className="text-center text-light">
                        <h3>Resultado</h3>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-sm-6">
                            <p className="text-light">Escolha um formato para baixar:</p>
                            <div className="input-group mb-3">
                                <select name="typefile" value={this.state.typefile} onChange={this.handleChange} className="form-select">
                                    <option value="pdf">PDF</option>
                                </select>
                                <div className="input-group-append">
                                    <button onClick={this.onDownloadTable} className="btn btn-warning">Baixar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-sm-6">
                            {table}
                        </div>
                    </div>
                </div>
                <CustomFooter />
            </div>
        )
    }
}