import EdgeAnalytics from '../components/edge-analytics';

const isProduction = process.env.NODE_ENV === 'production';

const Page = () => {
  return (
    <>
      {/* Edge Analytics */}
      {isProduction ? <EdgeAnalytics slug='/' /> : null}
      <main>
        <h1>Index</h1>
      </main>
    </>
  );
};

export default Page;
