"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SoqlParser_1 = require("../app/SoqlParser");
const chai_1 = require("chai");
require("mocha");
const TestCases_1 = require("./TestCases");
describe('parse queries', () => {
    TestCases_1.default.forEach((testCase, i) => {
        it(`should parse correctly - test case ${i} - ${testCase.soql}`, () => {
            const soqlQuery = SoqlParser_1.parseQuery(testCase.soql);
            chai_1.expect(JSON.stringify(testCase.output)).equal(JSON.stringify(soqlQuery));
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU29xbFBhcnNlci5zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3Rlc3RzL1NvcWxQYXJzZXIuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGtEQUErQztBQUMvQywrQkFBOEI7QUFDOUIsaUJBQWU7QUFDZiwyQ0FBb0M7QUFFcEMsUUFBUSxDQUFDLGVBQWUsRUFBRTtJQUN4QixtQkFBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzVCLEVBQUUsQ0FBQyxzQ0FBc0MsQ0FBQyxNQUFNLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBRTtZQUMvRCxNQUFNLFNBQVMsR0FBRyx1QkFBVSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM1QyxhQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBQzNFLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQyJ9