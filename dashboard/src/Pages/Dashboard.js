import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./table.css";
import { fetchDashboard } from "../reducers/Dashboard";

const DashboardTable = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDashboard());
  }, [dispatch]);
  const { dashboardData } = useSelector(({ dashboard }) => dashboard);
  console.log(dashboardData, "data");
  const renderHeader = () => {
    let headerElement = [
      "ID",
      "Name",
      "Age",
      "Gender",
      "Email",
      "Phone Number",
    ];

    return headerElement.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  };

  const renderData = () => {
    return (
      dashboardData?.user &&
      dashboardData.user.map(({ id, name, age, gender, email, phoneNo }) => {
        return (
          <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{age}</td>
            <td>{gender}</td>
            <td>{email}</td>
            <td>{phoneNo}</td>
          </tr>
        );
      })
    );
  };
  return (
    <div className="table">
      <h1 className="title">Dashboard Table</h1>
      <table className="table-content">
        <thead>
          <tr>{renderHeader()}</tr>
        </thead>
        <tbody>{renderData()}</tbody>
      </table>
    </div>
  );
};

export default DashboardTable;
