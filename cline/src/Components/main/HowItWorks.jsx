import React from 'react'

function HowItWorks() {
  return (
    <section className='hoitwork_section'>
        <div class="app_contanier">

            <div class="howItworks_title">
                <h3>How it works</h3>
                <p>Find out how to get started</p>
            </div>

            <div class="howItworks_cards">

                <div class="howItworks_card_gen">
                    <img src={require("../Images/photos/Icon (1).png")} alt=""/>
                    <div class="howItworks_card_gen_text">
                        <h5>Setup Your wallet</h5>
                        <p>Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the
                            top right corner.</p>
                    </div>
                </div>

                <div class="howItworks_card_gen">
                <img src={require("../Images/photos/Icon (1).png")} alt=""/>
                    <div class="howItworks_card_gen_text">
                        <h5>Create Collection</h5>
                        <p>Upload your work and setup your collection. Add a description, social links and floor price.
                        </p>
                    </div>

                </div>
                <div class="howItworks_card_gen">
                <img src={require("../Images/photos/Icon (2).png")} alt=""/>
                    <div class="howItworks_card_gen_text">
                        <h5>Create Collection</h5>
                        <p>Choose between auctions and fixed-price listings. Start earning by selling your NFTs or
                            trading others.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HowItWorks