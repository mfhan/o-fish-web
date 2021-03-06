import React, { Component } from "react";
import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";

import ItemInfo from "../../partials/item-info/item-info";

import { VESSELS_PAGE } from "../../../root/root.constants.js";

import "../search-results.css";

class FoundVessels extends Component {
  render() {
    const { vesselsList, total, searchWords } = this.props;

    return (
      <div className="standard-view">
        <div className="white-bg box-shadow all-items-list">
          <div className="flex-row justify-between align-end full-view padding-top padding-bottom border-bottom">
            <div className="main-info">
              <div className="item-name">Records of Vessels ({total})</div>
            </div>
            {total > 1 && (
              <NavLink className="item-link" to={VESSELS_PAGE}>
                See all
              </NavLink>
            )}
          </div>
          <div className="items-list">
            <div className="flex-row align-center border-bottom padding">
              <ItemInfo
                name={vesselsList[0]._id}
                icon="vessel"
                mainText={vesselsList[0].catches.slice(0, 3).join(", ")}
                subText="Catches"
                label="Vessel"
                searchWords={searchWords}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(FoundVessels);
