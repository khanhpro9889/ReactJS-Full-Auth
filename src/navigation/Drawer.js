import React from 'react';
import PropTypes from 'prop-types';
import { 
    Wrapper,
    WrapItemDrawer, 
    SearchIcon, 
    NavItemDrawer, 
    WrapperMenu, 
    WrapItemSearch, 
    LoginDrawer,
    LeftLogin,
    RightLogin,
    ImgProfile,
    IconBtn
} from './styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import { HOME_PATH, RANKING_PATH, LOGIN_PATH } from '../constants/Path';
import Divider from '@material-ui/core/Divider';
import Avatar from '../assets/images/avatar.jpg';

const Drawer = ({isOpen, setIsOpen}) => {
    return (
        <Wrapper>
            <SwipeableDrawer
                anchor="right"
                open={isOpen}
                onClose={() => setIsOpen(false)}
                onOpen={() => setIsOpen(true)}
            >
                <WrapperMenu> 
                    <LoginDrawer>
                        <LeftLogin>
                            <ImgProfile src={Avatar}/>
                        </LeftLogin>
                        <RightLogin>
                            <NavItemDrawer to={LOGIN_PATH}><IconBtn icon={['fas', 'sign-in-alt']}></IconBtn>Login/Signup</NavItemDrawer>
                            <NavItemDrawer><IconBtn icon={['fas', 'sign-out-alt']}></IconBtn>Đăng xuất</NavItemDrawer>
                        </RightLogin>
                    </LoginDrawer>
                    <Divider />
                    <WrapItemDrawer>
                        <NavItemDrawer to={HOME_PATH}>
                            <IconBtn icon={['fas', 'home']}></IconBtn>Trang chủ
                        </NavItemDrawer>
                    </WrapItemDrawer>
                    <WrapItemDrawer>
                        <NavItemDrawer to={RANKING_PATH}>
                            <IconBtn icon={['fas', 'medal']}></IconBtn>Bảng xếp hạng
                        </NavItemDrawer>
                    </WrapItemDrawer>
                    <WrapItemSearch>
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
                    </WrapItemSearch>
                    <Divider />
                    <WrapItemDrawer>
                        <NavItemDrawer to={RANKING_PATH}>
                            <IconBtn icon={['fas', 'plus-circle']}></IconBtn>Thêm phòng gym
                        </NavItemDrawer>
                    </WrapItemDrawer>
                    <WrapItemDrawer>
                        <NavItemDrawer to={RANKING_PATH}>
                            <IconBtn icon={['fas', 'list-ol']}></IconBtn>Phòng gym của bạn
                        </NavItemDrawer>
                    </WrapItemDrawer>
                </WrapperMenu>
          </SwipeableDrawer>
        </Wrapper>
    );
};

Drawer.propTypes = {
    
};

export default Drawer;