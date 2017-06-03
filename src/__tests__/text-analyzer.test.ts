import TextAnalyzer from "../text-analyzer";

import { stopWords } from "../../constants/stop-words";

describe("TextAnalyzer", () => {
    let text: string;

    beforeEach(() => {
        /*tslint:disable*/
        text = `
            Google has launched an online spreadsheet-site, in a private beta.

            The site will allow spreadsheets to be shared between up to 10 users, which is aimed to be useful to teams and small businesses. "Many people already organise information into spreadsheets. Where they are struggling is to share it" said the product manager, Jonathan Rochelle.
            Google recently bought the online word-processor Writely, launched a calendar product, as well as a desktop search tool. Many see this as them straying into Microsoft's markets.

            Google Spreadsheets uses very advanced AJAX (Asynchronous Javascript And Xml) and Client Side Scripting to mimic very effectively it's desktop counterparts' functions.

            It is surprisingly fast, has very good formatting and advanced formula support, but best of all it has complete support for Microsoft Excel .xls files, and very good collaboration: just enter the e-mail address and you can share easily.
        `;
        /*tslint:enable*/
    });

    describe("withoutStopWords", () => {
        it("should not contain any special characters", () => {
            const keywordsCollector = new TextAnalyzer(text);

            for (const word of keywordsCollector.withoutStopWords()) {
                expect(word).toMatch(/[\w-]/i);
            }
        });

        it("should not contain the default stop words", () => {
            const keywordsCollector = new TextAnalyzer(text);

            expect(keywordsCollector.withoutStopWords()).not.toContain(stopWords);
        });

        it("should not split words with dashes", () => {
            const keywordsCollector = new TextAnalyzer("e-mail");

            expect(keywordsCollector.withoutStopWords()).toEqual([ "e-mail"]);
        });

        it("should not split words with apostrophe", () => {
            const keywordsCollector = new TextAnalyzer("Microsoft's");

            expect(keywordsCollector.withoutStopWords()).toEqual([ "microsoft's" ]);
        });
    });

    describe("keywords", () => {
        let keywordsCollector: TextAnalyzer;
        let keywords: string[];

        beforeEach(() => {
            keywordsCollector = new TextAnalyzer(text);
            keywords = keywordsCollector.keywords(10);
        });

        it("should return list of keywords", () => {
            expect(keywords).toContain("google");
            expect(keywords).toContain("spreadsheet");
            expect(keywords).toContain("microsoft");
            expect(keywords).toContain("product");
            expect(keywords).toContain("launched");
        });

        it("should not contain stop words", () => {
            expect(keywords).not.toContain("has");
            expect(keywords).not.toContain("is");
            expect(keywords).not.toContain("and");
            expect(keywords).not.toContain("of");
            expect(keywords).not.toContain("they");
        });
    });
});
