import React,{useState} from "react";

export default function Header(){

    const[close, setClose]=useState(true)

    function closeMenu() {
        setClose((close) => !close);
      }

  return (
    <header>

        <div className="menu">

            <a href="#footer" id="menu-box" onClick={closeMenu}>

                <div className="little-bar" style={{position: close ? '': 'absolute', transform: close ? '': "rotate(45deg)", width: close ? '':'100%'}}></div>
                <div className="little-bar" style={{display: close? '': 'none'}}></div>
                <div className="little-bar" style={{position: close ? '': 'absolute', transform: close ? '': "rotate(-45deg)", width: close ? '':'100%'}}></div>

            </a>
            
            <img src="imgs/menu/cnn.png" alt="" />
            <nav className="menu-list">
                <a href="https://edition.cnn.com/world"><abbr title="Visit the world section">World</abbr></a>
                <a href="https://edition.cnn.com/politics"><abbr title="Visit the US Politcs section">US Politcs</abbr></a>
                <a href="https://edition.cnn.com/business"><abbr title="Visit the Business section">Business</abbr></a>
                <a href="https://edition.cnn.com/health"><abbr title="Visit the Health section">Health</abbr></a>
                <div id="more-parents"href="#">more
                    <ul id="more-children">
                        <li><a href="#"><abbr title="visit the entertainment section">entertainment</abbr></a></li>
                        <hr style={{backgroundColor: 'white'}} />
                        
                        <li><a href="#"><abbr title="visit the entertainment section">style</abbr></a></li>
                        <hr style={{backgroundColor: 'white'}} />
                        
                        <li><a href="#"><abbr title="visit the entertainment section">travel</abbr></a></li>
                        <hr style={{backgroundColor: 'white'}} />
                        
                        <li><a href="#"><abbr title="visit the entertainment section">Sports</abbr></a></li>
                        <hr style={{backgroundColor: 'white'}} />
                        
                        <li><a href="#"><abbr title="visit the entertainment section">Vídeos</abbr></a></li>
                        <hr style={{backgroundColor: 'white'}} />
                        
                    </ul>
                </div>
                
            </nav>
        </div>
        <div className="audio-pesquisa-conect">
            <a href="https://edition.cnn.com/audio">Audio</a>
            <a href="#footer">
                <img src="imgs/menu/lupa.png" alt="" />
            </a>
            <button className="button-conectse"><a href="login.html" >Log in</a></button>
        </div>
    </header>
  );

}

