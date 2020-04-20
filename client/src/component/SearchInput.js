import React from 'react';
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css"


function Search() {

    return (
        <div>
            <InputGroup>
            <InputGroupAddon addonType="prepend">
            <Button>Search Books:</Button>
            </InputGroupAddon>
            <Input />
        </InputGroup>
        </div>
    )
}

export default Search