import { Component } from "react";

export default class RunningPoints extends Component {
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
                                    <p><strong>Modelo: </strong>Pontos corridos</p>
                                    <p><strong>Quant. de rodadas: </strong> {this.props.data.countRounds}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-1 mt-2">
                        <table id="table" className="table bg-white text-center">
                            {this.props.data.table.map((round, x) =>
                                <tbody key={x}>
                                    <tr className="bg-secondary text-light">
                                        <td>Mandante</td>
                                        <td className="h4"><strong>{round.description}</strong></td>
                                        <td>Visitante</td>
                                    </tr>
                                    {round.games.map((game, y) =>
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
            </div>
        )
    }
}