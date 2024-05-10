import React, { useState } from 'react'
// import PropTypes from 'prop-types'

export default function TextForm(props) {
    // const [text, setText] = useState("Enter text here");
    const [text, setText] = useState("");

    // text = "new text"; 
    // Above is the wrong way to update the text --> Correct way is :-
    // setText("New Text");

    const handleUpClick = () => {
        // console.log("Uppercase was clicked " + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", "success");
    }
    
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!", "success");
    }

    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value);
    }

    // let myStyle = {
    // backgroundColor: 'black',
    // color: 'white',
    // borderColor: 'white'
    // };

    // const [myStyle, setMyStyle] = useState({
    //     backgroundColor: 'white',
    //     color: 'black'
    // });

    // const [btnText, setBtnText] = useState("Enable dark mode")

    // const toggleStyle = () => {
    //     if (myStyle.color === 'white') {
    //         setMyStyle({
    //             backgroundColor: 'white',
    //             color: 'black'
    //         });

    //         setBtnText("Enable dark mode");
    //     }
    //     else {
    //         setMyStyle({
    //             backgroundColor: '#212529',
    //             color: 'white'
    //         });

    //         setBtnText("Enable light mode");
    //     }
    // }

    return (
        <>
            {/* <div className="container" style={myStyle}> */}
            <div className="container">
                <h2>{props.heading}</h2>
                {/* <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div> */}
                <div className="mb-2">
                    {/* <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label> */}
                    <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} placeholder='Enter your text here'></textarea>
                </div>
                {/* <button className="btn btn-primary mx-2 mb-2" onClick={handleUpClick} style={myStyle}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2 mb-2" onClick={handleLowClick} style={myStyle}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-2 mb-2" style={myStyle} >Enable Dark Mode</button> */}
                
                <button className="btn btn-primary mx-2 mb-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2 mb-2" onClick={handleLowClick}>Convert to Lowercase</button>
                
                {/* <button className="btn btn-primary mx-2 mb-2" onClick={toggleStyle}>{btnText}</button> */}
            </div >

            <div className={`container my-3 text-${props.mode.mode2 === "dark" ? "light" : "dark"}`}>
                <h2>Your Text Summary</h2>
                {/* <p>{text.trim().split(" ").length} words and {text.length} characters</p> */}
                <p>{text.split(/\s+/).filter((element)=> {return element.length !== 0}).length} words and {text.length} characters</p>
                <p>{0.008 * text.trim().split(" ").length} minutes read</p>

                <h2>Preview</h2>
                <p>{text}</p>
            </div>

        </>
    )
}