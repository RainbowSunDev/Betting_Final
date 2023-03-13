import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useImperativeHandle,
  forwardRef,
  useLayoutEffect,
} from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Dimensions,
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

import ApplyRecordBg from "./img/applyRecordBg.png";
import ChangeCreditBg from "./img/ChangeCreditBg.png";
import DownPointBg from "./img/downPointBg.png";
import GameRecordBg from "./img/gameRecordBg.png";
import QuizReportBg from "./img/quizReportBg.png";
import RedEnvelopeBg from "./img/redEnvelopeBg.png";
import selfHelpBackwaterBg from "./img/selfHelpBackwaterBg.png";
import StatementBenefitBg from "./img/statementBenefitBg.png";
import UpPointBg from "./img/upPointBg.png";
import ActiveDot from "./img/activeDot.png";
import InActiveDot from "./img/inActiveDot.png";

import { useDispatch, useSelector } from "react-redux";
import {
  DEFAULT_BACKGROUND_COLOR,
  DEFAULT_UNSELECTED_COLOR,
} from "../../styles/theme.style";

import {
  ARRYA_ERROR_MSG,
  BLOCKING_TIME,
  INPUT_BET_AMOUNT,
  INVALID_BET_CODE,
  RES_STATUS_SUCCESS,
  SOCKET_BET_BET,
  SOCKET_BET_BLOCKING_EVENT1,
  SOCKET_BET_DRWAING_EVENT1,
  SOCKET_BET_JOIN_ROOM,
  SOCKET_BET_NEWTURN_EVENT1,
  SOCKET_BET_USER_LOG,
  SOCKET_BET_WARNING_EVENT1,
  SOCKET_LOTTERY_STATISTICS,
  SOCKET_RECENT_LOTTERY_RESULT,
  SUCCESS_BET,
} from "../../config/constants";
import { checkSocketResponse } from "../../utils";
import { showToast } from "../../redux/toastReducer";
import { socket } from "../../services/socket.service";
import { Vibration } from "react-native";
import { saveCurrentLottery } from "../../redux/lotteriesReducer";
import { savePoint } from "../../redux/authReducer";

const formatProfit = (val) => {
  return Math.floor(val * 100) / 100;
};
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

const SingleRecord = ({ betLogs }) => {
  // const origin = [
  //   { result: "a", detail: [1, 2, 3, 4, 5] },
  //   { result: "a", detail: [1, 2, 3, 4, 5] },
  //   { result: "a", detail: [1, 2, 3, 4, 5] },
  //   { result: "a", detail: [1, 2, 3, 4, 5] },
  // ];

  const [data, setData] = useState([]);

  const clickDropDown = (index) => {
    var temp = [...data];
    temp[index].selected = !data[index].selected;
    setData(temp);
  };
  const renderDetailRow = ({ item }) => {
    return (
      <View
        style={{
          borderBottomColor: "#eaeaea",
          borderBottomWidth: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          paddingVertical: 10,
          paddingHorizontal: 20,
        }}
      >
        <Text style={styles.grey_text}>
          {item.result.description[0]}【{item.result.description[1]}】{" "}
          {Math.abs(formatProfit(item.result.profit))}
        </Text>
        <Text style={styles.grey_text}>{`${item.betTime.substring(
          5,
          10
        )} ${item.betTime.substring(11, 19)}`}</Text>
        <Text
          style={{
            color: item.result.description[2] == "Win" ? "green" : "red",
          }}
        >
          {formatProfit(item.result.profit)}
        </Text>
      </View>
    );
  };

  const renderResultRow = ({ item, index }) => {
    var totalProfit = 0;
    var temp = 0;
    item.bettingResult.map((item, i) => {
      return (temp += formatProfit(item.profit));
    });
    totalProfit = temp;
    console.log(item);
    const nums = item.lotteryResult ? item.lotteryResult.result.split(",") : [];
    return (
      <>
        {item.lotteryResult ? (
          <View onClick={() => clickDropDown(index)}>
            <View
              style={{
                borderBottomWidth: 1,
                borderBottomColor: "#eaeaea",
                paddingHorizontal: 20,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ color: "#545454" }}>
                  第{item.lotteryResult.drawIssue}期
                </Text>
                <Text style={{ color: "#545454" }}>
                  注单总数:{item.bettingResult.length}注
                </Text>
                <Text style={{ color: totalProfit > 0 ? "green" : "red" }}>
                  {totalProfit}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: 5,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: "70%",
                    marginBottom: 5,
                  }}
                >
                  {nums.map((item, i) => {
                    return (
                      <ResultNumCardComponent number={parseInt(item)} key={i} />
                    );
                  })}
                </View>
                <View>
                  <Text>输赢收益</Text>
                </View>
              </View>
            </View>
            {item.selected ? (
              <FlatList
                data={item.bettingResult}
                renderItem={renderDetailRow}
              />
            ) : (
              <></>
            )}
          </View>
        ) : (
          <></>
        )}
      </>
    );
  };

  useEffect(() => {
    var temp = [];
    temp = betLogs.map((item, i) => {
      var temp = [];
      temp = item.bettingResult.map((a, i) => {
        return {
          result: a,
          betTime: item.betTime,
          profit: formatProfit(a.profit),
        };
      });
      return {
        ...item,
        selected: false,
        bettingResult: temp,
      };
    });
    setData(temp);
  }, [betLogs]);
  return (
    <View style={styles.single_record_view}>
      {data.length ? (
        <ScrollView
          style={{ height: 300, width: "100%" }}
          vertical
          showsVerticalScrollIndicator={false}
        >
          <FlatList data={data} renderItem={renderResultRow} />
          <AllLoadText />
        </ScrollView>
      ) : (
        <View
          style={{
            width: "100%",
            height: 50,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={styles.grey_text}>暂无记录</Text>
        </View>
      )}
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

const LongDragonView = ({ list }) => {
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
        {list.map((item, i) => {
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
    { name: "冠军", num: "3,2,7,4,8", type1: "big", type2: "double" },
    { name: "亚军", num: "4,3,5", type1: "small", type2: "single" },
    { name: "第三名", num: "2,5,2", type1: "big", type2: "single" },
    { name: "第四名", num: "7,4,2", type1: "small", type2: "double" },
    { name: "第五名", num: "7,3,2", type1: "big", type2: "single" },
    { name: "第六名", num: "8,4,2,3", type1: "big", type2: "double" },
    { name: "第七名", num: "7,2,4", type1: "big", type2: "single" },
    { name: "第八名", num: "8,3,2", type1: "small", type2: "single" },
    { name: "第九名", num: "3,7,2", type1: "small", type2: "single" },
    { name: "第十名", num: "9,4,0", type1: "small", type2: "single" },
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
  var temp = {};
  temp.no = props.data.drawIssue.slice(-5);
  temp.result = props.data.result.split(",");
  temp.result = temp.result.map((item, i) => {
    return parseInt(item);
  });
  temp.res1 = [
    temp.result[0] + temp.result[1],
    temp.result[0] + temp.result[1] >= 12 ? "大" : "小",
    (temp.result[0] + temp.result[1]) % 2 == 0 ? "双" : "单",
  ];
  temp.res2 = [];
  for (var i = 0; i < 5; i++) {
    temp.res2.push(temp.result[i] > temp.result[9 - i] ? "龙" : "虎");
  }

  return (
    <View
      style={{ flexDirection: "row", paddingTop: 3, backgroundColor: "white" }}
    >
      <Text style={[styles.grey_text, { width: "15%", textAlign: "center" }]}>
        {temp.no}
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "50%",
        }}
      >
        {temp.result.map((item, i) => {
          return <ResultNumCardComponent number={item} key={i} />;
        })}
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
          {temp.res1[0]}
        </Text>
        <ColorText style={{ width: "33.3%" }} data={temp.res1[1]} />
        <ColorText style={{ width: "33.3%" }} data={temp.res1[2]} />
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
        <ColorText data={temp.res2[0]} />
        <ColorText data={temp.res2[1]} />
        <ColorText data={temp.res2[2]} />
        <ColorText data={temp.res2[3]} />
        <ColorText data={temp.res2[4]} />
      </View>
    </View>
  );
};

const ResultHistoryView = ({ list }) => {
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
        {list.map((item, i) => {
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

const WalletBtn = ({ item }) => {
  const [select, setSelect] = useState(false);
  return (
    <View
      style={{
        width: "25%",
        height: 110,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={[
          styles.wallet_slider_btn_view,
          { backgroundColor: select ? "#c9c9c9" : "white" },
        ]}
        onTouchStart={() => setSelect(true)}
        onTouchEnd={() => setSelect(false)}
      >
        <Image
          source={item.image}
          style={{ width: 25, height: 25, resizeMode: "contain" }}
        />
      </View>
      <Text style={{ color: DEFAULT_UNSELECTED_COLOR, fontSize: 16 }}>
        {item.text}
      </Text>
    </View>
  );
};

const Slide = ({ data }) => {
  const { width } = Dimensions.get("window");

  return (
    <FlatList
      contentContainerStyle={{ width: width, height: 220 }}
      data={data}
      numColumns={4}
      renderItem={({ item }) => {
        return <WalletBtn item={item} />;
      }}
      vertical
      showsVerticalScrollIndicator={false}
    />
  );
};

const WalletSliderView = () => {
  const [index, setIndex] = useState(0);
  const indexRef = useRef(index);
  indexRef.current = index;

  const slideList = [
    [
      { text: "上分", image: UpPointBg },
      { text: "下分", image: DownPointBg },
      { text: "申请记录", image: ApplyRecordBg },
      { text: "游戏记录", image: GameRecordBg },
      { text: "福利报表", image: StatementBenefitBg },
      { text: "红包报表", image: RedEnvelopeBg },
      { text: "积分账变", image: ChangeCreditBg },
      { text: "自助回水", image: selfHelpBackwaterBg },
    ],
    [{ text: "竞猜报表", image: QuizReportBg }],
  ];
  const onScroll = useCallback((event) => {
    const slideSize = event.nativeEvent.layoutMeasurement.width;
    const index = event.nativeEvent.contentOffset.x / slideSize;
    const roundIndex = Math.round(index);

    const distance = Math.abs(roundIndex - index);

    // Prevent one pixel triggering setIndex in the middle
    // of the transition. With this we have to scroll a bit
    // more to trigger the index change.
    const isNoMansLand = 0.4 < distance;

    if (roundIndex !== indexRef.current && !isNoMansLand) {
      setIndex(roundIndex);
    }
  }, []);

  return (
    <View style={styles.wallet_slider_view}>
      <FlatList
        data={slideList}
        renderItem={({ item }) => {
          return <Slide data={item} />;
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onScroll={onScroll}
      />
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {slideList.map((item, i) => {
          return (
            <View key={i}>
              <Image
                source={indexRef.current == i ? ActiveDot : InActiveDot}
                style={{
                  width: 10,
                  height: 10,
                  resizeMode: "contain",
                  marginLeft: 10,
                }}
              />
            </View>
          );
        })}
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
  const currentLottery = useSelector(
    (state) => state.lotteriesState.currentLottery
  );
  const currentRoom = useSelector((state) => state.roomsState.currentRoom);
  const userInfo = useSelector((state) => state.authState.userInfo);
  const [drawIssues, setDrawIssues] = useState(0);
  const [nums, setNums] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

  const timerRef = useRef();
  const [time, setTime] = useState(0);
  const remainMinutes = Math.floor(
    (time - Math.floor(time / 3600) * 3600) / 60
  );
  const remainSeconds = time - Math.floor(time / 60) * 60;

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setTime((time) => (time <= 0 ? 0 : time - 1));
    }, 1000);
    return () => clearInterval(timerRef.current);
  }, [time]);

  useEffect(() => {
    setTime(currentLottery.remainTimes);
    setNums(currentLottery.preDrawCodes.split(","));
    setDrawIssues(currentLottery.drawIssues);

    socket.emit(SOCKET_LOTTERY_STATISTICS, {
      lotteryType: currentLottery.lotteryType,
      room: currentRoom._id,
    });

    socket.emit(SOCKET_BET_USER_LOG, {
      user: userInfo._id,
      room: currentRoom._id,
      lotteryType: currentLottery.lotteryType,
      pageNum: 1,
    });
  }, [currentLottery]);
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
                if (!props.showBetControlFlag) {
                  props.navigation.navigate("GameHall");
                } else props.setShowBetControlFlag(false);
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
                <Text style={[styles.white_text]}>积分:{userInfo.point}</Text>
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
            <Text style={[styles.grey_text, { fontSize: 12 }]}>
              {drawIssues.toString().slice(-5)}
            </Text>
            {currentLottery.status == "block" || time == 0 ? (
              <Text style={{ color: "red" }}>封盘中</Text>
            ) : currentLottery.status == "drawing" ? (
              <Text style={{ color: "orange" }}>正在开奖</Text>
            ) : (
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
            )}
          </View>
          <View style={styles.animation_view}>
            {/* <Image
                source={AnimationImg}
                style={styles.animation_img}
                onClick={() => setAnimationViewFlag(!animationViewFlag)}
              /> */}
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
            <Text style={[styles.grey_text, { fontSize: 12 }]}>
              {(drawIssues - 1).toString().slice(-5)}
            </Text>
          </View>
          <View style={styles.result_view}>
            <View style={styles.result_row}>
              {nums.map((item, i) => {
                return (
                  <ResultNumCardComponent number={parseInt(item)} key={i} />
                );
              })}
            </View>
            <View>
              <View>
                <Text style={{ color: "#8f8f8f" }}>冠亚和</Text>
                <View style={{ flexDirection: "row" }}>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text>{parseInt(nums[0]) + parseInt(nums[1])}</Text>
                    <ColorText data={nums[0] + nums[1] > 12 ? "大" : "小"} />
                    <ColorText
                      data={nums[0] + (nums[1] % 2) == 0 ? "双" : "单"}
                    />
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
        {viewFlag[0] ? <SingleRecord betLogs={props.betLogs} /> : <EmptyView />}
        {viewFlag[1] ? (
          <LongDragonView list={props.consecutiveList} />
        ) : (
          <EmptyView />
        )}
        {viewFlag[2] ? <PredictView /> : <EmptyView />}
        {viewFlag[3] ? (
          <ResultHistoryView list={props.recentResult} />
        ) : (
          <EmptyView />
        )}
      </View>
    </View>
  );
};

const BettingView = forwardRef((props, ref) => {
  const [showKeyboardFlag, setShowKeyboardFlag] = useState(false);
  const [showCategoryFlag, setShowCategoryFlag] = useState(false);
  const userInfo = useSelector((state) => state.authState.userInfo);
  const currentRoom = useSelector((state) => state.roomsState.currentRoom);
  const dispatch = useDispatch();
  const currentLottery = useSelector(
    (state) => state.lotteriesState.currentLottery
  );

  const [bottomFlag, setBottomFlag] = useState(0);

  const [betList, setBetList] = useState([]);
  const [editText, setEditText] = useState("");

  const inputScrollRef = useRef();
  const betScrollRef = useRef();

  const bet = () => {
    if (currentLottery.status == "block") {
      dispatch(showToast({ message: BLOCKING_TIME }));
      return;
    }
    socket.emit(SOCKET_BET_BET, {
      userInfo: userInfo,
      roomID: currentRoom._id,
      lotteryType: currentLottery.lotteryType,
      msg: editText,
    });
  };

  const saveHistory = (data) => {
    setBetList([...betList, ...data]);

    if (data.length) if (data[0].nickname == userInfo.nickname) setEditText("");
  };
  useImperativeHandle(ref, () => ({
    saveHistory: saveHistory,
  }));

  return (
    <View
      style={[
        { height: "calc(100% - 130px)", zIndex: 1 },
        { display: !props.showBetControlFlag ? "contents" : "none" },
      ]}
    >
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
        {betList.map((item, i) => {
          return (
            <View key={i}>
              {item.nickname == userInfo.nickname ? (
                <SentMessageBox
                  name={item.nickname}
                  content={item.content}
                  avatar={item.avatar}
                />
              ) : (
                <ReceivedMessageBox
                  name={item.nickname}
                  content={item.content}
                  avatar={item.avatar}
                  key={i}
                />
              )}
            </View>
          );
        })}
      </ScrollView>
      <View style={styles.bottom_view}>
        <View style={styles.bottom_edit_view}>
          <Image
            source={ShowKeyboardBtnBg}
            style={styles.edit_btn}
            onClick={() => {
              if (!showKeyboardFlag) {
                setShowKeyboardFlag(true);
                setBottomFlag(0);
              } else {
                setBottomFlag(0);
              }
            }}
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
            source={!editText.length ? ShowWalletSliderBtnBg : SendMsgBtnBg}
            style={styles.edit_btn}
            onClick={() => {
              if (editText.length) {
                bet();
              } else {
                setShowKeyboardFlag(true);
                setBottomFlag(1);
              }
            }}
          />
        </View>

        {showKeyboardFlag ? (
          <>
            {!bottomFlag ? (
              <>
                <RequestView setEditText={setEditText} editText={editText} />
                <KeyboardView setEditText={setEditText} editText={editText} />
              </>
            ) : (
              <WalletSliderView />
            )}
          </>
        ) : (
          <EmptyView />
        )}
      </View>
      <View style={styles.right_sidebar}>
        {/* <Image
          source={CategoryBtnBg}
          style={styles.category_btn}
          onClick={() => setShowCategoryFlag(true)}
        /> */}
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
});

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

const QuickView = forwardRef((props, ref) => {
  const initPosition = [
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
  ];

  const initOrder = [
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
  ];
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

  const getBetCode = () => {
    var tempPosition = [];
    var tempOrder = [];
    data.map((item, i) => {
      if (item.selected) tempPosition.push(i + 1 == 10 ? 0 : i + 1);
      return;
    });
    orderData.map((item, i) => {
      if (item.selected) tempOrder.push(item.method == 10 ? 0 : item.method);
      return;
    });
    return {
      position: tempPosition,
      order: tempOrder,
    };
  };

  const setInit = () => {
    setData(initPosition);
    setOrderData(initOrder);
  };

  useImperativeHandle(ref, () => ({
    getBetCode: getBetCode,
    setInit: setInit,
  }));

  const [data, setData] = useState(initPosition);

  const [orderData, setOrderData] = useState(initOrder);

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
});

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
          source={item.showDropdown ? UpArrow : DownArrow}
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

const OneTenView = forwardRef((props, ref) => {
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
  const temp = typeData.map((item, i) => {
    return { title: item, showDropdown: true, data: orderData };
  });
  const [data, setData] = useState(temp);

  const setInit = () => {
    setData(temp);
  };

  const getBetCode = () => {
    var tempPosition = [];
    var tempOrder = [];
    data.map((item, i) => {
      var temp = [];
      item.data.map((a, k) => {
        if (a.selected) temp.push(k + 1 == 10 ? 0 : k + 1);
        return;
      });
      if (temp.length) {
        tempOrder.push(temp);
        tempPosition.push(i + 1 == 10 ? 0 : i + 1);
      }
    });
    return {
      position: tempPosition,
      order: tempOrder,
    };
  };

  useImperativeHandle(ref, () => ({
    getBetCode: getBetCode,
    setInit: setInit,
  }));

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
});

const BothSideView = forwardRef((props, ref) => {
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

  const orderData0 = [
    { order: "2", method: "冠亚大", selected: false },
    { order: "1. 7", method: "冠亚小", selected: false },
    { order: "1. 7", method: "冠亚单", selected: false },
    { order: "2", method: "冠亚双", selected: false },
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
      if (i == 0) return { title: item, showDropdown: true, data: orderData0 };
      if (i >= 6) return { title: item, showDropdown: true, data: orderData2 };
      else return { title: item, showDropdown: true, data: orderData1 };
    });
    setData(temp);
  }, []);

  useImperativeHandle(ref, () => ({
    getBetCode: getBetCode,
    setInit: setInit,
  }));

  const setInit = () => {
    var temp = typeData.map((item, i) => {
      if (i == 0) return { title: item, showDropdown: true, data: orderData0 };
      if (i >= 6) return { title: item, showDropdown: true, data: orderData2 };
      else return { title: item, showDropdown: true, data: orderData1 };
    });
    setData(temp);
  };

  const getBetCode = () => {
    var tempPosition = [];
    var tempOrder = [];
    data.map((item, i) => {
      if (i == 0) {
        var temp = [];
        item.data.map((a, k) => {
          if (a.selected) temp.push(a.method.substring(2, 3));
          return;
        });
        if (temp.length) {
          tempOrder.push(temp);
          tempPosition.push("冠亚和");
        }
        return;
      }
      var temp = [];
      item.data.map((a, k) => {
        if (a.selected) temp.push(a.method);
        return;
      });
      if (temp.length) {
        tempOrder.push(temp);
        tempPosition.push(i);
      }
    });
    return {
      position: tempPosition,
      order: tempOrder,
    };
  };

  useImperativeHandle(ref, () => ({
    getBetCode: getBetCode,
    setInit: setInit,
  }));

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
});

const CrownAsiaView = forwardRef((props, ref) => {
  const origin = [
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
  ];
  const [orderData, setOrderData] = useState(origin);

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

  const getBetCode = () => {
    var tempOrder = [];
    orderData.map((item, i) => {
      item.btnData.map((a, k) => {
        if (a.selected) tempOrder.push(a.num);
      });
    });

    return {
      position: "冠亚和",
      order: tempOrder,
    };
  };
  const setInit = () => {
    setOrderData(origin);
  };

  useImperativeHandle(ref, () => ({
    getBetCode: getBetCode,
    setInit: setInit,
  }));
  const ItemOddRow = ({ item, index }) => {
    return <OddRowView item={item} onClickNum={(e) => clickNum(index, e)} />;
  };

  return (
    <View>
      <FlatList data={orderData} renderItem={ItemOddRow} numColumns={1} />
    </View>
  );
});

const BetControlBottomView = forwardRef((props, ref) => {
  const [betAmount, setBetAmount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [selectItem, setSelectItem] = useState(0);

  const inputAmount = (val) => {
    if (val == "backspace") {
      setBetAmount((betAmount) => Math.floor(betAmount / 10));
      return;
    }
    if (val == 10) {
      setBetAmount((betAmount) => betAmount * 10);
      return;
    }
    setBetAmount((betAmount) => betAmount * 10 + val);
  };

  const setInit = () => {
    setBetAmount(0);
  };
  const putTotalAmount = (e) => {
    setTotalAmount(e);
  };
  const putSelectItem = (e) => {
    setSelectItem(e);
  };
  useImperativeHandle(ref, () => ({
    setInit: setInit,
    putTotalAmount: putTotalAmount,
    putSelectItem: putSelectItem,
  }));
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
        <View style={styles.bet_value} onClick={() => setBetAmount(5)}>
          <Text style={styles.bet_value_text}>5</Text>
        </View>
        <View style={styles.bet_value} onClick={() => setBetAmount(10)}>
          <Text style={styles.bet_value_text}>10</Text>
        </View>
        <View style={styles.bet_value} onClick={() => setBetAmount(50)}>
          <Text style={styles.bet_value_text}>50</Text>
        </View>
        <View style={styles.bet_value} onClick={() => setBetAmount(100)}>
          <Text style={styles.bet_value_text}>100</Text>
        </View>
        <View style={styles.bet_value} onClick={() => setBetAmount(500)}>
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
        {/* <Text style={[styles.grey_text, { fontSize: 16 }]}>下注总额 : 0</Text>
        <Text style={[styles.grey_text, { fontSize: 16, marginLeft: 50 }]}>
          共 0 注单
        </Text> */}
      </View>
      <View
        style={{
          borderTopColor: "#e8e8e8",
          borderTopWidth: 1,
          flexDirection: "row",
        }}
        onClick={() => props.setShowKeyboardFlag(true)}
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
            alignItems: "left",
            borderRadius: 5,
            height: 35,
            justifyContent: "center",
            width: 180,
          }}
        >
          <Text style={[styles.grey_text, { fontSize: 16 }]}>
            {!betAmount ? "请输入下注金额!" : betAmount}
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
            onClick={() => props.bet(betAmount)}
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
      {props.showKeyboardFlag ? (
        <View style={[styles.number_pan_view]}>
          <View style={styles.num_row}>
            <TouchableOpacity
              style={styles.num_column}
              onPress={() => inputAmount(1)}
            >
              <Text style={{ fontSize: 25 }}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.num_column}
              onPress={() => inputAmount(2)}
            >
              <Text style={{ fontSize: 25 }}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.num_column}
              onPress={() => inputAmount(3)}
            >
              <Text style={{ fontSize: 25 }}>3</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.num_row}>
            <TouchableOpacity
              style={styles.num_column}
              onPress={() => inputAmount(4)}
            >
              <Text style={{ fontSize: 25 }}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.num_column}
              onPress={() => inputAmount(5)}
            >
              <Text style={{ fontSize: 25 }}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.num_column}
              onPress={() => inputAmount(6)}
            >
              <Text style={{ fontSize: 25 }}>6</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.num_row}>
            <TouchableOpacity
              style={styles.num_column}
              onPress={() => inputAmount(7)}
            >
              <Text style={{ fontSize: 25 }}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.num_column}
              onPress={() => inputAmount(8)}
            >
              <Text style={{ fontSize: 25 }}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.num_column}
              onPress={() => inputAmount(9)}
            >
              <Text style={{ fontSize: 25 }}>9</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.num_row}>
            <TouchableOpacity style={styles.num_column}></TouchableOpacity>
            <TouchableOpacity
              style={styles.num_column}
              onPress={() => inputAmount(10)}
            >
              <Text style={{ fontSize: 25 }}>0</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.num_column}
              onPress={() => inputAmount("backspace")}
            >
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
});

const BetControlView = ({ showBetControlFlag }) => {
  const [selectSideBar, setSelectSideBar] = useState(0);
  const [showKeyboardFlag, setShowKeyboardFlag] = useState(false);
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.authState.userInfo);
  const currentRoom = useSelector((state) => state.roomsState.currentRoom);
  const currentLottery = useSelector(
    (state) => state.lotteriesState.currentLottery
  );

  const quickViewRef = useRef();
  const oneTenViewRef = useRef();
  const bothSideViewRef = useRef();
  const crownAsiaViewRef = useRef();
  const bottomViewRef = useRef();

  const bet = (amount) => {
    var betCode = "";
    var betData = {};
    if (selectSideBar == 0) {
      betData = quickViewRef.current.getBetCode();

      console.log(betData);
      if (!betData.position.length || !betData.order.length) {
        dispatch(showToast({ message: INVALID_BET_CODE }));
        return;
      }

      if (!amount) {
        dispatch(showToast({ message: INPUT_BET_AMOUNT }));
        return;
      }
      betCode = "";
      var tempPosition = "";
      betData.position.map((item, i) => {
        tempPosition += item;
        return;
      });
      betCode += tempPosition + "/";

      var tempOrder = [[], []];
      betData.order.map((item, i) => {
        if (typeof item != "number") tempOrder[1].push(item);
        else tempOrder[0].push(item);
      });

      tempOrder[0].map((item, i) => {
        betCode = betCode + item;
      });
      betCode += "/" + amount;

      tempOrder[1].map((item, i) => {
        betCode = betCode + " " + tempPosition + item + amount;
      });

      quickViewRef.current.setInit();
    }

    if (selectSideBar == 1) {
      betData = oneTenViewRef.current.getBetCode();
      if (!betData.position.length || !betData.order.length) {
        dispatch(showToast({ message: INVALID_BET_CODE }));
        return;
      }

      if (!amount) {
        dispatch(showToast({ message: INPUT_BET_AMOUNT }));
        return;
      }
      console.log(betData);
      betCode = "";
      betData.position.map((item, i) => {
        betCode = betCode + item;
        betCode += "/";
        betData.order[i].map((a, k) => {
          betCode = betCode + a;
        });
        betCode += "/" + amount + " ";
        return;
      });
      oneTenViewRef.current.setInit();
    }

    if (selectSideBar == 2) {
      betData = bothSideViewRef.current.getBetCode();
      if (!betData.position.length || !betData.order.length) {
        dispatch(showToast({ message: INVALID_BET_CODE }));
        return;
      }

      if (!amount) {
        dispatch(showToast({ message: INPUT_BET_AMOUNT }));
        return;
      }

      betCode = "";

      betData.position.map((item, i) => {
        betData.order[i].map((m, n) => {
          betCode = betCode + (item == 10 ? 0 : item) + m + amount + " ";
        });
      });
      bothSideViewRef.current.setInit();
    }

    if (selectSideBar == 3) {
      betData = crownAsiaViewRef.current.getBetCode();
      if (!betData.position.length || !betData.order.length) {
        dispatch(showToast({ message: INVALID_BET_CODE }));
        return;
      }

      if (!amount) {
        dispatch(showToast({ message: INPUT_BET_AMOUNT }));
        return;
      }
      if (!betData.position.length || !betData.order.length) {
        dispatch(showToast({ message: INVALID_BET_CODE }));
        return;
      }

      if (!amount) {
        dispatch(showToast({ message: INPUT_BET_AMOUNT }));
        return;
      }
      betCode = betData.position;
      betData.order.map((item, i) => {
        betCode = betCode + item;
      });
      betCode += "/" + amount;

      crownAsiaViewRef.current.setInit();
    }

    if (currentLottery.status == "block") {
      dispatch(showToast({ message: BLOCKING_TIME }));
      return;
    }

    console.log("-------------------->betcode:", betCode);
    socket.emit(SOCKET_BET_BET, {
      userInfo: userInfo,
      roomID: currentRoom._id,
      lotteryType: currentLottery.lotteryType,
      msg: betCode.trim(),
    });

    dispatch(showToast({ message: SUCCESS_BET }));
  };
  return (
    <View
      style={[
        styles.bet_control_view,
        { display: showBetControlFlag ? "contents" : "none" },
      ]}
    >
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
          {selectSideBar === 0 ? (
            <QuickView ref={quickViewRef} />
          ) : (
            <EmptyView />
          )}
          {selectSideBar === 1 ? (
            <OneTenView ref={oneTenViewRef} />
          ) : (
            <EmptyView />
          )}
          {selectSideBar === 2 ? (
            <BothSideView ref={bothSideViewRef} />
          ) : (
            <EmptyView />
          )}
          {selectSideBar === 3 ? (
            <CrownAsiaView ref={crownAsiaViewRef} />
          ) : (
            <EmptyView />
          )}
        </ScrollView>
      </View>
      <BetControlBottomView
        showKeyboardFlag={showKeyboardFlag}
        setShowKeyboardFlag={setShowKeyboardFlag}
        bet={bet}
        ref={bottomViewRef}
      />
    </View>
  );
};

const GameRoomPage = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.authState.userInfo);
  const currentRoom = useSelector((state) => state.roomsState.currentRoom);
  const currentLottery = useSelector(
    (state) => state.lotteriesState.currentLottery
  );
  const [showBetControlFlag, setShowBetControlFlag] = useState(false);
  const [consecutiveList, setConsecutiveList] = useState([]);
  const [userBetLogs, setUserBetLogs] = useState([]);
  const [recentResult, setRecentResult] = useState([]);
  const betListRef = useRef();

  // useFocusEffect(
  //   useCallback(() => {
  //     socket.emit(SOCKET_BET_JOIN_ROOM, {
  //       userID: userInfo._id,
  //       roomID: currentRoom._id,
  //       lotteryType: currentLottery.lotteryType,
  //     });
  //     return () => {
  //       socket.removeAllListeners();
  //       socket.close();
  //     };
  //   }, [])
  // );

  useEffect(() => {
    console.log("open gameroom");
    socket.open();

    socket.emit(SOCKET_BET_JOIN_ROOM, {
      userID: userInfo._id,
      roomID: currentRoom._id,
      lotteryType: currentLottery.lotteryType,
    });

    socket.on(SOCKET_BET_JOIN_ROOM, (response) => {
      const res = checkSocketResponse(response);
      console.log("------------bet join room :", res.data);
      if (res.status == RES_STATUS_SUCCESS) {
        dispatch(savePoint({ point: formatProfit(res.data.userInfo.point) }));
        var temp = [];
        res.data.betlogs.map((item, i) => {
          if (item.content_type != "bot_code")
            temp.push({
              nickname: item.user.nickname,
              content: item.content,
              avatar: item.user.avatar,
              content_type: item.content_type,
            });
        });

        betListRef.current.saveHistory(temp.reverse());
      } else {
        dispatch(showToast({ message: ARRYA_ERROR_MSG[res.status] }));
      }
    });

    socket.emit(SOCKET_LOTTERY_STATISTICS, {
      lotteryType: currentLottery.lotteryType,
      room: currentRoom._id,
    });

    socket.on(SOCKET_LOTTERY_STATISTICS, (response) => {
      const locPattern = [
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
        "冠亚和",
      ];

      const betPattern = [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        "大",
        "小",
        "双",
        "单",
        "龙",
        "虎",
      ];
      var temp = [];
      response.map((item, i) => {
        if (item.id >= 0 && item.id <= 99) {
          temp.push({
            no: i + 1,
            location: locPattern[item.id % 10],
            result: betPattern[Math.floor(item.id / 10) % 10],
            consecutive: item.value,
          });
        }
        if (item.id >= 100 && item.id <= 139) {
          temp.push({
            no: i + 1,
            location: locPattern[item.id % 10],
            result: betPattern[Math.floor((item.id % 100) / 10) + 10],
            consecutive: item.value,
          });
        }
        if (item.id >= 140 && item.id <= 149) {
          temp.push({
            no: i + 1,
            location: locPattern[item.id % 10],
            result: betPattern[Math.floor((item.id % 10) / 5) + 14],
            consecutive: item.value,
          });
        }
        if (item.id >= 150 && item.id <= 166) {
          temp.push({
            no: i + 1,
            location: locPattern[10],
            result: item.id - 147,
            consecutive: item.value,
          });
        }
        if (item.id >= 167 && item.id <= 170) {
          temp.push({
            no: i + 1,
            location: locPattern[10],
            result: betPattern[item.id - 167 + 10],
            consecutive: item.value,
          });
        }
      });

      temp.sort((a, b) => {
        return b.consecutive - a.consecutive;
      });

      temp.map((item, i) => {
        item.no = i + 1;
        return item;
      });

      setConsecutiveList(temp);
    });

    socket.emit(SOCKET_BET_USER_LOG, {
      user: userInfo._id,
      room: currentRoom._id,
      lotteryType: currentLottery.lotteryType,
      pageNum: 1,
    });

    socket.on(SOCKET_BET_USER_LOG, (response) => {
      var temp = [];
      response.data.map((item, i) => {
        if (item.content_type == "bet_code") temp.push(item);
      });
      setUserBetLogs(temp);
    });

    socket.on(SOCKET_BET_BET, (response) => {
      const res = checkSocketResponse(response);
      if (res.status == RES_STATUS_SUCCESS) {
        if (res.data.userInfo.nickname == userInfo.nickname)
          dispatch(savePoint({ point: formatProfit(res.data.userInfo.point) }));
        betListRef.current.saveHistory([
          {
            nickname: res.data.userInfo.nickname,
            avatar: res.data.userInfo.avatar,
            content: res.data.msg,
            content_type: "bet_code",
          },
        ]);
      } else {
        dispatch(showToast({ message: ARRYA_ERROR_MSG[res.status] }));
      }
    });

    socket.emit(SOCKET_RECENT_LOTTERY_RESULT, {
      lotteryType: currentLottery.lotteryType,
    });

    socket.on(SOCKET_RECENT_LOTTERY_RESULT, (response) => {
      const res = checkSocketResponse(response);
      if (res.status == RES_STATUS_SUCCESS) {
        console.log(res.data);
        setRecentResult(res.data);
      } else {
        dispatch(showToast({ message: ARRYA_ERROR_MSG[res.status] }));
      }
    });

    socket.on(SOCKET_BET_WARNING_EVENT1, (response) => {
      console.log("SOCKET_WARNING_EVENT1--------------->", response);

      var content = (
        <View>
          <Text style={{ fontSize: 18 }}>
            注意:距离封盘时间还有10秒,封盘之后将不能再投注!
          </Text>
        </View>
      );

      const showAlertData = {
        nickname: "room",
        avatar: "room.png",
        content_type: "bot_code",
        content: content,
      };
      betListRef.current.saveHistory([showAlertData]);
    });

    socket.on(SOCKET_BET_BLOCKING_EVENT1, (response) => {
      console.log("block event 1----------->", "in room block");
      dispatch(saveCurrentLottery({ ...currentLottery, status: "block" }));
    });

    socket.on(SOCKET_BET_NEWTURN_EVENT1, (response) => {
      console.log("newturn event1 ---------->", response);
      console.log("doing", "in room newturn");
      dispatch(
        saveCurrentLottery({
          ...currentLottery,
          status: "doing",
          remainTimes: Math.floor(response.leftTime / 1000),
          preDrawCodes: response.result,
        })
      );

      for (var i = 0; i < response.userInfos.length; i++)
        if (userInfo._id == response.userInfos[i]._id) {
          dispatch(
            savePoint({ point: formatProfit(response.userInfos[i].point) })
          );
          break;
        }

      // dispatch(savePoint({ point: formatProfit(response.userpoint) }));
      console.log(response.betlogs, response.betlogs.length);
      if (response.betlogs != undefined && response.betlogs.length) {
        console.log(response.betlogs);

        var content = (
          <View>
            <Text style={{ fontSize: 18, display: "grid" }}>
              =====停止战斗=====
            </Text>
            <Text style={{ fontSize: 18 }}>======封盘线======</Text>
          </View>
        );

        const showAlertData = {
          nickname: "room",
          avatar: "room.png",
          content_type: "bot_code",
          content: content,
        };

        var content = (
          <View>
            <Text style={{ fontSize: 18, display: "grid" }}>竞猜列表核对:</Text>
            <Text style={{ fontSize: 18 }}>
              {`${response.drawIssue}`}期有效投注
            </Text>
            <Text>========================</Text>
            {response.betlogs.map((item, i) => {
              var totalbetPoint = 0;
              var a = 0;
              var tempGroup = [];
              var tempGroupItem = [];
              if (!item.bettingResult.length) return;
              var tempItem = item.bettingResult[0].description[0];
              item.bettingResult.map((res, i) => {
                if (res.description[0] != tempItem) {
                  tempGroup.push(tempGroupItem);
                  tempGroupItem = [];
                  tempGroupItem.push(res);
                  tempItem = res.description[0];
                } else {
                  tempGroupItem.push(res);
                }
                a += Math.abs(formatProfit(res.profit));
                return;
              });
              tempGroup.push(tempGroupItem);
              totalbetPoint = a;
              return (
                <View key={i} style={{ display: "flex", marginVertical: 10 }}>
                  <Text style={{ fontSize: 18 }}>
                    [
                    {`${item.user.nickname} 汇总:${formatProfit(
                      totalbetPoint
                    )}`}
                    ]
                  </Text>
                  {tempGroup.map((c, d) => {
                    return (
                      <Text key={d} style={{ fontSize: 18 }}>
                        {`${c[0].description[0]}[`}
                        {c.map((e, f) => {
                          return `${e.description[1]}/${Math.abs(
                            formatProfit(e.profit)
                          )} `;
                        })}
                        {`]`}
                      </Text>
                    );
                  })}
                </View>
              );
            })}
          </View>
        );
        const betCodeData = {
          nickname: "room",
          avatar: "room.png",
          content_type: "bot_code",
          content: content,
        };

        var content = (
          <View>
            <Text
              style={{ fontSize: 18, display: "grid" }}
            >{`${response.drawIssue}期已开奖`}</Text>
            <Text style={{ fontSize: 18 }}>中奖名单如下:</Text>
            <Text>========================</Text>
            {response.betlogs.map((item, i) => {
              var totalbetPoint = 0;
              var a = 0;
              if (!item.bettingResult.length) return;
              var filterTemp = [];

              item.bettingResult.map((res, i) => {
                if (res.description[2] == "Win") {
                  filterTemp.push(res);
                }
                return;
              });
              if (!filterTemp.length) return;
              var tempGroup = [];
              var tempGroupItem = [];
              var tempItem = filterTemp[0].description[0];

              filterTemp.map((res, i) => {
                if (res.description[0] != tempItem) {
                  tempGroup.push(tempGroupItem);
                  tempGroupItem = [];
                  tempGroupItem.push(res);
                  tempItem = res.description[0];
                } else {
                  tempGroupItem.push(res);
                }
                a += formatProfit(res.profit);
              });
              if (tempGroupItem.length) tempGroup.push(tempGroupItem);
              totalbetPoint = a;
              return (
                <View key={i} style={{ display: "flex", marginVertical: 10 }}>
                  <Text style={{ fontSize: 18 }}>
                    {`[${item.user.nickname} 积分:${formatProfit(
                      item.user.point + totalbetPoint
                    )}]`}
                  </Text>
                  {tempGroup.length ? (
                    tempGroup.map((c, d) => {
                      return (
                        <Text key={d} style={{ fontSize: 18 }}>
                          {`${c[0].description[0]}[`}
                          {c.map((e, f) => {
                            return `${e.description[1]}/${formatProfit(
                              e.profit
                            )} `;
                          })}
                          {`]`}
                        </Text>
                      );
                    })
                  ) : (
                    <></>
                  )}
                </View>
              );
            })}
          </View>
        );

        const resultData = {
          nickname: "room",
          avatar: "room.png",
          content_type: "bot_code",
          content: content,
        };
        betListRef.current.saveHistory([
          showAlertData,
          betCodeData,
          resultData,
        ]);
      }
    });

    socket.on(SOCKET_BET_DRWAING_EVENT1, (response) => {
      console.log("drawing event1 ---------------->", response);
      dispatch(saveCurrentLottery({ ...currentLottery, status: "drawing" }));
    });

    return () => {
      console.log("close game room");
      socket.removeAllListeners();
      socket.close();
    };
  }, []);

  return (
    <View style={styles.container}>
      <HeaderView
        showBetControlFlag={showBetControlFlag}
        navigation={navigation}
        setShowBetControlFlag={setShowBetControlFlag}
        consecutiveList={consecutiveList}
        betLogs={userBetLogs}
        recentResult={recentResult}
      />
      <BettingView
        setShowBetControlFlag={setShowBetControlFlag}
        navigation={navigation}
        ref={betListRef}
        showBetControlFlag={showBetControlFlag}
      />
      <BetControlView showBetControlFlag={showBetControlFlag} />
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
    borderBottomColor: "#eaeaea",
    borderBottomWidth: 1,
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
    width: 40,
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
    paddingBottom: 20,
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
    top: 85,
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
  wallet_slider_view: {
    height: 230,
    backgroundColor: DEFAULT_BACKGROUND_COLOR,
  },
  wallet_slider_btn_view: {
    width: 70,
    height: 70,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default GameRoomPage;
