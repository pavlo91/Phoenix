import dayjs from 'dayjs';
import { CallbackDataParams } from 'echarts/types/dist/shared';

export const tooltipFormatterDefault = (
  params: CallbackDataParams[],
  dateFormatter = 'MMM DD'
) => {
  let tooltipItem = ``;
  params.forEach(el => {
    tooltipItem += `<div class='ms-1'>
        <h6 class="text-700">
        <span class="d-inline-block rounded-circle me-2" style="height: 0.5rem; width: 0.5rem; background:${
          el.borderColor ? el.borderColor : el.color
        }"></span>
          ${el.seriesName} : ${el.value}
        </h6>
      </div>`;
  });
  return `<div>
            <p class='mb-2 text-600'>
              ${
                dayjs(params[0].name).isValid()
                  ? dayjs(params[0].name).format(dateFormatter)
                  : params[0].name
              }
            </p>
            ${tooltipItem}
          </div>`;
};

export const tooltipFormatterList = (params: CallbackDataParams[]) => {
  const currentDate = dayjs(params[0].name);
  const prevDate = dayjs(params[0].name).subtract(1, 'month');

  const result = params.map((param, index) => ({
    value: param.value,
    date: index > 0 ? prevDate : currentDate,
    color: param.color
  }));

  let tooltipItem = ``;
  result.forEach((el, index: number) => {
    tooltipItem += `<h6 class="text-700 ${
      index > 0 && 'mb-0'
    }"><span class="d-inline-block rounded-circle me-2" style="height: 0.5rem; width: 0.5rem; background:${
      el.color
    }"></span>
    ${el.date.format('MMM DD')} : ${el.value}
  </h6>`;
  });
  return `<div class='ms-1'>
            ${tooltipItem}
          </div>`;
};
