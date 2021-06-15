import { Component } from "react";

export default class GroupStage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{ background: "white", border: "5px solid white" }}>
                <div style={{ background: "#2A363B", color: "white" }}>
                    <div className="container">
                        <div className="text-center h1">
                            {this.props.data.competition.name}
                        </div>
                        <div className="row">
                            <div className="col-sm">
                                <p><strong>Modelo: </strong>Fase de Grupos</p>
                                <p><strong>Quant. de participantes: </strong> {this.props.data.countParticipants}</p>
                            </div>
                            <div className="col-sm">
                                <strong>2ª fase - </strong> {this.props.data.stage.name}:
                                <ul>
                                    {this.props.data.stage.confrontations.map(c =>
                                        <li key={c}>{c}</li>
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div style={{ background: "white" }} className="table p-1">
                        <div className="row mt-2">
                            {this.props.data.table.map((groups, x) =>
                                <div className="col-sm" key={x}>
                                    <table className="table table-bordered border-secondary">
                                        <thead style={{ background: "gray", color: "white" }}>
                                            <tr>
                                                <th scope="col">Grupo {x + 1}</th>
                                                <th scope="col" colSpan="3">Times: {groups.group.join(", ")}</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {groups.rounds.map((round, y) =>
                                                <tr key={y}>
                                                    <th scope="row"><strong>{round.description}</strong></th>
                                                    <td colSpan="3">
                                                        {round.games.map((game, z) =>
                                                            <div className="row text-center" key={z}>
                                                                <div className="col-4">{game.host}</div>
                                                                <div className="col-2 text-muted">x</div>
                                                                <div className="col-4">{game.visitor}</div>
                                                            </div>
                                                        )}
                                                    </td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="text-center text-light p-1">
                        <img width="70" src="logo.png"></img>
                        <p>Criado por: <a style={{ color: "#F1B24A" }}>tabeladefutebol.com.br</a></p>
                    </div>
                </div>
            </div>
        )
    }
}