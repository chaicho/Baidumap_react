import { useDispatch } from 'react-redux';
import { setDisplayMode } from '../../features/displayModeSlice';
import { Button } from 'antd';

export function DisplayModeToggle() {
  const dispatch = useDispatch();

  const setMode = (mode) => {
    dispatch(setDisplayMode(mode));
  };

  return (
    <div>
      <Button  ghost  size="large" onClick={() => setMode("Normal")}>
        Main Page
      </Button>
      <Button  ghost  size="large" onClick={() => setMode("Display")}>
        Case Page
      </Button>
    </div>
  );
}
