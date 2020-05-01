import React from 'react';
import { Alert } from 'reactstrap';

const DangerAlert = (props) => {
  return (
    <div>

      <Alert color="danger">
        Can't Search Book!
        <i class="fa fa-remove" style={{fontSize: "36px"}} onClick={() => props.delAlert()}></i>
      </Alert>
      
    </div>
  );
};

export default DangerAlert;