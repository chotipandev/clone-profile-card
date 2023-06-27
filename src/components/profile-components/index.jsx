import bannerImg from "../../assets/bg-pattern-card.svg";
import profileImg from "../../assets/image-victor.jpg";

function Card() {
  return (
    <div className="main">
      <div className="container">
        <div className="card">
          <div className="banner">
            <img src={bannerImg} />
          </div>
          <div className="profile">
            <img src={profileImg} />
          </div>
          <div className="content">
            <div className="box">
              <h3>Victor Crest</h3>
              <p className="two-six">26</p>
            </div>
            <small className="country">London</small>
          </div>

          <div className="footer">
            <div className="status">
              <div className="1s">
                <h3>80K</h3>
                <small>Followers</small>
              </div>
              <div className="2s">
                <h3>803K</h3>
                <small>Likes</small>
              </div>
              <div className="3s">
                <h3>1.4K</h3>
                <small>Photos</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
