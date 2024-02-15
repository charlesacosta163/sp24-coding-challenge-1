/*
Index = 0.0588 * L – 0.296 * S – 15.8

where L is the average number of letters per 100 words in the text, and S is the average number
of sentences per 100 words in the text.

Consider the above-mentioned example. The text the user inputted has 65 letters, 4 sentences,
and 14 words. 65 letters per 14 words is an average of about 464.29 letters per 100 words
(because 65 / 14 * 100 = 464.29). And 4 sentences per 14 words is an average of about 28.57
sentences per 100 words (because 4 / 14 * 100 = 28.57). Plugged into the Coleman-Liau formula,
and rounded to the nearest integer, we get an answer of 3 (because 0.0588 * 464.29 - 0.296 *
28.57 - 15.8 = 3): so this passage is at a third-grade reading level.

*/

function liauCalc(text) {
    const words = text.split(/\s+/).filter(word => word !== '').length;
    const letterCount = text.replace(/[^a-zA-Z]/g, '').length;
    const sentences = text.split(/[.!?]+/).filter(sentence => sentence !== '').length;

    const L = (letterCount / words) * 100;
    const S = (sentences / words) * 100;

    const index = (0.0588 * L) - (0.296 * S) - 15.8;

    return index;
}

const result = liauCalc("Hello World")
console.log(result);