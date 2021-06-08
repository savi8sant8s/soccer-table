import { Component } from "react";

export default class Eliminatory extends Component {
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
                                <p><strong>Modelo: </strong>Eliminatória (Mata-Mata)</p>
                            </div>
                            <div className="col-sm">
                                <strong>Fase: </strong>{this.props.data.competition.stage}
                            </div>
                        </div>
                    </div>
                </div>
                <table style={{ background: "white"}} className="table text-center">
                    {this.props.data.table.map((round, x) =>
                        <tbody key={x}>
                            <tr style={{ background: "gray", color: "white" }}>
                                <td></td>
                                <td className="h4">{round.description}</td>
                                <td></td>
                            </tr>
                            {round.confrontrations.map((game, y) =>
                                <tr key={y}>
                                    <td>{game.host}</td>
                                    <td className="text-muted">x</td>
                                    <td>{game.visitor}</td>
                                </tr>
                            )}
                        </tbody>
                    )}
                </table>
            </div>
        )
    }
}