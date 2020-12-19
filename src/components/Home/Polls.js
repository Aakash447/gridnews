import React ,{ useState, useEffect } from "react";
import { connect } from 'react-redux'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments, faEye } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';
import { fetchUsers } from '../store/Actions/index'

function Polls(props) {

  useEffect(()=>{
    props.fetchUsers()
  },[])

  return (
    <>
      <div id="Polls">
        <div className="container">
          <div className="show">

            <div className="card">
              <img
                src="https://images.pexels.com/photos/2156698/pexels-photo-2156698.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="image"
              />
              <div className="container">
                <div className="date">
                  <img
                    src="https://images.pexels.com/photos/132774/pexels-photo-132774.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt="image"
                  />
                  <p >Thursday &emsp; | &emsp; January 13,2017</p>
                </div>
                <div className="buttons">
                  <a className="btn btn-secondary" href="">
                    Button 1
                  </a>&emsp;
                  <a className="btn btn-danger" href="">
                  Button 2
                  </a>
                </div>
                <h2>Find a quick way to viral</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestias, quam?
                </p>
                <div className="light-line"></div>
                <div className="footer">
                  <div className="left">
                    <img src="images/smileys.jpg" alt="images" />
                    56
                  </div>
                  <div className="right">
                    <p>
                      <FontAwesomeIcon icon={faEye} />
                      9000
                    </p>
                    &emsp;
                    <div className="comment">
                      <FontAwesomeIcon icon={faComments} />
                      12
                    </div>
                  </div>
                </div>
              </div>
            </div>
          
          </div>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = function(state) {
  return {

  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchUsers : () => dispatch(fetchUsers())
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Polls)
