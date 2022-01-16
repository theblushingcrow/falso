import { FakeOptions, fake, getRandomInRange } from './core/core';
import { randWord } from './word';

function getSpecialCharacter(): string {
  const randomNumber = getRandomInRange({ min: 1, max: 10, fraction: 0 });

  if (randomNumber === 1) {
    return '.';
  }

  if (randomNumber === 2) {
    return ',';
  }

  return '';
}

/**
 * Generate a random sentence.
 *
 * @category text
 *
 * @example
 *
 * randSentence()
 *
 * @example
 *
 * randSentence({ length: 10 })
 *
 */
export function randSentence<Options extends FakeOptions>(options?: Options) {
  const factory = () => {
    let text = randWord({ capitalize: true });
    let totalWords = 1;

    while (totalWords < 50) {
      const randomWord = randWord();
      let specialChar = '';

      if (totalWords > 2) {
        specialChar = getSpecialCharacter();
      }

      text += ` ${randomWord}${specialChar}`;

      if (specialChar === '.') {
        break;
      }

      totalWords++;
    }

    return text;
  };

  return fake(factory, options);
}