import React from 'react';
import { BoxedS } from './styles';
const Boxed = ({children}) => {
    return (
        <BoxedS>
            {children}
        </BoxedS>
    )
}

export default Boxed;