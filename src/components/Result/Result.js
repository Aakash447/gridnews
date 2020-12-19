import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import "./css/result.scss";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import { fetchResult } from "../store/Actions/index";

import CanvasJSReact from "../../canvasjs.react";
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function Result(props) {
  const [genderOrigS, setGenderOrigS] = useState();
  const [ageOrigS, setAgeOrigS] = useState();
  const [regionOrigS, setRegionOrigS] = useState();
  useEffect(() => {
    let id = props.match.params.id;
    props.fetchResult(id);
  }, []);

  let genderOrig = [];
  useEffect(() => {
    if (props.gender) {
      // console.log("useEffect gender:", props.gender);
      let firstKey = "";
      for (let key in props.gender) {
        // console.log("key:", key);
        firstKey = key;
        break;
      }
      // console.log('firstKey:',firstKey)
      let local = props.gender[firstKey];
      // console.log("useEffect local:", local);
      for (let key in local) {
        genderOrig.push({ name: `${key}`, y: local[key] });
      }
      setGenderOrigS(genderOrig);
    }
  }, [props.gender]);

  let ageOrig = [];
  useEffect(() => {
    if (props.age) {
      // console.log("useEffect gender:", props.age);
      let firstKey = "";
      for (let key in props.age) {
        // console.log("key:", key);
        firstKey = key;
        break;
      }
      // console.log('firstKey:',firstKey)
      let local = props.age[firstKey];
      // console.log("useEffect local:", local);
      for (let key in local) {
        ageOrig.push({ name: `${key}`, y: local[key] });
      }
      setAgeOrigS(ageOrig);
    }
  }, [props.age]);

  let regionOrig = [];
  useEffect(() => {
    if (props.region) {
      // console.log("useEffect gender:", props.age);
      let firstKey = "";
      for (let key in props.region) {
        // console.log("key:", key);
        firstKey = key;
        break;
      }
      // console.log('firstKey:',firstKey)
      let local = props.region[firstKey];
      // console.log("useEffect local:", local);
      for (let key in local) {
        regionOrig.push({ name: `${key}`, y: local[key] });
      }
      setRegionOrigS(regionOrig);
    }
  }, [props.region]);

  const handleChange = (e) => {
    console.log(e.target.name, " : ", e.target.value);
    let local = props.gender[e.target.value];
    for (let key in local) {
      genderOrig.push({ name: `${key}`, y: local[key] });
    }
    setGenderOrigS(genderOrig);
  };

  const handleAgeChange = (e) => {
    console.log(e.target.name, " : ", e.target.value);
    let local = props.age[e.target.value];
    for (let key in local) {
      ageOrig.push({ name: `${key}`, y: local[key] });
    }
    setAgeOrigS(ageOrig);
  };

  const handleRegionChange = (e) => {
    console.log(e.target.name, " : ", e.target.value);
    let local = props.region[e.target.value];
    for (let key in local) {
      regionOrig.push({ name: `${key}`, y: local[key] });
    }
    setRegionOrigS(regionOrig);
  };

  const options = {
    animationEnabled: true,
    title: {
      text: "Global",
    },
    subtitles: [
      {
        text: "",
        verticalAlign: "center",
        fontSize: 24,
        dockInsidePlotArea: true,
      },
    ],
    data: [
      {
        type: "doughnut",
        showInLegend: true,
        indexLabel: "{name}: {y}",
        yValueFormatString: "#,###'%'",
        dataPoints: props.global,
      },
    ],
  };

  const genderOptions = {
    animationEnabled: true,
    title: {
      text: "Gender",
    },
    subtitles: [
      {
        text: "",
        verticalAlign: "center",
        fontSize: 24,
        dockInsidePlotArea: true,
      },
    ],
    data: [
      {
        type: "doughnut",
        showInLegend: true,
        indexLabel: "{name}: {y}",
        yValueFormatString: "#,###'%'",
        dataPoints: genderOrigS,
      },
    ],
  };

  const ageOptions = {
    animationEnabled: true,
    title: {
      text: "Age",
    },
    subtitles: [
      {
        text: "",
        verticalAlign: "center",
        fontSize: 24,
        dockInsidePlotArea: true,
      },
    ],
    data: [
      {
        type: "doughnut",
        showInLegend: true,
        indexLabel: "{name}: {y}",
        yValueFormatString: "#,###'%'",
        dataPoints: ageOrigS,
      },
    ],
  };

  const regionOptions = {
    animationEnabled: true,
    title: {
      text: "Region",
    },
    subtitles: [
      {
        text: "",
        verticalAlign: "center",
        fontSize: 24,
        dockInsidePlotArea: true,
      },
    ],
    data: [
      {
        type: "doughnut",
        showInLegend: true,
        indexLabel: "{name}: {y}",
        yValueFormatString: "#,###'%'",
        dataPoints: regionOrigS,
      },
    ],
  };

  return (
    <>
      <div id="result">
        <div className="container">
          {props.loading == true ? (
            <p>loading...</p>
          ) : (
            <div className="box">
              <select name="cars" id="cars">
                <option value=""></option>
              </select>
              <CanvasJSChart options={options} />
            </div>
          )}

          {/* gender */}
          {props.loading == true ? (
            <p>loading...</p>
          ) : (
            <div className="box">
              <select
                name="gender"
                onChange={(e) => handleChange(e)}
                id="gender"
              >
                {props.genderKeys
                  ? props.genderKeys.map((row) => (
                      <option value={row}>{row}</option>
                    ))
                  : null}
              </select>
              <CanvasJSChart options={genderOptions} />
            </div>
          )}

          {/* age */}
          {props.loading == true ? (
            <p>loading...</p>
          ) : (
            <div className="box">
              <select name="age" onChange={(e) => handleAgeChange(e)} id="age">
                {props.ageKeys
                  ? props.ageKeys.map((row) => (
                      <option value={row}>{row}</option>
                    ))
                  : null}
              </select>
              <CanvasJSChart options={ageOptions} />
            </div>
          )}

          {/* region */}
          {props.loading == true ? (
            <p>loading...</p>
          ) : (
            <div className="box">
              <select name="region" onChange={(e) => handleRegionChange(e)} id="region">
                {props.regionKeys
                  ? props.regionKeys.map((row) => (
                      <option value={row}>{row}</option>
                    ))
                  : null}
              </select>
              <CanvasJSChart options={regionOptions} />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

const mapStateToProps = function (state) {
  return {
    loading: state.result.loading,
    result: state.result.data,
    error: state.result.error,
    global: state.result.global,
    genderKeys: state.result.genderKeys,
    gender: state.result.gender,
    ageKeys: state.result.ageKeys,
    age: state.result.age,
    regionKeys: state.result.regionKeys,
    region: state.result.region,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchResult: (id) => dispatch(fetchResult(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Result);
