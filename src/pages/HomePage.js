import React from "react";
import { Route } from "react-router-dom";

// Components
import Card from "../components/Card/Card";
import Form from "../components/Form/Form";

function HomePage() {
  return (
    <Card classes="margin-top-md">
      <Form />
    </Card>
  );
}

export default HomePage;
