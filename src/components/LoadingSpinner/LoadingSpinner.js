import React from 'react';
import PropTypes from 'prop-types';
import { Spinner, Wrap } from './styles';

const LoadingSpinner = props => {
    return (
        <Wrap>
            <Spinner
                variant="indeterminate"
                disableShrink
                size={40}
                thickness={4}
                {...props}
            />
        </Wrap>
    );
};

LoadingSpinner.propTypes = {
    
};

export default LoadingSpinner;