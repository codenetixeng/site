import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import { sectionData } from './../../data/section.json';

const NavigationMenuV2 = () => {
    const [menuToggle, setMenuToggle] = useState(false);
    const [mobileMenuToggle, setMobileMenuToggle] = useState(false);

    let data = sectionData.header;
    return (
        <>
        {/* <!-- Start menubar area --> */}
        <section className="menubar">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <nav className="navbar p-0">
                            <Link className="navbar-brand p-0" to="/">
                            <img src={data.logo2} alt="Logo" />
                            </Link>
                            <div className={`header-menu ml-auto position-static ${menuToggle === true ? 'menuToggle' : ''}`}>
                            <div id="menu-button"  onClick={()=>{setMobileMenuToggle(!mobileMenuToggle)}}><i className="fas fa-bars"></i></div>
                                <ul className={`menu ${mobileMenuToggle === true ? 'open' : ''}`}>
                                    <li className="active">
                                        <Link to="/">WORK WITH US</Link>
                                    </li>
                                    <li><Link to="/about">ABOUT</Link></li>
                                    <li>
                                        <Link to="#!">SERVICES</Link>
                                        <ul>
                                            <li><Link to="/service">AWS AUTOMATION</Link></li>
                                            <li>
                                                <Link to="/service-details">AWS MIGRATION</Link>
                                            </li>
                                            <li>
                                                <Link to="/service-details">AWS MANAGED SERVICES</Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li><Link to="/project">BLOG</Link></li>
                                    <li><Link to="/contact">CONTACT</Link></li>
                                </ul>
                            </div>
                            <div className="right-part d-none d-lg-block ">
                                <button onClick={()=>{setMenuToggle(!menuToggle)}}><i className={`fas fa-${menuToggle === true ? 'times' : 'bars'}`}></i></button>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- End menubar area --> */}
        </>
    );
}

export default NavigationMenuV2;
