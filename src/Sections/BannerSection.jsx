import React from "react";
import {Banner} from "../Components";

const carouselItems = [
    {
        image: 'https://static.vecteezy.com/system/resources/previews/006/828/785/non_2x/paper-art-shopping-online-on-smartphone-and-new-buy-sale-promotion-pink-backgroud-for-banner-market-ecommerce-women-concept-free-vector.jpg',
        title: 'NEW SALE',
        subtitle: 'Explore majestic heights',
        link: 'https://github.com/julianddress',
    },
    {
        image: 'https://static.vecteezy.com/system/resources/previews/006/828/785/non_2x/paper-art-shopping-online-on-smartphone-and-new-buy-sale-promotion-pink-backgroud-for-banner-market-ecommerce-women-concept-free-vector.jpg',
        title: '50% OFF',
        subtitle: 'Amazing buildings',
        link: 'https://github.com/julianddress',
    },
];

const BannerSection = () => {
    return  <>
                <section>
                    <Banner items={carouselItems}/>
                </section>
            </>
} 

export {BannerSection};