"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SoqlQuery {
    constructor() {
        this.fields = [];
        this.subqueries = [];
        this.whereClauseGroups = [];
    }
    addWhereCondition(condition, groupIdx) {
        if (!this.whereClauseGroups[groupIdx]) {
            this.whereClauseGroups[groupIdx] = { conditions: [] };
        }
        this.whereClauseGroups[groupIdx].conditions.push(condition);
    }
    addLogicalOperatorToWhereClause(condition, setForGroup) {
        const whereClauseGroups = this.whereClauseGroups[this.whereClauseGroups.length - 1];
        if (setForGroup) {
            whereClauseGroups.trailingLogicalCondition = condition;
        }
        else {
            whereClauseGroups.conditions[whereClauseGroups.conditions.length - 1].trailingLogicalCondition = condition;
        }
    }
}
exports.SoqlQuery = SoqlQuery;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU29xbFF1ZXJ5Lm1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2FwcC9tb2RlbHMvU29xbFF1ZXJ5Lm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBR0E7SUFZRTtRQUNFLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUVELGlCQUFpQixDQUFDLFNBQXNCLEVBQUUsUUFBZ0I7UUFDeEQsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3RDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsQ0FBQztRQUN4RCxDQUFDO1FBQ0QsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUNELCtCQUErQixDQUFDLFNBQTBCLEVBQUUsV0FBb0I7UUFDOUUsTUFBTSxpQkFBaUIsR0FBcUIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDdEcsRUFBRSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztZQUNoQixpQkFBaUIsQ0FBQyx3QkFBd0IsR0FBRyxTQUFTLENBQUM7UUFDekQsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04saUJBQWlCLENBQUMsVUFBVSxDQUFDLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsd0JBQXdCLEdBQUcsU0FBUyxDQUFDO1FBQzdHLENBQUM7SUFDSCxDQUFDO0NBQ0Y7QUFoQ0QsOEJBZ0NDIn0=