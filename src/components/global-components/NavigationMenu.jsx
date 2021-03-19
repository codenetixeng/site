import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import { sectionData } from './../../data/section.json';

const NavigationMenu = () => {
    const [headerSearch, setHeaderSearch] = useState('');
    const [menuToggle, setMenuToggle] = useState(false);
    const [mobileMenuToggle, setMobileMenuToggle] = useState(false);
    let data = sectionData.header;

    return (
        <>
           {/* <!-- start header-top area --> */}
        <section className="header-top">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <ul className="d-flex left-list">
                            <li>
                                <i className="fas fa-phone-alt"></i>
                                Call us at {data.headerNavigationTop.meta.phone.number}
                            </li>
                            <li>
                                <i className="fas fa-envelope"></i>
                                {data.headerNavigationTop.meta.mail.email}
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-6">
                        <ul className="d-flex right-list justify-content-end">
                            <li>
                                <i className="fas fa-comments"></i>
                                <Link to='/contact'>{data.headerNavigationTop.meta.consultation.title}</Link>
                            </li>
                            <li>
                                <form action="#">
                                    <input type="search" placeholder="search" className="input-search" onChange={(e)=>{setHeaderSearch(e.target.value)}} value={headerSearch} />
                                    <button type="submit"><i className="fas fa-search"></i></button>
                                </form>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- end header-top area --> */}

        {/* <!-- Start menubar area --> */}
        <section className={`menubar`}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <nav className="navbar p-0">
                            <Link className="navbar-brand p-0" to="/">
                                <img src={data.logo} alt="Logo" />
                            </Link>
                            <div className={`header-menu ml-auto position-static ${menuToggle === true ? 'menuToggle' : ''}`}>
                            <div id="menu-button"  onClick={()=>{setMobileMenuToggle(!mobileMenuToggle)}}><i className="fas fa-bars"></i></div>
                                <ul className={`menu ${mobileMenuToggle === true ? 'open' : ''}`}>
                                    <li className="active">
                                        <Link to="/">WORK WITH US</Link>
                                    </li>
                                    <li><Link to="/about">ABOUT</Link></li>
                                    <li>
                                        <Link to="#!">SERVICE</Link>
                                        <ul>
                                            <li>
                                                <Link to="/service">TERRAFORM</Link>
                                            </li>
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
                            <div className="right-part">
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

export default NavigationMenu;
