import React, { useEffect, useState } from "react";
import { Button, Card, Col, FormGroup, Input, Label, Row } from "reactstrap";
import AgoraUIKit, { layout } from "agora-react-uikit";
import "./../../../assets/scss/video.scss";

import axiosConfig from "../../../axiosConfig";
import { history } from "../../../history";
import swal from "sweetalert";

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
    // token:
    //   "0067d1f07c76f9d46be86bc46a791884023IAB5FVqr9cmIzH4opLCsVqglu9vtMjTK/T1tWsNzIU0EaUlEne4AAAAAEAAk4o61UgtnZAEAAQByRmZk",
    token: Token || localStorage.getItem("astrotokenforvideocall"),

    // Set the user ID.
    uid: 0,
    // Set the user role
    // layout: layout.grid,
    // layout: isPinned ? layout.pin : layout.grid,
  };
  const callbacks = {
    EndCall: () => {
      window.location.reload();
      setVideoCall(false);
    },
  };

  const handlestatus = (e) => {
    e.preventDefault();
    const astroid = localStorage.getItem("astroId");

    let payload = {
      astroAccount: astroid,
    };
    if (Status === "Active") {
      axiosConfig
        .post(`/user/astroVideoCall`, payload)
        .then((res) => {
          console.log(res.data);
          setchannelName(res.data.channelName);
          setToken(res.data.astroAccount);
          localStorage.setItem("astrotokenforvideocall", res.data.astroAccount);
          if (res.data.channelName && res.data.astroAccount) {
            setAddcall(true);
          }

          // setVideoCall(true);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    if (Status === "Deactive") {
      setAddcall(false);

      // localStorage.removeItem("astrotokenforvideocall");
    }
  };
  // useEffect(() => {
  //   const astroid = localStorage.getItem("astroId");
  //   // console.log(astroid);

  //   axiosConfig

  //     .get(`user/channelList/${astroid}`)
  //     .then((res) => {
  //       console.log(res.data?.data[0]?.channelName);
  //       setchannelName(res.data?.data[0]?.channelName);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);
  return (
    <div className="videocallmain" style={{ height: "720px" }}>
      <Card>
        <Row>
          <Col lg="4" md="4" sm="4">
            <div className="container mt-2 mb-1">
              <Button onClick={(e) => handlestatus(e)} color="success">
                VideoCall
              </Button>
            </div>
          </Col>

          <Col>
            <div className="container mt-1 mb-1">
              <Row>
                <Col className="mt-1">
                  <FormGroup check>
                    <Input
                      value="Active"
                      onClick={(e) => {
                        setStatus(e.target.value);
                      }}
                      name="radio1"
                      type="radio"
                    />
                    <Label check>Online</Label>
                  </FormGroup>
                </Col>
                <Col className="mt-1">
                  <FormGroup check>
                    <Input
                      value="Deactive"
                      onClick={(e) => {
                        setStatus(e.target.value);
                        setAddcall(false);
                      }}
                      name="radio1"
                      type="radio"
                    />{" "}
                    <Label check>Offline</Label>
                  </FormGroup>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
        <Row>
          {videoCall && Status === "Active" ? (
            <div style={{ display: "flex", width: "100vw", height: "80vh" }}>
              <AgoraUIKit rtcProps={rtcProps} callbacks={callbacks} />
            </div>
          ) : (
            <>
              {Addcall === true ? (
                <>
                  <div className="mx-2 mb-2">
                    <Button onClick={() => setVideoCall(true)} color="success">
                      Click to join Now
                    </Button>
                  </div>
                </>
              ) : null}
            </>
          )}
        </Row>
      </Card>
    </div>
  );
}

export default YourVideocall;
