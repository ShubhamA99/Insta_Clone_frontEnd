import React from "react";
import "./ProfilePostRow.css";

function ProfilePostRow() {
  const posts = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1497445462247-4330a224fdb1?w=500&h=500&fit=crop",
      alt: "Post 1",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1497445462247-4330a224fdb1?w=500&h=500&fit=crop",
      alt: "Post 2",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1497445462247-4330a224fdb1?w=500&h=500&fit=crop",
      alt: "Post 3",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1497445462247-4330a224fdb1?w=500&h=500&fit=crop",
      alt: "Post 4",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1497445462247-4330a224fdb1?w=500&h=500&fit=crop",
      alt: "Post 5",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1497445462247-4330a224fdb1?w=500&h=500&fit=crop",
      alt: "Post 6",
    },
  ];

  return (
    <>
      <div className="container p-sm-4 p-md-5 p-lg-6">
        <div className="row g-3">
          {" "}
          {/* Adds consistent gaps between posts */}
          {posts.map((post) => (
            <div key={post.id} className="col-4">
              {" "}
              {/* Three columns per row */}
              <div
                className="position-relative post-container"
                style={{
                  width: "100%", // Takes full width of the column
                  paddingTop: "100%", // Makes the container a square (1:1 aspect ratio)
                }}
              >
                <img
                  src={post.src}
                  alt={post.alt}
                  className="position-absolute top-0 start-0 w-100 h-100 post-image"
                  style={{ objectFit: "cover" }} // Ensures the image fills the square
                />
                <div className="post-overlay">
                  <div className="post-info">
                    <p className="likes-count">
                      <i className="fas fa-heart fa-lg"></i>&nbsp;22
                    </p>
                    <p className="comments-count">
                      <i className="fas fa-comment fa-lg"></i>&nbsp; 22
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ProfilePostRow;
