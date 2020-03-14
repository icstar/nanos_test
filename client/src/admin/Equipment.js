import React from "react";
import MaterialTable from 'material-table';
// // @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// // core components
import GridItem from "../components/Grid/GridItem.js";
import GridContainer from "../components/Grid/GridContainer.js";
// import Table from "../../components/Table/EquipmentTable.js";
import Card from "../components/Card/Card.js";
import CardHeader from "../components/Card/CardHeader.js";
import CardBody from "../components/Card/CardBody.js";
import agent from '../agent';
import { connect } from 'react-redux';
// import {
//   ADMIN_GET_EQUIP  
// } from '../../constants/actionTypes';
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

const classes = makeStyles(styles);

const columns =  [
  { title: 'Name', field: 'name' },
  { title: 'Count', field: 'count' },
  { title: 'Size', field: 'size'},
  { title: 'Manager', field: 'manager'}
]

function Equipment() {

  React.useEffect(() => {
    agent.Admin.equip().then(function (data) {
      if(data.redirectUrl){
        window.location.href = data.redirectUrl;
      } else{
        setState(data);
      }
    });    
  }, []);
  const equipDel = (equip_id) => {
    agent.Admin.delEquipment(equip_id).then(function (data) {
      // setState(data);
    });
  }
  const equipUpdate = (equip) => {
    agent.Admin.updateEquipment(equip).then(function (data) {
      // setState(data);
    });
  }
  const equipAdd = (equip) => {
    agent.Admin.addEquipment(equip).then(function (data) {
      // setState(data);
    });
  }

  const [state, setState] = React.useState([]);

  return (
          <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Equipment lists</h4>
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
                      equipAdd(newData);
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
                      equipUpdate(newData);
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
                      equipDel(oldData._id);
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
  );
}
export default connect()(Equipment);