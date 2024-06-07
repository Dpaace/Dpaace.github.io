import PropTypes from 'prop-types';

export const Skills = ({ title }) => {
    return (
        <div className='h-20 w-20 md:h-28 md:w-28 rounded-full bg-skills flex items-center justify-center text-lg md:text-2xl font-bold border-coral border-4'>
            {title}
        </div>
    );
};

Skills.propTypes = {
    title: PropTypes.string.isRequired,
};
