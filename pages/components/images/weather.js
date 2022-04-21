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

export { WeatherIcon };
