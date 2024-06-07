import PropTypes from 'prop-types';

export const Button = ({ title, onClick, type = 'button', isActive }) => {
    const handleClick = (e) => {
        if (type !== 'submit') {
            e.preventDefault();
        }
        if (onClick) {
            onClick(e);
        }
    };

    return (
        <button
            className={`border-coral border-4 h-12 md:h-16 w-full md:w-44 px-2 py-2 md:py-4 rounded-lg font-bold border-solid text-base md:text-[1em]
            ${isActive ? 'bg-coral text-white' : 'bg-transparent text-black'} 
            hover:bg-gray-500 hover:border-gray-500 hover:text-white active:bg-coral active:text-white`}
            type={type}
            onClick={handleClick}
        >
            {title}
        </button>
    );
};

Button.propTypes = {
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
    isActive: PropTypes.bool,
};

Button.defaultProps = {
    onClick: null,
    type: 'button',
    isActive: false,
};
