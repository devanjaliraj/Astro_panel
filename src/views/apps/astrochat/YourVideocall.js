import React, { useEffect, useState } from "react";
import { Button, Card, Col, Input, Row } from "reactstrap";
import AgoraUIKit from "agora-react-uikit";
import "./../../../assets/scss/video.scss";
import Customvideo from "./Customvideo";
import axiosConfig from "../../../axiosConfig";
import { history } from "../../../history";
import swal from "sweetalert";

function YourVideocall() {
  const [videoCall, setVideoCall] = useState(false);
  const [channelname, setchannel] = useState("");
  const [view, setview] = useState(false);
  const [listofchannel, setlistofchannel] = useState();

  const rtcProps = {
    // Pass your App ID here.
    appId: "7d1f07c76f9d46be86bc46a791884023",
    // Set the channel name.
    channel: "anujesh",
    // Pass your temp token here.
    token:
      "007eJxTYDgZtfLsJJlPNUfv+/TxhHy7/ejtDNFLWsfunpdhO7HmiIeMAoN5imGagXmyuVmaZYqJWVKqhVlSsolZormloYWFiYGRccy90JSGQEYGruA2VkYGCATx2RkS80qzUoszGBgAdf4iOg==",
    // Set the user ID.
    uid: 0,
    // Set the user role
    role: "",
  };
  const callbacks = {
    EndCall: () => setVideoCall(false),
  };

  const handleSubmit = (e) => {
    const astroid = localStorage.getItem("astroId");

    axiosConfig
      .post(`/user/add_VideoChannel`, {
        astroid: astroid,
        channelName: channelname,
      })
      .then((res) => {
        setchannel("");
        swal("Channel Created Successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    const astroid = localStorage.getItem("astroId");
    console.log(astroid);
    axiosConfig
      // .get(`/user/getoneChannl/644fae265f6b65e11a4bdbd7`)
      .get(`user/channelList/${astroid}`)
      .then((res) => {
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }, []);
  return (
    <div>
      <Card>
        <Row>
          <div className="container mt-1 mb-1">
            {videoCall ? (
              <div style={{ display: "flex", width: "75vw", height: "80vh" }}>
                <AgoraUIKit rtcProps={rtcProps} callbacks={callbacks} />
              </div>
            ) : (
              <Button onClick={() => setVideoCall(true)} color="success">
                Add call
              </Button>
            )}
          </div>
        </Row>
      </Card>
    </div>
  );
}

export default YourVideocall;
