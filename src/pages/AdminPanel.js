import React, { useState } from "react";
import SideBar from "../components/SideBar";

import Events from "../components/Events";
import Edit from "../components/Edit";
import Organizers from "../components/Organizers";
import Diffusion from "../components/Diffusion";
import Analitics from "../components/Analitics";

const AdminPanel = () => {
  const [option, setOption] = useState("Events");

  // handleChange= ()=>{
  //     console.log('btn-addOrganizator')
  // }onClick={this.handleChange}

  const handleOption = (selectOption) => {
    setOption(selectOption);
  };

  const handleRender = () => {
    switch (option) {
      case "Events":
        return <Events />;

      case "Edit":
        return <Edit />;

      case "Organizers":
        return <Organizers />;

      case "Diffusion":
        return <Diffusion />;

      case "Analitics":
        return <Analitics />;

      default:
        return <Events />;
    }
  };

  return (
    <main className="main--container">
      <SideBar handleOption={handleOption} select={option} />
      <section className="main--container-list">{handleRender()}</section>
    </main>
  );
};

export default AdminPanel;
