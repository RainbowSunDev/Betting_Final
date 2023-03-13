import React from "react";
const RightPanel = () => {
  return (
    <div className="index-report">
      <div>
        <div className="flex row space-between">
          <h2>
            {" "}
            用户余额: <span>7613.86</span>
          </h2>
          <div>
            <p>数据均为今日统计</p>
            <p>2022/10/21</p>
          </div>
        </div>
        <ul className="flex row wrap">
          <li className="icon">
            <img
              alt="no image"
              src="data:image/png;base64,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"
            />
          </li>
          <li>
            <p>彩票流水</p>
            <h4 className=""> 234365 </h4>
          </li>
          <li>
            <p>彩票总盈亏</p>
            <h4 className="lose"> -8464.76 </h4>
          </li>
          <li>
            <p>彩票盈亏</p>
            <h4 className="lose"> -5550.2 </h4>
          </li>
          <li>
            <p>彩票回水</p>
            <h4 className=""> 2914.56 </h4>
          </li>
          <li className="icon" style={{ display: "none" }}>
            <img
              alt="no image"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAFGUlEQVRYhc2YWWxUVRjHf2c6Ld1mhrKUQi0WRdpKNwlWjXHjwaitMdEna0h8UfSF+OKDxCU+YGKI0WBi1BiNMYZXg5q4JqIJD6KApdApixSwFCjYbTpTuswx37l3pO1d5k6Jdf5JXzr3nPO7336u2vzjDLaKgOeAJ4FGoJzFVQLoBvYA7wOTcnoGsBr4CmhdZCgvHQY6gP6Qbbl8gsNm+RpYIoDb8gwuoxbgWQHszA8eV3UK4Kbr2WFZEbTEoKbkPwG8LWzHYCApoLYMWmOK5piAKWpKr638aVDzyjHNxEzQHbNqSdjvCYnQW6MWSOtSaIopoj4r7l6u2BiFh1bBlkrFjIaTCU3vGPSMQe+Y5lwK0jo4oZQZx+P3r1RsXasMXFgF3+yzs5rqEoiF4d1Tmsk0NEQUdRGojyg2lEMaDPDxhKZnFHoTmtPj4KSw5LDHlpWKN5tyoJql34fgqRpFx/40taWKCxOavQMaBuQZTUjBjaVQF1E0RKBjNbwYCREOwb5Bza7jmuGpuXuG5h/ydK0F9/JRzQ+XgvtiKg2FITiThKIQvNWseLhq7ouKa8Va31zQvH1C8/whzQM/p9l6IG3W7Gpy4DgBVxTBL5c1317U7OjW9KeCAf45DjeVSaxp/p7EuFdcmU1iAoF+7Zg2obCubO4Ch4v7kpqNUcX29VBagImpIBIwcduhYUjNYKwyMBFsrSg5Y60rnmcyhwX/GLFqmyTJE9XBY1GsJbEloKJc4EQVhbC0UAyUBbBrOLeNMxKgquJgbnVTfVSZ+E3Nq6FOwFGdU53CDv4CBX+lLFctRBIevWPOgx2A49Nwatz/BMlYeS6j00mrw8RHc3yzWZIaGU84/+/MaxOH/gftu6zZdihtMhesN6/3OCCje1coUwe9JAW9x+UF3QF94lBc+N4pq311/ppmZ1zTNWLFkFf8CZwU/zuXuRNGwrCmRLqL87ecLbj7pNVPRdKevjiv2X9Fc0MJ/2bwbG2uULzRqEzLfGyN+57SBmXPxLTzN1dAycjBq+6bHRi6BiEuixVK/Elbg9Ep5/O3V9hjMXDPcmVqqxPQPUE8AfGx4kt1ikdXK55Zp2ivUny4KURtqfcBXw5c+//Hfdo1y+si3uXJG9AjDsVlrzYoSgqsbP7+ojYW6PE4QErPwWH4/Kzmoz73l6g3Bd59ved0Z1nQO+2k04gkJiUDBdRLO+NpziXdfxSXr/XxgKcFJaPmV3U3SWuSEcotQTI6m7SGAjfdUg6XJnCMWVkBJUO7AxRe6SJXJq2/hahhVv/OCRB7cPDT+VSmfi28g5gE8SnwvoDZBgcBkxblFeBBJAkSH10oYJbBQYqrXDeDDrUZSXlqW6ZMfZQhN75QF2cbHGRulOn55jLvZ+ZL5j4pU+1VsL7cSo7LPvHrC0iWtnffCsXeAcxgu329Mhd4t04xW0NTVjeSG2B9lgTB69o5W3LXfafFux5KEf70jKajCppjispiq6zIwb1j2HdiPafPSl+e1rC7RXF4xOowXvK9uItkEPjuIjy4ai6ktKwjI9pk+vCUZsdRzBVIXLjBvlY2RuHxakVNiTIZb6ATVp9vq7CuCK/3pK/Pgtj95C77q8HQJBwZ1ZxIBP9CUB62YKQlytxYWazoG9d8ckabISMb4NVcvs8sshKSJAfzFE7UHbK/Ceer9gjgB1JN8hCwS9gEUGKw3f5wnS8Sgz0ibJlC3Q/cAbwA/CZN5H8AlTPlbGFoM0zAP713B8atVLE0AAAAAElFTkSuQmCC"
            />
          </li>
          <li style={{ display: "none" }}>
            <p>视讯流水</p>
            <h4 className=""> 0 </h4>
          </li>
          <li style={{ display: "none" }}>
            <p>视讯总盈亏</p>
            <h4 className=""> 0 </h4>
          </li>
          <li style={{ display: "none" }}>
            <p>视讯盈亏</p>
            <h4 className=""> 0 </h4>
          </li>
          <li style={{ display: "none" }}>
            <p>视讯回水</p>
            <h4 className=""> 0 </h4>
          </li>
        </ul>
      </div>
      <div className="feitian">
        <div className="text-center">
          <div className="index-report-single">
            <div className="flex row">
              <div className="flex-1">幸运飞艇</div>
              <div className="flex-105">20221021001期</div>
              <div className="flex-105">
                {" "}
                本期流水 <span className=""> 0 </span>
              </div>
              <div className="flex-105">
                {" "}
                今日流水 <span className=""> 0 </span>
              </div>
              <div className="flex-105">
                {" "}
                今日盈亏 <span className=""> 0 </span>
              </div>
              <div className="flex-1"> 00:02:27 </div>
            </div>
            <ul style={{ display: "none" }}>
              <li className="flex row">
                <div className="flex-1">会员编号</div>
                <div className="flex-1">用户名</div>
                <div className="flex-1">昵称</div>
                <div className="flex-1">余额</div>
                <div className="flex-1">竞猜总分</div>
                <div className="flex-1">上期盈亏</div>
                <div className="flex-3">竞猜详情</div>
              </li>
            </ul>
          </div>
          <div className="index-report-single">
            <div className="flex row">
              <div className="flex-1">澳洲幸运10</div>
              <div className="flex-105">20949323期</div>
              <div className="flex-105">
                {" "}
                本期流水 <span className=""> 0 </span>
              </div>
              <div className="flex-105">
                {" "}
                今日流水 <span className="win"> 10963 </span>
              </div>
              <div className="flex-105">
                {" "}
                今日盈亏 <span className="win"> 1089.08 </span>
              </div>
              <div className="flex-1"> 00:02:23 </div>
            </div>
            <ul style={{ display: "none" }}>
              <li className="flex row">
                <div className="flex-1">会员编号</div>
                <div className="flex-1">用户名</div>
                <div className="flex-1">昵称</div>
                <div className="flex-1">余额</div>
                <div className="flex-1">竞猜总分</div>
                <div className="flex-1">上期盈亏</div>
                <div className="flex-3">竞猜详情</div>
              </li>
            </ul>
          </div>
          <div className="index-report-single">
            <div className="flex row">
              <div className="flex-1">极速赛车</div>
              <div className="flex-105">32513606期</div>
              <div className="flex-105">
                {" "}
                本期流水 <span className="win"> 109 </span>
              </div>
              <div className="flex-105">
                {" "}
                今日流水 <span className="win"> 223402 </span>
              </div>
              <div className="flex-105">
                {" "}
                今日盈亏 <span className="lose"> -9553.78 </span>
              </div>
              <div className="flex-1"> 00:00:23 </div>
            </div>
            <ul>
              <li className="flex row">
                <div className="flex-1">会员编号</div>
                <div className="flex-1">用户名</div>
                <div className="flex-1">昵称</div>
                <div className="flex-1">余额</div>
                <div className="flex-1">竞猜总分</div>
                <div className="flex-1">上期盈亏</div>
                <div className="flex-3">竞猜详情</div>
              </li>
              <li className="flex row">
                <div className="flex-1">2783580727</div>
                <div className="flex-1">ssaa123456</div>
                <div className="flex-1">桔子</div>
                <div className="flex-1">773.66</div>
                <div className="flex-1">210.00</div>
                <div className="flex-1 lose"> -125.00 </div>
                <div className="flex-3">
                  <ul className="flex row flex-end index-report-bet">
                    <li> 12/79/5 </li>
                    <li> 1267890/3/8 </li>
                    <li style={{ display: "none" }}> 567/4/11 </li>
                    <li style={{ display: "none" }}> 56/6/11 </li>
                    <li style={{ display: "none" }}> 80/01/6 </li>
                    <li style={{ display: "none" }}> 4/14579/11 </li>
                    <li>
                      <input
                        type="button"
                        value="详情"
                        onClick={() => {
                          window.location.href = "./Home-Modal.html";
                        }}
                        className="current-button small light-blue"
                      />
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          <div className="index-report-single" style={{ display: "none" }}>
            <div className="flex row">
              <div className="flex-1">秒速赛车</div>
              <div className="flex-105">202210210628期</div>
              <div className="flex-105">
                {" "}
                本期流水 <span className=""> 0 </span>
              </div>
              <div className="flex-105">
                {" "}
                今日流水 <span className=""> 0 </span>
              </div>
              <div className="flex-105">
                {" "}
                今日盈亏 <span className=""> 0 </span>
              </div>
              <div className="flex-1"> 维护中 </div>
            </div>
            <ul style={{ display: "none" }}>
              <li className="flex row">
                <div className="flex-1">会员编号</div>
                <div className="flex-1">用户名</div>
                <div className="flex-1">昵称</div>
                <div className="flex-1">余额</div>
                <div className="flex-1">竞猜总分</div>
                <div className="flex-1">上期盈亏</div>
                <div className="flex-3">竞猜详情</div>
              </li>
            </ul>
          </div>
          <div className="index-report-single" style={{ display: "none" }}>
            <div className="flex row">
              <div className="flex-1">F3赛车</div>
              <div className="flex-105">20221021082期</div>
              <div className="flex-105">
                {" "}
                本期流水 <span className=""> 0 </span>
              </div>
              <div className="flex-105">
                {" "}
                今日流水 <span className=""> 0 </span>
              </div>
              <div className="flex-105">
                {" "}
                今日盈亏 <span className=""> 0 </span>
              </div>
              <div className="flex-1"> 维护中 </div>
            </div>
            <ul style={{ display: "none" }}>
              <li className="flex row">
                <div className="flex-1">会员编号</div>
                <div className="flex-1">用户名</div>
                <div className="flex-1">昵称</div>
                <div className="flex-1">余额</div>
                <div className="flex-1">竞猜总分</div>
                <div className="flex-1">上期盈亏</div>
                <div className="flex-3">竞猜详情</div>
              </li>
            </ul>
          </div>
          <div className="index-report-single" style={{ display: "none" }}>
            <div className="flex row">
              <div className="flex-1">700K极速飞艇</div>
              <div className="flex-105">32513605期</div>
              <div className="flex-105">
                {" "}
                本期流水 <span className=""> 0 </span>
              </div>
              <div className="flex-105">
                {" "}
                今日流水 <span className=""> 0 </span>
              </div>
              <div className="flex-105">
                {" "}
                今日盈亏 <span className=""> 0 </span>
              </div>
              <div className="flex-1"> 维护中 </div>
            </div>
            <ul style={{ display: "none" }}>
              <li className="flex row">
                <div className="flex-1">会员编号</div>
                <div className="flex-1">用户名</div>
                <div className="flex-1">昵称</div>
                <div className="flex-1">余额</div>
                <div className="flex-1">竞猜总分</div>
                <div className="flex-1">上期盈亏</div>
                <div className="flex-3">竞猜详情</div>
              </li>
            </ul>
          </div>
          <div className="index-report-single" style={{ display: "none" }}>
            <div className="flex row">
              <div className="flex-1">澳洲幸运5</div>
              <div className="flex-105">50940423期</div>
              <div className="flex-105">
                {" "}
                本期流水 <span className=""> 0 </span>
              </div>
              <div className="flex-105">
                {" "}
                今日流水 <span className=""> 0 </span>
              </div>
              <div className="flex-105">
                {" "}
                今日盈亏 <span className=""> 0 </span>
              </div>
              <div className="flex-1"> 维护中 </div>
            </div>
            <ul style={{ display: "none" }}>
              <li className="flex row">
                <div className="flex-1">会员编号</div>
                <div className="flex-1">用户名</div>
                <div className="flex-1">昵称</div>
                <div className="flex-1">余额</div>
                <div className="flex-1">竞猜总分</div>
                <div className="flex-1">上期盈亏</div>
                <div className="flex-3">竞猜详情</div>
              </li>
            </ul>
          </div>
          <div className="index-report-single" style={{ display: "none" }}>
            <div className="flex row">
              <div className="flex-1">168极速飞艇</div>
              <div className="flex-105">53152928期</div>
              <div className="flex-105">
                {" "}
                本期流水 <span className=""> 0 </span>
              </div>
              <div className="flex-105">
                {" "}
                今日流水 <span className=""> 0 </span>
              </div>
              <div className="flex-105">
                {" "}
                今日盈亏 <span className=""> 0 </span>
              </div>
              <div className="flex-1"> 维护中 </div>
            </div>
            <ul style={{ display: "none" }}>
              <li className="flex row">
                <div className="flex-1">会员编号</div>
                <div className="flex-1">用户名</div>
                <div className="flex-1">昵称</div>
                <div className="flex-1">余额</div>
                <div className="flex-1">竞猜总分</div>
                <div className="flex-1">上期盈亏</div>
                <div className="flex-3">竞猜详情</div>
              </li>
            </ul>
          </div>
          <div className="index-report-single" style={{ display: "none" }}>
            <div className="flex row">
              <div className="flex-1">秒速时时彩</div>
              <div className="flex-105">202210210628期</div>
              <div className="flex-105">
                {" "}
                本期流水 <span className=""> 0 </span>
              </div>
              <div className="flex-105">
                {" "}
                今日流水 <span className=""> 0 </span>
              </div>
              <div className="flex-105">
                {" "}
                今日盈亏 <span className=""> 0 </span>
              </div>
              <div className="flex-1"> 维护中 </div>
            </div>
            <ul style={{ display: "none" }}>
              <li className="flex row">
                <div className="flex-1">会员编号</div>
                <div className="flex-1">用户名</div>
                <div className="flex-1">昵称</div>
                <div className="flex-1">余额</div>
                <div className="flex-1">竞猜总分</div>
                <div className="flex-1">上期盈亏</div>
                <div className="flex-3">竞猜详情</div>
              </li>
            </ul>
          </div>
          <div className="index-report-single" style={{ display: "none" }}>
            <div className="flex row">
              <div className="flex-1">极速时时彩</div>
              <div className="flex-105">12482869期</div>
              <div className="flex-105">
                {" "}
                本期流水 <span className=""> 0 </span>
              </div>
              <div className="flex-105">
                {" "}
                今日流水 <span className=""> 0 </span>
              </div>
              <div className="flex-105">
                {" "}
                今日盈亏 <span className=""> 0 </span>
              </div>
              <div className="flex-1"> 维护中 </div>
            </div>
            <ul style={{ display: "none" }}>
              <li className="flex row">
                <div className="flex-1">会员编号</div>
                <div className="flex-1">用户名</div>
                <div className="flex-1">昵称</div>
                <div className="flex-1">余额</div>
                <div className="flex-1">竞猜总分</div>
                <div className="flex-1">上期盈亏</div>
                <div className="flex-3">竞猜详情</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RightPanel;
