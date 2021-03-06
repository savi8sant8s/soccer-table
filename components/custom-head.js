import { Component } from "react";
import Head from "next/head";

export default class CustomHead extends Component {
    render() {
        return (
            <Head>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="author" content="Sávio Santos" />
                <meta name="description" content="Crie tabelas de futebol para suas competições de forma fácil. O que você está esperando!?" />
                <meta name="keywords" content="criar tabela de futebol, pontos corridos, fase de grupos, mata-mata, baixar" />
                <meta name="rating" content="General" />
                <meta name="distribution" content="Global" />
                <meta name="identifier-url" content="https://tabeladefutebol.com.br/" />
                <meta name="copyright" content="tabeladefutebol.com.br" />
                <meta name="robots" content="index,follow" />
                <title>Tabela de Futebol</title>
                <link rel="shortcut icon" type="image/x-icon" href="logo.png" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Oswald" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                <script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.8.1/html2pdf.bundle.min.js"></script>
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-4M4GZQ6HR8"></script>
                <script>
                    {`
                     window.dataLayer = window.dataLayer || [];
                     function gtag(){dataLayer.push(arguments)}
                     gtag('js', new Date());
 
                     gtag('config', 'G-4M4GZQ6HR8');
                    `}

                </script>
                <script data-ad-client="ca-pub-6653771391146869" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
            </Head>
        )
    }
}