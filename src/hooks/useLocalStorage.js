import { useState, useEffect } from 'react';

export const useLocalStorage = (key, initalValue) => {
  const [value, setValue] = useState(() => {
    const savedValue = localStorage.getItem(key);
    if (savedValue) {
      return JSON.parse(savedValue);
    } else {
      return initalValue;
    }
  });
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export const removeLocalStorage = key => {
  localStorage.removeItem(key);
};
