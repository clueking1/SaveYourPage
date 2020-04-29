import React from 'react';
import { Alert } from 'reactstrap';

const SavedAlert = () => {
  return (
    <div>

      <Alert color="success">
        Book successfully saved!
        <i class="fa fa-remove" style={{fontSize: "36px"}}></i>
      </Alert>
      
    </div>
  );
};

export default SavedAlert;