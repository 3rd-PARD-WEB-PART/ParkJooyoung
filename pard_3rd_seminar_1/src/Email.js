import styled from "styled-components";
import "./Form.css"

const Email = () => {
    return (
        <div>
            <label htmlFor="email">Email:</label><br />
            <input type="text" id="email"></input>
        </div>
    )
}

export default Email;