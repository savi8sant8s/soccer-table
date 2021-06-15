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
                    <div style={{ background: "white" }} className="table" >
                        <div className="row mt-2">
                            {this.props.data.table.map((confrotation, x) =>
                                <div className="col-sm my-auto" key={x}>
                                    <p>{Object(confrotation[0]).stage}</p>
                                    {confrotation.map((game, y) =>
                                        <div className="text-center" key={y}>
                                            <table key={y} className="table table-bordered table-sm">
                                                <tbody className="border border-dark">
                                                    <tr height="30">
                                                        <td className={game.host.length > 0 ? "bg-secondary text-light" : ""} width="60">{game.host}</td>
                                                        <td width="40"></td>
                                                    </tr>
                                                    <tr height="30">
                                                        <td className={game.host.length > 0 ? "bg-secondary text-light" : ""} width="60">{game.visitor}</td>
                                                        <td width="40"></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    )}
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