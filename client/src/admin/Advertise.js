import React from "react";
// react plugin for creating charts

// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
import Warning from "@material-ui/icons/Warning";
import Store from "@material-ui/icons/Store";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import Accessibility from "@material-ui/icons/Accessibility";

// core components
import GridItem from "../components/Grid/GridItem.js";
import GridContainer from "../components/Grid/GridContainer.js";
import MaterialTable from 'material-table';

import Card from "../components/Card/Card.js";
import CardHeader from "../components/Card/CardHeader.js";
import CardBody from "../components/Card/CardBody.js";
import CardIcon from "../components/Card/CardIcon.js";
import CardFooter from "../components/Card/CardFooter.js";
import Danger from "../components/Typography/Danger.js";


import agent from '../agent';
import { connect } from 'react-redux';

import styles from "../assets/jss/material-dashboard-react/views/dashboardStyle.js";

const classes = makeStyles(styles);


const columns =  [
  { title: 'Name', field: 'name' },
  { title: 'Goal', field: 'goal'},
  { title: 'Total Budget', field: 'total_budget'},
  { title: 'Status', field: 'status', lookup: { 'Scheduled': 'Scheduled', 'Delivering': 'Delivering' , 'Ended' : 'Ended'}}
]

function Advertise(){

  React.useEffect(() => {
    agent.Admin.getAdvertise().then(function (data) {
      if(data.redirectUrl){
        window.location.href = data.redirectUrl;
      } else{
        setState(data);
      }
    });
  }, []);
  const adDel = (ad_id) => {
    agent.Admin.delAdvertise(ad_id).then(function (data) {
      // setState(data);
    });
  }
  const adUpdate = (ad) => {
    agent.Admin.updateAdvertise(ad).then(function (data) {
      // setState(data);
    });
  }
  const adAdd = (ad) => {
    agent.Admin.addAdvertise(ad).then(function (data) {
      // setState(data);
    });
  }

  const [state, setState] = React.useState([]);

  return (
    <>
    <div className="advertise-topbar">
      <GridContainer>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                <Icon>content_copy</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Total Budget</p>
              <h3 className={classes.cardTitle}>
              $ 34,245
              </h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <a href="#pablo" onClick={e => e.preventDefault()}>
                  More info
                </a>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
                <Store />
              </CardIcon>
              <p className={classes.cardCategory}>Remaining</p>
              <h3 className={classes.cardTitle}>$4,285</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <a href="#pablo" onClick={e => e.preventDefault()}>
                  More info
                </a>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="danger" stats icon>
              <CardIcon color="danger">
                <Icon>info_outline</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Delivering Count</p>
              <h3 className={classes.cardTitle}>75</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <a href="#pablo" onClick={e => e.preventDefault()}>
                  More info
                </a>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <Accessibility />
              </CardIcon>
              <p className={classes.cardCategory}>Total Count</p>
              <h3 className={classes.cardTitle}>245</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <a href="#pablo" onClick={e => e.preventDefault()}>
                  More info
                </a>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      </div>    
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Advertise lists</h4>
              <p className={classes.cardCategoryWhite}>
                Here is a subtitle for this table
              </p>
            </CardHeader>
            <CardBody>
            <MaterialTable
              title="..."
              columns={columns}
              data={state}
              editable={{
                onRowAdd: newData =>
                  new Promise(resolve => {
                    setTimeout(() => {
                      resolve();
                      adAdd(newData);
                      setState(prevState => {
                        const data = [...prevState];
                        data.push(newData);
                        return data;
                      });
                    }, 200);
                  }),
                onRowUpdate: (newData, oldData) =>
                  new Promise(resolve => {
                    setTimeout(() => {
                      resolve();
                      adUpdate(newData);

                      if (oldData) {
                        setState(prevState => {
                          const data = [...prevState];
                          data[data.indexOf(oldData)] = newData;
                          return data;
                        });
                      }
                    }, 200);
                  }),
                onRowDelete: oldData =>

                new Promise(resolve => {
                    setTimeout(() => {
                      resolve();
                      adDel(oldData._id);

                      setState(prevState => {
                        const data = [...prevState];
                        data.splice(data.indexOf(oldData), 1);
                        return data;
                      });
                    }, 200);
                  }),
              }}
            />

            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
      </>

  );
}
export default connect()(Advertise);