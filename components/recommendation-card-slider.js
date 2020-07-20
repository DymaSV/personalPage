import React from 'react';
import RecommendationCard from '../components/recommendation-card';
import Carousel from "react-material-ui-carousel"

export default function RecommendationCardSlider(props) {
    const autoPlay = false;
    const timer = 200;
    const animation = "slide";
    const indicators = true;
    const timeout = 500;
    const navButtonsAlwaysVisible = false;

    return (
        <Carousel
            autoPlay={autoPlay}
            timer={timer}
            animation={animation}
            indicators={indicators}
            timeout={timeout}
            navButtonsAlwaysVisible={navButtonsAlwaysVisible}
        >
            {
                props.items.map((item, index) => {
                    return <RecommendationCard
                        key={index}
                        name={item.name}
                        avatar={item.avatar}
                        message={item.message} />
                })
            }
        </Carousel>
    );
}