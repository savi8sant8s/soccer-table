import { Component } from "react";

export default class CustomFooter extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <footer className={`footer mt-auto p-3 ${this.props.fixed ? "fixed-bottom" : ""}`}>
                <div className="container">
                    <p className="text-center text-light">
                        © 2021 Todos os direitos reservados. Construído por <a style={{ color: "#F1B24A" }} target="_blank" href="https://saviosantos.vercel.app/">Sávio Santos</a>.
                    </p>
                </div>

            </footer>
        )
    }
}