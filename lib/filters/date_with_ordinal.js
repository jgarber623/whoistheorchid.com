const dayjs = require('dayjs');

dayjs.extend(require('dayjs/plugin/advancedFormat'));

module.exports = date => {
  const day = dayjs(date);
  const ordinal = day.format('Do').slice(-2);

  return day.format(`MMMM D[<sup>${ordinal}</sup>], YYYY`);
};
