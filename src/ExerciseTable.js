import React, { Component } from "react";
import { Table, Button } from "antd";

const columns = [
  {
    title: "Date",
    dataIndex: "date",
    key: "date"
  },
  {
    title: "Workout",
    dataIndex: "workout",
    key: "workout"
  },
  {
    title: "Duration",
    dataIndex: "duration",
    key: "duration"
  },
  {
    title: "Actions",
    key: "actions",
    render: (text, record) => (
      <Button type="primary" icon="delete">Download</Button>
    )
  }
];

const data = [{
  key: '1',
  date: 'John Brown',
  workout: 32,
  duration: 'New York No. 1 Lake Park'
}, {
  key: '2',
  date: 'John Brown',
  workout: 32,
  duration: 'New York No. 1 Lake Park'
}, {
  key: '3',
  date: 'John Brown',
  workout: 32,
  duration: 'New York No. 1 Lake Park'
}];


class ExerciseTable extends Component {
  render() {
    return <Table columns={columns} dataSource={data}/>;
  }
}

export default ExerciseTable;
