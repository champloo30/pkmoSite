import '../menu/menu.scss'

export default function Menu({ menuOpen, setMenuOpen }) {
    return (
        <div className={"menu " + (menuOpen && "active")}>
            <div className="menu-items">
                <ul className="menu-links">
                    <div className="link-name">
                        <div className="title">
                            <hr />
                            <h1>About</h1>
                            <hr />
                        </div>
                        <ul className="list2">
                            <li onClick={()=>setMenuOpen(false)}>
                                <a className="link" href="/about">About PKMO</a>
                            </li>
                            <li onClick={()=>setMenuOpen(false)}>
                                <a className="link" href="/leadership">Our Leadership</a>
                            </li>
                        </ul>
                    </div>
                    <div className="link-name">
                        <div className="title">
                            <hr />
                            <h1>Messages</h1>
                            <hr />
                        </div>
                        <ul className="list2">
                            <li onClick={()=>setMenuOpen(false)}>
                                <a className="link" href="/messages">Our Sunday Services</a>
                            </li>
                            <li onClick={()=>setMenuOpen(false)}>
                                <a className="link" href="https://www.facebook.com/PKMOhio" target="_blank" rel="noopener noreferrer" aria-label="Church Online">
                                    Church Online
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="link-name">
                        <div className="title">
                            <hr />
                            <h1>Peace Post</h1>
                            <hr />
                        </div>
                        <ul className="list2">
                            <li onClick={()=>setMenuOpen(false)}>
                                <a className="link" href="/peacepost">Church Announcements</a>
                            </li>
                        </ul>
                    </div>
                    <div className="link-name">
                        <div className="title">
                            <hr />
                            <h1>Connect</h1>
                            <hr />
                        </div>
                        <ul className="list2">
                            <li onClick={()=>setMenuOpen(false)}>
                                <a className="link" href="/connect">Connect</a>
                            </li>
                            <li className="link-give">Give</li>
                        </ul>
                    </div>
                </ul>
            </div>
        </div>
    )
}
