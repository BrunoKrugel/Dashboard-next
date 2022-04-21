import Image from 'next/image';

function WeatherIcon(props) {
  return (
    <div>
      <Image
        alt="Weather Icon for the week"
        src={`https://openweathermap.org/img/wn/${props.weather}@4x.png`}
        width={70}
        height={70}
        layout="fixed"
      />
    </div>
  );
}

function MainWeatherIcon(props) {
  return (
    <div
      style={{
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Image
        alt="Main Weather Icon."
        src={`https://openweathermap.org/img/wn/${props.weather}@4x.png`}
        width={150}
        height={150}
        layout="fixed"
        priority={true}
      />
    </div>
  );
}

export { WeatherIcon, MainWeatherIcon };
