import { NextPageWithLayout } from "../@types/types";

const HomePage: NextPageWithLayout = () => {
  return <h1>Hello world</h1>;
};

HomePage.pageTitle = "Home";

export default HomePage;
