import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom'

function TopCreators() {
    const [artist, setArtist] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/api/artists").then((res) => {
            setArtist(res.data);
        });
    }, []);
    return (
        <section id="app__top__creators">
            <div class="app__top__creators__top">
                <h2>Top creators</h2>
                <div class="app__top__creators__top--last">
                    <p>Checkout Top Rated Creators on the NFT Marketplace</p>
                    <button>
                        <img width={"20px"} src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/rocketlaunch-1@2x.svg" alt="" />
                        <span><Link className='view-rankings-textt' to="/rankings">View Rankings</Link></span>
                    </button>
                </div>
            </div>
            <div class="app__top__creators__bottom">
                {artist &&
                    artist.map((user) => {
                        return (

                            <div class="app__top__creators__bottom__card">
                                <div class="app__top__creators__bottom__card__order">

                                    <p>1</p>
                                </div>
                                <div class="app__top__creators__bottom__card__elements">
                                    <img width={"120px"} src={user.img} alt="" />
                                    <div class="app__top__creators__bottom__card__elements--info">
                                        <h3>{user.name}</h3>
                                        <span class="app__top__creators__bottom__card__elements--first">Total Sales:</span><span
                                            class="app__top__creators__bottom__card__elements--last">{user.volume} ETH</span>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                <button class="app__topcreators__lastbutton"><img src="./Image/image/top-creators/RocketLaunch (1).png"
                    alt="" />
                    <span>View Rankings</span>
                </button>
            </div>
        </section>
    )
}

export default TopCreators