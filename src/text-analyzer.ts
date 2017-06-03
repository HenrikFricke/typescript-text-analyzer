import * as pluralize from "pluralize";

import { stopWords } from "../constants/stop-words";

interface WordCount {
    [index: string]: number;
}

class TextAnalyzer {
    constructor(private text: string) {}

    public withoutStopWords(): string[] {
        return this.text
            .toLowerCase()
            .split(/[^-'a-z0-9]+/)
            .filter((word) => word !== "" && !stopWords.includes(word));
    }

    public keywords(items: number): string[] {
        const wordCount: WordCount = this.withoutStopWords()
            .reduce<WordCount>((acc: WordCount, value: string): WordCount => {
                let word: string = this.removePossessive(value);
                word = pluralize.singular(word);

                acc[word] = acc[word] ? acc[word] + 1 : 1;
                return acc;
            }, {});

        return Object.keys(wordCount)
            .sort((a: string, b: string) => (wordCount[a] - wordCount[b]) * -1)
            .slice(0, items);
    }

    private removePossessive(word: string): string {
        if (word.indexOf("'s") !== -1) {
            return word.slice(0, -2);
        }

        return word;
    }
}

export default TextAnalyzer;
