import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom'

function DiscoverMore() {

    const [nft, setNft] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/api/marketplace").then((res) => {
            setNft(res.data);
        });
    }, []);

    return (
        <div id="ali_section_discover_more">
            <div class="ali_section_contanier">
                <div class="ali_section_discover_more_head">
                    <div class="ali_section_discover_more_head_text">
                        <h3>Discover More NFTs</h3>
                        <p>Explore new trending NFTs</p>
                    </div>
                    <button>
                        <img src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/eye@2x.svg" alt="" />
                        <p><Link className='see-all-text' to="/marketplace">See All</Link></p>
                    </button>
                </div>
                {/* <!-- DISCOVER MORE  CARDS  --> */}

                <div class="ali_section_discover_more_cards">
                    {nft &&
                        nft.map((nft) => {
                            return (

                                <div class="ali_section_discover_more_cards_firstCard">
                                    <img width={"330px"} src={nft.img} class="ali_section_discover_more_cards_fristPic"
                                        alt="Card pics" />

                                    <div class="ali_section_discover_more_cards_firstCard_bottom">
                                        <div class="ali_section_discover_more_cards_firstCard_bottom_user">
                                            <h5>Distant Galaxy</h5>
                                            <div class="ali_section_discover_more_cards_firstCard_bottom_user_nick">
                                                <img src={nft.artist.img} alt="First logo" />
                                                <span>{nft.artist.name}</span>
                                            </div>
                                        </div>

                                        <div class="ali_section_discover_more_cards_firstCard_bottom_value">

                                            <div class="ali_section_discover_more_cards_firstCard_bottom_value_left">
                                                <p>Price</p>
                                                <p>{nft.price} ETH</p>
                                            </div>

                                            <div class="ali_section_discover_more_cards_firstCard_bottom_value-right">
                                                <p>Highest Bid</p>
                                                <p>{nft.Hbid} wETH</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                </div>

                <button class="ali_section_discover_more_cards_btn_phone">
                    <img src="../Images/picsAli/Eye.png" alt="" />
                    <p>See All</p>
                </button>
                {/* <!-- DISCOVER MORE BUTTON FOR PHONE --> */}
            </div>
        </div>

    )
}

export default DiscoverMore