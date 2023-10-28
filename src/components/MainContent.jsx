import React, { useEffect, useRef } from 'react'
import "./mainContent.css"

function MainContent({content}) {

    const ref = useRef(0);
    console.log(ref);

    useEffect(() => {

        const span = Math.ceil(ref.current.offsetHeight / 10);
        console.log(ref.current.offsetHeight);
        console.log(span);
        ref.current.style.gridRow = "span " + span;


    })





    return (
        <div className="container" ref={ref}>
            <div className="content">
                <img src={content.img} alt="" />
                <div className="black-cover visibleonhover"></div>
                <div className="save visibleonhover">
                    <div className="selector">
                        <p>{content.group}</p>
                        <img className="icon" src="https://cdn-icons-png.flaticon.com/128/32/32195.png" alt="" />
                    </div>
                    <button className="save-btn">Save</button>
                </div>
                <div className="down visibleonhover">
                    <div className="link">
                        <img className="icon" src="https://cdn-icons-png.flaticon.com/128/9344/9344197.png" alt="" />
                        <a href={content.link} target="_blank">{content.linkText}</a>
                    </div>
                    <div className="share">
                        <img className="icon" src="https://cdn-icons-png.flaticon.com/128/3580/3580382.png" alt="" />
                    </div>
                    <div className="option">
                        <img className="icon" src="https://cdn-icons-png.flaticon.com/128/3018/3018442.png" alt="" />
                    </div>
                </div>

            </div>
            <div className="desc">
                <div className="tittle">{content.tittle}</div>
                <div className="profile">
                    <img src={content.Profile_img} href={content.userUrl} alt="" />
                    <a href={content.userUrl}>{content.username}</a>
                </div>
            </div>
        </div>
    )
}

export default MainContent