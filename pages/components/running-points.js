import { Component } from "react";

export default class RunningPoints extends Component {
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
                                <p><strong>Modelo: </strong>Pontos corridos</p>
                                <p><strong>Quant. de rodadas: </strong> {this.props.data.countRounds}</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-2">
                        <table style={{ background: "white"}} className="table text-center">
                            {this.props.data.table.map((round, x) =>
                                <tbody key={x}>
                                    <tr style={{ background: "gray", color: "white" }}>
                                        <td>Mandante</td>
                                        <td className="h4"><strong>{round.description}</strong></td>
                                        <td>Visitante</td>
                                    </tr>
                                    {round.games.map((game, y) =>
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
                </div>
            </div>
        )
    }
}