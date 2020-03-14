
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
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import { makeStyles } from "@material-ui/core/styles";
import EmployeeTable from "components/Table/EmployeeTable.js";

// core components
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};
const useStyles = makeStyles(styles);

function Lists() {
  const classes = useStyles();

  document.documentElement.classList.remove("nav-open");
  // debugger
  React.useEffect(() => {
    document.body.classList.add("landing-page");

    agent.Lists.all().then(function (data) {
      setState(data);
    });
  }, []);

  const [state, setState] = React.useState([]);

  return (
    <div>
      <ProfilePageHeader />
      <h1 className="py-4 text-center">Our Best Campaigns </h1>
      <div className="section profile-content service-bar" style={{marginTop:"20px", marginBottom:"15px"}}>
        <Container>
          <Row>
          {/* {state.map((row, key) => ( */}

            <GridContainer>
              <GridItem xs={12} sm={12} md={12}>
                <Card>
                  <CardHeader color="warning">
                    <h4 className={classes.cardTitleWhite}>Campaigns Stats</h4>
                  </CardHeader>
                  <CardBody>
                    <EmployeeTable
                      tableHeaderColor="warning"
                      tableHead={["No", "Name", "Goal", "Total Budget", "Status"]}
                      tableData={state}
                    />
                  </CardBody>
                </Card>
              </GridItem>
            </GridContainer>

             {/* <Col md="4">
               <div className="card h-100">
               <div className="card-img">
                <img className="img-fluid" src="ads/img1.jpg"/>
                 </div>
                 <div className="card-body">
                   <h4 className="card-header" style={{color:"#1273eb", marginTop:"0px", border:"none"}}> {row.name} </h4>
                   <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>
                 </div>
               </div>
             </Col> */}
          {/* ))}             */}
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default connect()(Lists);
