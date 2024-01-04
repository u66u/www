import Slider from '@components/Work/Ui/Slider'
import { works } from '@components/Work/WorkInterface'
import { useState, useEffect } from 'react';

export function AutoScrollingSlider({ worksProp }: { worksProp: typeof works }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((active) => (active + 1) % worksProp.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const activeWork = worksProp[active];

  return (
    <div>
      <h2>{activeWork.title}</h2>
      <p>{activeWork.description}</p>
      {activeWork.slides && <Slider slides={activeWork.slides} />}
    </div>
  );
}
