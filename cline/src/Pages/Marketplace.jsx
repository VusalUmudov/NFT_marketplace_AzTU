import React, { useEffect, useState } from 'react'
import axios from "axios";
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
function Marketplace() {

  const [nft, setNft] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/marketplace").then((res) => {
      setNft(res.data);
    });
  }, []);

  return (
    <div>
      <Navbar />

      <section className='browse__marketplace'>
        <div className='browse__text_input'>
          <div>
            <h2>Browse Marketplace</h2>
            <p>Browse through more than 50k NFTs on the NFT Marketplace.</p>
          </div>
          <div className='browse_input-icon'>
            <div className='browse_input'>
              <input type="text" placeholder='Search your favourite NFTs' />
            </div>
            <img class="icon-search-22OjQ9" data-id="I1996:14029;1994:10994" src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/magnifyingglass@2x.svg" alt="icon-search"></img>
          </div>
        </div>

        <div className='frame'>
          <div className='frame__section'>
            <div className='nfts'>
              <p className='nfts-text'>Nfts</p>
              <div className='nfts__num'>
                <p className='nfts__num-302'>302</p>
              </div>
            </div>

            <div className='collection'>
              <p className='collection_text'>Collection</p>
              <div className='collection-num'>
                <p>67</p>
              </div>
            </div>

          </div>
        </div>

        <div className='cards'>
          <div className='marketplace__card__container'>
            {nft &&
              nft.map((nft) => {
                return (

                  <div class="card">
                    <img width={"330px"} src={nft.img} alt="Card pics" />

                    <div class="card_bottom">
                      <div class="nft__name">
                        <h5>{nft.title}</h5>
                        <div class="artst_nick">
                          <img src={nft.img} alt="First logo" />
                          <span>{nft.artist.name}</span>
                        </div>
                      </div>

                      <div class="additional__info">

                        <div class="additional__info_left">
                          <p>Price</p>
                          <p>{nft.price} ETH</p>
                        </div>

                        <div class="additional__info-right">
                          <p>Highest Bid</p>
                          <p>{nft.Hbid} wETH</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Marketplace