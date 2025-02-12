import {
  Home,
  MessageSquare,
  Users,
  Folder,
  Archive,
  HelpCircle,
  Settings,
} from "react-feather";
import "./VerticalNavigation.css";
import { Link } from "react-router-dom";

function VerticalNavigation() {
  return (
    <nav className="navbar">
      <ul className="navbar__menu">
        <li className="navbar__item">
          <Link to="/" className="navbar__link">
            <Home className="navbar__icon" />
            <span>خانه</span>
          </Link>
        </li>
        <li className="navbar__item">
          <Link to="/comments" className="navbar__link">
            <MessageSquare className="navbar__icon" />
            <span>نظرات شما</span>
          </Link>
        </li>
        <li className="navbar__item">
          <Link to="/contact" className="navbar__link">
            <Users className="navbar__icon" />
            <span>ارتباط با ما</span>
          </Link>
        </li>
        <li className="navbar__item">
          <Link to="/portfolio" className="navbar__link">
            <Folder className="navbar__icon" />
            <span>نمونه کارها</span>
          </Link>
        </li>
        <li className="navbar__item">
          <Link to="/shop" className="navbar__link">
            <Archive className="navbar__icon" />
            <span>خرید محصولات</span>
          </Link>
        </li>
        <li className="navbar__item">
          <Link to="/help" className="navbar__link">
            <HelpCircle className="navbar__icon" />
            <span>Help</span>
          </Link>
        </li>
        <li className="navbar__item">
          <Link to="/settings" className="navbar__link">
            <Settings className="navbar__icon" />
            <span>Settings</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default VerticalNavigation;
