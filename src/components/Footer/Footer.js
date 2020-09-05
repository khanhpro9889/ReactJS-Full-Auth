import React from 'react';
import { FooterS } from './styles';

const Footer = (props) => {
    return (
        <FooterS>
           © {new Date().getFullYear()} Bản quyền thuộc về Hồ Gia Khánh 
        </FooterS>
    )
}

export default Footer;