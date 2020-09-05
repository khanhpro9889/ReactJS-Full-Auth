import React from 'react';
import PropTypes from 'prop-types';
import { 
    Wrap, 
    WrapRight, 
    WrapLeft,
    Thumnail,
    Name,
    Icon,
    Address
} from './styles';

const GymItem = props => {
    return (
        <Wrap>
            <WrapLeft>
                <Thumnail src={'https://citigym.com.vn/storage/uploads/thumbnail-1-375x440.JPG'}></Thumnail>
            </WrapLeft>
            <WrapRight>
                <Name>Giti Gym Thành Thái</Name>
                <Address><Icon icon={['fas', 'map-marker-alt']}></Icon>52 Thành Thái, Phường 12, Quận 10, Thành phố Hồ Chí Minh</Address>
                <Icon icon={['fas', 'star']}/>8.5
            </WrapRight>
        </Wrap>
    );
};

GymItem.propTypes = {
    
};

export default GymItem;