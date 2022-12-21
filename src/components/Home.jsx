import React, { useEffect, useState } from 'react'
import { getDocs, collection} from 'firebase/firestore'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import { db } from '../lib/firebase'

const Home = () => {
  const [hotels, setHotels] = useState([])
  const hotelCollectionRef = collection(db, 'hotels')

  useEffect(() => {
    const getHotels = async () => {
      const data = await getDocs(hotelCollectionRef)
      setHotels(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }
    getHotels()
  })
return (
    <>
      <h3 className="text-center font-monospace fw-bolder m-3">All hotels</h3>
      <div className="row">
        {hotels && hotels.length ? (
          <div className="container d-flex justify-content-around flex-wrap row-cols-md-3 row-cols-1 row-cols-sm-2">
            {hotels?.map((hotel) => (
              <div className="">
              <Card
                className="m-5"
                key={hotel.id}
              >
                <div
                  className="bd-placeholder-img card-img-top"
                  key={hotel.location}
                >
                  <img
                    key={hotel.location}
                    width="100%"
                    height="225"
                    className="location-image"
                    src={hotel.location}
                    alt="Hotel"
                  />
                </div>
                <Card.Body className="card-body highlights" key={hotel.title}>
                  <div className=" card-text highlights-text" key={hotel.title}>
                    <h2>{hotel.title}</h2>
                  </div>
                  <div className="highlights-price" key={hotel.totalPrice}>
                    <h3 className="per-night">
                      £ {hotel.totalPrice}/per night
                    </h3>
                    <p></p>
                  </div>
                </Card.Body>
                <Card.Footer>
                  <Link to={`/details/${hotel.id}`}>
                    <button className="btn btn-info me-3">More</button>
                  </Link>
                </Card.Footer>
              </Card>
              </div>
            ))}
          </div>
        ) : (
          <h2 className="nothing fw-light mx-auto mt-3 text-center"> Тут пока ничего нет!!!</h2>
        )}
      </div>
    </>
  )
}

export default Home
