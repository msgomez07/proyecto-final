import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  } from '@fortawesome/free-brands-svg-icons'
import { faClock } from '@fortawesome/free-regular-svg-icons'
import { faFire, faShoePrints } from "@fortawesome/free-solid-svg-icons";

export default function TimeMenu() {
    return (
      <div className="d-flex justify-content-center">
        <ul className="d-flex">
          <li className="d-flex m-3">
            <h3 className="ml-3 mr-3 text-light">TIEMPO</h3>
            <FontAwesomeIcon
              icon={faClock}
              style={{ color: "#fff", fontSize: "30" }}
            />
            <h3 className="ml-3 mr-3 text-light">02</h3>
          </li>
          <li className="d-flex m-3">
            <h3 className="ml-3 mr-3 text-light">CALORIAS</h3>
            <FontAwesomeIcon
              icon={faFire}
              style={{ color: "#fff", fontSize: "30" }}
            />
            <h3 className="ml-3 mr-3 text-light">200</h3>
          </li>
          <li className="d-flex m-3">
            <h3 className="ml-3 mr-3 text-light">PASOS</h3>
            <FontAwesomeIcon
              icon={faShoePrints}
              style={{ color: "#fff", fontSize: "30" }}
            />
            <h3 className="ml-3 mr-3 text-light">5000</h3>
          </li>
        </ul>
      </div>
    );
}
