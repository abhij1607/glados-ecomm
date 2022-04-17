import { TopNav } from "./nav-components/top-nav";
import { NavCategories } from "./nav-components/nav-categories";

const Nav = () => {
  return (
    <header className="top-nav">
      <TopNav />
      <NavCategories />
    </header>
  );
};
export { Nav };
