import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getDoc, doc } from 'firebase/firestore'
import { db, auth } from '../lib/firebase'
import { Card, Row } from 'react-bootstrap'

function Details() {
  const { id } = useParams()

  //Fetch a single doc
  const getHotel = doc(db, `hotels/${id}`)

  const [hotel, setHotel] = useState({})

  useEffect(() => {
    const fetchHotelData = async () => {
      const docSnap = await getDoc(getHotel)
      if (docSnap.exists()) {
        const newHotelObj = {
          id: docSnap.id,
          ...docSnap.data(),
        }
        setHotel(newHotelObj)
      } else {
        // doc.data() will be undefined in this case
        console.log('No such document')
      }
    }
    fetchHotelData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  console.log(hotel, 'hotel')
  return (
    <div>
      <Row className="d-flex justify-content-center">
        <Card
          className="p-5 m-4 bg-light rounded-3 w-50 border-info col-md-6"
          key={hotel.id}
        >
          <div className="bd-placeholder-img card-img-top" key={hotel.location}>
            <img
              key={hotel.location}
              width="100%"
              height="225"
              className="location-image w-100"
              src={hotel.location}
              alt="Hotel"
            />
          </div>
          <Card.Header className="card-body highlights " key={hotel.title}>
            <Row>
            <div className=" card-text highlights-text col-sm-6 col-md-7 text-left" key={hotel.title}>
              <h2>{hotel.title}</h2>
            </div>
            <div className="highlights-price col-sm-6 col-md-5 text-right " key={hotel.totalPrice}>
              <h3 className="per-night">£ {hotel.totalPrice}/per night</h3>
              <p></p>
            </div>
            </Row>
          </Card.Header>
          <Card.Body className="text-left">
            <div
              className=" card-text discription-text"
              key={hotel.discription}
            >
              <p>{hotel.discription}</p>
              <p>Features: {hotel.feature}</p>
            </div>
          </Card.Body>
          <Card.Footer>
            <Row>
              <div className=" card-text rewiews-text col-sm-6 col-md-6 text-left" key={hotel.rewiews}>
                <p>Rewiews:{hotel.rewiews}</p>
              </div>
              <div
              className=" card-text stars-text col-sm-6 col-md-6 text-right"
              key={hotel.stars}
            >
              <p>Stars:{hotel.stars}</p>
            </div>
            </Row>
          </Card.Footer>
        </Card>
      </Row>
    </div>
  )
}

export default Details
