import Ember from 'ember';

export function formatSongDuration(params /*, hash*/ ) {
  let [totalMilliseconds, formattingOption] = params;

  let totalSeconds = Math.floor(totalMilliseconds / 1000);
  let totalMinutes = Math.floor(totalSeconds / 60);
  let totalHours = Math.floor(totalMinutes / 60);

  let leftoverMilliseconds = totalMilliseconds % 1000;
  let leftoverSeconds = totalSeconds % 60;
  let leftoverMinutes = totalMinutes % 60;

  switch (formattingOption) {
    case 'mm:ss':
      return `${totalMinutes}:${toDoubleDigit(leftoverSeconds)}`;
    case 'mm:ss:SSS':
      return `${totalMinutes}:${toDoubleDigit(leftoverSeconds)}:${toDoubleDigit(leftoverMilliseconds, true)}`;
    case 'hh:mm:ss':
      return `${totalHours}:${toDoubleDigit(leftoverMinutes)}:${toDoubleDigit(leftoverSeconds)}`;
    case 'hh:mm:ss:SSS':
      return `${totalHours}:${toDoubleDigit(leftoverMinutes)}:${toDoubleDigit(leftoverSeconds)}:${toDoubleDigit(leftoverMilliseconds, true)}`;

  }
  return params;
}

function toDoubleDigit(time, isMilliseconds) {
  if (isMilliseconds) {
    if (time < 10) {
      return `00${time}`;
    }
    if (time < 100) {
      return `0${time}`;
    }
  }
  if (time < 10) {
    return `0${time}`;
  }
  return time;
}
export default Ember.Helper.helper(formatSongDuration);
