import React, { useState, useEffect, useRef } from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import backBtnBg from "../../../assets/img/backBtnBg.png";
import GreyCardComponent from "../../components/GreyCard.com";
import AnimationImg from "./img/animationImg.png";
import ResultNumCardComponent from "../../components/ResultNumCard.com";
import DownBlueArrow from "./img/downBlueArrow.png";
import { ImageBackground } from "react-native";
import AnimationBg from "./img/animationBg.png";
import {
  ReceivedMessageBox,
  SentMessageBox,
} from "../../components/MessageBox.com";
import ShowKeyboardBtnBg from "./img/showKeyboardBtnBg.png";
import SendMsgBtnBg from "./img/sendMsgBtnBg.png";
import ShowWalletSliderBtnBg from "./img/showWalletSliderBtnBg.png";
import GoDownBtnBg from "./img/goDownBtnBg.png";
import BackSpaceBg from "./img/backspaceBg.png";
import CategoryBtnBg from "./img/CategoryBtnBg.png";
import ChatBtnBg from "./img/chatBtnBg.png";
import BetControlBtnBg from "./img/betControlBtnBg.png";
import RedEnvelopeBtnBg from "./img/redEnvelopeBtnBg.png";
import PaymentBtnBg from "./img/paymentBtnBg.png";
import CategoryHeaderIcon from "./img/categoryHeaderIcon.png";
import GameSymbol1Bg from "./img/gameSymbolBg1.png";
import GameSymbol2Bg from "./img/gameSymbolBg2.png";
import GameSymbol3Bg from "./img/gameSymbolBg3.png";
import DownArrow from "../Wallet/img/downArrow.png";
import UpArrow from "../Wallet/img/UpArrow.png";
import { useDispatch, useSelector } from "react-redux";

const ColorText = (props) => {
  const redColor = "#f84a4a";
  const blueColor = "#2f77e3";
  useEffect(() => {}, []);
  return (
    <Text
      style={{
        color:
          props.data === "大" || props.data === "双" || props.data === "龙"
            ? redColor
            : blueColor,
        fontSize: 12,
      }}
    >
      {props.data}
    </Text>
  );
};

const AnimationSliderView = () => {
  return (
    <View style={styles.animation_slider_view}>
      <ImageBackground source={AnimationBg} style={styles.slider_bg} />
    </View>
  );
};

const SingleRecord = () => {
  return (
    <View style={styles.single_record_view}>
      <Text style={styles.grey_text}>暂无记录</Text>
    </View>
  );
};

const AllLoadText = () => {
  return (
    <View style={styles.l_d_bottom}>
      <Text style={styles.grey_text}>数据全部加载完成</Text>
    </View>
  );
};

const LongDragonItemView = (props) => {
  return (
    <View style={styles.l_d_header}>
      <Text style={[styles.grey_text, { width: "25%", textAlign: "center" }]}>
        {props.data.no}
      </Text>
      <Text style={[styles.grey_text, { width: "25%", textAlign: "center" }]}>
        {props.data.location}
      </Text>
      <Text style={[styles.grey_text, { width: "25%", textAlign: "center" }]}>
        {props.data.result}
      </Text>
      <Text style={[styles.grey_text, { width: "25%", textAlign: "center" }]}>
        {props.data.consecutive}
      </Text>
    </View>
  );
};

const LongDragonView = () => {
  const data = [
    { no: 1, location: "亚军", result: "双", consecutive: 4 },
    { no: 2, location: "冠军", result: "大", consecutive: 3 },
    { no: 3, location: "第九名", result: "小", consecutive: 3 },
    { no: 4, location: "冠亚和", result: "大", consecutive: 3 },
    { no: 5, location: "第五名", result: "单", consecutive: 3 },
    { no: 6, location: "亚军", result: "龙", consecutive: 3 },
    { no: 4, location: "冠亚和", result: "大", consecutive: 3 },
    { no: 5, location: "第五名", result: "单", consecutive: 3 },
    { no: 6, location: "亚军", result: "龙", consecutive: 3 },
  ];
  return (
    <View style={styles.long_dragon_view}>
      <LongDragonItemView
        data={{
          no: "序号",
          location: "位置",
          result: "结果",
          consecutive: "连期",
        }}
      />
      <ScrollView>
        {data.map((item, i) => {
          return <LongDragonItemView data={item} key={i} />;
        })}
        <AllLoadText />
      </ScrollView>
    </View>
  );
};

const ColorBackView = (props) => {
  const redColor = ["#fd4d4d", "#780101"];
  const blueColor = ["#4963fd", "#2b18ff"];

  const [backColor, setBackColor] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    if (props.type === "big") {
      setText("大");
      setBackColor(redColor);
    }
    if (props.type === "small") {
      setText("小");
      setBackColor(blueColor);
    }
    if (props.type === "single") {
      setText("单");
      setBackColor(blueColor);
    }
    if (props.type === "double") {
      setText("双");
      setBackColor(redColor);
    }
  }, []);
  return (
    <LinearGradient
      colors={backColor}
      style={{ width: 22, height: 22, borderRadius: 5 }}
    >
      <Text style={{ color: "white", fontSize: 14 }}>{text}</Text>
    </LinearGradient>
  );
};

const PredictRecordView = (props) => {
  return (
    <View>
      {props.data.map((item, i) => {
        return (
          <View style={styles.predict_row_view} key={i}>
            <View style={styles.predict_header_name}>
              <Text style={[styles.predict_header_text, styles.grey_text]}>
                {item.name}
              </Text>
            </View>
            <View
              style={[styles.predict_header_group, { flexDirection: "row" }]}
            >
              <View
                style={{
                  borderRightColor: "#e5e5e5",
                  borderRightWidth: 1,
                  height: "100%",
                  width: "33.3%",
                  textAlign: "center",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={styles.grey_text}>{item.num}</Text>
              </View>
              <View
                style={{
                  borderRightColor: "#e5e5e5",
                  borderRightWidth: 1,
                  height: "100%",
                  width: "33.3%",
                  textAlign: "center",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <ColorBackView type={item.type1} />
              </View>
              <View
                style={{
                  borderRightColor: "#e5e5e5",
                  borderRightWidth: 1,
                  height: "100%",
                  width: "33.3%",
                  textAlign: "center",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <ColorBackView type={item.type2} />
              </View>
            </View>
          </View>
        );
      })}
    </View>
  );
};

const PredictView = () => {
  const data = [
    { name: "第五名", num: "3,2,7,4,8", type1: "big", type2: "double" },
    { name: "第五名", num: "3,2,7,4,8", type1: "small", type2: "single" },
    { name: "第五名", num: "3,2,7,4,8", type1: "big", type2: "single" },
    { name: "第五名", num: "3,2,7,4,8", type1: "small", type2: "double" },
    { name: "第五名", num: "3,2,7,4,8", type1: "big", type2: "single" },
    { name: "第五名", num: "3,2,7,4,8", type1: "big", type2: "double" },
    { name: "第五名", num: "3,2,7,4,8", type1: "big", type2: "single" },
    { name: "第五名", num: "3,2,7,4,8", type1: "small", type2: "single" },
  ];
  return (
    <View style={styles.predict_view}>
      <View style={styles.predict_header}>
        <View style={styles.predict_header_name}>
          <Text style={[styles.predict_header_text, styles.grey_text]}>
            名次
          </Text>
        </View>
        <View style={styles.predict_header_group}>
          <Text style={[styles.predict_header_text, styles.grey_text]}>
            本群预测
          </Text>
        </View>
      </View>
      <ScrollView>
        <PredictRecordView data={data} />
        <AllLoadText />
      </ScrollView>
    </View>
  );
};

const ResultHistoryRecordView = (props) => {
  return (
    <View
      style={{ flexDirection: "row", paddingTop: 3, backgroundColor: "white" }}
    >
      <Text style={[styles.grey_text, { width: "15%", textAlign: "center" }]}>
        {props.data.no}
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "50%",
        }}
      >
        <ResultNumCardComponent number={props.data.result[0]} />
        <ResultNumCardComponent number={props.data.result[1]} />
        <ResultNumCardComponent number={props.data.result[2]} />
        <ResultNumCardComponent number={props.data.result[3]} />
        <ResultNumCardComponent number={props.data.result[4]} />
        <ResultNumCardComponent number={props.data.result[5]} />
        <ResultNumCardComponent number={props.data.result[6]} />
        <ResultNumCardComponent number={props.data.result[7]} />
        <ResultNumCardComponent number={props.data.result[8]} />
        <ResultNumCardComponent number={props.data.result[9]} />
      </View>
      <View
        style={{
          width: "15%",
          paddingHorizontal: 5,
          justifyContent: "space-around",
          alignItems: "center",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Text style={{ width: "33.3%", textAlign: "center" }}>
          {props.data.res1[0]}
        </Text>
        <ColorText style={{ width: "33.3%" }} data={props.data.res1[1]} />
        <ColorText style={{ width: "33.3%" }} data={props.data.res1[2]} />
      </View>
      <View
        style={{
          width: "20%",
          textAlign: "center",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <ColorText data={props.data.res2[0]} />
        <ColorText data={props.data.res2[1]} />
        <ColorText data={props.data.res2[2]} />
        <ColorText data={props.data.res2[3]} />
        <ColorText data={props.data.res2[4]} />
      </View>
    </View>
  );
};

const ResultHistoryView = () => {
  const data = [
    {
      no: "14094",
      result: [6, 1, 5, 4, 8, 3, 7, 2, 9, 10],
      res1: ["7", "小", "单"],
      res2: ["虎", "虎", "龙", "虎", "龙"],
    },
    {
      no: "14095",
      result: [4, 3, 5, 2, 6, 1, 8, 9, 7, 10],
      res1: ["7", "小", "单"],
      res2: ["虎", "虎", "虎", "虎", "龙"],
    },
    {
      no: "14096",
      result: [8, 2, 10, 3, 5, 4, 6, 7, 9, 1],
      res1: ["10", "小", "双"],
      res2: ["龙", "虎", "龙", "虎", "龙"],
    },
    {
      no: "14097",
      result: [1, 2, 8, 4, 10, 3, 6, 9, 7, 5],
      res1: ["3", "小", "单"],
      res2: ["虎", "虎", "虎", "虎", "龙"],
    },
    {
      no: "14098",
      result: [2, 4, 9, 10, 5, 1, 3, 7, 8, 6],
      res1: ["6", "小", "双"],
      res2: ["虎", "虎", "龙", "龙", "龙"],
    },
    {
      no: "14099",
      result: [3, 2, 5, 7, 9, 4, 8, 1, 10, 6],
      res1: ["5", "小", "单"],
      res2: ["虎", "虎", "龙", "虎", "龙"],
    },
    {
      no: "14100",
      result: [6, 2, 5, 4, 1, 3, 8, 10, 9, 7],
      res1: ["8", "小", "双"],
      res2: ["虎", "虎", "虎", "虎", "虎"],
    },
    {
      no: "14101",
      result: [5, 2, 4, 1, 6, 7, 8, 9, 3, 10],
      res1: ["7", "小", "单"],
      res2: ["虎", "虎", "虎", "虎", "虎"],
    },
    {
      no: "14102",
      result: [4, 7, 9, 2, 5, 10, 8, 3, 1, 6],
      res1: ["11", "小", "单"],
      res2: ["虎", "龙", "龙", "虎", "虎"],
    },
  ];
  return (
    <View style={styles.result_history_view}>
      <View style={styles.result_history_header}>
        <Text style={[styles.grey_text, { width: "15%", textAlign: "center" }]}>
          期号
        </Text>
        <View
          style={{
            flexDirection: "row",
            width: "50%",
            justifyContent: "space-around",
          }}
        >
          <Text style={styles.grey_text}>一</Text>
          <Text style={styles.grey_text}>二</Text>
          <Text style={styles.grey_text}>三</Text>
          <Text style={styles.grey_text}>四</Text>
          <Text style={styles.grey_text}>五</Text>
          <Text style={styles.grey_text}>六</Text>
          <Text style={styles.grey_text}>七</Text>
          <Text style={styles.grey_text}>八</Text>
          <Text style={styles.grey_text}>九</Text>
          <Text style={styles.grey_text}>十</Text>
        </View>
        <Text style={[styles.grey_text, { width: "15%", textAlign: "center" }]}>
          冠亚和
        </Text>
        <Text style={[styles.grey_text, { width: "20%", textAlign: "center" }]}>
          1-5龙虎
        </Text>
      </View>
      <ScrollView vertical showsVerticalScrollIndicator={false}>
        {data.map((item, i) => {
          return <ResultHistoryRecordView data={item} key={i} />;
        })}
        <View
          style={{
            height: 30,
            backgroundColor: "white",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: "#848484",
            }}
          >
            上滑或者点击加载更多数据
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const EmptyView = () => {
  return <View></View>;
};

const KeyboardView = ({ setEditText, editText }) => {
  return (
    <View style={styles.key_view}>
      <View style={styles.key_row}>
        <View
          style={styles.key_col}
          onClick={() => {
            setEditText(editText + "大");
          }}
        >
          <Text style={styles.key_text}>大</Text>
        </View>
        <View
          style={styles.key_col}
          onClick={() => {
            setEditText(editText + "1");
          }}
        >
          <Text style={styles.key_text}>1</Text>
        </View>
        <View
          style={styles.key_col}
          onClick={() => {
            setEditText(editText + "2");
          }}
        >
          <Text style={styles.key_text}>2</Text>
        </View>
        <View
          style={styles.key_col}
          onClick={() => {
            setEditText(editText + "3");
          }}
        >
          <Text style={styles.key_text}>3</Text>
        </View>
        <View
          style={styles.key_col}
          onClick={() => {
            setEditText(editText.substr(0, editText.length - 1));
          }}
        >
          <Image source={BackSpaceBg} style={{ width: 30, height: 20 }} />
        </View>
      </View>
      <View style={styles.key_row}>
        <View
          style={styles.key_col}
          onClick={() => {
            setEditText(editText + "小");
          }}
        >
          <Text style={styles.key_text}>小</Text>
        </View>
        <View
          style={styles.key_col}
          onClick={() => {
            setEditText(editText + "4");
          }}
        >
          <Text style={styles.key_text}>4</Text>
        </View>
        <View
          style={styles.key_col}
          onClick={() => {
            setEditText(editText + "5");
          }}
        >
          <Text style={styles.key_text}>5</Text>
        </View>
        <View
          style={styles.key_col}
          onClick={() => {
            setEditText(editText + "6");
          }}
        >
          <Text style={styles.key_text}>6</Text>
        </View>
        <View
          style={[styles.key_col, { backgroundColor: "#ff453a" }]}
          onClick={() => {
            setEditText(editText + "龙");
          }}
        >
          <Text style={[styles.white_text, { fontSize: 23 }]}>龙</Text>
        </View>
      </View>
      <View style={styles.key_row}>
        <View
          style={styles.key_col}
          onClick={() => {
            setEditText(editText + "单");
          }}
        >
          <Text style={styles.key_text}>单</Text>
        </View>
        <View
          style={styles.key_col}
          onClick={() => {
            setEditText(editText + "7");
          }}
        >
          <Text style={styles.key_text}>7</Text>
        </View>
        <View
          style={styles.key_col}
          onClick={() => {
            setEditText(editText + "8");
          }}
        >
          <Text style={styles.key_text}>8</Text>
        </View>
        <View
          style={styles.key_col}
          onClick={() => {
            setEditText(editText + "9");
          }}
        >
          <Text style={styles.key_text}>9</Text>
        </View>
        <View
          style={[styles.key_col, { backgroundColor: "#198cff" }]}
          onClick={() => {
            setEditText(editText + "虎");
          }}
        >
          <Text style={[styles.white_text, { fontSize: 23 }]}>虎</Text>
        </View>
      </View>
      <View style={styles.key_row}>
        <View
          style={styles.key_col}
          onClick={() => {
            setEditText(editText + "双");
          }}
        >
          <Text style={styles.key_text}>双</Text>
        </View>
        <View
          style={styles.key_col}
          onClick={() => {
            setEditText(editText + " ");
          }}
        >
          <Text style={styles.key_text}>空格</Text>
        </View>
        <View
          style={styles.key_col}
          onClick={() => {
            setEditText(editText + "0");
          }}
        >
          <Text style={styles.key_text}>0</Text>
        </View>
        <View
          style={styles.key_col}
          onClick={() => {
            setEditText(editText + "/");
          }}
        >
          <Text style={styles.key_text}>/</Text>
        </View>
        <View
          style={[styles.key_col, { backgroundColor: "#29a634" }]}
          onClick={() => {
            setEditText(editText + "冠亚和");
          }}
        >
          <Text style={[styles.white_text, { fontSize: 20 }]}>冠亚和</Text>
        </View>
      </View>
    </View>
  );
};

const RequestView = (props) => {
  return (
    <View style={styles.request_view}>
      <Text
        style={[styles.grey_text, { fontSize: 16 }]}
        onClick={() => props.setEditText(props.editText + "上分")}
      >
        上分
      </Text>
      <Text
        style={[styles.grey_text, { fontSize: 16 }]}
        onClick={() => props.setEditText(props.editText + "取消")}
      >
        取消
      </Text>
      <Text
        style={[styles.grey_text, { fontSize: 16 }]}
        onClick={() => props.setEditText(props.editText + "梭哈")}
      >
        梭哈
      </Text>
      <Text
        style={[styles.grey_text, { fontSize: 16 }]}
        onClick={() => props.setEditText(props.editText + "重复")}
      >
        重复
      </Text>
      <Text
        style={[styles.grey_text, { fontSize: 16 }]}
        onClick={() => props.setEditText(props.editText + "下分")}
      >
        下分
      </Text>
    </View>
  );
};

const HeaderView = (props) => {
  const [animationViewFlag, setAnimationViewFlag] = useState(false);
  const [viewFlag, setViewFlag] = useState([false, false, false, false]);

  const timerRef = useRef();

  const [time, setTime] = useState(0);

  const remainMinutes = Math.floor(
    (time - Math.floor(time / 3600) * 3600) / 60
  );
  const remainSeconds = time - Math.floor(time / 60) * 60;
  let nums = [4, 5, 7, 6, 1, 3, 9, 8, 10, 2];
  if (props.roominfo) nums = props.roominfo.result.data.preDrawCode.split(",");

  console.log(nums);
  useEffect(() => {
    setTime(props.remainTime);
  }, [props.remainTime]);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setTime((time) => time - 1);
    }, 1000);
    return () => clearInterval(timerRef.current);
  }, [time]);

  return (
    <View style={{ zIndex: 2 }}>
      <View>
        <View style={{ width: "100%", height: 50 }}>
          <LinearGradient
            colors={["#386f96", "#6292b0"]}
            style={styles.header_back}
          >
            <View
              style={styles.back_btn}
              onClick={() => {
                if (!props.showBetControlFlag) props.navigation.goBack();
                else props.setShowBetControlFlag(false);
              }}
            >
              <Image source={backBtnBg} style={styles.back_img} />
            </View>
            <View style={styles.header_info_view}>
              <View style={styles.header_col}>
                <Text style={[styles.white_text, { fontSize: 18 }]}>
                  <b>幸运飞艇</b>
                </Text>
              </View>
              <View style={styles.header_col}>
                <Text style={[styles.white_text]}>积分: 0.00</Text>
                <Text style={[styles.white_text]}>回水: 0.00</Text>
              </View>
              <View style={styles.header_col}>
                <Text style={[styles.white_text]}>输赢: 0.00</Text>
                <Text style={[styles.white_text]}>流水: 0.00</Text>
              </View>
            </View>
          </LinearGradient>
        </View>
      </View>
      <View style={styles.room_info_view}>
        <View
          style={[
            styles.info_row,
            { borderBottomColor: "#f4f4f4", borderBottomWidth: 1 },
          ]}
        >
          <View style={styles.time_view}>
            <Text style={[styles.grey_text, { fontSize: 12 }]}>11165</Text>
            <View style={styles.countdown_view}>
              <GreyCardComponent
                number={Math.floor(remainMinutes / 10) % 10}
                style={{ marginLeft: 0 }}
              />
              <GreyCardComponent
                number={remainMinutes % 10}
                style={{ marginLeft: 5 }}
              />
              <View
                style={{
                  width: 10,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 20, color: "#aaa", marginTop: -10 }}>
                  :
                </Text>
              </View>
              <GreyCardComponent
                number={Math.floor(remainSeconds / 10) % 10}
                style={{ marginLeft: 0 }}
              />
              <GreyCardComponent
                number={remainSeconds % 10}
                style={{ marginLeft: 5 }}
              />
            </View>
          </View>
          <View style={styles.animation_view}>
            <Image
              source={AnimationImg}
              style={styles.animation_img}
              onClick={() => setAnimationViewFlag(!animationViewFlag)}
            />
          </View>
          <View style={styles.action_view}>
            <View
              style={styles.action_btn}
              onClick={() => setViewFlag([!viewFlag[0], false, false, false])}
            >
              <Text style={styles.white_text}>注单</Text>
            </View>
            <View
              style={styles.action_btn}
              onClick={() => setViewFlag([false, !viewFlag[1], false, false])}
            >
              <Text style={styles.white_text}>长龙</Text>
            </View>
            <View
              style={styles.action_btn}
              onClick={() => setViewFlag([false, false, !viewFlag[2], false])}
            >
              <Text style={styles.white_text}>预测</Text>
            </View>
          </View>
        </View>
        <View style={styles.info_row}>
          <View style={{ width: "20%" }}>
            <Text style={[styles.grey_text, { fontSize: 12 }]}>11166</Text>
          </View>
          <View style={styles.result_view}>
            <View style={styles.result_row}>
              <ResultNumCardComponent number={parseInt(nums[0])} />
              <ResultNumCardComponent number={parseInt(nums[1])} />
              <ResultNumCardComponent number={parseInt(nums[2])} />
              <ResultNumCardComponent number={parseInt(nums[3])} />
              <ResultNumCardComponent number={parseInt(nums[4])} />
              <ResultNumCardComponent number={parseInt(nums[5])} />
              <ResultNumCardComponent number={parseInt(nums[6])} />
              <ResultNumCardComponent number={parseInt(nums[7])} />
              <ResultNumCardComponent number={parseInt(nums[8])} />
              <ResultNumCardComponent number={parseInt(nums[9])} />
            </View>
            <View>
              <View>
                <Text style={{ color: "#8f8f8f" }}>冠亚和</Text>
                <View style={{ flexDirection: "row" }}>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text>11</Text>
                    <ColorText data="小" />
                    <ColorText data="双" />
                  </View>
                  <Image
                    source={DownBlueArrow}
                    style={{ width: 15, height: 8 }}
                    onClick={() =>
                      setViewFlag([false, false, false, !viewFlag[3]])
                    }
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.drop_down_view}>
        {animationViewFlag ? <AnimationSliderView /> : <EmptyView />}
        {viewFlag[0] ? <SingleRecord /> : <EmptyView />}
        {viewFlag[1] ? <LongDragonView /> : <EmptyView />}
        {viewFlag[2] ? <PredictView /> : <EmptyView />}
        {viewFlag[3] ? <ResultHistoryView /> : <EmptyView />}
      </View>
    </View>
  );
};

const BettingView = (props) => {
  const [showKeyboardFlag, setShowKeyboardFlag] = useState(false);
  const [showCategoryFlag, setShowCategoryFlag] = useState(false);
  const userinfo = useSelector((state) => state.authState.userinfo);

  const [chatlist, setChatList] = useState([
    { username: "枯味美人", content: "3/2352/60" },
  ]);
  const [editText, setEditText] = useState("");

  const inputScrollRef = useRef();
  const betScrollRef = useRef();
  return (
    <View style={{ height: "calc(100% - 130px)", zIndex: 1 }}>
      <ScrollView
        vertical
        showsVerticalScrollIndicator={false}
        style={[styles.betting_view]}
        onClick={() => setShowKeyboardFlag(false)}
        onContentSizeChange={() => {
          betScrollRef.current.scrollToEnd();
        }}
        ref={betScrollRef}
      >
        {chatlist.map((item, i) => {
          return (
            <>
              {item.username == userinfo.username ? (
                <SentMessageBox name={item.username} content={item.content} />
              ) : (
                <ReceivedMessageBox
                  name={item.username}
                  content={item.content}
                  key={i}
                />
              )}
            </>
          );
        })}
      </ScrollView>
      <View style={styles.bottom_view}>
        <View style={styles.bottom_edit_view}>
          <Image
            source={ShowKeyboardBtnBg}
            style={styles.edit_btn}
            onClick={() => setShowKeyboardFlag(!showKeyboardFlag)}
          />
          <View
            style={[styles.edit_msg, { outline: "none" }]}
            onClick={() => setShowKeyboardFlag(true)}
          >
            <ScrollView
              ref={inputScrollRef}
              horizontal
              showsHorizontalScrollIndicator={false}
              onContentSizeChange={() => {
                inputScrollRef.current.scrollToEnd();
              }}
            >
              <Text style={[{ fontSize: 18 }, styles.grey_text]}>
                {editText}
              </Text>
            </ScrollView>
          </View>
          <Image
            source={SendMsgBtnBg}
            style={styles.edit_btn}
            onClick={() => {
              setChatList([
                ...chatlist,
                { username: userinfo.username, content: editText },
              ]);
              setEditText("");
            }}
          />
        </View>
        {showKeyboardFlag ? (
          <RequestView setEditText={setEditText} editText={editText} />
        ) : (
          <EmptyView />
        )}
        {showKeyboardFlag ? (
          <KeyboardView setEditText={setEditText} editText={editText} />
        ) : (
          <EmptyView />
        )}
      </View>
      <View style={styles.right_sidebar}>
        <Image
          source={CategoryBtnBg}
          style={styles.category_btn}
          onClick={() => setShowCategoryFlag(true)}
        />
        <Image
          source={ChatBtnBg}
          style={[styles.sidebar_btn, { marginTop: 60 }]}
          onClick={() => props.navigation.navigate("CustomerService")}
        />
        <Image
          source={BetControlBtnBg}
          style={styles.sidebar_btn}
          onClick={() => {
            props.setShowBetControlFlag(true);
          }}
        />
        <Image source={RedEnvelopeBtnBg} style={styles.sidebar_btn} />
        <Image source={PaymentBtnBg} style={styles.sidebar_btn} />
      </View>
      {showCategoryFlag ? (
        <View style={styles.game_category_view}>
          <View style={styles.category_header}>
            <View style={styles.category_header_row}>
              <Image
                source={CategoryHeaderIcon}
                style={{ width: 25, height: 25, marginRight: 10 }}
                onClick={() => setShowCategoryFlag(false)}
              />
              <Text style={{ fontSize: 20, color: "#5caaf9" }}>切换游戏</Text>
            </View>
          </View>
          <ScrollView>
            <View style={styles.category_row}>
              <View
                style={{
                  width: "30%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  source={GameSymbol1Bg}
                  style={{ width: 40, height: 30, resizeMode: "stretch" }}
                />
              </View>
              <View style={{ width: "40%" }}>
                <Text style={{ fontSize: 16 }}>幸运飞艇</Text>
                <Text style={[styles.grey_text, { fontSize: 12 }]}>
                  第20221113122期
                </Text>
              </View>
              <View style={{ textAlign: "left", width: "30%", marginLeft: 10 }}>
                <Text style={styles.grey_text}>距离封盘</Text>
                <Text style={[styles.grey_text, { fontSize: 10 }]}>02:14</Text>
              </View>
            </View>
            <View style={styles.category_row}>
              <View
                style={{
                  width: "30%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  source={GameSymbol2Bg}
                  style={{ width: 40, height: 30, resizeMode: "stretch" }}
                />
              </View>
              <View style={{ width: "40%" }}>
                <Text style={{ fontSize: 16 }}>幸运飞艇</Text>
                <Text style={[styles.grey_text, { fontSize: 12 }]}>
                  第20221113122期
                </Text>
              </View>
              <View style={{ textAlign: "left", width: "30%", marginLeft: 10 }}>
                <Text style={styles.grey_text}>距离封盘</Text>
                <Text style={[styles.grey_text, { fontSize: 10 }]}>02:14</Text>
              </View>
            </View>
            <View style={styles.category_row}>
              <View
                style={{
                  width: "30%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  source={GameSymbol3Bg}
                  style={{ width: 40, height: 30, resizeMode: "stretch" }}
                />
              </View>
              <View style={{ width: "40%" }}>
                <Text style={{ fontSize: 16 }}>幸运飞艇</Text>
                <Text style={[styles.grey_text, { fontSize: 12 }]}>
                  第20221113122期
                </Text>
              </View>
              <View style={{ textAlign: "left", width: "30%", marginLeft: 10 }}>
                <Text style={styles.grey_text}>封盘中</Text>
              </View>
            </View>
          </ScrollView>
        </View>
      ) : (
        <EmptyView />
      )}
    </View>
  );
};

const BetControlSideBarList = (props) => {
  return (
    <View
      style={[
        styles.bet_control_side_bar_list,
        {
          backgroundColor: props.selected ? "#6292b0" : "transparent",
        },
      ]}
      onClick={() => props.setSelectSideBar(props.selfIndex)}
    >
      <Text
        style={{
          fontSize: 16,
          color: props.selected ? "white" : "#848484",
        }}
      >
        {props.text}
      </Text>
    </View>
  );
};

const NumberOrderView = ({ item, onClick }) => {
  return (
    <View
      style={{
        width: "47%",
        height: 40,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: item.selected ? "#6292b0" : "#f5f5f5",
        borderRadius: 5,
        marginHorizontal: 5,
        marginVertical: 5,
      }}
      onClick={() => {
        onClick();
      }}
    >
      {typeof item.method == "number" ? (
        <ResultNumCardComponent
          number={item.method}
          style={{ width: 30, height: 30, borderRadius: 3, marginLeft: 10 }}
        />
      ) : (
        <Text
          style={{
            color: item.selected ? "white" : "#848484",
            fontSize: 16,
            marginLeft: 20,
          }}
        >
          {item.method}
        </Text>
      )}
      <Text
        style={{
          fontSize: 20,
          color: item.selected ? "white" : "#848484",
          marginLeft: 20,
        }}
      >
        {item.order}
      </Text>
    </View>
  );
};

const TypeBtnView = ({ item, onClick }) => {
  return (
    <View
      style={{
        backgroundColor: item.selected ? "#6292b0" : "#e6e6e6",
        justifyContent: "center",
        alignItems: "center",
        height: 30,
        width: "23%",
        borderRadius: 5,
        margin: 2,
      }}
      onClick={() => onClick()}
    >
      <Text style={{ color: item.selected ? "white" : "#848484" }}>
        {item.title}
      </Text>
    </View>
  );
};

const QuickView = () => {
  const selectCategory = (index) => {
    var temp = [...data];
    temp[index].selected = !data[index].selected;
    setData(temp);
  };

  const selectOrder = (index) => {
    var temp = [...orderData];
    temp[index].selected = !orderData[index].selected;
    setOrderData(temp);
  };

  const [data, setData] = useState([
    { title: "冠军", selected: false },
    { title: "亚军", selected: false },
    { title: "第三名", selected: false },
    { title: "第四名", selected: false },
    { title: "第五名", selected: false },
    { title: "第六名", selected: false },
    { title: "第七名", selected: false },
    { title: "第八名", selected: false },
    { title: "第九名", selected: false },
    { title: "第十名", selected: false },
  ]);

  const [orderData, setOrderData] = useState([
    { order: "9. 8", method: 1 },
    { order: "9. 8", method: 2 },
    { order: "9. 8", method: 3 },
    { order: "9. 8", method: 4 },
    { order: "9. 8", method: 5 },
    { order: "9. 8", method: 6 },
    { order: "9. 8", method: 7 },
    { order: "9. 8", method: 8 },
    { order: "9. 8", method: 9 },
    { order: "9. 8", method: 10 },
    { order: "1. 96", method: "大" },
    { order: "1. 96", method: "小" },
    { order: "1. 96", method: "单" },
    { order: "1. 96", method: "双" },
  ]);

  const ItemTypeBtn = ({ item, index }) => {
    return (
      <TypeBtnView
        item={item}
        onClick={() => {
          selectCategory(index);
        }}
      />
    );
  };

  const ItemNumberOrder = ({ item, index }) => {
    return <NumberOrderView item={item} onClick={() => selectOrder(index)} />;
  };

  return (
    <View>
      <View>
        <FlatList
          style={{ marginHorizontal: 5, marginTop: 5 }}
          data={data}
          renderItem={ItemTypeBtn}
          numColumns={4}
        />
        <FlatList
          data={orderData}
          renderItem={ItemNumberOrder}
          style={{ padding: 5 }}
          numColumns={2}
        />
      </View>
      <View></View>
    </View>
  );
};

const TypeRowView = ({ item, onClickDropDown, onClickOrder }) => {
  const ItemNumberOrder = ({ item, index }) => {
    return <NumberOrderView item={item} onClick={() => onClickOrder(index)} />;
  };

  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#f5f5f5",
          borderRadius: 5,
          height: 40,
          marginHorizontal: 10,
        }}
        onClick={() => onClickDropDown()}
      >
        <Text style={{ fontSize: 16, color: "#848484" }}>{item.title}</Text>
        <Image
          source={DownArrow}
          style={{
            width: 13,
            height: 10,
            resizeMode: "contain",
            marginLeft: 20,
            marginTop: 5,
          }}
        />
      </View>
      {item.showDropdown ? (
        <FlatList
          data={item.data}
          renderItem={ItemNumberOrder}
          style={{ padding: 5 }}
          numColumns={2}
        />
      ) : (
        <EmptyView />
      )}
    </View>
  );
};

const OddBtnView = ({ item, onClick }) => {
  return (
    <View
      style={{
        width: "22%",
        height: 30,
        marginHorizontal: 5,
        backgroundColor: item.selected ? "#6292b0" : "#e6e6e6",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
      }}
      onClick={() => onClick()}
    >
      <Text style={{ color: item.selected ? "white" : "#848484" }}>
        {item.num}
      </Text>
    </View>
  );
};

const OddRowView = ({ item, onClickNum }) => {
  const ItemOddBtn = ({ item, index }) => {
    return <OddBtnView item={item} onClick={() => onClickNum(index)} />;
  };
  return (
    <View
      style={{ backgroundColor: "white", marginVertical: 5, borderRadius: 5 }}
    >
      <View
        style={{
          borderBottomColor: "#ededed",
          borderBottomWidth: 1,
          paddingVertical: 5,
          paddingLeft: 5,
        }}
      >
        <Text style={{ color: "#666666", fontSize: 16 }}>
          <b>赔率 : </b>
          <Text style={{ color: "#ff2d53", fontSize: 16 }}>
            <b>{item.odd}</b>
          </Text>
        </Text>
      </View>
      <View style={{ paddingHorizontal: 5, paddingBottom: 5, paddingTop: 5 }}>
        <FlatList
          data={item.btnData}
          numColumns={item.btnData.length}
          renderItem={ItemOddBtn}
        />
      </View>
    </View>
  );
};

const OneTenView = () => {
  const typeData = [
    "冠军",
    "亚军",
    "第三名",
    "第四名",
    "第五名",
    "第六名",
    "第七名",
    "第八名",
    "第九名",
    "第十名",
  ];

  const orderData = [
    { order: "9. 8", method: 1, selected: false },
    { order: "9. 8", method: 2, selected: false },
    { order: "9. 8", method: 3, selected: false },
    { order: "9. 8", method: 4, selected: false },
    { order: "9. 8", method: 5, selected: false },
    { order: "9. 8", method: 6, selected: false },
    { order: "9. 8", method: 7, selected: false },
    { order: "9. 8", method: 8, selected: false },
    { order: "9. 8", method: 9, selected: false },
    { order: "9. 8", method: 10, selected: false },
  ];

  var temp = typeData.map((item, i) => {
    return { title: item, showDropdown: true, data: orderData };
  });

  const [data, setData] = useState(temp);

  const clickDropDown = (index) => {
    var temp = [...data];
    temp[index].showDropdown = !data[index].showDropdown;
    setData(temp);
  };

  const selectOrder = (rowIndex, index) => {
    var temp = [];
    var temp = data.map((item, i) => {
      if (i !== rowIndex) return item;
      else {
        var temp = [];
        temp = item.data.map((item, i) => {
          if (i === index) return { ...item, selected: !item.selected };
          else return item;
        });
        return { ...item, data: temp };
      }
    });
    setData(temp);
  };

  const ItemTypeRow = ({ item, index }) => {
    return (
      <TypeRowView
        item={item}
        onClickDropDown={() => clickDropDown(index)}
        onClickOrder={(e) => selectOrder(index, e)}
      />
    );
  };

  return (
    <View style={{ paddingTop: 10 }}>
      <FlatList data={data} renderItem={ItemTypeRow} numColumns={1} />
    </View>
  );
};

const BothSideView = () => {
  const typeData = [
    "冠亚和",
    "冠军",
    "亚军",
    "第三名",
    "第四名",
    "第五名",
    "第六名",
    "第七名",
    "第八名",
    "第九名",
    "第十名",
  ];

  const orderData1 = [
    { order: "1. 96", method: "大", selected: false },
    { order: "1. 96", method: "小", selected: false },
    { order: "1. 96", method: "单", selected: false },
    { order: "1. 96", method: "双", selected: false },
    { order: "1. 96", method: "龙", selected: false },
    { order: "1. 96", method: "虎", selected: false },
  ];

  const orderData2 = [
    { order: "1. 96", method: "大", selected: false },
    { order: "1. 96", method: "小", selected: false },
    { order: "1. 96", method: "单", selected: false },
    { order: "1. 96", method: "双", selected: false },
  ];
  const [data, setData] = useState([]);

  useEffect(() => {
    var temp = typeData.map((item, i) => {
      if (i >= 6) return { title: item, showDropdown: true, data: orderData2 };
      else return { title: item, showDropdown: true, data: orderData1 };
    });
    setData(temp);
  }, []);

  const clickDropDown = (index) => {
    var temp = [...data];
    temp[index].showDropdown = !data[index].showDropdown;
    setData(temp);
  };

  const selectOrder = (dropdownIndex, index) => {
    var temp = [];
    var temp = data.map((item, i) => {
      if (i !== dropdownIndex) return item;
      else {
        var temp = [];
        temp = item.data.map((item, i) => {
          if (i === index) return { ...item, selected: !item.selected };
          else return item;
        });
        return { ...item, data: temp };
      }
    });
    setData(temp);
  };

  const ItemTypeRow = ({ item, index }) => {
    return (
      <TypeRowView
        item={item}
        onClickDropDown={() => clickDropDown(index)}
        onClickOrder={(e) => {
          selectOrder(index, e);
        }}
      />
    );
  };
  return (
    <View style={{ paddingTop: 10 }}>
      <FlatList data={data} renderItem={ItemTypeRow} numColumns={1} />
    </View>
  );
};

const CrownAsiaView = () => {
  const [orderData, setOrderData] = useState([
    {
      odd: "4 0",
      btnData: [
        { num: 3, selected: false },
        { num: 4, selected: false },
        { num: 18, selected: false },
        { num: 19, selected: false },
      ],
    },
    {
      odd: "2 0",
      btnData: [
        { num: 5, selected: false },
        { num: 6, selected: false },
        { num: 16, selected: false },
        { num: 17, selected: false },
      ],
    },
    {
      odd: "1 2",
      btnData: [
        { num: 7, selected: false },
        { num: 8, selected: false },
        { num: 14, selected: false },
        { num: 15, selected: false },
      ],
    },
    {
      odd: "1 0",
      btnData: [
        { num: 9, selected: false },
        { num: 10, selected: false },
        { num: 12, selected: false },
        { num: 13, selected: false },
      ],
    },
    {
      odd: "8",
      btnData: [{ num: 11, selected: false }],
    },
  ]);

  const clickNum = (rowIndex, index) => {
    var temp = [];
    var temp = orderData.map((item, i) => {
      if (i !== rowIndex) return item;
      else {
        var temp = [];
        temp = item.btnData.map((item, i) => {
          if (i === index) return { ...item, selected: !item.selected };
          else return item;
        });
        return { ...item, btnData: temp };
      }
    });
    setOrderData(temp);
  };
  const ItemOddRow = ({ item, index }) => {
    return <OddRowView item={item} onClickNum={(e) => clickNum(index, e)} />;
  };

  return (
    <View>
      <FlatList data={orderData} renderItem={ItemOddRow} numColumns={1} />
    </View>
  );
};

const BetControlBottomView = ({ showKeyboardFlag, setShowKeyboardFlag }) => {
  return (
    <View style={styles.bet_control_bottom_view}>
      <View
        style={{
          borderTopColor: "#e8e8e8",
          borderTopWidth: 1,
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <View style={styles.bet_value}>
          <Text style={styles.bet_value_text}>5</Text>
        </View>
        <View style={styles.bet_value}>
          <Text style={styles.bet_value_text}>10</Text>
        </View>
        <View style={styles.bet_value}>
          <Text style={styles.bet_value_text}>50</Text>
        </View>
        <View style={styles.bet_value}>
          <Text style={styles.bet_value_text}>100</Text>
        </View>
        <View style={styles.bet_value}>
          <Text style={styles.bet_value_text}>500</Text>
        </View>
      </View>
      <View
        style={{
          borderTopColor: "#e8e8e8",
          borderTopWidth: 1,
          flexDirection: "row",
          paddingVertical: 5,
          paddingLeft: 10,
        }}
      >
        <Text style={[styles.grey_text, { fontSize: 16 }]}>下注总额 : 0</Text>
        <Text style={[styles.grey_text, { fontSize: 16, marginLeft: 50 }]}>
          共 0 注单
        </Text>
      </View>
      <View
        style={{
          borderTopColor: "#e8e8e8",
          borderTopWidth: 1,
          flexDirection: "row",
        }}
        onClick={() => setShowKeyboardFlag(true)}
      ></View>
      <View
        style={{
          padding: 5,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            backgroundColor: "white",
            alignItems: "center",
            borderRadius: 5,
            height: 35,
            justifyContent: "center",
          }}
        >
          <Text style={[styles.grey_text, { fontSize: 16, marginRight: 60 }]}>
            请输入下注金额!
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: 80,
              height: 35,
              backgroundColor: "#79b4d9",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 5,
            }}
          >
            <Text style={{ color: "white", fontSize: 16 }}>下注</Text>
          </View>
          <View
            style={{
              width: 80,
              height: 35,
              backgroundColor: "#ff2d55",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 5,
              marginLeft: 10,
            }}
          >
            <Text style={{ color: "white", fontSize: 16 }}>重置</Text>
          </View>
        </View>
      </View>
      {showKeyboardFlag ? (
        <View style={[styles.number_pan_view]}>
          <View style={styles.num_row}>
            <TouchableOpacity style={styles.num_column}>
              <Text style={{ fontSize: 25 }}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.num_column}>
              <Text style={{ fontSize: 25 }}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.num_column}>
              <Text style={{ fontSize: 25 }}>3</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.num_row}>
            <TouchableOpacity style={styles.num_column}>
              <Text style={{ fontSize: 25 }}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.num_column}>
              <Text style={{ fontSize: 25 }}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.num_column}>
              <Text style={{ fontSize: 25 }}>6</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.num_row}>
            <TouchableOpacity style={styles.num_column}>
              <Text style={{ fontSize: 25 }}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.num_column}>
              <Text style={{ fontSize: 25 }}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.num_column}>
              <Text style={{ fontSize: 25 }}>9</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.num_row}>
            <TouchableOpacity style={styles.num_column}></TouchableOpacity>
            <TouchableOpacity style={styles.num_column}>
              <Text style={{ fontSize: 25 }}>0</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.num_column}>
              <Image
                source={BackSpaceBg}
                style={{ width: 30, height: 20, resizeMode: "stretch" }}
              />
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <EmptyView />
      )}
    </View>
  );
};

const BetControlView = () => {
  const [selectSideBar, setSelectSideBar] = useState(0);
  const [showKeyboardFlag, setShowKeyboardFlag] = useState(false);
  return (
    <View style={styles.bet_control_view}>
      <View
        style={styles.bet_control_info_view}
        onClick={() => setShowKeyboardFlag(false)}
      >
        <View style={styles.bet_control_side_bar}>
          <BetControlSideBarList
            selectSideBar={selectSideBar}
            setSelectSideBar={setSelectSideBar}
            selected={selectSideBar == 0}
            selfIndex={0}
            text="快捷"
          />
          <BetControlSideBarList
            selectSideBar={selectSideBar}
            setSelectSideBar={setSelectSideBar}
            selected={selectSideBar == 1}
            selfIndex={1}
            text="1~10名"
          />
          <BetControlSideBarList
            selectSideBar={selectSideBar}
            setSelectSideBar={setSelectSideBar}
            selected={selectSideBar == 2}
            selfIndex={2}
            text="两面"
          />
          <BetControlSideBarList
            selectSideBar={selectSideBar}
            setSelectSideBar={setSelectSideBar}
            selected={selectSideBar == 3}
            selfIndex={3}
            text="冠亚和"
          />
        </View>
        <ScrollView vertical showsVerticalScrollIndicator={false}>
          {selectSideBar === 0 ? <QuickView /> : <EmptyView />}
          {selectSideBar === 1 ? <OneTenView /> : <EmptyView />}
          {selectSideBar === 2 ? <BothSideView /> : <EmptyView />}
          {selectSideBar === 3 ? <CrownAsiaView /> : <EmptyView />}
        </ScrollView>
      </View>
      <BetControlBottomView
        showKeyboardFlag={showKeyboardFlag}
        setShowKeyboardFlag={setShowKeyboardFlag}
      />
    </View>
  );
};

const GameRoomPage = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const lottries = useSelector((state) => state.lotteriesState.lotteries);
  const [roomId, setRoomId] = useState(0);
  const [remainTime, setRemainTime] = useState(0);
  useEffect(() => {
    setRoomId(route.params.roomId);
    setRemainTime(route.params.remainTime);
  }, []);

  const [showBetControlFlag, setShowBetControlFlag] = useState(false);
  return (
    <View style={styles.container}>
      <HeaderView
        showBetControlFlag={showBetControlFlag}
        navigation={navigation}
        setShowBetControlFlag={setShowBetControlFlag}
        roominfo={lottries[roomId]}
        remainTime={remainTime}
      />
      {!showBetControlFlag ? (
        <BettingView
          setShowBetControlFlag={setShowBetControlFlag}
          navigation={navigation}
        />
      ) : (
        <BetControlView />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header_back: {
    height: "100%",
    flexDirection: "row",
  },
  back_btn: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  back_img: {
    width: 13,
    height: 16,
    resizeMode: "contain",
    marginLeft: 10,
    marginRight: 5,
  },
  header_info_view: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
  },
  header_col: {
    width: "33.3%",
    height: "100%",
    justifyContent: "space-around",
  },
  room_info_view: {
    width: "100%",
    backgroundColor: "white",
    paddingHorizontal: 10,
  },
  countdown_view: {
    flexDirection: "row",
  },
  info_row: {
    flexDirection: "row",
    alignItems: "center",
    height: 38,
  },
  time_view: {
    width: "40%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  animation_view: {
    width: "15%",
    justifyContent: "center",
    alignItems: "flex-end",
    paddingRight: 5,
  },
  animation_img: {
    width: 30,
    height: 30,
  },
  action_view: {
    width: "45%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  action_btn: {
    width: 50,
    height: 30,
    borderRadius: 5,
    color: "white",
    backgroundColor: "#79b4d9",
    justifyContent: "center",
    alignItems: "center",
  },
  result_view: {
    width: "75%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  result_row: {
    width: "85%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  white_text: {
    color: "white",
  },
  blue_text: {
    color: "#2b75e3",
  },
  grey_text: {
    color: "#848484",
  },
  drop_down_view: {
    zIndex: 4,
  },
  slider_bg: {
    height: 200,
    resizeMode: "contain",
  },
  animation_slider_view: {
    zIndex: 4,
    position: "absolute",
    width: "100%",
  },
  single_record_view: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    position: "absolute",
    width: "100%",
    zIndex: 3,
  },
  long_dragon_view: {
    backgroundColor: "white",
    zIndex: 3,
    maxHeight: 310,
    position: "absolute",
    width: "100%",
  },
  l_d_header: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 40,
    borderBottomColor: "#e5e5e5",
    borderBottomWidth: 1,
  },
  l_d_scroll_view: {
    height: "100%",
  },
  l_d_bottom: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    borderBottomColor: "#e5e5e5",
    borderBottomWidth: 1,
  },
  predict_view: {
    backgroundColor: "white",
    zIndex: 3,
    position: "absolute",
    width: "100%",
    height: 310,
  },
  predict_header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    borderBottomColor: "#e5e5e5",
    borderBottomWidth: 1,
  },
  predict_header_text: {
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  predict_header_name: {
    width: "20%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRightColor: "#e5e5e5",
    borderRightWidth: 1,
  },
  predict_header_group: {
    width: "80%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  predict_row_view: {
    flexDirection: "row",
    height: 35,
    borderBottomColor: "#e5e5e5",
    borderBottomWidth: 1,
  },
  betting_view: {
    paddingHorizontal: 50,
    zIndex: 1,
    width: "100%",
  },
  bottom_edit_view: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 40,
    backgroundColor: "white",
  },
  edit_btn: {
    width: 25,
    height: 25,
    resizeMode: "stretch",
    marginLeft: 10,
    marginRight: 10,
  },
  edit_msg: {
    width: "70%",
    height: 30,
    backgroundColor: "#f5f5f5",
    justifyContent: "center",
    paddingLeft: 10,
  },
  bottom_view: {
    zIndex: 2,
  },
  request_view: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "white",
    height: 50,
  },
  key_view: {
    backgroundColor: "#ededed",
    width: "100%",
    flexDirection: "column",
    justifyContent: "space-around",
    height: 210,
  },
  key_row: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  key_col: {
    height: 45,
    width: "18%",
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    fontSize: 30,
  },
  key_text: {
    color: "#848484",
    fontSize: 23,
  },
  right_sidebar: {
    position: "absolute",
    top: 15,
    right: 0,
    zIndex: 1,
  },
  category_btn: {
    width: 45,
    height: 37,
    resizeMode: "stretch",
  },
  sidebar_btn: {
    marginTop: 10,
    width: 40,
    height: 40,
    resizeMode: "stretch",
  },
  game_category_view: {
    position: "absolute",
    top: 10,
    width: 270,
    height: "calc(100% - 80px)",
    backgroundColor: "white",
    right: 0,
    zIndex: 2,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    paddingLeft: 5,
  },
  category_header_row: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    borderBottomColor: "#f3f2f4",
    borderBottomWidth: 2,
  },
  category_row: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomColor: "#f3f2f4",
    borderBottomWidth: 2,
  },
  result_history_header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    height: 40,
  },
  result_history_view: {
    backgroundColor: "white",
    zIndex: 3,
    position: "absolute",
    width: "100%",
    height: 250,
  },
  bet_control_view: {
    height: "calc(100% - 130px)",
    backgroundColor: "#efefef",
  },
  bet_control_info_view: {
    flexShrink: 1,
    flexDirection: "row",
  },
  bet_control_side_bar: {
    width: "25%",
    height: 500,
  },
  bet_control_bottom_view: {
    justifySelf: "flex-end",
  },
  bet_control_side_bar_list: {
    width: "100%",
    height: 40,
    color: "#848484",
    justifyContent: "center",
    alignItems: "center",
  },
  bet_value: {
    backgroundColor: "#7db2d8",
    width: "18%",
    borderRadius: 5,
    height: 30,
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  bet_value_text: {
    color: "white",
    fontSize: 14,
  },
  number_pan_view: {
    backgroundColor: "#f6f6f6",
  },
  num_row: {
    height: "25%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  num_column: {
    width: "33.33%",
    height: 51,
    textAlign: "center",
    borderColor: "#aaa",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default GameRoomPage;
