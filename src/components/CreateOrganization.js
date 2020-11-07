import React from "react";

const CreateOrganization = () => {
  return (
    <div className="createOrganization">
      <form>
        <div className="form">
          <label>Logo:</label>
          <input type="file" name="orgLogo" id="" />
          <label>Name: </label>
          <input type="text" name="orgName" id="" />
          <label>Website: </label>
          <input type="text" name="orgWebsite" id="" />
          <label>Description: </label>
          <input type="text" name="orgDescription" id="" />
        </div>
        <div className="button-area">
          <input type="submit" className="button-primary" value="Create" />
        </div>
      </form>
    </div>
  );
};
export default CreateOrganization;
