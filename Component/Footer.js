import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <>
             <div style={{display:'flex', alignItems:'center',justifyContent:'space-between',padding:'0 6rem'}}>
  <div>
                
                <h4>Socials</h4><div><Link href='/'>Twitter</Link> </div>
                <div><Link href='/'>LinkedIn</Link> </div>
                <div><Link href='/'>Youtube</Link> </div>
                <div><Link href='/'>WhatsApp</Link> </div>
            </div>
            <div>
                <h4>Company</h4>
                <div><Link href='/'>About</Link> </div>
                <div><Link href='/'>Team</Link> </div>
                <div><Link href='/'>FAQs</Link> </div>
                <div><Link href='/'>Blog</Link> </div>
            </div>
            <div>
                <h4>Support</h4>
                <div><Link href='/'>Contact us</Link> </div>
                <div><Link href='/'>Help Center</Link> </div>
            </div>
            <div>
                <h4>Products</h4>
                <div><Link href='/'>Send Money</Link> </div>
                <div><Link href='/'>Sell Crypto</Link> </div>
            </div></div>
        </>
    )
}

export default Footer
