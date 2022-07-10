import CustomFooter from "../components/custom-footer";
import CustomHead from "../components/custom-head";
import CustomMenu from "../components/custom-menu";

export default function Tutorial() {
  return (
    <div className="container-fluid text-center text-light">
      <CustomHead />
      <CustomMenu />
      <h1 className="display-6 mb-5">
        Veja abaixo como criar cada tipo de tabela:
      </h1>
      <div className="mb-5" style={{height: 380}}>
        <h6>Tabela de pontos corridos:</h6>
        <iframe
          width="55%"
          height="100%"
          src="https://www.youtube.com/embed/XeaKC1q80fI"
          title="Tabela de pontos corridos"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div className="mb-5" style={{height: 380}}>
        <h6>Tabela de eliminatórias (mata-mata):</h6>
        <iframe
          width="55%"
          height="100%"
          src="https://www.youtube.com/embed/RoXn9OsEBh0"
          title="Tabela de eliminatórias (mata-mata):"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div className="mb-5" style={{height: 380}}>
        <h6>Tabela de fase de grupos</h6>
        <iframe
          width="55%"
          height="100%"
          src="https://www.youtube.com/embed/JxyzEmXjMHg"
          title="Tabela de fase de grupos"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <CustomFooter />
    </div>
  );
}
