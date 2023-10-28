import React, { useEffect, useState } from 'react'
import classNames from 'classnames';
import './header.css'

function Header() {
    const [selected, setselected] = useState('home');
    const [visible, setvisible]=useState(false);
    const [searchFocus,setSearchFocus]=useState(false)
    const [input,setInput]=useState('');
    const clickhandler1 = (e) => {
        console.log('click1' + selected);
        setselected('home');
    };
    const clickhandler2 = (e) => {
        console.log('click2' + selected);
        setselected('explore')
    };
     const createhandler=()=>{
        setvisible((prevState)=>{return !prevState})
     };
     const searhandler=()=>{
        setvisible((prevState)=>{return !prevState})
     };


    return (<>
        <header>
            <img onClick={()=>{setselected('home')}}src="https://cdn-icons-png.flaticon.com/512/220/220214.png" alt="" className="logo" />
            <div className={classNames('navb', { selected: selected === 'home' })} onClick={clickhandler1}>Home</div>
            <div className={classNames('navb', { selected: selected === 'explore' })} onClick={clickhandler2}>Explore</div>
            <div className="create" onBlur={()=>{setvisible(false);console.log('blur')}}onClick={createhandler}>
                <p>Create</p><img src="https://cdn-icons-png.flaticon.com/128/32/32195.png" alt="" />
                <div className={classNames("create-option ",{invisible : !visible})}>
                    <div className="">Create Idea Pin </div>
                    <div className="">Create Pin</div>
                </div>
            </div>
            <div className={classNames("search",{focus : searchFocus})}>
                <img className={classNames({invisible:searchFocus})} src="https://cdn-icons-png.flaticon.com/128/151/151773.png" alt="" />
                <input value={input} onChange={(e)=>{setInput(e.target.value)}}onFocus={()=>{setSearchFocus(true)}} type="text" onBlur={()=>{setSearchFocus(false);setInput('');}} placeholder="Search" />
                <img onClick={()=>{setInput('')}}className={classNames({invisible:!searchFocus})}src="https://cdn-icons-png.flaticon.com/128/1008/1008968.png" alt="" />
            </div>
            <div className="notifications">
                <img src="https://cdn-icons-png.flaticon.com/128/1827/1827347.png" alt="" />
            </div>
            <div className="messages">
                <img src="https://cdn-icons-png.flaticon.com/128/134/134718.png" alt="" />
            </div>
            <div className="profile-h">
                <p>p</p>
            </div>
            <div className="dropdown"><img src="https://cdn-icons-png.flaticon.com/128/32/32195.png" alt="" /></div>


        </header>
        
        </>

    )
}

export default Header