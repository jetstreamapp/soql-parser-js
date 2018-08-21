"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SoqlParser_1 = require("../app/SoqlParser");
const chai_1 = require("chai");
require("mocha");
const TestCases_1 = require("./TestCases");
describe('parse queries', () => {
    TestCases_1.default.forEach(testCase => {
        it(`should parse correctly - test case ${testCase.testCase} - ${testCase.soql}`, () => {
            const soqlQuery = SoqlParser_1.parseQuery(testCase.soql);
            chai_1.expect(JSON.stringify(testCase.output)).equal(JSON.stringify(soqlQuery));
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU29xbFBhcnNlci5zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3Rlc3RzL1NvcWxQYXJzZXIuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGtEQUErQztBQUMvQywrQkFBOEI7QUFDOUIsaUJBQWU7QUFDZiwyQ0FBb0M7QUFFcEMsUUFBUSxDQUFDLGVBQWUsRUFBRTtJQUN4QixtQkFBUyxDQUFDLE9BQU8sQ0FBQyxRQUFRO1FBQ3hCLEVBQUUsQ0FBQyxzQ0FBc0MsUUFBUSxDQUFDLFFBQVEsTUFBTSxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQUU7WUFDL0UsTUFBTSxTQUFTLEdBQUcsdUJBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDNUMsYUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUMzRSxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUMifQ==