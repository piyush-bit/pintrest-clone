import React, { useRef, useState } from 'react'
import CardLayout from './CardLayout'
import './home.css'
import MainContent from './MainContent';

function Home() {

  const content = [{
    img: "https://i.pinimg.com/236x/11/46/37/1146378ceea7df652b3bd24b4ff2b7b0.jpg",
    group: "ins-2",
    linkText: "link.com",
    link: "https://www.link.com",
    tittle: " Black - App Website Template ",
    Profile_img: "https://i.pinimg.com/75x75_RS/c9/65/63/c96563f986dd715f950ac2100f7f412e.jpg",
    username: "Wedoflow",
    userUrl : ""
  },
  {
    img: "https://i.pinimg.com/236x/b7/8c/b6/b78cb6344a771329c5d38f0483708e5c.jpg",
    group: "ins-2",
    linkText: "link.com",
    link: "https://www.link.com",
    tittle: " Black - App Website Template ",
    Profile_img: "https://i.pinimg.com/75x75_RS/c9/65/63/c96563f986dd715f950ac2100f7f412e.jpg",
    username: "Wedoflow",
  },
  {
    img: "https://i.pinimg.com/236x/b7/12/3b/b7123be05aac0f8dc9738e18fd4ec9df.jpg",
    group: "ins-2",
    linkText: "link.com",
    link: "https://www.link.com",
    tittle: " Black - App Website Template ",
    Profile_img: "https://i.pinimg.com/75x75_RS/c9/65/63/c96563f986dd715f950ac2100f7f412e.jpg",
    username: "Wedoflow",
  },
  {
    img: "https://i.pinimg.com/236x/86/2f/11/862f111b85b3eba472d8690074faf638.jpg",
    group: "ins-2",
    linkText: "link.com",
    link: "https://www.link.com",
    tittle: " Black - App Website Template ",
    Profile_img: "https://i.pinimg.com/75x75_RS/c9/65/63/c96563f986dd715f950ac2100f7f412e.jpg",
    username: "Wedoflow",
  },
  {
    img: "https://i.pinimg.com/236x/23/e9/d5/23e9d5fee488083f2d27cdf64ffad8dd.jpg",
    group: "ins-2",
    linkText: "link.com",
    link: "https://www.link.com",
    tittle: " Black - App Website Template ",
    Profile_img: "https://i.pinimg.com/75x75_RS/c9/65/63/c96563f986dd715f950ac2100f7f412e.jpg",
    username: "Wedoflow",
  },
  {
    img: "https://i.pinimg.com/236x/5b/a5/49/5ba549a57d04dbfe5669c6172be92681.jpg",
    group: "ins-2",
    linkText: "link.com",
    link: "https://www.link.com",
    tittle: " Black - App Website Template ",
    Profile_img: "https://i.pinimg.com/75x75_RS/c9/65/63/c96563f986dd715f950ac2100f7f412e.jpg",
    username: "Wedoflow",
  },
  {
    img: "https://i.pinimg.com/236x/f6/ea/99/f6ea99a742a7ad272ff1f9f779a65dcd.jpg",
    group: "ins-2",
    linkText: "link.com",
    link: "https://www.link.com",
    tittle: " Black - App Website Template ",
    Profile_img: "https://i.pinimg.com/75x75_RS/c9/65/63/c96563f986dd715f950ac2100f7f412e.jpg",
    username: "Wedoflow",
  },
  {
    img: "https://i.pinimg.com/236x/11/46/37/1146378ceea7df652b3bd24b4ff2b7b0.jpg",
    group: "ins-2",
    linkText: "link.com",
    link: "https://www.link.com",
    tittle: " Black - App Website Template ",
    Profile_img: "https://i.pinimg.com/75x75_RS/c9/65/63/c96563f986dd715f950ac2100f7f412e.jpg",
    username: "Wedoflow",
  },
  {
    img: "https://i.pinimg.com/236x/11/46/37/1146378ceea7df652b3bd24b4ff2b7b0.jpg",
    group: "ins-2",
    linkText: "link.com",
    link: "https://www.link.com",
    tittle: " Black - App Website Template ",
    Profile_img: "https://i.pinimg.com/75x75_RS/c9/65/63/c96563f986dd715f950ac2100f7f412e.jpg",
    username: "Wedoflow",
  },
  {
    img: "https://i.pinimg.com/236x/11/46/37/1146378ceea7df652b3bd24b4ff2b7b0.jpg",
    group: "ins-2",
    linkText: "link.com",
    link: "https://www.link.com",
    tittle: " Black - App Website Template ",
    Profile_img: "https://i.pinimg.com/75x75_RS/c9/65/63/c96563f986dd715f950ac2100f7f412e.jpg",
    username: "Wedoflow",
  },
  {
    img: "https://i.pinimg.com/236x/11/46/37/1146378ceea7df652b3bd24b4ff2b7b0.jpg",
    group: "ins-2",
    linkText: "link.com",
    link: "https://www.link.com",
    tittle: " Black - App Website Template ",
    Profile_img: "https://i.pinimg.com/75x75_RS/c9/65/63/c96563f986dd715f950ac2100f7f412e.jpg",
    username: "Wedoflow",
  },
  {
    img: "https://i.pinimg.com/236x/11/46/37/1146378ceea7df652b3bd24b4ff2b7b0.jpg",
    group: "ins-2",
    linkText: "link.com",
    link: "https://www.link.com",
    tittle: " Black - App Website Template ",
    Profile_img: "https://i.pinimg.com/75x75_RS/c9/65/63/c96563f986dd715f950ac2100f7f412e.jpg",
    username: "Wedoflow",
  },
]

  const ref = useRef();
  const [scroll, setScroll] = useState(0);
  const lefthandler = (e) => { ref.current.style.right = scroll - 500 + "px"; setScroll(prev => { return prev - 500 }) };
  const righthandler = (e) => { ref.current.style.right = scroll + 500 + "px"; setScroll(prev => { return prev + 500 }) };
  return (
    <>
      <div className='home'>
        <div className="group-card" style={{ padding: '10px 20px' }}>
          <div className="sc-btn left" onClick={lefthandler}>
            <img src="https://cdn-icons-png.flaticon.com/128/271/271220.png" alt="" />
          </div>
          {/* <div className="mask"></div> */}
          <div ref={ref} className="cards">

            <CardLayout />
            <CardLayout />
            <CardLayout />
            <CardLayout />
            <CardLayout />
            <CardLayout />
          </div>
          <div className="sc-btn right" onClick={righthandler}>
            <img src="https://cdn-icons-png.flaticon.com/128/271/271228.png" alt="" />
          </div>
        </div>
        <div className="main">
          {content.map((cont)=>{return <MainContent content={cont}/>})}
           
        </div>



      </div></>
  )
}

export default Home