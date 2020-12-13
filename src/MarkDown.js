import React, { useState } from 'react';
import ReactMarkDown from 'react-markdown';
import { FiMaximize2 } from 'react-icons/fi';
import { FiMinimize2 } from 'react-icons/fi';

function MarkDown() {
  const [markDown, setMarkDown] = useState('## Markdown Previewer');

  const handleChange = (e) => {
    setMarkDown(e.target.value);
  };

  return (
    <div className='container'>
      <div className='view'>
        <div className='header'>
          <p>Editor</p>
          <button className='btn'>
            <FiMaximize2 />
          </button>
        </div>
        <textarea
          id='editor'
          value={markDown}
          onChange={handleChange}
        ></textarea>
      </div>

      <div className='view' id='preview'>
        <div className='header'>
          <p>Preview</p>
          <button className='btn'>
            <FiMaximize2 />
          </button>
        </div>
        <ReactMarkDown>{markDown}</ReactMarkDown>
      </div>
    </div>
  );
}

export default MarkDown;
