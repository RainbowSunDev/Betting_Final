import React from "react";

const LeftPanel = () => {
  return (
    <div className="flex row index-message">
      <div>
        <div className="flex row">
          <button className="active">
            <a
              href="./Home-Game-Airship.html"
              style={{ color: "white", textDecoration: "none" }}
            >
              游戏{" "}
            </a>
          </button>
          <button>
            <a
              href="./Home-Customer.html"
              style={{ color: "#8e97a1", textDecoration: "none" }}
            >
              {" "}
              客服{" "}
            </a>
          </button>
          <button>
            <a
              href="./Home-Payment.html"
              style={{ color: "#8e97a1", textDecoration: "none" }}
            >
              {" "}
              支付客服{" "}
            </a>
          </button>
        </div>
        <div>
          <ul>
            <li
              className="active"
              onClick={() => {
                window.location.href = "./Home-Game-Airship.html";
              }}
            >
              <div className="flex row">
                <img alt="no image" src="image/gameicon_70206.png" />
                <div>
                  <div className="flex row space-between">
                    {" "}
                    幸运飞艇{" "}
                    <div className="current-slider smallest active">
                      <div></div>
                    </div>
                  </div>
                  <p>20221021001期</p>
                </div>
              </div>
            </li>
            <li
              className=""
              onClick={() => {
                window.location.href = "./Home-Game-Australia.html";
              }}
            >
              <div className="flex row">
                <img alt="no image" src="image/gameicon_70211.png" />
                <div>
                  <div className="flex row space-between">
                    {" "}
                    澳洲幸运10{" "}
                    <div className="current-slider smallest active">
                      <div></div>
                    </div>
                  </div>
                  <p>20949323期</p>
                </div>
              </div>
            </li>
            <li
              className=""
              onClick={() => {
                window.location.href = "./Home-Game-FastCar.html";
              }}
            >
              <div className="flex row">
                <img alt="no image" src="image/gameicon_70209.png" />
                <div>
                  <div className="flex row space-between">
                    {" "}
                    极速赛车{" "}
                    <div className="current-slider smallest active">
                      <div></div>
                    </div>
                  </div>
                  <p>32513606期</p>
                </div>
              </div>
            </li>
            <li className=""></li>
            <li className=""></li>
            <li className=""></li>
            <li className=""></li>
            <li className=""></li>
            <li className=""></li>
            <li className=""></li>
          </ul>
        </div>
        <div>
          <p>
            {" "}
            在线人数 <span>5</span>
          </p>
          <div className="flex row space-between">
            {" "}
            是否显示已关闭游戏{" "}
            <div className="current-slider smallest">
              <div></div>
            </div>
          </div>
          <p>
            {" "}
            App上次登录 <span>2022/10/21 13:04:26</span>
          </p>
        </div>
      </div>
      <div>
        <div>
          <ul>
            <li className="flex row index-message-left">
              <img
                data-alt="no image"
                className="chat-image"
                alt="no image"
                src="image/201904020022448364094.png"
              />
              <div>
                <p>
                  {" "}
                  伤会慢慢 <span>12:15:48</span>
                </p>
                <div>
                  <p>上分500</p>
                </div>
              </div>
            </li>
            <li className="flex row index-message-left">
              <img
                data-alt="no image"
                className="chat-image"
                alt="no image"
                src="image/de5ad761cbbd4c0f8a163a3025690829.jpg"
              />
              <div>
                <p>
                  {" "}
                  金冠 <span>12:15:57</span>
                </p>
                <div>
                  <p>@伤会慢慢 500已添加,您当前积分:1971.8！</p>
                </div>
              </div>
            </li>
            <li className="flex row index-message-left">
              <img
                data-alt="no image"
                className="chat-image"
                alt="no image"
                src="image/201901211657204585732.png"
              />
              <div>
                <p>
                  {" "}
                  Pupp <span>13:04:10</span>
                </p>
                <div>
                  <p>123单30</p>
                </div>
              </div>
            </li>
            <li className="flex row index-message-left">
              <img
                data-alt="no image"
                className="chat-image"
                alt="no image"
                src="image/201903221558039678728.png"
              />
              <div>
                <p>
                  {" "}
                  步月歌 <span>13:04:13</span>
                </p>
                <div>
                  <p>45双10</p>
                </div>
              </div>
            </li>
            <li className="flex row index-message-left">
              <img
                data-alt="no image"
                className="chat-image"
                alt="no image"
                src="image/201903221603042802135.png"
              />
              <div>
                <p>
                  {" "}
                  chee <span>13:04:18</span>
                </p>
                <div>
                  <p>125小30</p>
                </div>
              </div>
            </li>
            <li className="flex row index-message-left">
              <img
                data-alt="no image"
                className="chat-image"
                alt="no image"
                src="image/201904020023502809817.png"
              />
              <div>
                <p>
                  {" "}
                  Ranp <span>13:04:21</span>
                </p>
                <div>
                  <p>789/123/20</p>
                </div>
              </div>
            </li>
            <li className="flex row index-message-left">
              <img
                data-alt="no image"
                className="chat-image"
                alt="no image"
                src="image/201903221559137131780.png"
              />
              <div>
                <p>
                  {" "}
                  在劫难逃 <span>13:04:36</span>
                </p>
                <div>
                  <p>18小30</p>
                </div>
              </div>
            </li>
            <li className="flex row index-message-left">
              <img
                data-alt="no image"
                className="chat-image"
                alt="no image"
                src="image/201904020023172987424.png"
              />
              <div>
                <p>
                  {" "}
                  桔味美人 <span>13:05:37</span>
                </p>
                <div>
                  <p>134/13579/30</p>
                </div>
              </div>
            </li>
            <li className="flex row index-message-left">
              <img
                data-alt="no image"
                className="chat-image"
                alt="no image"
                src="image/201904020023058777502.png"
              />
              <div>
                <p>
                  {" "}
                  fore <span>13:05:39</span>
                </p>
                <div>
                  <p>12345/30</p>
                </div>
              </div>
            </li>
            <li className="flex row index-message-left">
              <img
                data-alt="no image"
                className="chat-image"
                alt="no image"
                src="image/201904020022448364094.png"
              />
              <div>
                <p>
                  {" "}
                  伤会慢慢 <span>13:05:40</span>
                </p>
                <div>
                  <p>890/12345/20</p>
                </div>
              </div>
            </li>
            <li className="flex row index-message-left">
              <img
                data-alt="no image"
                className="chat-image"
                alt="no image"
                src="image/201903221600001817402.png"
              />
              <div>
                <p>
                  {" "}
                  清欢渡劫 <span>13:05:45</span>
                </p>
                <div>
                  <p>89大20</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="flex row">
          <div>
            <div contentEditable="true"></div>
          </div>
          <input type="button" value="发送" />
          <div style={{ display: "none" }}>
            <img
              alt="no image"
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAA8ADwDASIAAhEBAxEB/8QAGwABAAIDAQEAAAAAAAAAAAAAAAYIBQcJAQT/xAA0EAABAwMCAwUFCAMAAAAAAAABAAIDBAURBgcSITEIGEFVlBNhcbPSFBY3UVJzdZLR0+L/xAAbAQEAAQUBAAAAAAAAAAAAAAAABQIDBAYIB//EACoRAAEEAQIEBAcAAAAAAAAAAAEAAgMRBAUGEiExoRNBUZEUFRciYXLC/9oADAMBAAIRAxEAPwDBIiLTFw+iIiIiIiIiIiIizWibFHqnWdhs0sjoorjcKejdI3q0SSNYSPhlYVS7Z/8AFrRP85Q/PYq2C3AFZeIxsmTGxwsFwB910Gt2xG3tsooaWLR1nlZE0ND6mjZNI73ue8Ek/ErUe83Y6pNX3eC5aNfb9PPc3gqaKRhZTnHR7Axp4T4EYwevXObGXm7U9hs9dc6tzm0lFBJUzOa3iIYxpc7A8eQK0n30duf13X0f/S2SVkFcMlDsuodYxNvthGLqAZGDzHRp5ehFH8LTXcU1h59Y/wC03+tQjdXsy6r2nsbbzXS0VytgeI5ZqF7iYSThvGHNHInlkZ5kdMhWc7P3abg3XrDYrtR/YdQta6SN1OxxgqGDmSOpYQOoJwfA88KS9qEZ2H1Z+1D8+NYZxoHxGSNaTLtnb+bpEuoacT9rXEGzyLRdEHv2XOJERQi8JRSzaORsW62i3vcGMbeqJznE4AAnZzUTXrHuje1zXFrmnIcDggqpp4SCr8Evgyslq+Eg+xtdbXsbI0tcA5pGCCMghY77s2fymh9Mz/CoHbu1pubbaKGmF9jqGxNDRJUUkT5CB0y4tyT7zzX0d8Hc7zal9DF9Knvj4T1BXQv1B0Z4BfG+/wBWn+ldXbXaXTm1NtkpbFR8Esx4p6ybDp5jnlxOwOQ8AMAfl1Uc7UcjY9h9V8Tg3McLRk9T7ePkqm98Hc7zal9DF9Kie4O+es9zqGKhv93M9DG/2gpoYWRMLvBzg0DiI8M5wrT8yLwyxg8lEZu9tH+Wy4OFC5vE0tAoACxXkT6305qBIiKEXhSIiIiIiIiIiIiIiIi//9k="
            />
            <input type="file" accept="image/*" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftPanel;
