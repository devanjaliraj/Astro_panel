import React from "react";
import "../../../assets/scss/pages/astrochat.scss";
// import Buyimg from "../../../assets/img/boy-img.png";
// import axiosConfig from "../../../axiosConfig";
import axios from "axios";

class ChatAppList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // data: {},
      astroChatList: [],
    };
  }
  componentDidMount() {
    // console.log(this.state.category);
    let astroId = localStorage.getItem("astroId");
    console.log(astroId)
    axios
      .get(`http://13.233.228.168:8000/user/astrogetRoomid/${astroId}`)
      .then((response) => {
        console.log('&&&&&', response.data.data);
        this.setState({ astroChatList: response.data.data });

      })
      .catch((error) => {
        console.log(error);
      });
  }


  render() {

    const { astroChatList } = this.state;

    return (
      <ul>
        {astroChatList.length
          ? astroChatList.map((astro, index) => {
            return (
              <li>
                <div className="imglf" onClick={() => this.props.getChatRoomId(astro)}>
                  <img src={astro.userid?.userimg} className="app-img" alt="" />
                </div>
                <div className="lst-con">
                  <h5>{astro.userid?.fullname} </h5>
                  <p>{astro.msg}</p>
                </div>
              </li>
            );
          })
          : null}
        {/* // <li>
        //   <div className="imglf">
        //     <img src={Buyimg} className="app-img" alt="" />
        //   </div>
        //   <div className="lst-con">
        //     <h5> namehghghghg</h5>
        //     <p>lorem</p>
        //   </div>
        // </li> */}
      </ul>
    );
  }
}

export default ChatAppList;
