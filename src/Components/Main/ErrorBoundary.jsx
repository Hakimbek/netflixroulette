import PropTypes from "prop-types";

function ErroBoundary(props) {
  const OopsError = () => (
    <h2>Something went wrong... We are doing our best to fix the issue</h2>
  );

  let isOk = true;

  return <>{isOk ? props.children : <OopsError />}</>;
}

ErroBoundary.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ErroBoundary;
