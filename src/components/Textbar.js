import React, {useState} from 'react'

export default function Textbar(props){

  const [text, setText]=useState('');

  const handleUpClick=()=>{
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper Case!","success");
  }

  const handleLoClick=()=>{
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower Case!","success");
  }

  const handleClearClick=()=>{
    let newText='';
    setText(newText);
    props.showAlert("Textbox Cleared!","success");
  }

  const handleExtraSpace=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra Space Removed!","success");
    
  }

  const handleCopy=()=>{
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to Clipboard!","success");
  }
 
  const handleOnChange=(event)=>{
    setText(event.target.value);
  }
  return (
      <>
      <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h2> {props.heading}</h2>
        <div className="mb-3">
           <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e': 'white',
           color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="6"></textarea>
        </div>
        <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleUpClick} >Convert to Uppercase</button> 
        <button disabled={text.length===0} className='btn btn-secondary mx-1 my-1'  onClick={handleLoClick} >Convert to Lowercase</button> 
        <button disabled={text.length===0} className='btn btn-warning mx-1 my-1'  onClick={handleClearClick} >Clear Text</button>
        <button disabled={text.length===0} className='btn btn-dark mx-1 my-1'  onClick={handleCopy} >Copy</button> 
        <button disabled={text.length===0} className='btn btn-info mx-1 my-1'  onClick={handleExtraSpace} >Remove Extra Space</button> 


      </div>

       <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'} }>
        <h3> Text Summary </h3>
        <p> {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p> {0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
        
        <h3>Preview</h3>
        <p> {text.length>0?text:"Enter something in the textbox to preview"}</p>
       </div>

      
      </>

    )
  
}
