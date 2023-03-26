export default function Ad() {
    const onClick = () => {
        window.open('https://play.google.com/store/apps/details?id=com.prancheta.tabeladefutebol', '_blank');
    }

    return (
        <div className="w-full p-2 bg-light d-flex justify-content-center align-items-center" role="button"
            onClick={onClick}>
            <img className="mx-4" src="/app.webp" alt="App" width={50} />
            <span>Baixe o app Tabela de Futebol</span>
            <img className="mx-4" src="/playstore.png" alt="Google Play" width={100} />
        </div>
    )
}