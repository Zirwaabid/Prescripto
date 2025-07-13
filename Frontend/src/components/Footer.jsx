import React from 'react'
import { assets } from '../assets/assets_frontend/assets'
function Footer() {
    return (
        <div>
            <div>

                {/* -----left section----  */}
                <div>
                    <img src={assets.logo} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe nulla inventore, expedita, repellendus vitae asperiores, in corporis nobis perspiciatis doloribus iure dignissimos consectetur et illo natus recusandae autem dolorum accusamus.</p>
                </div>

                {/* -----center section----  */}
                <div>
                    <p>Company</p>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Contact us</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>

                {/* -----right section----  */}
                <div>
                    <p>Get In Touch</p>
                    <ul>
                        <li>+92-300-000-890</li>
                        <li>zirwaabid112@gmail.com</li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Footer