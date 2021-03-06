const Sitemap = () => { };

export const getServerSideProps = ({ res }) => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
    <loc>https://tabeladefutebol.com.br/</loc>
    <lastmod>2021-06-20T11:05:00+00:00</lastmod>
    <priority>0.90</priority>
    </url>
    <url>
    <loc>https://tabeladefutebol.com.br/criar-tabela</loc>
    <lastmod>2021-06-20T11:05:00+00:00</lastmod>
    <priority>1.00</priority>
    </url>
    <url>
    <loc>https://tabeladefutebol.com.br/arquivos</loc>
    <lastmod>2021-06-20T11:05:00+00:00</lastmod>
    <priority>0.60</priority>
    </url>
    </urlset>
  `;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;