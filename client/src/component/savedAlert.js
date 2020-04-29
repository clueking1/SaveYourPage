import React from 'react';
import { Alert } from 'reactstrap';

const SavedAlert = (props) => {
  return (
    <div>

      <Alert color="success">
        Book successfully saved!
        <i class="fa fa-remove" style={{fontSize: "36px"}} onClick={() => props.delAlert()}></i>
      </Alert>
      
    </div>
  );
};

export default SavedAlert;