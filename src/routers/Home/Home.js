import React from 'react';
import PropTypes from 'prop-types';
import { Banner, Title, Left, Right, BodyHome, SubTitle, BannerFooter } from './styles';
import GymItem from '../../components/GymItem';
import Boxed from '../../components/Boxed';
import background1 from '../../assets/images/banner.jpg';
import background2 from '../../assets/images/banner2.jpg';
import Divider from '@material-ui/core/Divider';

const Home = props => {
    return (
        <>
            <Banner src={background1}>
                <Title>
                    Trang tin đánh giá phòng gym
                    <br />
                    Giúp bạn có được sự lựa chọn tốt nhất
                </Title>
            </Banner>
            <Boxed>
                <BodyHome>
                    <Left>
                        <SubTitle>TOP 5 Phòng Gym</SubTitle>
                        <GymItem />
                        <GymItem />
                        <GymItem />
                    </Left>
                    <Divider />
                    <Right>
                        <SubTitle>TOP 5 PT</SubTitle>
                        <GymItem />
                    </Right>
                </BodyHome>
            </Boxed>
            <Banner src={background2}>
                <Title>
                    <span>Sore</span> today
                    <br />
                    <span>Strong</span> tomorrow
                </Title>
            </Banner>
        </>
    );
};

Home.propTypes = {
    
};

export default Home;