# TypeScript Text Analyzer
> Simple module to analyze text

[![npm](https://img.shields.io/npm/v/typescript-text-analyzer.svg)](https://www.npmjs.com/package/typescript-text-analyzer)
[![license](https://img.shields.io/github/license/HenrikFricke/typescript-text-analyzer.svg)](https://github.com/henrikfricke/typescript-text-analyzer/blob/master/LICENSE)
[![CircleCI](https://img.shields.io/circleci/project/github/HenrikFricke/typescript-text-analyzer.svg)](https://circleci.com/gh/HenrikFricke/typescript-text-analyzer)

## Install

```bash
$ yarn add typescript-text-analyzer
```

## Example

```typescript
import TextAnalyzer from "typescript-text-analyzer";

const analyzer: TextAnalyzer = new TextAnalyzer("A simple text");

console.log(analyzer.withoutStopWords());
```

## API

## Constructor

```typescript
new TextAnalyzer(text: string) => TextAnalyzer
```

## Methods

```typescript
withoutStopWords(): string[]
```
Returns a list of all words from the text without the stop words. The complete list
of stop words can be found [here](http://www.ranks.nl/stopwords).

```typescript
keywords(items: number): string[]
```
Returns the number of requested keywords. 

## License

Copyright 2017 Henrik Fricke

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.