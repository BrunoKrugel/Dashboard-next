import React, { useEffect } from 'react';
import styles from '../../styles/Dashboard.module.css';
import Head from 'next/head';
import {
  Button,
  TextField,
  Paper,
  Alert,
  Stack,
  Snackbar,
} from '@mui/material';
import axios from 'axios';
import Image from 'next/image';
import PlaceIcon from '@mui/icons-material/Place';

import { styled } from '@mui/material/styles';

//Images components
import {
  HumidityIcon,
  SunriseIcon,
  SunsetIcon,
  WindIcon,
  UVIndexIcon,
} from '../components/images/icons';

//Snippets
const { unixToStampUTC } = require('../../lib/unixTime');
const getTimeZone = require('../../lib/timeZone');
const toUpper = require('../../lib/toUpper');
const { addDays } = require('../../lib/dates');

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Dashboard() {
  // Build weather data
  const [temp, setTemp] = React.useState('');
  const [cityName, setCityName] = React.useState('');
  const [weather, setWeather] = React.useState('');
  const [icon, setIcon] = React.useState('');

  //Extra info
  const [umidity, setUmidity] = React.useState('');
  const [wind, setWind] = React.useState('');

  //Sun Info
  const [sunrise, setSunrise] = React.useState('');
  const [sunset, setSunset] = React.useState('');

  //UV Index
  const [uvIndex, setUvIndex] = React.useState('');

  // Week information
  const [weekTempDayOne, setWeekTempDayOne] = React.useState('');
  const [weekDateDayOne, setWeekDateDayOne] = React.useState('');
  const [weekIconDayOne, setWeekIconDayOne] = React.useState('');

  const [weekTempDayTwo, setWeekTempDayTwo] = React.useState('');
  const [weekDateDayTwo, setWeekDateDayTwo] = React.useState('');
  const [weekIconDayTwo, setWeekIconDayTwo] = React.useState('');

  const [weekTempDayThree, setWeekTempDayThree] = React.useState('');
  const [weekDateDayThree, setWeekDateDayThree] = React.useState('');
  const [weekIconDayThree, setWeekIconDayThree] = React.useState('');

  const [weekTempDayFour, setWeekTempDayFour] = React.useState('');
  const [weekDateDayFour, setWeekDateDayFour] = React.useState('');
  const [weekIconDayFour, setWeekIconDayFour] = React.useState('');

  const [weekTempDayFive, setWeekTempDayFive] = React.useState('');
  const [weekDateDayFive, setWeekDateDayFive] = React.useState('');
  const [weekIconDayFive, setWeekIconDayFive] = React.useState('');

  const [weekTempDaySix, setWeekTempDaySix] = React.useState('');
  const [weekDateDaySix, setWeekDateDaySix] = React.useState('');
  const [weekIconDaySix, setWeekIconDaySix] = React.useState('');

  const [UVHigh, setUVHigh] = React.useState(false);

  var localWeather, weekforecast;

  // Build date
  let currentDate = new Date();
  let cDay = currentDate.getDate();
  let monthName = currentDate.toLocaleString('default', { month: 'long' });
  monthName = toUpper(monthName);
  let currentDateFormat = cDay + ' de ' + monthName;

  const handleClose = (_event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setUVHigh(false);
  };

  const getCurrentForecast = async (city) => {
    try {
      await axios
        .post(`${window.location.origin}/api/forecast/currentWeather`, {
          city,
        })
        .then((res) => {
          localWeather = res.data.replace(/test\(/g, '').replace(/\)/g, '');
          localWeather = JSON.parse(localWeather);

          //Widget Current Temp
          setTemp(localWeather.main.temp.toFixed(0));
          setCityName(localWeather.name);
          setWeather(toUpper(localWeather.weather[0].description));
          setIcon(localWeather.weather[0].icon);
          if (localWeather.coord) {
            getUvIndex(localWeather.coord.lat, localWeather.coord.lon);
          }

          //Widget Extra info
          setUmidity(localWeather.main.humidity);
          setWind(localWeather.wind.speed);

          //Widget Sun
          setSunrise(unixToStampUTC(localWeather.sys.sunrise));
          setSunset(unixToStampUTC(localWeather.sys.sunset));
        });
    } catch (error) {
      console.log(error);
    }
  };

  const getForecastWeek = async (city) => {
    try {
      //Forecast for the week
      await axios
        .post(`${window.location.origin}/api/forecast/forecastWeek`, {
          city,
        })
        .then((resWeek) => {
          weekforecast = resWeek.data.list;

          //Set week data
          setWeekTempDayOne(weekforecast[0].temp.day.toFixed(0));
          setWeekIconDayOne(weekforecast[0].weather[0].icon);
          setWeekDateDayOne(addDays(currentDate, 1));

          setWeekTempDayTwo(weekforecast[1].temp.day.toFixed(0));
          setWeekIconDayTwo(weekforecast[1].weather[0].icon);
          setWeekDateDayTwo(addDays(currentDate, 2));

          setWeekTempDayThree(weekforecast[2].temp.day.toFixed(0));
          setWeekIconDayThree(weekforecast[2].weather[0].icon);
          setWeekDateDayThree(addDays(currentDate, 3));

          setWeekTempDayFour(weekforecast[3].temp.day.toFixed(0));
          setWeekIconDayFour(weekforecast[3].weather[0].icon);
          setWeekDateDayFour(addDays(currentDate, 4));

          setWeekTempDayFive(weekforecast[4].temp.day.toFixed(0));
          setWeekIconDayFive(weekforecast[4].weather[0].icon);
          setWeekDateDayFive(addDays(currentDate, 5));

          setWeekTempDaySix(weekforecast[5].temp.day.toFixed(0));
          setWeekIconDaySix(weekforecast[5].weather[0].icon);
          setWeekDateDaySix(addDays(currentDate, 6));
        });
    } catch (error) {
      console.log(error);
    }
  };

  const getUvIndex = async (lat, long) => {
    try {
      //Forecast for the week
      await axios
        .post(`${window.location.origin}/api/forecast/currentUV`, {
          lat,
          long,
        })
        .then((resUV) => {
          //Set UV data
          setUvIndex(resUV.data.result.uv.toFixed(0));
          if (resUV.data.result.uv.toFixed(0) == 0) {
            setUVHigh(true);
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(
    () => {
      if (!temp) getCurrentForecast('Canoas,BR');
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [temp]
  );

  React.useEffect(
    () => {
      if (!weekTempDayOne) getForecastWeek('Canoas,BR');
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [weekTempDayOne]
  );

  useEffect(() => {
    console.log('Executed only once!');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, ['']);

  return (
    <div className={styles.container}>
      <Head>
        <title>Dashboard Weather</title>
        <meta name="description" content="Dashboard" />
        <link rel="icon" href="/cloudy.png" />
      </Head>
      <main className={styles.main}>
        <Paper className={styles.card} elevation={3}>
          <div>
            <PlaceIcon></PlaceIcon>
            <label className={styles.currentCity} id="currentCity">
              {cityName}, {currentDateFormat}
            </label>
          </div>

          <div>
            <div className={styles.widget}>
              <Image
                alt="Main Weather Icon."
                src={`https://openweathermap.org/img/wn/${icon}@4x.png`}
                width={150}
                height={150}
                layout="fixed"
                priority={true}
              />

              <div className={styles.divWeather}>
                <label className={styles.currentTemp} id="currentTemp">
                  {temp}°C
                </label>
                <label className={styles.currentWeather} id="currentWeather">
                  {weather}
                </label>
              </div>
            </div>

            <div className={styles.week}>
              <Stack direction="row" spacing={2}>
                <Item>
                  <div>
                    <label className={styles.weekDayInfo}>
                      {weekDateDayOne}
                    </label>

                    <Image
                      alt="Weather Icon 1."
                      src={`https://openweathermap.org/img/wn/${weekIconDayOne}@4x.png`}
                      width={70}
                      height={70}
                      layout="fixed"
                    />
                    <label className={styles.weekDayInfo}>
                      {weekTempDayOne}°C
                    </label>
                  </div>
                </Item>
                <Item>
                  <label className={styles.weekDayInfo}>{weekDateDayTwo}</label>
                  <Image
                    alt="Weather Icon 2."
                    src={`https://openweathermap.org/img/wn/${weekIconDayTwo}@4x.png`}
                    width={70}
                    height={70}
                    layout="fixed"
                  />
                  <label className={styles.weekDayInfo}>
                    {weekTempDayTwo}°C
                  </label>
                </Item>
                <Item>
                  <label className={styles.weekDayInfo}>
                    {weekDateDayThree}
                  </label>
                  <Image
                    alt="Weather Icon 3."
                    src={`https://openweathermap.org/img/wn/${weekIconDayThree}@4x.png`}
                    width={70}
                    height={70}
                    layout="fixed"
                  />
                  <label className={styles.weekDayInfo}>
                    {weekTempDayThree}°C
                  </label>
                </Item>
                <Item>
                  <label className={styles.weekDayInfo}>
                    {weekDateDayFour}
                  </label>
                  <Image
                    alt="Weather Icon 4."
                    src={`https://openweathermap.org/img/wn/${weekIconDayFour}@4x.png`}
                    width={70}
                    height={70}
                    layout="fixed"
                  />
                  <label className={styles.weekDayInfo}>
                    {weekTempDayFour}°C
                  </label>
                </Item>
                <Item>
                  <label className={styles.weekDayInfo}>
                    {weekDateDayFive}
                  </label>

                  <Image
                    alt="Weather Icon 5."
                    src={`https://openweathermap.org/img/wn/${weekIconDayFive}@4x.png`}
                    width={70}
                    height={70}
                    layout="fixed"
                  />
                  <label className={styles.weekDayInfo}>
                    {weekTempDayFive}°C
                  </label>
                </Item>
                <Item>
                  <label className={styles.weekDayInfo}>{weekDateDaySix}</label>

                  <Image
                    alt="Weather Icon 6."
                    src={`https://openweathermap.org/img/wn/${weekIconDaySix}@4x.png`}
                    width={70}
                    height={70}
                    layout="fixed"
                  />
                  <label className={styles.weekDayInfo}>
                    {weekTempDaySix}°C
                  </label>
                </Item>
              </Stack>
            </div>
          </div>

          <div>
            <div className={styles.widgetExtraInfo}>
              <div>
                <HumidityIcon />
                <label className={styles.currentHumidity} id="currentUmidity">
                  {umidity} %
                </label>
              </div>

              <div>
                <WindIcon />
                <label className={styles.currentWind} id="currentWind">
                  {wind} km/h
                </label>
              </div>
            </div>

            <div className={styles.widgetSunInfo}>
              <div>
                <SunriseIcon />
                <label className={styles.currentWind} id="currentWind">
                  {sunrise}
                </label>
              </div>

              <div>
                <SunsetIcon />
                <label className={styles.currentWind} id="currentWind">
                  {sunset}
                </label>
              </div>
            </div>

            <div className={styles.widgetUVInfo}>
              <UVIndexIcon />
              <div className={styles.UVInfo}>
                <label className={styles.currentUV} id="currentUV">
                  {uvIndex}%
                </label>
              </div>
            </div>
          </div>
        </Paper>
        <Snackbar open={UVHigh} autoHideDuration={6000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="warning"
            sx={{ width: '100%' }}
          >
            Incidência de sol na região muito alta!
          </Alert>
        </Snackbar>
      </main>
    </div>
  );
}
