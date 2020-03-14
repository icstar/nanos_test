import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import CustomInput from "../../components/CustomInput/CustomInput.js";
import GridItem from "../../components/Grid/GridItem.js";

import Close from "@material-ui/icons/Close";

import Edit from "@material-ui/icons/Edit";
// core components
import styles from "../../assets/jss/material-dashboard-react/components/tableStyle.js";

import agent from '../../agent';
import {
  ADMIN_DEL_EQUIP  
} from '../../constants/actionTypes';

const useStyles = makeStyles(styles);
const buttonStyles = {
  background:"#9c27b0",
  color:"white"
}
let equipDel = (equip_id) => {
  const result = window.confirm("Are you sure?");
  if(result){
    agent.Admin.delEquipment(equip_id);
  }
}
function getModalStyle() {
  const top = 40;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}
const useotherStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 600,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));
export default function CustomTable(props) {
  const classes = useStyles();
  const otherclasses = useotherStyles();
  const { tableHead, tableData, tableHeaderColor } = props;

  const [modalStyle] = React.useState(getModalStyle);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [open, setOpen] = React.useState(false);
  return (
    <div className={classes.tableResponsive}>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}>
        <div style={modalStyle} className={otherclasses.paper}>
          <h2 id="simple-modal-title">Update Equipment</h2>
            <GridItem xs={12} sm={12}>
              <CustomInput
                id="name"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  value:""
                }}       
              />
            </GridItem>
            <GridItem xs={12} sm={12}>
              <CustomInput
                id="count"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  value:""
                }}       
              />
            </GridItem>
            <GridItem xs={12} sm={12}>
              <CustomInput
                id="size"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  value:props.name
                }}       

              />
            </GridItem>
            <GridItem xs={12} sm={12}>
              <CustomInput
                id="manager"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  value:""
                }}       
              />
            </GridItem>

          <GridItem xs={12} sm={12}>
            <Button style={buttonStyles}>
              Save
            </Button>
          </GridItem>
        </div>
      </Modal>
      <Table className={classes.table}>
        {tableHead !== undefined ? (
          <TableHead className={classes[tableHeaderColor + "TableHeader"]}>
            <TableRow className={classes.tableHeadRow}>
              {tableHead.map((prop, key) => {
                return (
                  <TableCell
                    className={classes.tableCell + " " + classes.tableHeadCell}
                    key={key}
                  >
                    {prop}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
        ) : null}
        <TableBody>
          {tableData.length > 0 ? (tableData.map((prop, key) => {
            return (
              <TableRow key={key} className={classes.tableBodyRow}>
                <TableCell className={classes.tableCell}>
                  {key + 1}
                </TableCell>
                <TableCell className={classes.tableCell}>
                  {prop.name}
                </TableCell>
                <TableCell className={classes.tableCell}>
                  {prop.count}
                </TableCell>
                <TableCell className={classes.tableCell}>
                  {prop.size}
                </TableCell>
                <TableCell className={classes.tableCell}>
                  {prop.manager}
                </TableCell>

                <TableCell><Tooltip id="tooltip-top" title="Edit" placement="top" classes={{ tooltip: classes.tooltip }}>
                  <IconButton aria-label="Edit" className={classes.tableActionButton} onClick={handleOpen}><Edit className={classes.tableActionButtonIcon + " " + classes.edit}/></IconButton>
                </Tooltip>
                <Tooltip id="tooltip-top-start" title="Remove" placement="top" classes={{ tooltip: classes.tooltip }}>
                  <IconButton aria-label="Close" className={classes.tableActionButton} onClick={() => {equipDel(prop._id);}}><Close className={classes.tableActionButtonIcon + " " + classes.close}/></IconButton>
                </Tooltip></TableCell>
              </TableRow>
            );
          })) : null}
        </TableBody>
      </Table>
    </div>

  );
}

CustomTable.defaultProps = {
  tableHeaderColor: "gray"
};

CustomTable.propTypes = {
  tableHeaderColor: PropTypes.oneOf([
    "warning",
    "primary",
    "danger",
    "success"
  ]),
  tableHead: PropTypes.arrayOf(PropTypes.string)
};
