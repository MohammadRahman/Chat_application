import { Link } from "react-router-dom";
import "./navbar.styles.scss";

interface Props {
  children: {
    id: number;
    name: string;
    navigate: string;
  }[];
}
const Navbar = (props: Props) => {
  return (
    <div className="nav-container">
      <div className="logo-container">Logo</div>
      <div className="options-container">
        {props.children.map((d) => (
          <Link to={`/${d.navigate}`}>{d.name}</Link>
        ))}
        {/* <div className="option">{props.children}</div> */}
      </div>
    </div>
  );
};

export default Navbar;
