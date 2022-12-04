import React, { Component } from "react";

export class StudentList extends Component {
  render() {
    const studenData = [
      { student: "Adele", name: "25", sales: 1731000 },
      { student: "Drake", name: "Views", sales: 1608000 },
      { student: "Beyonce", name: "Lemonade", sales: 1554000 },
      { student: "Chris Stapleton", name: "Traveller", sales: 1085000 },
      { student: "Pentatonix", name: "A Pentatonix Christmas", sales: 904000 },
    ];

    // console.log(albumSalesStrings);
    return (
      <div>
        {studenData.map((name) => (
          <div>
            {" "}
            {name.student +
              " by " +
              name.name +
              " sold " +
              name.sales +
              " copies"}{" "}
          </div>
        ))}
      </div>
    );
  }
}

export default StudentList;
