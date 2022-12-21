import { React } from 'react'
import { Link} from 'react-router-dom'
import { Button, Nav, Navbar, Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import logo from '../media/logo.png'
import { useAuth } from '../components/UserAuthContext'

function Header({ children }) {
  const { currentuser } = useAuth()
  const { logout } = useAuth(false)
  const userlogout = async () => {
    try {
      await logout()
      window.location.pathname = '/login'
        } catch (error) {
      console.log(error)
    }
  }

  return (
    <header className="p-1 text-bg-dark">
      <Navbar className="navbar p-3 text-bg-dark">
        <Container className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <Navbar.Brand href="/" className="navbar-brand">
            <img
              src={logo}
              height="40"
              width="160"
              className="d-inline-block align-top me-2 ms-3"
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            className="collapse navbar-collapse"
            id="responsive-navbar-nav"
          >
            <Nav className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <Link className="nav-link px-2 text-white" to="/">
                Home
              </Link>
              {!currentuser && (
                <Link to="login" className="nav-link px-2 text-white">
                  Login
                </Link>
              )}
              {!currentuser && (
                <Link to="signup" className="nav-link px-2 text-white">
                  Sign up
                </Link>
              )}

              {currentuser && (
                <Link
                  to="logout"
                  onClick={userlogout}
                  className="nav-link px-2 text-white"
                >
                  Log out
                </Link>
              )}
            </Nav>
            {currentuser && (
              <Button className="btn btn-primary me-3">
                <Link
                  to="create"
                  className="nav-link px-2 text-white"
                >
                  Create
                </Link>
              </Button>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
