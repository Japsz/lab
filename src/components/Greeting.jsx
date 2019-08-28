import React, {useState} from 'react';

const Greeting = () => {
    const [buttons, setButtons] = useState(Array(3).fill({active: false}))
    console.log(buttons)
    return (
      <div>
          aló?
      </div>
    );
};

export default Greeting;
