import { useDispatch } from 'react-redux';
import { setDisplayMode } from '../../features/displayModeSlice';
import { Button } from 'antd';
import 'antd/dist/antd.css'; // Import Ant Design's CSS

export function DisplayModeToggle() {
  const dispatch = useDispatch();

  const setMode = (mode) => {
    dispatch(setDisplayMode(mode));
  };

  return (
    <div>
      <Button  ghost onClick={() => setMode("Normal")}>
        Normal Mode
      </Button>
      <Button  ghost onClick={() => setMode("Display")}>
        Display Mode
      </Button>
    </div>
  );
}
