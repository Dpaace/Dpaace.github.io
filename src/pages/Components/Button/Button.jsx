// import PropTypes from 'prop-types';

// export const Button = ({ title, onClick, type = 'button' }) => {
//     const handleClick = (e) => {
//         if (type !== 'submit') {
//             e.preventDefault();
//         }
//         if (onClick) {
//             onClick(e);
//         }
//     };
//     return (
//         <button
//             className="border-coral border-4 h-16 w-44 px-2 py-4 rounded-lg text-gray-700 font-bold border-solid text-[1em] hover:bg-gray-500 hover:border-gray-500 hover:text-white active:bg-coral active:text-white"
//             type={type}
//             onClick={handleClick}
//         >
//             {title}
//         </button>
//     );
// };

// Button.propTypes = {
//     title: PropTypes.string.isRequired,
//     onClick: PropTypes.func,
//     type: PropTypes.oneOf(['button', 'submit', 'reset']),
// };

// Button.defaultProps = {
//     onClick: null,
//     type: 'button',
// };

import PropTypes from 'prop-types';

export const Button = ({ title, onClick, type = 'button' }) => {
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
            className="border-coral border-4 h-12 md:h-16 w-full md:w-44 px-2 py-2 md:py-4 rounded-lg text-gray-700 font-bold border-solid text-base md:text-[1em] hover:bg-gray-500 hover:border-gray-500 hover:text-white active:bg-coral active:text-white"
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
};

Button.defaultProps = {
    onClick: null,
    type: 'button',
};
