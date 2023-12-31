export default function Footer({closeSpinner}){
  return (

    <footer id="footer" style={{display: closeSpinner? 'none':'flex'}}>
        <div className="bar-search">
            <input type="search" name="" id="" placeholder="search CNN" style={{width: '96%', padding: '5px', color: 'black'}} />
        </div>
        <div className="container propaganda-principal-footer" style={{marginTop: '3vh'}}>
            <a href="#">
                <img src="imgs/propaganda/ortobom.png" alt="ortobom" />
            </a>
        </div>
        <div className="listas">
            <div>
                <h4>
                    <a href="https://edition.cnn.com/world" style={{color: 'white'}}>
                        World
                    </a>
                </h4>
                <br/>
                <ul className="lista-footer">
                    <li>
                        <a href="https://edition.cnn.com/africa" style={{color: 'white'}}>Africa</a>
                    </li>
                    <li>
                        <a href="https://edition.cnn.com/americas" style={{color: 'white'}}>Americas</a>
                    </li>
                    <li>
                        <a href="https://edition.cnn.com/asia" style={{color: 'white'}}>Asia</a>
                    </li>
                    <li>
                        <a href="https://edition.cnn.com/australia" style={{color: 'white'}}>
                            Australia
                        </a>
                    </li>
                    <li>
                        <a href="https://edition.cnn.com/china" style={{color: 'white'}}>
                            China
                        </a>
                    </li>
                    <li>
                        <a href="https://edition.cnn.com/europe" style={{color: 'white'}}>
                            Europe
                        </a>
                    </li>
                    <li>
                        <a href="https://edition.cnn.com/india" style={{color: 'white'}}>
                            India
                        </a>
                    </li>
                    <li>
                        <a href="https://edition.cnn.com/middle-east" style={{color: 'white'}}>
                            Middle East
                        </a>
                    </li>
                    <li>
                        <a href="https://edition.cnn.com/uk" style={{color: 'white'}}>
                            United Kingdom
                        </a>
                    </li>
                </ul>
            </div>
            <div>
                <h4>
                    <a href="https://edition.cnn.com/politics" style={{color: 'white'}}>
                        US Politics
                    </a>
                </h4>
                <br/>
                <ul className="lista-footer">
                    <li>
                        <a href="https://edition.cnn.com/specials/politics/joe-biden-news" style={{color: 'white'}}>The Biden Presidency</a>
                    </li>
                    <li>
                        <a href="https://edition.cnn.com/specials/politics/fact-check-politics" style={{color: 'white'}}>Facts First</a>
                    </li>
                    <li>
                        <a href="https://edition.cnn.com/election/2022" style={{color: 'white'}}>
                            2022 Midterms
                        </a>
                    </li>
                </ul>
            </div>
            <div>
                <h4>
                    <a href="https://edition.cnn.com/business" style={{color: 'white'}}>Business</a>
                </h4>
                <br/>
                <ul className="lista-footer">
                    <li>
                        <a href="https://edition.cnn.com/markets" style={{color: 'white'}}>Markets</a>
                    </li>
                    <li>
                        <a href="https://edition.cnn.com/business/tech" style={{color: 'white'}}>Tech</a>
                    </li>
                    <li>
                        <a href="https://edition.cnn.com/business/media" style={{color: 'white'}}>Media</a>
                    </li>
                    <li>
                        <a href="https://edition.cnn.com/business/success" style={{color: 'white'}}>Success</a>
                    </li>
                    <li>
                        <a href="https://edition.cnn.com/business/perspectives" style={{color: 'white'}}>Perspectives</a>
                    </li>
                    <li>
                        <a href="https://edition.cnn.com/business/videos" style={{color: 'white'}}>Videos</a>
                    </li>
                </ul>
            </div>
            <div>
                <h4>
                    <a href="https://edition.cnn.com/health" style={{color: 'white'}}>Health</a>
                </h4>
                <br/>
                <ul className="lista-footer">
                    <li>
                        <a href="https://edition.cnn.com/interactive/life-but-better/" style={{color: 'white'}}>Life, But Better</a>
                    </li>
                    <li>
                        <a href="https://edition.cnn.com/specials/health/fitness-life-but-better" style={{color: 'white'}}>Fitness</a>
                    </li>
                    <li>
                        <a href="https://edition.cnn.com/specials/health/food-life-but-better" style={{color: 'white'}}>Food</a>
                    </li>
                    <li>
                        <a href="https://edition.cnn.com/specials/health/sleep-life-but-better" style={{color: 'white'}}>Sleep</a>
                    </li>
                    <li>
                        <a href="https://edition.cnn.com/specials/health/mindfulness-life-but-better" style={{color: 'white'}}>Mindfulness</a>
                    </li>
                    <li>
                        <a href="https://edition.cnn.com/specials/health/relationships-life-but-better" style={{color: 'white'}}>Relationships</a>
                    </li>
                </ul>
            </div>
            <div>
                <h4>
                    <a href="https://edition.cnn.com/entertainment" style={{color: 'white'}}>Entertainment</a>
                </h4>
                <br/>
                <ul className="lista-footer">
                    <li>
                        <a href="https://edition.cnn.com/entertainment/celebrities" style={{color: 'white'}}>Stars</a>
                    </li>
                    <li>
                        <a href="https://edition.cnn.com/entertainment/movies" style={{color: 'white'}}>Screen</a>
                    </li>
                    <li>
                        <a href="https://edition.cnn.com/entertainment/tv-shows" style={{color: 'white'}}>Binge</a>
                    </li>
                    <li>
                        <a href="https://edition.cnn.com/entertainment/culture" style={{color: 'white'}}>Culture</a>
                    </li>
                    <li>
                        <a href="https://edition.cnn.com/business/media" style={{color: 'white'}}>Media</a>
                    </li>
                </ul>
            </div>
            <div>
                <h4>
                    <a href="https://edition.cnn.com/business/tech" style={{color: 'white'}}>Tech</a>
                </h4>
                <br/>
                <ul className="lista-footer">
                    <li>
                        <a href="https://edition.cnn.com/specials/tech/innovate" style={{color: 'white'}}>Innovate</a>
                    </li>
                    <li>
                        <a href="https://edition.cnn.com/specials/tech/gadget" style={{color: 'white'}}>Gadget</a>
                    </li>
                    <li>
                        <a href="https://edition.cnn.com/specials/tech/gadget" style={{color: 'white'}}>Foreseeable Future</a>
                    </li>
                    <li>
                        <a href="https://edition.cnn.com/specials/tech/mission-ahead" style={{color: 'white'}}>Mission: Ahead</a>
                    </li>
                    <li>
                        <a href="https://edition.cnn.com/specials/tech/upstarts" style={{color: 'white'}}>Upstarts</a>
                    </li>
                    <li>
                        <a href="https://edition.cnn.com/specials/success/work-transformed" style={{color: 'white'}}>Work Transformed</a>
                    </li>
                    <li>
                        <a href="https://edition.cnn.com/specials/tech/innovative-cities" style={{color: 'white'}}>Innovative Cities</a>
                    </li>
                </ul>
            </div>
            <div>
                <h4>
                    <a href="https://edition.cnn.com/style" style={{color: 'white'}}>Style</a>
                </h4>
                <br/>
                <ul className="lista-footer">
                    <li>
                        <a href="https://edition.cnn.com/style/arts" style={{color: 'white'}}>Arts</a>
                    </li>
                    <li>
                        <a href="https://edition.cnn.com/style/design" style={{color: 'white'}}>Design</a>
                    </li>
                    <li>
                        <a href="https://edition.cnn.com/style/fashion" style={{color: 'white'}}>Fashion</a>
                    </li>
                    <li>
                        <a href="https://edition.cnn.com/style/architecture" style={{color: 'white'}}>Architecture</a>
                    </li>
                    <li>
                        <a href="https://edition.cnn.com/style/luxury" style={{color: 'white'}}>Luxury</a>
                    </li>
                    <li>
                        <a href="https://edition.cnn.com/style/beauty" style={{color: 'white'}}>Beauty</a>
                    </li>
                    <li>
                        <a href="https://edition.cnn.com/style/videos" style={{color: 'white'}}>Video</a>
                    </li>
                </ul>
            </div>
            <div>
                <h4>
                    <a href="https://edition.cnn.com/travel" style={{color: 'white'}}>Travel</a>
                </h4>
                <br/>
                <ul className="lista-footer">
                    <li>
                        <a href="https://edition.cnn.com/travel/destinations" style={{color: 'white'}}>Destinations</a>
                    </li>
                    <li>
                        <a href="https://edition.cnn.com/travel/food-and-drink" style={{color: 'white'}}>Food and Drink</a>
                    </li>
                    <li>
                        <a href="https://edition.cnn.com/travel/stay" style={{color: 'white'}}>Stay</a>
                    </li>
                    <li>
                        <a href="https://edition.cnn.com/travel/news" style={{color: 'white'}}>News</a>
                    </li>
                    <li>
                        <a href="https://edition.cnn.com/travel/videos" style={{color: 'white'}}>Videos</a>
                    </li>
                </ul>
            </div>
            <div>
                <h4>
                    <a href="https://edition.cnn.com/sport" style={{color: 'white'}}>Sports</a>
                </h4>
                <br/>
                <ul className="lista-footer">
                    <li>
                        <a href="https://edition.cnn.com/sport/football" style={{color: 'white'}}>Football</a>
                    </li>
                    <li>
                        <a href="https://edition.cnn.com/sport/tennis" style={{color: 'white'}}>Tennis</a>
                    </li>
                    <li>
                        <a href="https://edition.cnn.com/sport/golf" style={{color: 'white'}}>Golf</a>
                    </li>
                    <li>
                        <a href="https://edition.cnn.com/sport/olympics" style={{color: 'white'}}>Olympics</a>
                    </li>
                    <li>
                        <a href="https://edition.cnn.com/specials/sport/us-sports" style={{color: 'white'}}>US Sports</a>
                    </li>
                    <li>
                        <a href="https://edition.cnn.com/specials/sport/climbing" style={{color: 'white'}}>Climbing</a>
                    </li>
                    <li>
                        <a href="https://edition.cnn.com/sport/motorsport" style={{color: 'white'}}>Motorsport</a>
                    </li>
                    <li>
                        <a href="https://edition.cnn.com/specials/esports" style={{color: 'white'}}>Esports</a>
                    </li>
                </ul>
            </div>
            <div>
                <h4>
                    <a href="https://edition.cnn.com/videos" style={{color: 'white'}}>Videos</a>
                </h4>
                <br/>
                <ul className="lista-footer">
                    <li>
                        <a href="https://edition.cnn.com/cnn-live-restricted" style={{color: 'white'}}>Live TV</a>
                    </li>
                    <li>
                        <a href="https://edition.cnn.com/specials/digital-studios" style={{color: 'white'}}>Digital Studios</a>
                    </li>
                    <li>
                        <a href="https://edition.cnn.com/specials/videos/digital-shorts" style={{color: 'white'}}>CNN Films</a>
                    </li>
                    <li>
                        <a href="https://edition.cnn.com/specials/videos/hln" style={{color: 'white'}}>HLN</a>
                    </li>
                    <li>
                        <a href="https://edition.cnn.com/tv/schedule/cnn" style={{color: 'white'}}>TV Schedule</a>
                    </li>
                    <li>
                        <a href="https://edition.cnn.com/specials/tv/all-shows" style={{color: 'white'}}>TV Shows A-Z</a>
                    </li>
                    <li>
                        <a href="https://edition.cnn.com/vr" style={{color: 'white'}}>CNNVR</a>
                    </li>
                </ul>
            </div>
            <div>
                <h4>
                    <a href="https://edition.cnn.com/specials" style={{color: 'white'}}>Features</a>
                </h4>
                <br/>
                <ul className="lista-footer">
                    <li>
                        <a href="https://edition.cnn.com/interactive/asequals/" style={{color: 'white'}}>As Equals</a>
                    </li>
                    <li>
                        <a href="https://edition.cnn.com/interactive/call-to-earth/#/" style={{color: 'white'}}>Call to Earth</a>
                    </li>
                    <li>
                        <a href="https://edition.cnn.com/interactive/2018/specials/freedom-project/" style={{color: 'white'}}>Freedom Project</a>
                    </li>
                    <li>
                        <a href="https://edition.cnn.com/specials/impact-your-world" style={{color: 'white'}}>Impact Your World</a>
                    </li>
                    <li>
                        <a href="https://edition.cnn.com/specials/africa/inside-africa" style={{color: 'white'}}>Inside Africa</a>
                    </li>
                    <li>
                        <a href="https://edition.cnn.com/specials/opinions/two-degrees" style={{color: 'white'}}>2 Degrees</a>
                    </li>
                    <li>
                        <a href="https://edition.cnn.com/specials/cnn-heroes" style={{color: 'white'}}>CNN Heroes</a>
                    </li>
                    <li>
                        <a href="https://edition.cnn.com/specials" style={{color: 'white'}}>All Features</a>
                    </li>
                </ul>
            </div>
            <div>
                <h4>
                    <a href="https://edition.cnn.com/weather" style={{color: 'white'}}>Weather</a>
                </h4>
                <br/>
                <ul className="lista-footer">
                    <li>
                        <a href="https://edition.cnn.com/specials/world/cnn-climate" style={{color: 'white'}}>Climate</a>
                    </li>
                    <li>
                        <a href="https://edition.cnn.com/interactive/storm-tracker/" style={{color: 'white'}}>Storm Tracker</a>
                    </li>
                    <li>
                        <a href="https://edition.cnn.com/interactive/2020/weather/wildfire-and-air-quality-tracker/" style={{color: 'white'}}>Wildfire Tracker</a>
                    </li>
                    <li>
                        <a href="https://edition.cnn.com/specials/weather/weather-video" style={{color: 'white'}}>Video</a>
                    </li>
                </ul>
            </div>
            <div>
                <h4>
                    <a href="#" style={{color: 'white'}}>More</a>
                </h4>
                <br/>
                <ul style={{listStyle: 'none'}}>
                    <li>
                        <a href="https://edition.cnn.com/more" style={{color: 'white'}}>Photos</a>
                    </li>
                    <li>
                        <a href="https://edition.cnn.com/specials/cnn-longform" style={{color: 'white'}}>Longform</a>
                    </li>
                    <li>
                        <a href="https://edition.cnn.com/specials/cnn-investigates" style={{color: 'white'}}>Investigations</a>
                    </li>
                    <li>
                        <a href="https://edition.cnn.com/specials/profiles" style={{color: 'white'}}>CNN Profiles</a>
                    </li>
                    <li>
                        <a href="https://edition.cnn.com/specials/more/cnn-leadership" style={{color: 'white'}}>CNN Leadership</a>
                    </li>
                    <li>
                        <a href="https://edition.cnn.com/newsletters" style={{color: 'white'}}>CNN Newsletters</a>
                    </li>
                    <li>
                        <a href="https://careers.wbd.com/global/en" style={{color: 'white'}}>Work for CNN</a>
                    </li>
                </ul>
            </div>
        </div>
        <div className="footer-line"></div>
        <div className="div-menu-footer">
            <img src="imgs/menu/cnn.png" alt="logo cnn"/>
            <div className="div-redes-sociais">
                <p style={{color: 'white'}}>
                    FOLLOW CNN
                </p>
                <a href="#" target="_blank">
                    <img style={{width: '20px', height: '20px'}} src="imgs/menu/facebook.png" alt="facebook"/>
                </a>
                <a href="#" target="_blank">
                    <img style={{width: '20px', height: '20px'}} src="imgs/menu/twiter.png" alt="twiter"/>
                </a>
                <a href="#" target="_blank">
                    <img style={{width: '20px', height: '20px'}} src="imgs/menu/instagram.png" alt="instagram"/>
                </a>
                <h4 style={{color: 'white'}}>
                    <strong>|</strong>
                </h4>
                <button className="button-conectse">Log in</button>
            </div>
        </div>
        <div className="footer-line"></div>
        <ul className="footer-footer">
            <li>
                <a href="#" style={{color: 'white'}}>Terms of Use</a>
            </li>
            <li>
                <a href="#" style={{color: 'white'}}>Privacy Policy</a>
            </li>
            <li>
                <a href="#" style={{color: 'white'}}>Accessibility & CC</a>
            </li>
            <li>
                <a href="#" style={{color: 'white'}}>Ad Choices</a>
            </li>
            <li>
                <a href="#" style={{color: 'white'}}>About Us</a>
            </li>
            <li>
                <a href="#" style={{color: 'white'}}>Modern Slavery Act Statement</a>
            </li>
            <li>
                <a href="#" style={{color: 'white'}}>Advertise with us</a>
            </li>
            <li>
                <a href="#" style={{color: 'white'}}>CNN Store</a>
            </li>
            <li>
                <a href="#" style={{color: 'white'}}>Newsletters</a>
            </li>
            <li>
                <a href="#" style={{color: 'white'}}>Transcripts</a>
            </li>
            <li>
                <a href="#" style={{color: 'white'}}>License Footage</a>
            </li>
            <li>
                <a href="#" style={{color: 'white'}}>CNN Newsource</a>
            </li>
            <li>
                <a href="#" style={{color: 'white'}}>Sitemap</a>
            </li>
        </ul>
        <p style={{color: 'white'}}>Clone da CNN feito por Thiago Rodrigues </p>
    </footer>

  );
}


