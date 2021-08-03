import Link from 'next/link'

import React from 'react'

const Navigation = () => {
    return (
        <div className="nav">
            <div className="navbar">
                <Link href="/">
                    <div className="logoContainer cursor-pointer">
                        <p><span className="navMain">SpaceX</span> MiniWiki</p>
                    </div>
                </Link>
                <input type="checkbox" id="navbar-toggle" />
                <label htmlFor="navbar-toggle"><i></i></label>
                <nav className="menu">
                    <ul>
                        <li className="menuItem"><Link href="/">Home</Link></li>
                        <li className="menuItem"><Link href="/rockets">Rockets</Link></li>
                        <li className="menuItem"><Link href="/dragons">Dragons</Link></li>
                        <li className="menuItem"><Link href="/astronauts">Astronauts</Link></li>
                        <li className="menuItem"><Link href="/launches">Launches</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navigation