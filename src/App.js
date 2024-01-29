import { useState, useRef } from "react";
import "./App.css";
import Togglebutton from "./components/Togglebutton";
function App() {
  const [message, setMessage] = useState('');
  const handleClick = async() =>{
  
      const response = await fetch(
        `https://tinyurl.com/api-create.php?url=`+message
      );
      if (response.status === 200) {
        const data = await response.text();
        handleValue(data)
      } else {
        inputref.current.value = "Unable to generate URL"
        // inputUrl.value = "";
        // content.innerHTML = `<h1 style="text-align:center; color: #fff">Invalid URL ‼</h1>`;
        // const body = document.querySelector("body");
        // body.style.flexDirection = "column";
        setTimeout(() => {
            }, 2000);
      }
  }
  const inputref = useRef(null);
  const handleValue = (data) =>{
    inputref.current.value=data
  }
const handleSubmit = (e) =>{
  e.preventDefault()
}
const handleChange = event => {
  setMessage(event.target.value);
};
  return (
    <>
    {/* {loading ? <Loader /> : <Togglebutton />} */}
    <Togglebutton/>
    <div className="maindiv">
      <div class="card">
        <div class="card2">
          <form class="form" onSubmit={handleSubmit}>
            <p id="heading">Login</p>
            <div class="field">
              <svg className="input-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="M17.033 6.966c.584.583.584 1.529 0 2.112l-7.955 7.956c-.583.583-1.529.583-2.112 0-.583-.583-.583-1.529 0-2.112l7.956-7.956c.582-.583 1.528-.583 2.111 0zm-9.138 13.386c-1.171 1.171-3.076 1.171-4.248 0-1.171-1.171-1.171-3.077 0-4.248l5.639-5.632c-1.892-.459-3.971.05-5.449 1.528l-2.147 2.147c-2.254 2.254-2.254 5.909 0 8.163 2.254 2.254 5.909 2.254 8.163 0l2.147-2.148c1.477-1.477 1.986-3.556 1.527-5.448l-5.632 5.638zm6.251-18.662l-2.146 2.148c-1.478 1.478-1.99 3.553-1.53 5.445l5.634-5.635c1.172-1.171 3.077-1.171 4.248 0 1.172 1.171 1.172 3.077 0 4.248l-5.635 5.635c1.893.459 3.968-.053 5.445-1.53l2.146-2.147c2.254-2.254 2.254-5.908 0-8.163-2.253-2.254-5.908-2.254-8.162-.001z"></path></svg>
              <input
                type="text"
                value={message}
                onChange={handleChange}
                class="input-field"
                placeholder="Enter URL"
                autoComplete="off"
              />
            </div>
            <div class="field">
            <svg className="input-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="M7 14.729l.855-1.151c1 .484 1.635.852 2.76 1.654 2.113-2.399 3.511-3.616 6.106-5.231l.279.64c-2.141 1.869-3.709 3.949-5.967 7.999-1.393-1.64-2.322-2.326-4.033-3.911zm15-11.729v21h-20v-21h4.666l-2.666 2.808v16.192h16v-16.192l-2.609-2.808h4.609zm-3.646 4l-3.312-3.569v-.41c.001-1.668-1.352-3.021-3.021-3.021-1.667 0-3.021 1.332-3.021 3l.001.431-3.298 3.569h12.651zm-6.354-5c.553 0 1 .448 1 1s-.447 1-1 1-1-.448-1-1 .447-1 1-1z"/></svg>
              <input
                type="link"
                ref={inputref}
                class="input-field"
                placeholder="Converted URL"
                />
            </div>
            <button onClick={handleClick} class="button3">Convert</button>
          </form>
        </div>
      </div>
    </div>
                </>
  );
}

export default App;
