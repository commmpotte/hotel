import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { db } from '../lib/firebase'
import { addDoc, collection, deleteDoc, doc } from 'firebase/firestore'
import { Card, Row, Container, Button } from 'react-bootstrap'

const Create = () => {
  const [title, setTitle] = useState()
  const [country, setCountry] = useState()
  const [discription, setDiscription] = useState()
  const [totalPrice, setTotalPrice] = useState()
  const [feature, setFeature] = useState()
  const [rewiews, setRewiews] = useState()
  const [stars, setStars] = useState()
  const [location, setLocation] = useState()

  const hotelCollectionRef = collection(db, 'hotels')
  let navigate = useNavigate()
  const makeHotel = async () => {
    //Авторизация
    await addDoc(hotelCollectionRef, {
      title,
      discription,
      location,
      country,
      totalPrice,
      feature,
      stars,
      rewiews,
    })
    navigate('/')
  }

  return (
    <Container>
      <Row className="d-flex justify-content-center row row-cols-3">
        <Card className="p-2 m-4 bg-light rounded-3 w-50 border-info col-md-6border border-primary">
          <h1 className="mt-3 text-center"> Create hotel here</h1>
          <form className="mt-3 pb-3 m-3">
            <div className="form-group">
              <input
                className="form-control mb-3"
                id="title"
                placeholder="Title..."
                onChange={(event) => {
                  setTitle(event.target.value)
                }}
              />

              <div className="inputGp">
                <textarea
                  id="description"
                  rows="5"
                  className="form-control mb-3 mt-3"
                  placeholder="Discription..."
                  onChange={(event) => {
                    setDiscription(event.target.value)
                  }}
                />
              </div>

              <input
                className="form-control mb-3"
                required
                id="location"
                placeholder="URL pic location..."
                onChange={(event) => {
                  setLocation(event.target.value)
                }}
              />
              <input
                className="form-control mb-3"
                id="country"
                placeholder="Country..."
                onChange={(event) => {
                  setCountry(event.target.value)
                }}
              />

              <input
                className="form-control mb-3"
                id="totalPrice"
                placeholder="Total price..."
                onChange={(event) => {
                  setTotalPrice(event.target.value)
                }}
              />

              <input
                className="form-control mb-3"
                id="feature"
                placeholder="Feature..."
                onChange={(event) => {
                  setFeature(event.target.value)
                }}
              />

              <input
                className="form-control mb-3"
                id="rewiews"
                placeholder="Rewiews..."
                onChange={(event) => {
                  setRewiews(event.target.value)
                }}
              />
              <div className="row">
                <div className="col-md-2">
                  <label className='ms-2 mt-2 float-start'>Stars:</label>
                </div>
                <div className="col-md-10">
                  <select
                    className="dropdown-menu position-static d-grid gap-1 p-2 rounded-3 mx-0 shadow "
                    value={stars}
                    onChange={(e) => setStars(e.target.value)}
                  >
                    <option className="dropdown-item rounded-2" value="1">
                      1
                    </option>
                    <option className="dropdown-item rounded-2" value="2">
                      2
                    </option>
                    <option className="dropdown-item rounded-2" value="3">
                      3
                    </option>
                    <option className="dropdown-item rounded-2" value="4">
                      4
                    </option>
                    <option className="dropdown-item rounded-2 " value="5">
                      5
                    </option>
                  </select>
                </div>
              </div>
              <div className="button text-center">
                <Button className="btn btn-primary mt-3" onClick={makeHotel}>
                  Submit
                </Button>
              </div>
            </div>
          </form>
        </Card>
      </Row>
    </Container>
  )
}

export default Create
