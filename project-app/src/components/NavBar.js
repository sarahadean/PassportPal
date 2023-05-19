import { NavLink } from 'react-router-dom'

function NavBar () {
    return (
        // <Nav justify variant="tabs" defaultActiveKey="/" className='nav-bar'>
        //     <Nav.Item >
        //         <Nav.Link href="/" >Home</Nav.Link>
        //     </Nav.Item>
        //     <Nav.Item>
        //         <Nav.Link eventKey="/packing">Packing List</Nav.Link>
        //     </Nav.Item>
        //     <Nav.Item>
        //         <Nav.Link eventKey="/bucket-List">Bucket List</Nav.Link>
        //     </Nav.Item>
        //     <Nav.Item>
        //         <Nav.Link eventKey="/visited">Your Passport</Nav.Link>
        //     </Nav.Item>
        // </Nav>
        <div className='nav-bar'>
            <nav id="nav-list">
                <ul>
                    <NavLink to="/">{({ isActive, isPending }) => (
                        <span className={isActive ? "active nav-link" : "nav-link"}>HOME</span> )}
                    </NavLink>
                    <NavLink to="/packing-list">{({ isActive, isPending }) => (
                        <span className={isActive ? "active nav-link" : "nav-link"}>PACKING LIST</span> )}
                    </NavLink>
                    <NavLink to="/visited">{({ isActive, isPending }) => (
                        <span className={isActive ? "active nav-link" : "nav-link"}>VISITED</span> )}
                    </NavLink>
                </ul>
            </nav>
        </div>
    )
}
export default NavBar