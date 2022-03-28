import { Component } from "react";

export default class CustomFooter extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <footer className={`footer mt-3 p-3 ${this.props.fixed ? "fixed-bottom" : ""}`}>
                <div className="container text-center text-light">
                    Construído por <a style={{ color: "#F1B24A" }} target="_blank" href="https://github.com/savi8sant8s">Sávio Santos.</a><br></br>
                Este trabalho está licenciado com uma Licença <a target="_blank" rel="license" href="http://creativecommons.org/licenses/by/4.0/">
                        <img alt="Licença Creative Commons" style={{ borderWidth: "0" }} src="https://i.creativecommons.org/l/by/4.0/88x31.png" />
                    </a>
                </div>
            </footer>
        )
    }
}