
import React from "react";
import { connect } from 'react-redux';

// reactstrap components
import {
  Button,
  Label,
  FormGroup,
  Input,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col
} from "reactstrap";
import agent from '../agent';

// core components
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";


function ListDetail(props) {
  document.documentElement.classList.remove("nav-open");
  // debugger
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    agent.Lists.getAd(props.match.params.id).then(function(data){
      setState(data);
    })
  }, {});

  const [state, setState] = React.useState({});
  var platforms = [];
  var interests = [];

  if(state.platforms) {
    platforms = Object.entries(state.platforms);
    interests = platforms[0][1].target_audiance.interests;
  }


  return (
    <div>
      <ProfilePageHeader />
      <h1 className="py-4 text-center">Detail Informations </h1>
      <div className="section profile-content service-bar" style={{marginTop:"20px", marginBottom:"15px"}}>
        <Container>

          {platforms.map((row, key) => (
            
            <div className="row" style={{marginBottom:"50px"}}>
              <div className="col-lg-6 col-12">
                <div className="about-wrap">
                  <h2 style={{fontWeight:"bold"}}>{row[0]}</h2>
                  <h3>We Are The Leader In The Architectural</h3>
                  <p style={{marginBottom:"30px"}}>For each project we establish relation ships with ano partners we know will help us create added value for your project well any bringing together the public and private sectors, we diferent sector-overarching links to gather knowledge.</p>
                  <div className="row">
                    <div className="col-md-4 col-sm-6 col-12">
                      <div className="about-content">
                        <h4><span className="counter">$</span><span style={{color:"#f5593d", fontWeight:"bold"}}> {row[1].total_budget} </span></h4>
                        <p>Total Budget</p>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6 col-12">
                      <div className="about-content">
                        <h4><span className="counter">$</span><span style={{color:"#f5593d", fontWeight:"bold"}}> {row[1].remaining_budget}</span> </h4>
                        <p>Remaining Budget</p>
                      </div>
                    </div>
                  </div>
                  <div className="row" style={{marginTop:"20px"}}>
                  <ul className="list interests">
                    {interests.map((interest, key) => (
                      <li>
                      <a href="#">{interest}</a>
                      </li>
                    ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 d-none d-lg-block">
                <div className="about-img" style={{backgroundImage: "url(/ads/" + row[1].creatives.image + ")", backgroundSize: "cover", backgroundPosition: "center center"}}>
                  <a href={row[1].creatives.url} target="_blank"><img src={"/ads/" + row[1].creatives.image}/></a>
                </div>
              </div>
            </div>            
          ))}

        </Container>
      </div>
    </div>
  );
}

export default connect()(ListDetail);
