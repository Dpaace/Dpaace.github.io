import PropTypes from 'prop-types';

export const EduExp = ({ title, subtitle, address }) => {
    return (
        <div className="bg-eduExp shadow-lg rounded-lg p-5 mb-5">
            <h2 className="text-2xl font-bold mb-2">{title}</h2>
            <h3 className="text-xl font-medium mb-2">{subtitle}</h3>
            <p className="text-xl font-medium">{address}</p>
        </div>
    );
};

EduExp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
};
