import Styled from 'styled-components';

export const Banner = Styled.div`
    background: ${props => 'url(' + props.src + ')'};
    width: 100%;
    min-height: 400px;
    background-size: cover;
    background-position: center center;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background-attachment: fixed;
    &::before {
        position: absolute;
        top: 0px;
        content: '';
        left: 0px;
        width: 100%;
        height: 100%;
        background: #000;
        opacity: 0.4;
    }
    @media only screen and (max-width: 480px) {
        min-height: 200px;
    }
    span{
        color: orange;
    }
`

export const Title = Styled.div`
    font-size: 34px;
    font-weight: 600;
    color: #fff;
    z-index: 3;
    position: relative;
    text-align: center;
    line-height: 1.5em;
    letter-spacing: 1.5px;
    font-family: Comic Sans MS;
    @media only screen and (max-width: 480px) {
        font-size: 20px;
        padding: 0 10px;
    }
`

export const BodyHome = Styled.div`
    display: flex;
    margin-top: 50px;
    margin-bottom: 50px;
    @media only screen and (max-width: 480px) {
        display: block;
    }
`

export const Left = Styled.div`
    flex: 1;
    padding-right: 10px;
    @media only screen and (max-width: 480px) {
        width: 100%;
        flex: unset;
    }
`

export const Right = Styled.div`
    flex: 1;
    @media only screen and (max-width: 480px) {
        width: 100%;
        flex: unset;
        margin-top: 30px;
    }
`

export const SubTitle = Styled.div`
    color: #1e3c72;
    margin-bottom: 30px;
    font-size: 24px;
    text-transform: uppercase;
    font-weight: 500;
    position: relative;
    &::after {
        content: '';
        position: absolute;
        height: 3px;
        width: 80px;
        background: #96deda;
        left: 0px;
        bottom: -7px;
        @media only screen and (max-width: 480px) {
            width: 40px;
        }
    }
    @media only screen and (max-width: 480px) {
        font-size: 16px;
    }
`