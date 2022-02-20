import { useMachine } from '@xstate/react';
import { trafficLightMachine } from './trafficLightMachine';

import './App.css';

export const App = () => {
  const [current, send] = useMachine(trafficLightMachine);

  return (
    <div className="traffic-light">
      <input
        type="radio"
        readOnly
        className='light red'
        checked={current.matches({ ON: 'red' })}
      />
      <input
        type="radio"
        readOnly
        className='light yellow'
        checked={current.matches({ ON: 'yellow' })}
      />
      <input
        type="radio"
        readOnly
        className='light green'
        checked={current.matches({ ON: 'green' })}
      />
      <button onClick={() => send("NEXT")}>NEXT</button>
      <button onClick={() => send("TURN_ON")}>TURN ON</button>
      <button onClick={() => send("TURN_OFF")}>TURN OFF</button>
    </div>
  );
}
