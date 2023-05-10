import React, { useEffect, useState } from "react";
import { Button, Card, Col, FormGroup, Input, Label, Row } from "reactstrap";
import AgoraUIKit from "agora-react-uikit";

import "./../../../assets/scss/video.scss";
import Customvideo from "./Customvideo";
import axiosConfig from "../../../axiosConfig";
import { history } from "../../../history";
import swal from "sweetalert";

import VideoCalls from "./VideoCalls";

function YourVideocall() {
  const [videoCall, setVideoCall] = useState(false);
  const [channelname, setchannel] = useState("");
  const [channelNamecreated, setchannelName] = useState("");
  const [Status, setStatus] = useState("");
  const [Token, setToken] = useState("");
  const [Addcall, setAddcall] = useState(false);

  const [view, setview] = useState(false);
  const [listofchannel, setlistofchannel] = useState();

  const rtcProps = {
    // Pass your App ID here.
    appId: "7d1f07c76f9d46be86bc46a791884023",
    // Set the channel name.
    // channel: "anujesh",
    channel: channelNamecreated,
    // Pass your temp token here.
    token: Token || localStorage.getItem("astrotokenforvideocall"),
    // token:
    //   "007eJxTYDgh+fefxobNlcqHuZiV5tUksPQsnbky8DLD45MxN08G9yxRYDBPMUwzME82N0uzTDExS0q1MEtKNjFLNLc0tLAwMTAyXn4pMqUhkJEh7PIBZkYGCATx2RkS80qzUoszGBgA59ghrA==",
    // token:
    //   "0067d1f07c76f9d46be86bc46a791884023IACziv5tFbYdCMOClwbRP0u01RUPp6MZ+nTKCno+eVh9/UlEne4AAAAAEADAxRILNW1bZAEAAQBVqFpk",
    // Set the user ID.
    uid: 0,
    // Set the user role
    role: "",
  };
  const callbacks = {
    EndCall: () => {
      window.location.reload();
      setVideoCall(false);
    },
  };

  // const handleSubmit = (e) => {
  //   const astroid = localStorage.getItem("astroId");

  //   axiosConfig
  //     .post(`/user/add_VideoChannel`, {
  //       astroid: astroid,
  //       channelName: channelname,
  //     })
  //     .then((res) => {
  //       setchannel("");
  //       swal("Channel Created Successfully");
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  const handlestatus = (e) => {
    e.preventDefault();
    const astroid = localStorage.getItem("astroId");
    console.log(astroid);
    console.log(Status);
    let payload = {
      astroAccount: astroid,
    };
    if (Status === "Active") {
      axiosConfig
        .post(`/user/astroVideoCall`, payload)
        .then((res) => {
          console.log(res.data.astroAccount);
          setToken(res.data.astroAccount);
          localStorage.setItem("astrotokenforvideocall", res.data.astroAccount);
          setAddcall(true);

          // setVideoCall(true);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    if (Status === "Deactive") {
      localStorage.removeItem("astrotokenforvideocall");
      setAddcall(false);
    }
  };
  useEffect(() => {
    const astroid = localStorage.getItem("astroId");
    console.log(astroid);

    axiosConfig
      // .get(`/user/getoneChannl/644fae265f6b65e11a4bdbd7`)
      .get(`user/channelList/${astroid}`)
      .then((res) => {
        console.log(res.data?.data[0]?.channelName);
        setchannelName(res.data?.data[0]?.channelName);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <Card>
        <Row>
          {/* <VideoCalls /> */}
          <Col lg="3" md="3" sm="3">
            <div className="container mt-2 mb-1">
              <Button onClick={(e) => handlestatus(e)} color="success">
                show yourSelf
              </Button>
            </div>
          </Col>
          <Col>
            <div className="container mt-1 mb-1">
              <FormGroup check>
                <Input
                  value="Active"
                  onClick={(e) => {
                    setStatus(e.target.value);
                  }}
                  name="radio1"
                  type="radio"
                />{" "}
                <Label check>Online</Label>
              </FormGroup>
              <FormGroup check>
                <Input
                  value="Deactive"
                  onClick={(e) => setStatus(e.target.value)}
                  name="radio1"
                  type="radio"
                />{" "}
                <Label check>Offline</Label>
              </FormGroup>
            </div>
          </Col>
        </Row>
        <Row>
          <div className="container mt-1 mb-1">
            {videoCall && Status === "Active" ? (
              <div style={{ display: "flex", width: "75vw", height: "80vh" }}>
                <AgoraUIKit rtcProps={rtcProps} callbacks={callbacks} />
              </div>
            ) : (
              <>
                {Addcall === true ? (
                  <>
                    <Button onClick={() => setVideoCall(true)} color="success">
                      Add call
                    </Button>
                  </>
                ) : null}
              </>
            )}
          </div>
        </Row>
      </Card>
    </div>
  );
}

export default YourVideocall;
