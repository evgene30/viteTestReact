import { Option } from '../components/Table';

const generateRandomName = (): string => {
  const vowels = 'aeiou';
  const consonants = 'bcdfghjklmnpqrstvwxyz';
  const length = Math.floor(Math.random() * 4) + 5;

  const getRandomCharacter = (characters: string): string =>
    characters.charAt(Math.floor(Math.random() * characters.length));

  let result = '';

  for (let i = 0; i < length; i += 1) {
    result +=
      i % 2 === 0 ? getRandomCharacter(consonants) : getRandomCharacter(vowels);
  }

  return result.charAt(0).toUpperCase() + result.slice(1).toLowerCase();
};

export const generateRandomOptions = (count: number): Option[] => {
  const options: Option[] = [];
  for (let i = 0; i < count; i += 1) {
    options.push({
      label: generateRandomName(),
      field: Math.random().toString(36).substring(2, 10),
      link: '',
    });
  }

  return options;
};
