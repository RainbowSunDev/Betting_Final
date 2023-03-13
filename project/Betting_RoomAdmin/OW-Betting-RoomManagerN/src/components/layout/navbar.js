import React from "react";
const Navbar = () => {
  return (
    <div className="flex row space-between admin-navbar">
      <div>
        <img alt="no image" src={"image/feitian_logo.fba62ffc.png"} />
        <div>
          <div></div>
        </div>
      </div>
      <ul className="flex row">
        <li>房间号: 382668</li>
        <li>昵称: 金冠线上娱乐</li>
        <li>
          {" "}
          过期时间: <span className="">2022/11/03 17:03:21</span>
        </li>
        <li>
          <input type="button" value="H5 / App 下载" />
        </li>
        <li>
          <img
            alt="no image"
            src="image/589274d3c32d4bf1bb11cac99bc07c7e.jpg"
          />{" "}
          fygj123 <i className="icon-go"></i>
          <ul className="text-center">
            <li>修改密码</li>
            <li> 绑定手机号码 </li>
            <li>退出登录</li>
          </ul>
        </li>
      </ul>
      <div
        className="current-mask current-download"
        style={{ display: "none" }}
      >
        <div>
          <p className="flex row space-between">
            {" "}
            H5 / App下载 <i className="icon-close"></i>
          </p>
          <div>
            <div>
              <h4>
                {" "}
                H5扫码登录{" "}
                <button className="current-button small light-blue">
                  刷新
                </button>
              </h4>
              <div id="wapDownload"></div>
              <p></p>
            </div>
            <div>
              <h4>安卓下载</h4>
              <div id="appDownload"></div>
              <p></p>
            </div>
            /
          </div>
        </div>
      </div>
      /
    </div>
  );
};
export default Navbar;
