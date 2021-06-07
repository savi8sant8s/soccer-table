import { Component } from "react";

export default class CustomMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: false
        };
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu() {
        this.setState({ menu: !this.state.menu })
    }

    render() {
        const show = (this.state.menu) ? "show" : "";

        return (
                <nav style={{background: "#164A41"}} className="navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">
                            <img width="70" src="logo.png" />
                        </a>
                        <button onClick={this.toggleMenu} className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className={"collapse navbar-collapse " + show} id="navbarText">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a style={{color: "#F1B24A"}} className="nav-link" href="/">Início</a>
                                </li>
                                <li className="nav-item">
                                    <a style={{color: "#F1B24A"}} className="nav-link" href="/termos">Termos de uso</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
        )
    }
}