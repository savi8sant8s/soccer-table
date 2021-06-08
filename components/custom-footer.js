import { Component } from "react";

export default class CustomFooter extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <footer className={`footer mt-3 p-3 ${this.props.fixed ? "fixed-bottom" : ""}`}>
                <div className="container text-center text-light">
                    <p>Contribua para manter o site no ar e de forma gratuita:</p>
                    <p style={{ background: "green", fontSize: "15px" }} className="badge">CHAVE PIX: saviosa08@gmail.com</p>
                    <p>© 2021 Todos os direitos reservados. Construído por <a style={{ color: "#F1B24A" }} target="_blank" href="https://saviosantos.vercel.app/">Sávio Santos</a>.</p>
                </div>
            </footer>
        )
    }
}