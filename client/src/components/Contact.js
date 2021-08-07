import React, { useEffect } from 'react';
import '../css/contact.css';
import { FaPhone } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function Contact(params) {


    useEffect(() => {
        window.scrollTo({ top: 0, left: 0 })
    }, [])

    return (
        <>
            <div className="contact">

                <div className="map">
                    <iframe
                        width="600"
                        height="300"
                        loading="lazy"
                        allowfullscreen
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3391.475638302418!2d35.176838885362244!3d31.784784741218974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502d7abbb7fee15%3A0x7807f1abc7d4dbb6!2z15TXqNeRINep157XoteV158g15DXkteh15kgMTIsINeZ16jXldep15zXmded!5e0!3m2!1siw!2sil!4v1618701074930!5m2!1siw!2sil">
                    </iframe>
                </div>
                <div className="kit-contact">
                    <div> צור קשר: </div>
                    <div><FaPhone /> <a className="kit-link" href="tel:+972583240653" target="_blank" rel="noreferrer noopener" data-ctm-watch-id="1" data-ctm-tracked="1" data-observe="1" data-observer-id="0">058-3240653</a></div>
                    <div><SiGmail /> <a className="kit-link" href="mailto:escapehome3@gmail.com" target="_blank" rel="noreferrer noopener">escapehome3@gmail.com</a></div>
                    <div><FaMapMarkerAlt /> אגסי 12, ירושלים</div>
                </div>
            </div>

        </>
    )
}