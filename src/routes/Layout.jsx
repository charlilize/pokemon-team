import { Outlet, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Layout = () => {
  return (
    <div className="my-[5px]">
      <nav>
        <ul>
          <Button variant="link" className="text-lg" key="home-button">
            <Link to="/">Home</Link>
          </Button>
          <Button variant="link" className="text-lg" key="create-button">
            <Link to="/create">Create a Pokemon</Link>
          </Button>
          <Button variant="link" className="text-lg" key="gallery-button">
            <Link to="/gallery">Pokemon Gallery</Link>
          </Button>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
