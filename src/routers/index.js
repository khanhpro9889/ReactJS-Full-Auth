import {Switch, Route} from 'react-router-dom';
import Home from './Home';
import React from 'react';
import Login from './Login';
import Register from './Register';
import Confirm from './Confirm';
import ResetPassword from './ResetPassword';
import ResetPassword2nd from './ResetPassword2nd';

const Routes = (props) => {
    return (
        <>
            <Switch>
                {
                    [
                        Home,
                        Login,
                        Register,
                        Confirm,
                        ResetPassword,
                        ResetPassword2nd
                    ].map((item) => (<Route key={item.path} exact path={item.path} {...item} />))
                }
            </Switch>
        </>
    )
}

export default Routes;