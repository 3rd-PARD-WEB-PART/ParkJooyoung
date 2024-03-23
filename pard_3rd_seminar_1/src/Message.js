import styled from "styled-components";
import "./Form.css"

const Message = () => {
    return (
        <div>
            <label htmlFor="meassage">Message:</label><br />
            <input type="text" id="meassage"></input>
        </div>
    )
}

export default Message;