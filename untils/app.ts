export const numberToTime = (num: number) => {
  let h = 0, m = 0, s = 0, d = 0, tmp = 0;
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24
  let retain = num;

  if(retain >= day) {
    tmp = retain % day;
    d = (retain - tmp) / day;
    retain = tmp
  }

  if(retain >= hour) {
    tmp = retain % hour;
    h = (retain - tmp) / hour;
    retain = tmp
  }

  if(retain >= minute) {
    tmp = retain % minute;
    m = (retain - tmp) / minute;
    retain = tmp
  }

  if(retain >= second) {
    tmp = retain % second;
    s = (retain - tmp) / second;
    retain = tmp
  }

  return {
    d, h, m, s
  }
}