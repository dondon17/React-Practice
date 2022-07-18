import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>홈</h1>
      <p>가장 먼저 보여지는 페이지</p>
      <Link to={"/about"}>About</Link>
      <ul>
        <li>
          <Link to={"/profiles/velopert"}>velopert 프로필</Link>
        </li>
        <li>
          <Link to={"/profiles/gildong"}>gildong 프로필</Link>
        </li>
        <li>
          <Link to={"/profiles/void"}>존재하지 않는 프로필</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
