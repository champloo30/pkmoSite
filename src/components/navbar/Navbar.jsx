import "../../scss/navbar.scss"
import NavLogo from "../../img-icon/PKMO-Icon.png"

export default function Navbar({ menuOpen, setMenuOpen }) {

    const changeNavbarColor = () => {
        if (window.scrollY >= 1) {
            document.querySelector('.navbar').style.backgroundColor = 'var(--white)';
            document.querySelector('.line1').style.backgroundColor = 'var(--main)';
            document.querySelector('.line2').style.backgroundColor = 'var(--main)';
            document.querySelector('.line3').style.backgroundColor = 'var(--main)';
        } else {
            document.querySelector('.navbar').style.backgroundColor = '';
            document.querySelector('.line1').style.backgroundColor = '';
            document.querySelector('.line2').style.backgroundColor = '';
            document.querySelector('.line3').style.backgroundColor = '';
        }
    }
    window.addEventListener('scroll', changeNavbarColor)

    return (
        <div className={"navbar " + (menuOpen && "on")} onScroll={changeNavbarColor}>
            <div className="container">
                <div className="left">
                    <a className="logo-sec" href="/">
                        <img src={NavLogo} alt="Peace Kingdom Ministries of Ohio Globe Logo" className="logo-nav"/>
                        {/* <div className="logo-text">
                            <span className="text">Peace Kingdom</span>
                            <span className="text">Ministries of</span>
                            <span className="text">Ohio</span>
                        </div> */}
                    </a>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
