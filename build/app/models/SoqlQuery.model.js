"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SoqlQuery {
    constructor() {
        this.fields = [];
        this.subqueries = [];
        this.whereClauseGroups = [];
    }
    addWhereCondition(condition, groupIdx) {
        if (!Array.isArray(this.whereClauseGroups[groupIdx])) {
            this.whereClauseGroups[groupIdx] = [];
        }
        this.whereClauseGroups[groupIdx].push(condition);
    }
}
exports.SoqlQuery = SoqlQuery;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU29xbFF1ZXJ5Lm1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2FwcC9tb2RlbHMvU29xbFF1ZXJ5Lm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7SUFZRTtRQUNFLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUVELGlCQUFpQixDQUFDLFNBQXNCLEVBQUUsUUFBZ0I7UUFDeEQsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNyRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ3hDLENBQUM7UUFDRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ25ELENBQUM7Q0FDRjtBQXhCRCw4QkF3QkMifQ==