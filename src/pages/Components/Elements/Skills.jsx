import PropTypes from 'prop-types';

export const Skills = ({ title }) => {
    return (
        <div className='h-16 w-16 md:h-20 md:w-20 lg:h-22 lg:w-22 xl:w-28 xl:h-28 rounded-full bg-skills flex items-center justify-center text-md md:text-lg lg:text-2xl font-bold border-coral border-4'>
            {title}
        </div>
    );
};

Skills.propTypes = {
    title: PropTypes.string.isRequired,
};
