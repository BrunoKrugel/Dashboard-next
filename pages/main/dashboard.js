import React, { useEffect } from 'react';
import styles from '../../styles/Dashboard.module.css';
import Head from 'next/head';
import { Paper, Alert, Stack, Snackbar, Tooltip } from '@mui/material';
import axios from 'axios';
import PlaceIcon from '@mui/icons-material/Place';
import { useRouter } from 'next/router';

import { styled } from '@mui/material/styles';

import { WeekInfo, WeekDate } from '../../components/week';
import { CurrentInfo } from '../../components/info';
import { MenuBar } from '../../components/menu';


//Images components
import {
  HumidityIcon,
  SunriseIcon,
  SunsetIcon,
  WindIcon,
  UVIndexIcon,
} from '../../components/images/icons';

import { WeatherIcon, MainWeatherIcon } from '../../components/images/weather';

//Snippets
const { unixToStampUTC } = require('../../lib/dates/unixTime');
const { addDays, currentDate } = require('../../lib/dates/dates');
const toUpper = require('../../lib/string/toUpper');

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Dashboard() {
  const router = useRouter();

  // Build weather data
  const [temp, setTemp] = React.useState('');
  const [cityName, setCityName] = React.useState('');
  const [weather, setWeather] = React.useState('');
  const [icon, setIcon] = React.useState('');

  //Extra info
  const [humidity, setHumidity] = React.useState('');
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
          setHumidity(localWeather.main.humidity);
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
          setWeekDateDayOne(addDays(new Date(), 1));

          setWeekTempDayTwo(weekforecast[1].temp.day.toFixed(0));
          setWeekIconDayTwo(weekforecast[1].weather[0].icon);
          setWeekDateDayTwo(addDays(new Date(), 2));

          setWeekTempDayThree(weekforecast[2].temp.day.toFixed(0));
          setWeekIconDayThree(weekforecast[2].weather[0].icon);
          setWeekDateDayThree(addDays(new Date(), 3));

          setWeekTempDayFour(weekforecast[3].temp.day.toFixed(0));
          setWeekIconDayFour(weekforecast[3].weather[0].icon);
          setWeekDateDayFour(addDays(new Date(), 4));

          setWeekTempDayFive(weekforecast[4].temp.day.toFixed(0));
          setWeekIconDayFive(weekforecast[4].weather[0].icon);
          setWeekDateDayFive(addDays(new Date(), 5));

          setWeekTempDaySix(weekforecast[5].temp.day.toFixed(0));
          setWeekIconDaySix(weekforecast[5].weather[0].icon);
          setWeekDateDaySix(addDays(new Date(), 6));
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
      if (!weekTempDayOne) getForecastWeek('Canoas,BR');
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [weekTempDayOne]
  );

  useEffect(() => {

    //Get current weather
    getCurrentForecast('Canoas,BR');
    setInterval(() => {
      //Validations
      //getCurrentForecast('Canoas,BR');
    }, 200000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, ['']);

  return (
    <div className={styles.container}>
      <Head>
        <title>Dashboard Weather</title>
        <meta name="description" content="Dashboard" />
        <link rel="icon" href="/cloudy.png" />
      </Head>
        <Paper className={styles.card} elevation={3}>
          <div>
            <PlaceIcon />
            <label className={styles.currentCity} id="currentCity">
              {cityName}, {currentDate()}
            </label>
          </div>

          <div>
            <div className={styles.widget}>
              <MainWeatherIcon weather={icon} />
              <div className={styles.divWeather}>
                <label className={styles.currentTemp} id="currentTemp">
                  {temp}°C
                </label>
                <label className={styles.currentWeather} id="currentWeather">
                  {weather}
                </label>
              </div>
            </div>

            <div id="extraWidgets">
              <div id="weeklyForecast">
                <div className={styles.week}>
                  <Stack direction="row" spacing={2}>
                    <Item>
                      <div>
                        <WeekDate weekDate={weekDateDayOne} />
                        <WeatherIcon weather={weekIconDayOne} />
                        <WeekInfo weekTemp={weekTempDayOne} />
                      </div>
                    </Item>
                    <Item>
                      <WeekDate weekDate={weekDateDayTwo} />
                      <WeatherIcon weather={weekIconDayTwo} />
                      <WeekInfo weekTemp={weekTempDayTwo} />
                    </Item>
                    <Item>
                      <WeekDate weekDate={weekDateDayThree} />
                      <WeatherIcon weather={weekIconDayThree} />
                      <WeekInfo weekTemp={weekTempDayThree} />
                    </Item>
                    <Item>
                      <WeekDate weekDate={weekDateDayFour} />
                      <WeatherIcon weather={weekIconDayFour} />
                      <WeekInfo weekTemp={weekTempDayFour} />
                    </Item>
                    <Item>
                      <WeekDate weekDate={weekDateDayFive} />
                      <WeatherIcon weather={weekIconDayFive} />
                      <WeekInfo weekTemp={weekTempDayFive} />
                    </Item>
                    <Item>
                      <WeekDate weekDate={weekDateDaySix} />
                      <WeatherIcon weather={weekIconDaySix} />
                      <WeekInfo weekTemp={weekTempDaySix} />
                    </Item>
                  </Stack>
                </div>
              </div>

              <div
                id="additionalInfo"
                style={{
                  display: 'flex',
                  padding: '0px 5px',
                }}
              >
                <div className={styles.widgetExtraInfo}>
                  <Tooltip title="Umidade do ar">
                    <div>
                      <HumidityIcon />
                      <label
                        className={styles.currentHumidity}
                        id="currentHumidity"
                      >
                        {humidity} %
                      </label>
                    </div>
                  </Tooltip>
                  <Tooltip title="Velocidade do vento">
                    <div>
                      <WindIcon />
                      <label className={styles.currentWind} id="currentWind">
                        {wind} km/h
                      </label>
                    </div>
                  </Tooltip>
                </div>

                <div className={styles.widgetSunInfo}>
                  <Tooltip title="Nascer do sol">
                    <div>
                      <SunriseIcon />
                      <CurrentInfo current={sunrise} />
                    </div>
                  </Tooltip>
                  <Tooltip title="Pôr do sol">
                    <div>
                      <SunsetIcon />
                      <CurrentInfo current={sunset} />
                    </div>
                  </Tooltip>
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
    </div>
  );
}
