import Image from 'next/image';

import windPic from '../../public/widget/wind.png';
import humidityPic from '../../public/widget/humidity_2.png';
import sunsetPic from '../../public/widget/sunset.png';
import sunrisePic from '../../public/widget/sunrise.png';
import uvindexPic from '../../public/widget/uv_ray_1.png';

function HumidityIcon() {
  return (
    <div>
      <Image
        alt="Humidity Icon."
        src={humidityPic}
        width={30}
        height={30}
        layout="fixed"
      />
    </div>
  );
}

function SunsetIcon() {
  return (
    <div>
      <Image
        alt="Sun set Icon."
        src={sunsetPic}
        width={30}
        height={30}
        layout="fixed"
      />
    </div>
  );
}

function SunriseIcon() {
  return (
    <div>
      <Image
        alt="Sun Rise Icon."
        src={sunrisePic}
        width={30}
        height={30}
        layout="fixed"
      />
    </div>
  );
}

function UVIndexIcon() {
  return (
    <div>
      <Image
        alt="UV Index Icon."
        src={uvindexPic}
        width={70}
        height={70}
        layout="fixed"
      />
    </div>
  );
}

function WindIcon() {
  return (
    <div>
      <Image
        alt="Wind Icon."
        src={windPic}
        width={30}
        height={30}
        layout="fixed"
      />
    </div>
  );
}

export { HumidityIcon, SunsetIcon, SunriseIcon, UVIndexIcon, WindIcon };
