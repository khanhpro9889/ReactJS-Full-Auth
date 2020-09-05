import Styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Wrap = Styled.div`
    display: flex;
    margin-bottom: 30px;
`

export const WrapRight = Styled.div`
    flex: 2;
    padding-left: 20px;
    @media only screen and (max-width: 768px) {
        padding-left: 10px;
    }
    @media only screen and (max-width: 480px) {
        padding-left: 20px;
    }
`

export const WrapLeft = Styled.div`
    flex: 1;
`

export const Thumnail = Styled.div`
    background: ${props => 'url(' + props.src + ')'};
    width: 100%;
    background-position: center center;
    background-size: cover;
    height: 120px;
`

export const Icon = Styled(FontAwesomeIcon)`
    color: green;
    margin-right: 10px;
`

export const Name = Styled.div`
    text-transform: uppercase;
    font-size: 22px;
    color: #1e3c72;
    font-weight: 600;
    cursor: pointer;
    @media only screen and (max-width: 768px) {
        font-size: 16px;
    }
    @media only screen and (max-width: 480px) {
        font-size: 16px;
    }
    &:hover {
        color: #96deda;
    }
`

export const Address = Styled.div`
    margin-top: 15px;
    margin-bottom: 15px;
    font-size: 16px;
    @media only screen and (max-width: 768px) {
        font-size: 14px;
    }
    @media only screen and (max-width: 480px) {
        font-size: 14px;
    }
`