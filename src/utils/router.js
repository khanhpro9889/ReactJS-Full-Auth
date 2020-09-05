import React, { Suspense } from 'react';
import LoadingSpinner from '../components/LoadingSpinner';

export const loadable = (loadFunc) => {
    const TempComponent = React.lazy(loadFunc);
    return (props) => {
        return (
            <Suspense fallback={<LoadingSpinner/>}>
                <TempComponent {...props}/>
            </Suspense>
        )
    }
}