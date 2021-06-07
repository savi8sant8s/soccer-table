import { Component } from "react";
import CustomFooter from "./components/custom-footer";
import CustomHead from "./components/custom-head";
import CustomMenu from "./components/custom-menu";
import GroupStage from "./components/group-stage";
import Swal from "sweetalert2";
import RunningPoints from "./components/running-points";
import Eliminatory from "./components/eliminatory";

export default class CreateTable extends Component {

    constructor(props) {
        super(props);
        this.state = {
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
            }
        };
        this.handleChange = this.handleChange.bind(this);
    }

    async componentDidMount() {
        let soccerTable = JSON.parse(sessionStorage.getItem("soccerTable"));
        if (soccerTable == undefined) {
            this.showAlertTableNotExists();
        }
        else {
            this.setState({ typeId: soccerTable.competition.typeId });
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
                <div className="container-fluid pt-3">
                    <div className="text-center text-light mb-3">
                        <h1>Resultado:</h1>
                    </div>
                    <div id="table">
                        {table}
                    </div>
                </div>
                <CustomFooter />
            </div>
        )
    }
}