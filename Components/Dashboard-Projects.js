import React, { useState, useRef, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const Dashboard_Projects = () => {
  const colors = ['#163763', '#3452B9', '#005483', '#8E8E8E', '#3C3C3C'];
  const [buttons, setButtons] = useState([]);

  useEffect(() => {
    const initialButtons = Array.from({ length: 5 }, (_, index) => ({
      projectName: `Project ${index + 1}`,
      managerName: `Manager ${index + 1}`,
      color: colors[index % colors.length],
    }));
    setButtons(initialButtons);
  }, []); 

  const lastButtonRef = useRef(null);

  const addNewButton = () => {
    const newIndex = buttons.length % colors.length;
    const newButtons = [...buttons, { projectName: `Project ${buttons.length + 1}`, managerName: `Manager ${buttons.length + 1}`, color: colors[newIndex] }];
    setButtons(newButtons);
  };

  useEffect(() => {
    if (lastButtonRef.current) {
      lastButtonRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [buttons]);

  return (
    <div className="container-fluid justify-content-end">
       <div className="row justify-content-end mt-3 mb-4 " style={{ fontSize: "25px", height:"12vh"}}>
     
      <div className='col-md-9 d-flex flex-column'>
        {buttons.map((button, index) => (
          <button key={index} ref={index === buttons.length - 1 ? lastButtonRef : null}  style={{ margin: '0.5%', padding: '2.5%', backgroundColor: button.color, color: '#fff', border: 'none', borderRadius: '20px', cursor: 'pointer', fontWeight: 'bold', textAlign: 'left',boxShadow: '0px 4px 8px rgba(5, 5, 5, 5)' }}>
            {button.name}
            <div style={{ fontSize: '32px' }}>{button.projectName}</div>
            <div style={{ fontSize: '20px' }}>{button.managerName}</div>
          </button>
        ))}
  
      <button style={{ position: 'fixed', bottom: '10px', right: '10px', width: '50px', height: '50px', fontSize: '24px', border: 'none', borderRadius: '50%', backgroundColor: 'blue', color: '#fff', cursor: 'pointer' }} onClick={addNewButton}>
        +
      </button>
      </div>
    </div>
    </div>    
  );
};

export default Dashboard_Projects;
