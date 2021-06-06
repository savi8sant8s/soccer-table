import { Component } from "react";
import CustomFooter from "./components/custom-footer";
import CustomHead from "./components/custom-head";
import CustomMenu from "./components/custom-menu";

export default class App extends Component {
  render() {
    return (
      <div>
        <CustomHead />
        <CustomMenu />
        <div className="container-fluid pt-3">
          <div id="presentation" className="text-center text-light">
            <h1>Crie uma tabela de futebol agora mesmo!</h1>
            <p className="lead">Faça aquela competição no campo, na quadra ou no videogame.</p>
          </div>
          <div className="container text-center">
            <div className="row">
              <div className="col-sm-6 p-2">
                <div className="card" style={{"maxWidth": "40rem"}}>
                  <img height="400px" className="card-img-top" src="example.png" alt="Pontos corridos" />
                  <div className="card-body">
                    <h3 className="card-title">Pontos corridos</h3>
                    <p className="card-text">Crie uma tabela de pontos corridos, tipo de competição utilizada por campeonatos profissionais como: <strong>Brasileirão, Premier League, Liga Espanhola</strong> entre outros.</p>
                    <a href="/criar-tabela" className="btn btn-warning">Criar tabela</a>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 p-2">
                <div className="card" style={{"maxWidth": "40rem"}}>
                  <img height="400px" className="card-img-top" src="example1.png" alt="Mata-mata" />
                  <div className="card-body">
                    <h3 className="card-title">Eliminatórias</h3>
                    <p className="card-text">Crie uma tabela de eliminatórias, tipo de competição presente na 2ª fase de campeonatos profissionais como: <strong>Champions League, Copa do Brasil, Copa do Mundo</strong> entre outros.</p>
                    <a href="/criar-tabela" className="btn btn-warning">Criar tabela</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <CustomFooter />
      </div>
    )
  }
}