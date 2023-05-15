import React from 'react'

function MagicMashrooms() {
  return (
    <div id="ali_section_magic_mush" style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + 'https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/nft-highlight@1x.png'})` 
    }}>
            <div class="ali_section_contanier">

                <div class="ali_section_magic_mush_main">

                    <div class="ali_section_magic_mush_main_left">
                        <div class="ali_section_magic_mush_main_left_usercard">
                            <img src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-2@2x.png" alt=""/>
                            <span>Shroomie</span>
                        </div>
                        <h2>Magic Mashrooms</h2>
                        <div class="ali_section_magic_mush_main_time  timeClock">
                            <div class="ali_section_magic_mush_main_time_clock_text">
                                <p>Auction ends in:</p>
                            </div>

                            <div class="ali_section_magic_mush_main_time_clock">
                                <div id="ali_section_magic_mush_main_time_clock_hours">
                                    <h3>59</h3> <span>Hours</span>
                                </div>
                                <h4>:</h4>
                                <div id="ali_section_magic_mush_main_time_clock_hours">
                                    <h3>59</h3> <span>Minutes</span>
                                </div>
                                <h4>:</h4>
                                <div id="ali_section_magic_mush_main_time_clock_hours">
                                    <h3>59</h3><span>Seconds</span>
                                </div>

                            </div>

                        </div>
                        <button class="button_phone">
                            <img src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/eye@2x.svg" alt=""/>
                            <span>See NFT</span>
                        </button>

                    </div>

                    <div class="ali_section_magic_mush_main_time timeClockBig">
                        <div class="ali_section_magic_mush_main_time_clock_text">
                            <p>Auction ends in:</p>
                        </div>

                        <div class="ali_section_magic_mush_main_time_clock">
                            <div id="ali_section_magic_mush_main_time_clock_hours">
                                <h3>59</h3> <span>Hours</span>
                            </div>
                            <h4>:</h4>
                            <div id="ali_section_magic_mush_main_time_clock_hours">
                                <h3>59</h3> <span>Minutes</span>
                            </div>
                            <h4>:</h4>
                            <div id="ali_section_magic_mush_main_time_clock_hours">
                                <h3>59</h3><span>Seconds</span>
                            </div>

                        </div>

                    </div>

                </div>

            </div>


        </div>
  )
}

export default MagicMashrooms