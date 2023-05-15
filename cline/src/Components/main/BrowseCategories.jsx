import React from 'react'

function BrowseCategories() {
  return (
    <div id="ali_section_browse_categories">
            <div class="ali_section_contanier">
                {/* BROWSE CATEGORIES TITLE */}
                <div class="ali_section_browse_categories_title">
                    <h1>Browse Categories</h1>
                </div>

                 {/* BROWSE CATEGORIES CARDS */}
                <div class="ali_section_browse_categories_cards">
                    {/*  CARD FRIST FOUR */}
                    <div class="ali_section_browse_categories_cards_first-four">
                        <div class="ali_section_browse_categories_cards_art">
                            <img src={require("../Images/picsAli/Category Icon (1).png")} alt="art icon"/>

                            <div class="ali_section_browse_categories_cards_text">
                                <p>Art</p>
                            </div>
                        </div>

                        <div class="ali_section_browse_categories_cards_art">
                        <img src={require("../Images/picsAli/Category Icon (2).png")} alt="art icon"/>
                            <div class="ali_section_browse_categories_cards_text">
                                <p>Collectibles</p>
                            </div>
                        </div>

                        <div class="ali_section_browse_categories_cards_art">
                        <img src={require("../Images/picsAli/Category Icon (3).png")} alt="art icon"/>
                            <div class="ali_section_browse_categories_cards_text">
                                <p>Music</p>
                            </div>
                        </div>

                        <div class="ali_section_browse_categories_cards_art">
                        <img src={require("../Images/picsAli/Category Icon (4).png")} alt="art icon"/>
                            <div class="ali_section_browse_categories_cards_text">
                                <p>Photography</p>
                            </div>
                        </div>

                    </div>
                     {/* CARD SECOND FOUR  */}
                    <div class="ali_section_browse_categories_cards_second-four">

                        <div class="ali_section_browse_categories_cards_art">
                            <img src={require("../Images/picsAli/Photo & Icon.png")} alt="art icon"/>

                            <div class="ali_section_browse_categories_cards_text">
                                <p>Video</p>
                            </div>
                        </div>

                        <div class="ali_section_browse_categories_cards_art">
                            <img src={require("../Images/picsAli/Category Icon (5).png")} alt="art icon"/>

                            <div class="ali_section_browse_categories_cards_text">
                                <p>Utility</p>
                          </div>
                        </div>

                        <div class="ali_section_browse_categories_cards_art">
                            <img src={require("../Images/picsAli/Photo & Icon (1).png")} alt="art icon"/>

                            <div class="ali_section_browse_categories_cards_text">
                                <p>Sport</p>
                            </div>
                        </div>

                        <div class="ali_section_browse_categories_cards_art">
                            <img src={require("../Images/picsAli/Category Icon (6).png")} alt="art icon"/>

                            <div class="ali_section_browse_categories_cards_text">
                                <p>Virtual Worlds</p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
  )
}

export default BrowseCategories