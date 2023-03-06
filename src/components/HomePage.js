import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <div>
        <img
          alt="school building"
          src="https://th.bing.com/th/id/OIP.02QqJUrDRWTwxnouonnDTAHaHa?w=166&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
        />
        <img
          alt="cafe symbol"
          src="https://th.bing.com/th/id/OIP.HEUWv9B7LIJuxuURRQg7BwHaHD?w=187&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
        />
        <h1>School Cafe</h1>
      </div>
      <ul className="homePage">
        <li>
          <Link to="/myaccount" className="link">
            My Account
          </Link>
        </li>
        <li>
          <Link to="/benefits" className="link">
            Apply For Benefits
          </Link>
        </li>
        <li>
          <Link to="/tutorials" className="link">
            How-To Videos
          </Link>
        </li>
        <li>
          <Link to="/inst" className="link">
            Instructions
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default HomePage;
