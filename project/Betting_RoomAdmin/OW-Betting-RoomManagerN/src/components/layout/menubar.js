import React from "react";
import { Link } from "react-router-dom";

const Menubar = () => {
  return (
    <div className="admin-topbar">
      <ul className="flex row">
        <li className="router-link-exact-active router-link-active">
          <i className="icon-home"></i>首页
        </li>
        <li className="">
          <i className="icon-system"></i>
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>
            房间管理
          </Link>
        </li>
        <li className="">
          <i className="icon-user"></i>
          <Link style={{ color: "white", textDecoration: "none" }}>
            {" "}
            用户管理{" "}
          </Link>
        </li>
        <li className="">
          <i className="icon-apply"></i> 申请管理
        </li>
        <li className="">
          <i className="icon-report"></i>{" "}
          <Link style={{ color: "white", textDecoration: "none" }}>
            报表管理
          </Link>{" "}
        </li>
        <li className="">
          <i className="icon-commiss"></i>
          <Link style={{ color: "white", textDecoration: "none" }}>
            回水管理
          </Link>{" "}
        </li>
        <li className="">
          <i className="icon-greport"></i>{" "}
          <Link style={{ color: "white", textDecoration: "none" }}>
            现场监控
          </Link>{" "}
        </li>
        <li className="">
          <i className="icon-message"></i>{" "}
          <Link style={{ color: "white", textDecoration: "none" }}>
            消息设置
          </Link>{" "}
        </li>
        <li className="">
          <i className="icon-operating"></i>{" "}
          <Link style={{ color: "white", textDecoration: "none" }}>
            赔率设置
          </Link>{" "}
        </li>
        <li className="">
          <i className="icon-aide"></i>{" "}
          <Link style={{ color: "white", textDecoration: "none" }}>
            上盘助手
          </Link>{" "}
        </li>
        <li className="" style={{ display: "none" }}>
          <i className="icon-aide"></i> 视讯飞单{" "}
        </li>
        <li className="">
          <img alt="no image" src="image/special.7c58eb17.svg" />{" "}
          <a
            href="./Protocol.html"
            style={{ color: "white", textDecoration: "none" }}
          >
            上盘助手
          </a>{" "}
        </li>
        <li className="" style={{ display: "none" }}>
          <img alt="no image" src="image/feedback.2ac1d3b2.svg" /> 彩云共享
        </li>
        <li>
          <img
            alt="no image"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABq0lEQVRYR+2XvUsDQRDFfw9LsbFWUNDCL6y1Mr21CIIW/iHqH2KhYGNvbQrROn6CCgaMrRbWMjKyC2eyCRdZvRQuLLd3mZv3MjNv90ZUPFQxPkkCZrYLbAETmQg2gQNJ7vfb6CAQwHcyAbe72WsnkSLwDIwBNUn1HETMbAU4BVqSxos+UwTMDSRlrQ8zS/odXALAEfAIPAB3QEPSR5mUmNkQsAjMANPAFLCRimwqAufAUgLoNZBxUo3CdFMHi9PBHHQ04eNC0nLPGvAfzWwWmAvT1/G+TACizT1wA1zHqyS/7y3DbghmNgzMAwvhGtf+/BK4CvNrLemtDNtUClwuroJaGQdlbcws6XdwVTCw+0AI5QiwKem2ULSHwHu31GXbiMwsytQrei3UwHFQTIfMYo3kJOCSjIBRVi7ZM2Bd0kuqMLMRKIQ8kvBHJ5JWeykiG4FQA366pUb9L2rA9VwdgeLf7hbWX62B/xRUnoJBI1D65My2D5Q9ftvt+iHwFBqS3/gsb0qa7PlJVnljEvZ6b6G2Q4Py06gX32sB+6Vasxxo/fjI2v30AxxtPwHvlyUwZGyb1AAAAABJRU5ErkJggg=="
          />
          上盘助手
        </li>
      </ul>
    </div>
  );
};
export default Menubar;
