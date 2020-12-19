import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments, faEye } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { fetchPolls } from "../store/Actions/index";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

function Polls(props) {
  useEffect(()=>{
    console.log('props:',props)
  })
  useEffect(() => {
    props.fetchPolls();
  }, []);

  return (
    <>
      <div id="Polls">
        <div className="container">
          <div className="show">
            {
              props.loading == true ? (
                <>
                <p>loading...</p>

                <Loader type="Grid" color="#00BFFF" height={80} width={80} />
                </>
              ) : (
                <>
  {
    props.polls? 
      props.polls.map(row=>(
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
                      <p>Lifespan &emsp; | &emsp; January 13,2017</p>
                    </div>
                    <div className="buttons">
                      <a className="btn btn-secondary" href="">
                        Button 1
                      </a>
                      &emsp;
                      <a className="btn btn-danger" href="">
                        Button 2
                      </a>
                    </div>
                    <h2 className="firstH2">
                      <Link to={`result/${row._id}`}>{row.question}</Link>
                      
                    </h2>
                    <h2 className="secondH2">
                      {row.question_hindi}
                    </h2>
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
      ))
     :
      null
  }


                
                </>
              )
              // {/* card ends here */}
            }
          </div>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = function (state) {
  return {
    loading: state.polls.loading,
    polls: state.polls.data.payload,
    error: state.polls.error,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchPolls: () => dispatch(fetchPolls()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Polls);
