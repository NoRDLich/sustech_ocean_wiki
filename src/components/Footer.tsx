import {useEffect, useState, useRef} from 'react';
import {stringToSlug} from "../utils";
import './Footer.css';

const setupScrollAnimation = (track1: HTMLElement, track2: HTMLElement) => {
    const trackWidth = track1.scrollWidth;
    const offsetWidth = track1.offsetWidth;
    console.log("Track1 scroll Width:", track1.scrollWidth);
    console.log("Track1 offset Width:", track1.offsetWidth);

    // Create a new <style> element
    const styleElement = document.createElement("style");
    styleElement.type = "text/css";
    document.head.appendChild(styleElement);

    // Insert keyframes into the new <style> element
    const keyframes1 = `
    @keyframes scroll1 {
      0% { transform: translateX(calc(${offsetWidth}px -  50%)); }
      100% { transform: translateX(calc(-${trackWidth}px  + 50%)); }
    }
  `;
    const keyframes2 = `
    @keyframes scroll2 {
      0% { transform: translateX(calc(${offsetWidth}px -  50%)); }
      100% { transform: translateX(calc(-${offsetWidth}px + 50%)); }
    }
  `;
    console.log("Keyframes1:", keyframes1);
    console.log("Keyframes2:", keyframes2);

    styleElement.sheet?.insertRule(keyframes1, styleElement.sheet.cssRules.length);
    styleElement.sheet?.insertRule(keyframes2, styleElement.sheet.cssRules.length);

    // Apply animations
    track1.style.animation = "none";
    track2.style.animation = "none";
    setTimeout(() => {
        track1.style.animation = "scroll1 12s linear infinite";
        track2.style.animation = "scroll2 12s linear infinite";
    }, 10);
};

export function Footer() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const track1Ref = useRef<HTMLDivElement>(null);
    const track2Ref = useRef<HTMLDivElement>(null);

    const handleQRCodeClick = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    const copyEmail = () => {
        navigator.clipboard.writeText("12311151@mail.sustech.edu.cn");
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = '邮箱地址已复制！';
        document.body.appendChild(notification);
        setTimeout(() => notification.style.opacity = '1', 10);
        setTimeout(() => {
            notification.style.opacity = '0';
            setTimeout(() => document.body.removeChild(notification), 500);
        }, 2000);
    };

    useEffect(() => {
        const images = document.querySelectorAll(".carousel img");
        const handleImageLoad = () => {
            try {
                if (track1Ref.current && track2Ref.current) {
                    setupScrollAnimation(track1Ref.current, track2Ref.current);
                }
            } catch (error) {
                console.error("Animation setup failed:", error);
            }
        };

        images.forEach(img => {

                img.addEventListener("load", handleImageLoad);

        });

        return () => {
            images.forEach(img => img.removeEventListener("load", handleImageLoad));
        };
    }, []);

    const teamYear = import.meta.env.VITE_TEAM_YEAR;
    const teamName = import.meta.env.VITE_TEAM_NAME;
    const teamSlug = stringToSlug(teamName);

    return (<footer className="pt-5 pb-5 footer py-5 mt-5 bg-dark text-white">
        <div className="container">
            <div className="row mb-4">
                <div className="col-lg-6 col-xs-12">
                    <h4 className="mb-3">iGEM SUSTech-Ocean</h4>
                    <p style={{ color: 'white' }}>
                    We are the iGEM SUSTech-Ocean team, dedicated to preventing and controlling red tides through
                        synthetic biology and machine learning.
                    </p>
                </div>

                <div className="col-lg-6">
                    <h4>CONNECT WITH US!</h4>
                    <div className="social-icons">
                        <a href="https://b23.tv/37yUXBD"><img src="static/footer/BiliBili.png" alt="BiliBili"/></a>
                        <a href="https://xhslink.com/m/zpiontwzK/"><img src="static/footer/xhs.png" alt="xiaohongshu"/></a>
                        <a href="https://www.instagram.com/sustech_ocean?igsh=MXBienZkOWNzMjFodg%3D%3D&utm_source=qr/"><img
                            src="static/footer/insta-icon.png" alt="Instagram"/></a>
                        <img src="static/footer/QR_code.jpg" alt="QR Code" className="qr-code"
                             onClick={handleQRCodeClick}/>
                    </div>
                    <div className="email-contact">
                        <a href="mailto:12311151@mail.sustech.edu.cn">Contact Leader: 12311151@mail.sustech.edu.cn</a>
                        <span onClick={copyEmail}> (Click to copy)</span>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="supporters">WE THANK OUR SUPPORTERS:</div>
                <div className="carousel" id="carousel">
                    <div className="carousel-track1" ref={track1Ref}>
                        <img src="static/footer/sustech.webp" alt="Sustech logo"/>
                        <img src="static/footer/sustech_ocean.png" alt="Sustech Ocean logo"/>

                        <img src="static/footer/sustech_committee.jpg" alt="Sustech Youth League Committee logo"/>
                        <img src="static/footer/sustech_entrepreneurship_club.jpg"
                             alt="Sustech Entrepreneurship Club logo"/>
                        <img src="static/footer/sustellar.png" alt="Sustellar logo"/>
                        <img src="static/footer/Xi'an Jiaotong University.jpg" alt="Xi'an Jiaotong University logo"/>
                        <img src="static/footer/Sichuan University.png" alt="Sichuan University logo"/>
                        <img src="static/footer/Zhejiang University.png" alt="Zhejiang University logo"/>
                        <img src="static/footer/Shanghai Jiao Tong University.jpg"
                             alt="Shanghai Jiao Tong University logo"/>
                        <img src="static/footer/Nanjing University.jpg" alt="Nanjing University logo"/>
                        <img src="static/footer/Zhejiang University Edinburgh College.jpg"
                             alt="Zhejiang University Edinburgh College logo"/>
                    </div>
                    <div className="carousel-track2" ref={track2Ref}>
                        <img src="static/footer/sustech.webp" alt="Sustech logo"/>
                        <img src="static/footer/sustech_ocean.png" alt="Sustech Ocean logo"/>
                        <img src="static/footer/sustech_committee.jpg" alt="Sustech Youth League Committee logo"/>
                        <img src="static/footer/sustech_entrepreneurship_club.jpg"
                             alt="Sustech Entrepreneurship Club logo"/>
                        <img src="static/footer/sustellar.png" alt="Sustellar logo"/>
                        <img src="static/footer/Xi'an Jiaotong University.jpg" alt="Xi'an Jiaotong University logo"/>
                        <img src="static/footer/Sichuan University.png" alt="Sichuan University logo"/>
                        <img src="static/footer/Zhejiang University.png" alt="Zhejiang University logo"/>
                        <img src="static/footer/Shanghai Jiao Tong University.jpg"
                             alt="Shanghai Jiao Tong University logo"/>
                        <img src="static/footer/Nanjing University.jpg" alt="Nanjing University logo"/>
                        <img src="static/footer/Zhejiang University Edinburgh College.jpg"
                             alt="Zhejiang University Edinburgh College logo"/>
                    </div>
                </div>
            </div>

            <hr/>
            {/* The following MUST be on every page: license information and link to the repository on gitlab.igem.org */}
            <div className="row mt-4">
                <div className="col">
                    <p className="mb-0" style={{ color: 'white' }}>
                        <small>
                            © 2025 - Content on this site is licensed under a{" "}
                            <a
                                className="subfoot"
                                href="https://creativecommons.org/licenses/by/4.0/"
                                rel="license"
                            >
                                Creative Commons Attribution 4.0 International license
                            </a>
                            .
                        </small>
                    </p>
                    <p style={{ color: 'white' }}>
                        <small>
                            The repository used to create this website is available at{" "}
                            <a href={`https://gitlab.igem.org/${teamYear}/${teamSlug}`}>
                                gitlab.igem.org/{teamYear}/{teamSlug}
                            </a>
                            .
                        </small>
                    </p>
                </div>
            </div>
        </div>
        {isModalOpen && (<div className="qr-code-modal" onClick={handleCloseModal}>
            <div className="qr-code-modal-content">
                <img src="static/footer/QR_code.jpg" alt="QR Code"/>
            </div>
        </div>)}
    </footer>);
}
