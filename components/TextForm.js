import React, { useState } from 'react'
export default function TextForm(props) {

  //change in text by using hook
  const [text, setText] = useState("Enter");
  //clean text
  let cleantext = text.trim().split(/\s+/);
  let clean = cleantext.filter((elm) => {
    return elm !== "";
  })
  //click on upper case
  const handleUpClick = () => {
    let uppercase = text.toUpperCase();
    setText(uppercase)
  }
  //handle lower case
  const handlelowClick = () => {
    let lowercase = text.toLowerCase();
    setText(lowercase)
  }
  // clear the all text
  const handleClearClick = () => {

    let cleartext = "";
    setText(cleartext)
  }
  //remove the extra spaces
  const handleSpaceClick = () => {
    let cleantext = text.trim().split(" ");
    let clean = cleantext.filter((elm) => {
      return elm !== "";
    })
    setText(clean.join(" "))
  }//input replace text

  const [visibile, setVisible] = useState('hide');
  const handleRepInputClick = () => {
    setVisible('show')
  }
  // get value 
  let from
  const getValue1 = () => {
    from = document.getElementById('text1').value;
  }
  let aim
  const getValue2 = () => {
    aim = document.getElementById('text2').value;
  }
  //replace text
  const handleReplaceClick = () => {
    setText(text.replaceAll(from, aim))
    setVisible('hide')
  }
  //set enter value to text
  const handleOnChange = (event) => {
    setText(event.target.value)
  }
  //title case
  const handleTitleClick = () => {
    setText(text.toLowerCase().split(' ').map(function (word) {
      return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' '))
  }
  return (
    <>
      <div style={{ color: props.mode === 'light' ? '#042743' : 'white' }}>
        <div className='my-2 d-flex justify-content-evenly' id='input'>
          <input className='mx-2 text-input' placeholder='Old value' onInput={getValue1} id='text1' style={{ visibility: visibile === 'show' ? 'visible' : 'hidden' }} type="text" />
          <input className='mx-2 text-input' placeholder='New value' onInput={getValue2} id='text2' style={{ visibility: visibile === 'show' ? 'visible' : 'hidden' }} type='text' />
          <button className='btn mx-1 btnStyle' style={{ visibility: visibile === 'show' ? 'visible' : 'hidden' }} onClick={handleReplaceClick}>replace</button>
        </div>
        <h1 className='text-center my-2' style={{ color: props.mode === 'light' ? '#042743' : 'white' }} >Enter text to Analysiz</h1>
        <div className="mb-3">
          <textarea id='text-box' style={{ color: props.mode === 'light' ? 'rgb(168 217 255)' : 'white' }} className="form-control " placeholder="Enter text" onChange={handleOnChange} value={text} rows="10"></textarea>
        </div>
        <div className="my-2 row d-flex  justify-content-between">
          <button className='btn col-3 mx-1 btnStyle' onClick={handleUpClick}>Upper Case</button>
          <button className='btn col-3 mx-1 btnStyle' onClick={handlelowClick}>Lower Case</button>
          <button className='btn col-3 mx-1 btnStyle' onClick={handleClearClick}> Clear Text</button>
          <button className='btn col-3 my-2 mx-1 btnStyle' onClick={handleRepInputClick}>Replace</button>
          <button className='btn col-3 my-2 mx-1 btnStyle' onClick={handleTitleClick}>Title Case</button>
          <button className='btn col-3 my-2 mx-1 btnStyle' onClick={handleSpaceClick}>Space Fixer</button>

        </div>
        <div className="container text-center my-3">
          <h2>Your text summary</h2>
          <h2><strong>{clean.length} word and {text.length} character </strong></h2>
        </div>
      </div>
    </>
  )
}
