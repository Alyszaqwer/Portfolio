import './navbar.css'


 
const Navbar = () => {
    
 
    return (
        <nav className="navbar">
            <a href="#home"   className="deskTopMenuList">Alyssa</a>
 
            <div className="deskTopMenu">
                <a href="#about"   className="deskTopMenuList">About</a>
                <a href="#works"   className="deskTopMenuList">Work</a>
                <a href="#contact" className="deskTopMenuList">Contact</a>
            </div>
 
            <div className="navRight">
                
                <a href="#contact" className="letsTalk">
                    Let's Talk 
                </a>
            </div>
        </nav>
    )
}
 
export default Navbar