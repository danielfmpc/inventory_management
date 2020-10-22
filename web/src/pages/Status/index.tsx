import React, { useEffect } from "react";
import api from "../../services/api";

const Status: React.FC = () => {
  useEffect(() => {
    api.get('status').then(request => {
      console.log(request.data);
    });  
  }, []);
  return (
    <>
      <div className="home">
        <h1>Status</h1>
      </div>
    </>
  )
}

export default Status;