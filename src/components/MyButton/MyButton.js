import React from 'react';
import PropTypes from 'prop-types';
import { Btn, Icon } from './styles';

const MyButton = (props) => {
    const {text, icon} = props;
    return (
        <Btn {...props}>
            {icon && <Icon icon={icon}/>}
            {text && <span>{text}</span>}
        </Btn>
    );
};

MyButton.propTypes = {
    
};

export default MyButton;