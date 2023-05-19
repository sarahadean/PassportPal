import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form';

function NavBar ({handleSearch, search}) {
    return (
        <>
        <Navbar expand='lg' sticky="top">
            <Container>
                <Nav className="justify-content-end" variant='tabs'>
            <Nav.Item >
                <Nav.Link href="/">Home</Nav.Link>
            </Nav.Item>

            <Nav.Item>
                <Nav.Link href="/packing-list">Packing List</Nav.Link>
            </Nav.Item>

            <Nav.Item>
                <Nav.Link href="/visited">Your Passport</Nav.Link>
            </Nav.Item>
        </Nav>
        <Form className='vertical-center'>
            <label>Search: </label>
            <Form.Control
            id="search"
            value={search}
            onChange={(e) => handleSearch(e.target.value)} 
            type="search"
            className="me-2"
            aria-label='Search'/>
        </Form>
        </Container>
        </Navbar>
        </>
        // <div className='nav-bar'>
        //     <nav id="nav-list">
        //         <ul>
        //             <NavLink to="/">{({ isActive, isPending }) => (
        //                 <span className={isActive ? "active nav-link" : "nav-link"}>HOME</span> )}
        //             </NavLink>
        //             <NavLink to="/packing-list">{({ isActive, isPending }) => (
        //                 <span className={isActive ? "active nav-link" : "nav-link"}>PACKING LIST</span> )}
        //             </NavLink>
        //             <NavLink to="/visited">{({ isActive, isPending }) => (
        //                 <span className={isActive ? "active nav-link" : "nav-link"}>VISITED</span> )}
        //             </NavLink>
        //         </ul>
        //     </nav>
        // </div>
    )
}
export default NavBar