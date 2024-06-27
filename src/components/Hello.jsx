import PropTypes from 'prop-types';

const Hello = ({ name }) => {
  return (
    <div>
      <h2>Hello, {name}!</h2>
    </div>
  );
};

Hello.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Hello;