const Ads = () => {};

export const getServerSideProps = ({ res }) => {
  const ads = 'google.com, pub-3498097985217225, DIRECT, f08c47fec0942fa0';

  res.setHeader("Content-Type", "text/plain");
  res.write(ads);
  res.end();

  return {
    props: {},
  };
};

export default Ads;
