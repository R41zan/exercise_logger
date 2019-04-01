import React, { Component } from "react";
import { Input, Button } from "antd";

class ExerciseForm extends Component {
  render() {
    return (
      <div className="ExerciseForm">
        <Input placeholder="Date" style={{ width: "25%" }} />
        <Input placeholder="Workout" style={{ width: "25%" }} />
        <Input placeholder="Duration" style={{ width: "25%" }} />
        <Button type="primary">Adicionar</Button>
      </div>
    );
  }
}

export default ExerciseForm;
