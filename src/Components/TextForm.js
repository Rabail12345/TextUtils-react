import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUPclick=()=>{
   console.log('uppercase was clicked');
   let newText=text.toUpperCase();
   setText(newText);
   props.showAlert("converted to uppercase","success");
  }

  const handleLOclick=()=>{
    console.log('lowercase was clicked');
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("converted to lowercase","success");
 
   }

   const handleclearclick=()=>{
    console.log('clear was clicked');
    let newText='';
    setText(newText);
    props.showAlert("text cleared","success");
 
   }

   const handlecopy=()=>{
    var text=document.getElementById('mybox');
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("text copied","success");
   }

  const handleOnChange=(event)=>{
    console.log('uppercase was clicked');
    setText(event.target.value);
   }

  const [text,setText]=useState("");
  return (
    <>
    <div className='container' id="textForm-container">
      <h1>{props.heading}</h1>
      <div class="mb-3">
      
      <textarea className="form-control" value={text} id="mybox" onChange={handleOnChange} style={{backgroundColor: props.mode==='white'?'grey':'white'}} rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUPclick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLOclick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleclearclick}>
          Clear
        </button>
        <button className="btn btn-primary mx-2" onClick={handlecopy}>
          Copy
        </button>
    </div>
    <div className="container my-3" id="preview-container" >
    <h2>Your text summary</h2>
    <p>{text.split("").length} words and {text.length}characters</p>
    <p> {0.008* text.split("").length}Minutes of read</p>
    <h3>Preview</h3>
    <p>{text.length>0?text:"Enter your text to preview them below"}</p>
    </div>

    </>
  )
}
