import { Component } from "react";
import Head from "next/head";

export default class CustomHead extends Component {
    render() {
        return (
            <Head>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="author" content="Sávio Santos" />
                <meta name="description" content="Gere tabelas de futebol para suas competições de forma fácil. O que você está esperando!?" />
                <meta name="keywords" content="criar,gerar,tabela,futebol,vidoegame,gratuito,grátis,pontos corridos,fase de grupos,eliminatória,mata-mata,sorteio,ida e volta,round-robin" />
                <meta name="rating" content="General" />
                <meta name="distribution" content="Global" />
                <meta name="identifier-url" content="https://tabeladefutebol.com.br/" />
                <meta name="copyright" content="tabeladefutebol.com" />
                <meta name="robots" content="index,follow" />
                <title>Tabela de Futebol</title>
                <link rel="shortcut icon" type="image/x-icon" href="logo.png" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Oswald" />
                <script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.8.1/html2pdf.bundle.min.js"></script>
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-4M4GZQ6HR8"></script>
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-4M4GZQ6HR8"></script>
                <script>
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments)}
                    gtag('js', new Date());
                    gtag('config', 'G-4M4GZQ6HR8');
                </script>
            </Head>
        )
    }
}