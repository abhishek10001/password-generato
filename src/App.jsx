import { useState } from 'react'
import './App.css'
import usePasswordGenerator from './hooks/use-password-generator';
import PasswordStrengthIndicator from './components/strength';

function App() {
  const [length, setLength] = useState(8);

  const [copybtn , setCopybtn]=useState(false);


  const [checkboxData, setCheckboxData] = useState([{ title: "Include UpperCase Letters", state: false }, { title: "Include LowerCase Letters", state: false }, { title: "Include Numbers", state: false }, { title: "Include Symbols", state: false }]);

  function handleCheckboxChange(i) {
    const updatedCheckboxData = [...checkboxData];
    updatedCheckboxData[i].state = !updatedCheckboxData[i].state;
    setCheckboxData(updatedCheckboxData);
  };

  const handleCopyClick=()=>{
    navigator.clipboard.writeText(password);
    setCopybtn(true);

    setTimeout(()=>{
      setCopybtn(false);
    }, 200);
  }

  const { password, error, generatePassword } = usePasswordGenerator();
  return (
    <div className='container'>
      {/* // password and copybtn */}
      <div className='header'>
        <div className='password'>{password}</div>
        <button className={copybtn ?'copybtnClicked':'copybutton' } onClick={handleCopyClick}>copy</button>

      </div>
      {/* // character length */}
      <div className='charLength'>
        <span>
          <label >Character Length</label>
          <label >{length}</label>
        </span>
        <input type="range" min={8} max={20}
          value={length}
          onChange={(e) => setLength(e.target.value)}
        />
      </div>
      {/* // checkboxes */}
      <div className='checkboxes'>
        {checkboxData.map((checkbox, i) => {
          return (
            <div key={i}> <input type="checkbox" checked={checkbox.state} onChange={() => handleCheckboxChange(i)} />
              <label >{checkbox.title}</label> </div>
          )
        })}
      </div>
      {/* // strength */}
<PasswordStrengthIndicator className="password-strength" password={password}/>
      
      {/* // generate password */}

{error && <div className='error'>{error}</div>}
      <button className='generatebtn' onClick={() => {generatePassword(checkboxData,length) }}>Generate Button</button>
    </div>




  )
}

export default App
