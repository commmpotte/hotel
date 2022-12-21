import { React } from 'react'
import { Link} from 'react-router-dom'
import { Button} from 'react-bootstrap'

const NotFound = () => {
  return (
    <div class="container">
    <div class="row">
        <div class="col-md-12 text-center mt-4">
            <div class="error-template">
                <h1>
                    Oops!</h1>
                <h2>
                    404 Not Found</h2>
                <div class="error-details mt-3">
                    Sorry, an error has occured! Requested page not found!
                </div>
                <div class="error-actions mt-3">
                <Button className="btn btn-primary me-3">
                <Link
                  to="/"
                  className="nav-link px-2 text-white"
                >
                  Not Yankee, but bring me to HOME plz!
                </Link>
              </Button>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default NotFound
