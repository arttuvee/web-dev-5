import PropTypes from 'prop-types';

const Button = (props) => {
  const {text, handleClick} = props;
  return (
      <button
        className='m-3 mt-0 bg-blue-500 hover:bg-blue-700 text-stone-100 font-bold py-2 px-4 rounded'
        onClick={handleClick}
      >
        {text}
      </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Button;



