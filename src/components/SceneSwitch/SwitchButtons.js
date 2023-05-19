import { useDispatch } from 'react-redux';
import { setDisplayMode } from '../features/displayModeSlice';

export function DisplayModeToggle() {
  const dispatch = useDispatch();

  const setMode = (mode) => {
    dispatch(setDisplayMode(mode));
  };


  return (
    <div>
      <button onClick={() => setMode("Normal")}>Normal Mode</button>
      <button onClick={() => setMode("Display")}>Display Mode</button>
    </div>
  );
}
