function validateWind(wind) {
  if (wind >= 60 && wind < 90) {
    return {
      wind: {
        severity: 'warning',
        message: 'Possibilidade de ocorrência de rajadas de vento.',
      },
    };
  }

  if (wind >= 90) {
    return {
      wind: {
        severity: 'error',
        message: 'Ocorrência de rajadas de vento, favor verificar o ambiente.',
      },
    };
  }
  return {
    wind: {
      severity: 'info',
      message: 'Sem riscos de rajadas de vento.',
    },
  };
}
module.exports.validateWind = validateWind;
