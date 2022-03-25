import { Hero } from "./hero";
import { Categories } from "./categories";
const Home = () => {
  return (
    <div className="wrapper">
      <main>
        <Hero />
        <Categories />
      </main>
    </div>
  );
};

export { Home };
