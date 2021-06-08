import { Component } from "react";
import CustomFooter from "./components/custom-footer";
import CustomHead from "./components/custom-head";
import CustomMenu from "./components/custom-menu";
import GroupStage from "./components/group-stage";
import Swal from "sweetalert2";
import RunningPoints from "./components/running-points";
import Eliminatory from "./components/eliminatory";
import { saveAsPng, saveAsJpeg } from 'save-html-as-image';

export default class CreateTable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            typeId: 0,
            groupStage: {
                competition: {
                    typeId: 0,
                    type: "",
                    name: ""
                },
                countParticipants: 0,
                msg: "",
                stage: {
                    name: "",
                    confrontations: []
                },
                status: "",
                table: [],
                timestamp: ""
            },
            runningPoints: {
                competition: {
                    typeId: "",
                    type: "",
                    name: ""
                },
                countRounds: 0,
                msg: "",
                status: "",
                table: [],
                timestamp: ""
            },
            eliminatory: {
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
            typefile: "jpeg"
        };
        this.handleChange = this.handleChange.bind(this);
        this.onDownloadTable = this.onDownloadTable.bind(this);
    }

    async componentDidMount() {
        let soccerTable = JSON.parse(sessionStorage.getItem("soccerTable"));
        if (soccerTable == undefined) {
            this.showAlertTableNotExists();
        }
        else {
            this.setState({ name: soccerTable.competition.name, typeId: soccerTable.competition.typeId });
            switch (soccerTable.competition.typeId) {
                case 1:
                    this.setState({ runningPoints: soccerTable });
                    break;
                case 2:
                    this.setState({ eliminatory: soccerTable });
                    break;
                case 3:
                    this.setState({ groupStage: soccerTable })
                    break;
            }
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
        let name = this.state.name;
        switch (this.state.typefile) {
            case "jpeg":
                saveAsJpeg(table, { filename: name, printDate: false });
                break;
            case "png":
                saveAsPng(table, { filename: name, printDate: false });
                break
            case "pdf":
                html2pdf(table, {filename: `${name}.pdf`, quality: 0.95});
        }
    }

    render() {
        const table = {
            1: <RunningPoints data={this.state.runningPoints} />,
            2: <Eliminatory data={this.state.eliminatory} />,
            3: <GroupStage data={this.state.groupStage} />
        }[this.state.typeId];

        return (
            <div>
                <CustomHead />
                <CustomMenu />
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="jumbotron text-center text-light p-2">
                            <h1 className="display-4">Resultado:</h1>
                        </div>
                        <div className="col-sm-6">
                            <p className="text-light">Escolha um formato para baixar:</p>
                            <div className="input-group mb-3">
                                <select name="typefile" value={this.state.typefile} onChange={this.handleChange} className="form-select">
                                    <option value="jpeg">JPEG</option>
                                    <option value="png">PNG</option>
                                    <option value="pdf">PDF</option>
                                </select>
                                <div className="input-group-append">
                                    <button onClick={this.onDownloadTable} className="btn btn-warning">Baixar</button>
                                </div>
                            </div>
                            <div id="table" className="justify-content-center p-2">
                                {table}
                            </div>
                        </div>
                    </div>
                </div>
                <CustomFooter />
            </div>
        )
    }
}