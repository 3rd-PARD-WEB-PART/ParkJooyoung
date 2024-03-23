import styled from "styled-components";
import "./Form.css"

const Name = () => {
    return (
        <div>
            <label htmlFor="name">Name:</label><br />
            <input type="text" id="name"></input>
        </div>
    )
}

export default Name;