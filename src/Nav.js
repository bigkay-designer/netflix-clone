import React, {useState, useEffect} from 'react'
import './css/nav.css'
function Nav() {
    const [navBg, handleNavBg] = useState(false)

    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            if(window.scrollY > 100){
                handleNavBg(true)
            }else{
                handleNavBg(false)
            }

        })
        return ()=>{
            window.removeEventListener('scroll')
        }
    }, [])

    return (
        <div className={`nav ${navBg && "nav__black"}`}>
            <div className="nav__content">
                <img 
                className="nav__logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png" 
                alt="NETFLIX"/>
                <img 
                className="nav__icon"
                src="https://pro2-bar-s3-cdn-cf1.myportfolio.com/dddb0c1b4ab622854dd81280840458d3/98032aebff601c1d993e12a0_rw_600.png?h=8030f4d5734548795c22da59ca72e3e1" 
                alt="Avatar"/>

            </div>
        </div>
    )
}

export default Nav
