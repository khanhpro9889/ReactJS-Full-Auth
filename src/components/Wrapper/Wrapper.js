import React from 'react';
import { WrapperS } from './styles';

const Wrapper = ({children}) => {
    return (
        <WrapperS>
            {children}
        </WrapperS>
    )
}

export default Wrapper;