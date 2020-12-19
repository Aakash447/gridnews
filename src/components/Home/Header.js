import React from 'react'

function Header() {
    return (
        <>
            <div id="header">
                <div className="container">
                    <div className="row">
                        <div id="logo">
                            <img src="images/nn.jpg" alt="image"/>
                            <p>PressGrid</p>
                        </div>
                        <nav>
                            <ul>
                                <li>Link 1</li>
                                <li>Link 2</li>
                                <li>Link 3</li>
                                <li>Link 4</li>
                                <li>Link 5</li>
                                <li>Link 6</li>
                            </ul>
                        </nav>
                        <div id="rightnav">
                            <img src="" alt=""/>
                            <a href="">SignIn &ensp;|</a>
                            <a href="">&ensp; SignUp</a>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Header
