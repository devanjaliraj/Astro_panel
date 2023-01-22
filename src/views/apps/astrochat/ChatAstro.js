import React from "react";
import { Container } from "reactstrap";
import "../../../assets/scss/pages/astrochat.scss";
import Buyimg from "../../../assets/img/boy-img.png";
import axios from "axios";

import ChatAppList from "./ChatAppList";
import ChatAppMassage from "./ChatAppMassage";
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb";
import axiosConfig from "../../../axiosConfig";
class ChatAstro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      roomChatData: [],
      userId: "",
      astroId: "",
      msg: "",
      roomId: '',
      time: {},
      seconds: 60 * 15,
      reciver: "",
      minutes: 15,
    };
    this.timer = 0;
    this.startTimer = this.startTimer.bind(this);
    this.countDown = this.countDown.bind(this);
  };


  secondsToTime(secs) {
    let hours = Math.floor(secs / (60 * 60));
    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);
    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);
    let obj = {
      "h": hours,
      "m": minutes,
      "s": seconds
    };
    return obj;
  }

  componentDidMount = () => {
    //this.startTimer()
    //alert(JSON.parse(localStorage.getItem('minute')))
    let timeLeftVar = ''
    if (JSON.parse(localStorage.getItem('minute'))) {
      let minute = JSON.parse(localStorage.getItem('minute'))
      this.setState({ minutes: minute, seconds: minute * 60 });
      this.startTimer()
      this.secondsToTime(minute * 60);
    }
    //timeLeftVar = this.secondsToTime(this.state.seconds);
    // this.setState({ time: timeLeftVar });
    let astroId = localStorage.getItem('astroId')
    // let { id } = this.props.match.params;
    axios
      .get(`http://13.233.228.168:8000/user/astrogetRoomid/${astroId}`)
      .then((response) => {
        console.log(response.data.data);
        if (response.data.status === true) {
          this.setState({
            data: response.data.data,
            fullname: response.data.data.fullname,
            img: response.data.data.img,
            time: timeLeftVar
          });
        }
      })
      .catch((error) => {
        console.log(error);
        // console.log(error.response);
      });
  };

  startTimer() {
    if (this.timer === 0 && this.state.seconds > 0) {
      this.timer = setInterval(this.countDown, 1000);
    }
  }

  countDown() {
    // let astroid = JSON.parse(localStorage.getItem('astroid'))
    // Remove one second, set state so a re-render happens.
    let seconds = this.state.seconds !== 0 ?
      this.state.seconds - 1
      :
      alert("out time");
    // this.history.redirect(`/astrologerdetail/${astroid}`)
    // <Redirect to={'/chatApp/astrologerdetail/' + astroid} />
    this.setState({
      time: this.secondsToTime(seconds),
      seconds: seconds,
      //    if (seconds = 0 && this.state.seconds > 0) {
      //   this.timer = setInterval(this.countDown, 1000);
      // }
    });

    // Check if we're at zero.
    if (seconds === 0) {
      clearInterval(this.timer);
    }
  }
  getChatRoomId = async (astro) => {
    // let astroId = localStorage.getItem('astroId')
    console.log("sdfjhsdfjsghjfk", astro);
    this.setState({ userId: astro?.userid?._id, roomId: astro?.roomid });
    await axios.get(`http://13.233.228.168:8000/user/allchatwithAstro/${astro?.astroid?._id}`)
      .then((response) => {
        console.log(response?.data?.data);
        if (response.data.status === true) {
          this.setState({ roomChatData: response?.data.data });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
  submitHandler = async (e, astroid, userId) => {
    e.preventDefault();
    // let { id } = this.props.match.params;
    let astroId = localStorage.getItem("astroId");
    let obj = {
      //userid: this.state.userId,
      reciver: this.state.userId,
      msg: this.state.msg,
    };

    await axiosConfig
      .post(`/user/add_chatroom/${astroId}`, obj)
      .then((response) => {
        console.log("hdfkjh", response.data.status)
        if (response.data.status === true) {
          this.setState({ msg: "" });
          axiosConfig.get(`/user/allchatwithAstro/${astroId}`)
            .then((response1) => {
              console.log(response1?.data?.data);
              if (response1.data.status === true) {
                this.setState({ roomChatData: response1?.data.data });
              }
            })
            .catch((error) => {
              console.log(error);
            });
        }
      })

      .catch((error) => {
        // swal("Error!", "You clicked the button!", "error");
        console.log(error);
      });
  };

  handleChange = (e) => {
    this.setState({
      msg: e.target.value,
      receiver: e.target.value,
    });
  };


  render() {
    return (
      <div>
        <Breadcrumbs
          breadCrumbTitle="Chat"
          breadCrumbParent="Home"
          breadCrumbActive="Chat"
        />

        <section className="app-chatbg">
          <Container>
            <div class="app rt-chat">
              <div class="contact-list">
                <h1 class="title">My messages</h1>
                <ChatAppList getChatRoomId={(id) => this.getChatRoomId(id)}
                />
              </div>
              <div class="messages">
                <div className="chat-header">
                  <p>
                    <span>
                      <img src={this.state.roomChatData.length > 0 ? this.state.roomChatData[0]?.userid?.userimg[0] : Buyimg} className="app-img"
                        alt="" />
                    </span>
                    {this.state.roomChatData.length > 0 ? this.state.roomChatData[0]?.userid?.fullname : null}
                  </p>
                  <span className="appchattimer">
                    {this.state.time.m} :{this.state.time.s}
                  </span>
                </div>
                <div class="messages-history">
                  <ChatAppMassage roomChatData={this.state.roomChatData.length > 0 ? this.state.roomChatData : []} />
                </div>
                <form class="messages-inputs" >
                  <input
                    type="text" placeholder="Send a message" onChange={(e) => {
                      this.handleChange(e);
                    }}
                    value={this.state.msg}
                    defaultValue={""} />
                  <button onClick={(e) =>
                    this.submitHandler(
                      e,
                      this.state.astroId,
                      this.state.userId,
                      this.state.reciver,

                    )
                  }>
                    <i onClick={this.startTimer} class="material-icons">send</i>
                  </button>
                </form>
              </div>
            </div>
            {/* <div className="chat-bottom">
            <button>Close Chat</button>
          </div> */}
          </Container>
        </section>
      </div>
    );
  }
}


export default ChatAstro;
