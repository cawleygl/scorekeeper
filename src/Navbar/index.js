import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function BasicExample({ posts }) {

  // const recentPosts = posts.slice(0, 5);

  // const renderDropdown = recentPosts.map((post) => {
  //   return <NavDropdown.Item key={parseInt(post.id)} href={"/post/" + post.id}>{post.title}</NavDropdown.Item>;
  // });

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand>ScoreKeeper</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Game View</Nav.Link>
              <Nav.Link href="/entry">At-Bat</Nav.Link>
              {/* <NavDropdown title="Recent Posts" id="basic-nav-dropdown">
                {renderDropdown} 
              </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container style={{marginBottom: 75}} />
    </>
  );
}

export default BasicExample;