import React from 'react'
import './header.scss';
import {Link, withRouter} from 'react-router-dom'


const Header = ({history}) => {
const isActive=(history,path)=>{
    if(history.location.pathname === path){
        return{
            color:'#712c91'
        }
       
    } else{
        return{color:'#fff'}
        
    }
}
    return (
        <div className='header-container'>
            <div className="logo-container">
                <h2>Logo</h2>
            </div>
            <div className="options-container">
                <Link to='/' className="option"style={isActive(history,'/')} >Home</Link>
                <Link to='/about' className="option" style={isActive(history,'/about')} >About</Link>
                <Link to='/skills' className="option" style={isActive(history,'/skills')} >Skills</Link>
                <Link to='/contacts' className="option" style={isActive(history,'/contacts')} >Contacts</Link>
            </div>
        </div>
    )
}

export default withRouter( Header)
