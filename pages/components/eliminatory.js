import { Component } from "react";

export default class Eliminatory extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="row justify-content-center p-2">
                <div className="col-sm-6 bg-light p-1">
                    <div style={{ background: "#2A363B" }} className="p-1 text-light">
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
                    <table id="table" className="table bg-white text-center">
                        {this.props.data.table.map((round, x) =>
                            <tbody key={x}>
                                <tr className="bg-secondary">
                                    <td></td>
                                    <td className="h5 text-light">{round.description}</td>
                                    <td></td>
                                </tr>
                                {round.confrontrations.map((game, y) =>
                                    <tr key={y}>
                                        <td>{game.host}</td>
                                        <td className="text-muted">X</td>
                                        <td>{game.visitor}</td>
                                    </tr>
                                )}
                            </tbody>
                        )}
                    </table>
                </div>
            </div>

        )
    }
}