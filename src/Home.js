import React from 'react'
import './Home.css'
import Product from './Product'


function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img
                className="home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB42864220_.JPG"
                alt=""
                />

                <div className="home__row">
                    <Product
                    id ="112" 
                    title="The Seven Habitsof Highly Effective People by Stephen R.Covey"
                    price={699}
                    image="https://images-na.ssl-images-amazon.com/images/I/817xk9KvJbL.jpg"
                    rating={5}
                    />
                    <Product 
                    id="113"
                    title="Dell Vostro 3400 14 FHD Display Laptop (I5-1135G7 / 8GB / 512GB SSD / NVIDIA MX330 2GB Graphics / Win 10 + MSO / Backlit KB / Dune Color ) D552172WIN9DE"
                    price={25000}
                    image="https://images-na.ssl-images-amazon.com/images/I/51CEknIIHcL._SL1080_.jpg"
                    rating={3}
                    />

                </div>

                <div className="home__row">
                    <Product 
                    id="114"
                    title="Margo Original Neem Soap - 125gm Pack of 8"
                    price={175}
                    image="https://images-na.ssl-images-amazon.com/images/I/81Z6Y6Q2v-L._SL1500_.jpg"
                    rating={4}
                    />
                    <Product 
                    id="116"
                    title="MAGGI 2-Minute Instant Noodles, Masala - 840g (Pack of 12 x 70g Each)"
                    price={129}
                    image="https://images-na.ssl-images-amazon.com/images/I/81WyWDbuqsL._SL1500_.jpg"
                    rating={4}
                    />
                    <Product 
                    id="116"
                    title="Ariel Matic Liquid Detergent, Top Load, 2 Litre - Pantry"
                    price={306}
                    image="https://images-na.ssl-images-amazon.com/images/I/71gSA5hUKrL._SL1500_.jpg"
                    rating={4}/>
                    
                </div>

                <div className="home__row">
                <Product 
                    id="115"
                    title="Google Nest"
                    price={8999}
                    image="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Google_Home_with_Home_Hub_and_Home_Mini_on_table.jpg/1200px-Google_Home_with_Home_Hub_and_Home_Mini_on_table.jpg"
                    rating={4}
                    />
                </div>

            </div>
        </div>
    )
}

export default Home
