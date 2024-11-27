import React, { useState } from "react";
import ProfilePostRow from "../../Posts/ProfilePostRow/ProfilePostRow";
import "./ProfileSections.css";

function ProfileSections() {
  const [activeTab, setActiveTab] = useState("posts");
  return (
    <>
      <div className="container">
        {/* Tab navigation styled like Instagram */}
        <ul className="nav nav-pills justify-content-center upperBorderClass mt-2 mb-2">
          <li className="nav-item">
            <a
              className={`nav-link ${activeTab === "posts" ? "active" : ""} d-flex flex-column align-items-center`}
              onClick={() => setActiveTab("posts")}
              href="#"
            >
              <i className="fas fa-th-large fa-3x"></i> {/* Icon for posts */}
              <span className="mt-1">Posts</span>
            </a>
          </li>
          <li className="nav-item">
            <a
              className={`nav-link ${activeTab === "tags" ? "active" : ""} d-flex flex-column align-items-center`}
              onClick={() => setActiveTab("tags")}
              href="#"
            >
              <i className="fas fa-tag fa-3x"></i> {/* Icon for tags */}
              <span className="mt-1">Tagged</span>
            </a>
          </li>
        </ul>

        {/* Tab content */}
        <div className="tab-content ">
          {/* Posts tab content */}
          <div
            className={`tab-pane fade ${activeTab === "posts" ? "show active" : ""}`}
          >
            <ProfilePostRow />
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileSections;
