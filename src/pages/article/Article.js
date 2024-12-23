import { Link, Outlet} from "react-router-dom";
import Navbarmenu from "../../component/navbar/Navbar";
import "./Article.css";

function Article() {


  return (
    <div className="articlewrap">
      <Navbarmenu />
      <h1 style={{ textAlign: "center", fontFamily: "lalezar" }}>
        صفحه مقالات
      </h1>
      <hr />
      <div className="btnContainer">
        <Link to='react' className="linkBtn">react article</Link>
        <Link to='js' className="linkBtn">js article</Link>
        <Link to='php' className="linkBtn">php article</Link>
      </div>
      <hr />
      <Outlet/>
    </div>
  );
}
export default Article;
