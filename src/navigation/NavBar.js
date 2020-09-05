import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Nav, NavItem, WrapItem, Brand, Menu, InnerNav, Icon, SearchIcon, LoginButton, WrapItemLogin } from './styles';
import { HOME_PATH, RANKING_PATH, LOGIN_PATH } from '../constants/Path';
import MyButton from '../components/MyButton';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import { useWindowSize } from '../utils/useWindowSize';
import Drawer from './Drawer';
import AccountMenu from './AccountMenu';

const NavBar = props => {
    const size = useWindowSize();
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (size.width > 768) {
            setOpen(false);
        }
    }, [size.width])

    return (
        <Nav>
            <InnerNav>
                <Brand>
                    <NavItem to={HOME_PATH}>
                        <Icon icon={['fas', 'dumbbell']}></Icon>Review Gym
                    </NavItem>
                </Brand>
                {size.width > 768 && <Menu>
                    <WrapItem>
                        <NavItem to={HOME_PATH}>
                            Tất cả
                        </NavItem>
                    </WrapItem>
                    <WrapItem>
                        <NavItem to={RANKING_PATH}>
                            Bảng xếp hạng
                        </NavItem>
                    </WrapItem>
                    <WrapItem>
                        <Input
                            id="standard-adornment-password"
                            type='text'
                            placeholder="Tìm kiếm"
                            endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                >
                                    <SearchIcon icon={['fas', 'search']}></SearchIcon>
                                </IconButton>
                            </InputAdornment>
                            }
                        />
                    </WrapItem>
                    <WrapItemLogin>
                        <LoginButton to={LOGIN_PATH}>Đăng nhập</LoginButton>
                        {/* <AccountMenu /> */}
                    </WrapItemLogin>
                </Menu>}
                {size.width <= 768 && <MyButton onClick={() => setOpen(true)} icon={['fas', 'bars']}/>}
                <Drawer isOpen={open} setIsOpen={setOpen}/>
            </InnerNav>
        </Nav>
    );
};

NavBar.propTypes = {
    
};

export default NavBar;