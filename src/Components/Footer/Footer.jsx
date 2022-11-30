import PropTypes from "prop-types";
import "./footer.css";

function Footer(props) {
  return <div className="footer">{props.children}</div>;
}

Footer.propTypes = {
  children: PropTypes.element,
};

export default Footer;
