import React from 'react';
import PropTypes from 'prop-types';
import { 
    AccountMenuWrapper, 
    ImgProfileNav, 
    Name, 
    SubMenu, 
    SubmenuItemWrapper,
    SubmenuItem
 } from './styles';
import Avatar from '../assets/images/avatar.jpg';

const AccountMenu = props => {
    return (
        <AccountMenuWrapper>
            <ImgProfileNav src={Avatar}></ImgProfileNav>
            <Name>Hồ Gia Khánh</Name>
            <SubMenu>
                <SubmenuItemWrapper>
                    <SubmenuItem>My profile</SubmenuItem>
                </SubmenuItemWrapper>
                <SubmenuItemWrapper>
                    <SubmenuItem>Thêm phòng gym</SubmenuItem>
                </SubmenuItemWrapper>
                <SubmenuItemWrapper>
                    <SubmenuItem>Phòng gym của bạn</SubmenuItem>
                </SubmenuItemWrapper>
                <SubmenuItemWrapper>
                    <SubmenuItem>Đăng xuất</SubmenuItem>
                </SubmenuItemWrapper>
            </SubMenu>
        </AccountMenuWrapper>
    );
};

AccountMenu.propTypes = {
    
};

export default AccountMenu;