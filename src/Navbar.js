import './Navbar.css'


function Navbar(props) {
    return (
        <div className="navbar">
             <img src='/images/puma-logo.png' className='logo'/>
            <button className='get-user' onClick={props.getUserData}>Get Users</button>
        </div>
    );
}

export default Navbar;