import { IconProp } from '@fortawesome/fontawesome-svg-core';
import ts, { transpile } from 'typescript';

export const getItemFromStore = (
  key: string,
  defaultValue?: string | boolean,
  store = localStorage
) => {
  try {
    return store.getItem(key) === null
      ? defaultValue
      : JSON.parse(store.getItem(key) as string);
  } catch {
    return store.getItem(key) || defaultValue;
  }
};

export const cleanText = (string: string) =>
  (string.charAt(0).toUpperCase() + string.slice(1))
    .replace(/-/g, ' ')
    .replace('_and_', '&');

export const setItemToStore = (
  key: string,
  payload: string,
  store = localStorage
) => store.setItem(key, payload);

export const capitalize = (string: string) =>
  (string.charAt(0).toUpperCase() + string.slice(1))
    .replace(/-/g, ' ')
    .replace('_and_', '&');

export const snakeCase = (string: string) => {
  return string
    .replace(/\W+/g, ' ')
    .split(/ |\B(?=[A-Z])/)
    .map(word => word.toLowerCase())
    .join('_');
};

export const getColor = (name: string) => {
  const dom = document.documentElement;
  return getComputedStyle(dom).getPropertyValue(`--phoenix-${name}`).trim();
};

/* get Dates between */
export const getDates = (
  startDate: Date,
  endDate: Date,
  interval: number = 1000 * 60 * 60 * 24
): Date[] => {
  const duration = +endDate - +startDate;
  const steps = duration / interval;
  return Array.from(
    { length: steps + 1 },
    (v, i) => new Date(startDate.valueOf() + interval * i)
  );
};

export const getPastDates = (
  duration: 'week' | 'month' | 'year' | number
): Date[] => {
  let days;

  switch (duration) {
    case 'week':
      days = 7;
      break;
    case 'month':
      days = 30;
      break;
    case 'year':
      days = 365;
      break;

    default:
      days = duration;
  }

  const date = new Date();
  const endDate = date;
  const startDate = new Date(new Date().setDate(date.getDate() - (days - 1)));
  return getDates(startDate, endDate);
};

export const currencyFormat = (
  amount: number,
  options: Intl.NumberFormatOptions = {}
) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'usd',
    maximumFractionDigits: 2,
    minimumFractionDigits: 0,
    ...options
  }).format(amount);
};

export const getNumbersInRange = (startAt: number, endAt: number) => {
  return [...Array(endAt + 1 - startAt).keys()].map(i => i + startAt);
};

export const numberFormat = (
  number: number,
  notation: 'standard' | 'compact' = 'standard'
) =>
  new Intl.NumberFormat('en-US', {
    notation
  }).format(number);

/* Get Random Number */
export const getRandomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) + min);
};

export const getFileIcon = (fileFormat: string): IconProp => {
  switch (fileFormat) {
    case 'zip':
    case 'rar':
      return 'file-zipper';
    case 'bat':
      return 'file-code';
    case 'txt':
      return 'file-lines';
    case 'mad':
      return 'file-circle-exclamation';
    case 'wav':
      return 'music';
    case 'pdf':
      return 'file-pdf';
    case 'jpg':
    case 'png':
    case 'jpeg':
      return 'image';
    default:
      return 'file-lines';
  }
};

export const getIntegerArrayBetween = (start = 0, end: number): number[] =>
  new Array(end + 1 - start).fill(1).map((_, i) => i + start);

export const parseData = (data: string) => {
  try {
    return JSON.parse(data);
  } catch {
    return data;
  }
};

export const hexToRgb = (hex: string) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return [r, g, b];
};

export const transformTSCode = (
  snippet: string,
  target: ts.ScriptTarget = ts.ScriptTarget.ES2015
) =>
  transpile(snippet, {
    jsx: ts.JsxEmit.React,
    target
  });

export const getFileExtension = (fileName: string, separator = '.') =>
  fileName.split(separator).pop() || 'unknown';

export const isImageFile = (file: File) => {
  const imageMimeTypes = [
    'image/jpeg',
    'image/png',
    'image/gif',
    'image/bmp',
    'image/webp'
  ];
  return imageMimeTypes.includes(file.type);
};

export const convertFileToAttachment = (file: File) => ({
  name: file.name,
  size: `${(file.size / 1024).toFixed(2)} KB`,
  format: getFileExtension(file.name),
  preview: isImageFile(file) ? URL.createObjectURL(file) : undefined
});
