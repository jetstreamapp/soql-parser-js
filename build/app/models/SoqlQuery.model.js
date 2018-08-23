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
`(Id = '1' OR Id = '2') AND (Name LIKE '%FOO%' OR Name LIKE '%ARM%')` `(Id = '1' OR Id = '2' OR (Name LIKE '%FOO%' OR (Name LIKE '%ARM%' AND FOO = 'bar')))`;
{
    group;
    {
        field: 'id',
            operator;
        '=',
            value;
        '1',
            trailingCondition;
        'OR',
        ;
    }
    {
        field: 'id',
            operator;
        '=',
            value;
        '2',
            trailingCondition;
        'OR',
        ;
    }
    {
        group: {
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU29xbFF1ZXJ5Lm1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2FwcC9tb2RlbHMvU29xbFF1ZXJ5Lm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBR0E7SUFZRTtRQUNFLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUVELGlCQUFpQixDQUFDLFNBQXNCLEVBQUUsUUFBZ0I7UUFDeEQsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3RDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsQ0FBQztRQUN4RCxDQUFDO1FBQ0QsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUNELCtCQUErQixDQUFDLFNBQTBCLEVBQUUsV0FBb0I7UUFDOUUsTUFBTSxpQkFBaUIsR0FBcUIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDdEcsRUFBRSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztZQUNoQixpQkFBaUIsQ0FBQyx3QkFBd0IsR0FBRyxTQUFTLENBQUM7UUFDekQsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04saUJBQWlCLENBQUMsVUFBVSxDQUFDLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsd0JBQXdCLEdBQUcsU0FBUyxDQUFDO1FBQzdHLENBQUM7SUFDSCxDQUFDO0NBQ0Y7QUFoQ0QsOEJBZ0NDO0FBa0VELHFFQUFxRSxDQUNyRSxzRkFBc0YsQ0FBQTtBQUV0RixDQUFDO0lBQ0MsS0FBSyxDQUFBO0lBQ0wsQ0FBQztRQUNDLEtBQUssRUFBRSxJQUFJO1lBQ1gsUUFBUSxDQUFBO1FBQUUsR0FBRztZQUNiLEtBQUssQ0FBQTtRQUFFLEdBQUc7WUFDVixpQkFBaUIsQ0FBQTtRQUFFLElBQUk7WUFDekIsQUFEMEIsSkFBQSxDQUFBO0lBQzFCLENBQUM7SUFDRCxDQUFDO1FBQ0MsS0FBSyxFQUFFLElBQUk7WUFDWCxRQUFRLENBQUE7UUFBRSxHQUFHO1lBQ2IsS0FBSyxDQUFBO1FBQUUsR0FBRztZQUNWLGlCQUFpQixDQUFBO1FBQUUsSUFBSTtZQUN6QixBQUQwQixKQUFBLENBQUE7SUFDMUIsQ0FBQztJQUNELENBQUM7UUFDQyxLQUFLLEVBQUUsQ0FBQztRQUVSLENBQUM7SUFDSCxDQUFDO0FBQ0gsQ0FBQyJ9