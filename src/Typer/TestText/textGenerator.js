const words = [
  'the',
  'be',
  'of',
  'and',
  'a',
  'to',
  'in',
  'he',
  'have',
  'it',
  'that',
  'for',
  'they',
  'I',
  'with',
  'as',
  'not',
  'on',
  'she',
  'at',
  'by',
  'this',
  'we',
  'you',
  'do',
  'but',
  'from',
  'or',
  'which',
  'one',
  'would',
  'all',
  'will',
  'there',
  'say',
  'who',
  'make',
  'when',
  'can',
  'more',
  'if',
  'no',
  'man',
  'out',
  'other',
  'so',
  'what',
  'time',
  'up',
  'go',
  'about',
  'than',
  'into',
  'could',
  'state',
  'only',
  'new',
  'year',
  'some',
  'take',
  'come',
  'these',
  'know',
  'see',
  'use',
  'get',
  'like',
  'then',
  'first',
  'any',
  'work',
  'now',
  'may',
  'such',
  'give',
  'over',
  'think',
  'most',
  'even',
  'find',
  'day',
  'also',
  'after',
  'way',
  'many',
  'must',
  'look',
  'before',
  'great',
  'back',
  'through',
  'long',
  'where',
  'much',
  'should',
  'well',
  'people',
  'down',
  'own',
  'just',
  'because',
  'good',
  'each',
  'those',
  'feel',
  'seem',
  'how',
  'high',
  'too',
  'place',
  'little',
  'world',
  'very',
  'still',
  'nation',
  'hand',
  'old',
  'life',
  'tell',
  'write',
  'become',
  'here',
  'show',
  'house',
  'both',
  'between',
  'need',
  'mean',
  'call',
  'develop',
  'under',
  'last',
  'right',
  'move',
  'thing',
  'general',
  'school',
  'never',
  'same',
  'another',
  'begin',
  'while',
  'number',
  'part',
  'turn',
  'real',
  'leave',
  'might',
  'want',
  'point',
  'form',
  'off',
  'child',
  'few',
  'small',
  'since',
  'against',
  'ask',
  'late',
  'home',
  'interest',
  'large',
  'person',
  'end',
  'open',
  'public',
  'follow',
  'during',
  'present',
  'without',
  'again',
  'hold',
  'govern',
  'around',
  'possible',
  'head',
  'consider',
  'word',
  'program',
  'problem',
  'however',
  'lead',
  'system',
  'set',
  'order',
  'eye',
  'plan',
  'run',
  'keep',
  'face',
  'fact',
  'group',
  'play',
  'stand',
  'increase',
  'early',
  'course',
  'change',
  'help',
  'line'
]
// Function to make a unique sentence with at option to include puncuations or numbers as well
// punctuation and numbers paratameters can be true or false
export default function generateText (sentencesCount, punctuation, numbers) {
  if (!sentencesCount || sentencesCount <= 0) {
    throw Error('Sentence count should be greater than 0.')
  }

  const sentences = []

  for (let index = 0; index < sentencesCount; index++) {
    const sentence = []
    const sentenceLength = getRandomIntInclusive(4, 10)

    // Loop random sentence length many times & add words to the sentence array.
    for (let i = 0; i <= sentenceLength; i++) {
      const word = words[getRandomIntInclusive(0, words.length - 1)]
      sentence.push(word)
    }

    // If user wants punctuation
    if (punctuation === true) {
    // Captalize the first letter of the first word
      const firstWord = sentence[0]
      sentence[0] = capatalize(firstWord)

      // Ending the sentence
      sentence[sentence.length - 1] += '.'

      // Adding a symbol at the end of the current word at a random index
      const randomIndex = getRandomIntInclusive(0, sentenceLength - 1)
      const randomWord = sentence[randomIndex]
      sentence[randomIndex] = addSymbolAtEnd(randomWord)
    }

    // If user wants numbers then
    // add at least one number in the sentence
    if (numbers === true) {
      const randomIndex = getRandomIntInclusive(1, sentenceLength - 1)
      const randomNumber = getRandomIntInclusive(0, 999)
      sentence.splice(randomIndex, 0, randomNumber)
    }

    sentences.push(...sentence)
  }
  return sentences
}

// Capatalize the string and return it
// Uppercase first letter then concat that with string sliced from index 1 till last index
function capatalize (string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

// Add a random symbol at the end of string and return it
function addSymbolAtEnd (string) {
  const symbols = [',', ':', ';', ' -']
  const randomSymbol = symbols[getRandomIntInclusive(0, symbols.length - 1)]
  string += randomSymbol
  return string
}

// Getting a random integer between two values, inclusive
// MDN https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#getting_a_random_integer_between_two_values_inclusive
function getRandomIntInclusive (min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1) + min) // The maximum is inclusive and the minimum is inclusive
}
