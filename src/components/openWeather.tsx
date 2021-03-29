import React, { Component } from "react";

interface Employee {
  arr: any[];
}

export class openWeather extends Component<{}, Employee> {
  constructor(props: any) {
    super(props);
    this.state = {
      arr: [],
    };
  }
  fetchEmployees = async () => {
    const api = "http://dummy.restapiexample.com/api/v1/employees";
    try {
      const response = await fetch(api);
      const { data } = await response.json();
      console.log(data);
      this.setState({
        arr: data,
      });
      return data;
    } catch (error) {
      if (error) {
        return error.message;
      }
    }
  };

  render() {
    this.fetchEmployees();
    const { arr } = this.state;

    return (
      <div className="container m-3">
        {arr.map((employee, i) => (
          <div className="row">
            <div className="col-md-3">
              <div
                key={i}
                className="card text-white bg-primary mb-3"
                style={{ maxWidth: "18rem" }}
              >
                <div className="card-header">Employees</div>
                <div className="card-body">
                  <h5 className="card-title">{employee.employee_name}</h5>
                  <p className="card-text">{employee.employee_salary}</p>
                  <p className="card-text">{employee.employee_age}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default openWeather;
