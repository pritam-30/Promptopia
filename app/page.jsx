import Feed from "@components/Feed";
const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text_center">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">AI-Powered Prompts</span>
      </h1>
      <p className="desc text-center">
        Create engaging, personalized content using AI-powered prompts and
        techniques. Get inspired and create content that resonates with your
        audience.
      </p>
      <Feed />
    </section>
  );
};

export default Home;
