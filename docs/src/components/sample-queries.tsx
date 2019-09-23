import {
  DetailsList,
  DetailsListLayoutMode,
  IColumn,
  Selection,
  SelectionMode,
  CheckboxVisibility,
} from 'office-ui-fabric-react/lib/DetailsList';
import * as React from 'react';

interface Item {
  key: number;
  num: number;
  soql: string;
}

// tslint:disable-next-line:no-empty-interface
export interface ISampleQueriesProps {
  onQuerySelected: (soql: string) => void;
}
export interface ISampleQueriesState {
  columns: IColumn[];
  items: Item[];
  selection: Selection;
}

export default class SampleQueries extends React.Component<ISampleQueriesProps, ISampleQueriesState> {
  constructor(props: ISampleQueriesProps) {
    super(props);
    this.state = {
      columns: this.getColumns(),
      items: this.getItems(),
      selection: new Selection({ onSelectionChanged: this.onSelectionChanged }),
    };
  }

  public getColumns = (): IColumn[] => {
    return [
      {
        key: 'column1',
        fieldName: 'num',
        name: '#',
        minWidth: 50,
        maxWidth: 50,
        isResizable: true,
        ariaLabel: '#',
      },
      {
        key: 'column2',
        name: 'Query',
        fieldName: 'soql',
        minWidth: 1000,
        isResizable: true,
        ariaLabel: 'SOQL Query',
      },
    ];
  };

  public getItems = (): Item[] => {
    return [
      { key: 1, num: 1, soql: 'SELECT Id, Name, BillingCity FROM Account' },
      { key: 2, num: 2, soql: "SELECT Id FROM Contact WHERE Name LIKE 'A%' AND MailingCity = 'California'" },
      { key: 3, num: 3, soql: 'SELECT Name FROM Account ORDER BY Name DESC NULLS LAST' },
      { key: 4, num: 4, soql: "SELECT Name FROM Account WHERE Industry = 'media' LIMIT 125" },
      { key: 5, num: 5, soql: "SELECT Name FROM Account WHERE Industry = 'media' ORDER BY BillingPostalCode ASC NULLS LAST LIMIT 125" },
      { key: 6, num: 6, soql: 'SELECT COUNT() FROM Contact' },
      { key: 7, num: 7, soql: 'SELECT LeadSource, COUNT(Name) FROM Lead GROUP BY LeadSource' },
      { key: 8, num: 8, soql: 'SELECT Name, COUNT(Id) FROM Account GROUP BY Name HAVING COUNT(Id) > 1' },
      { key: 9, num: 9, soql: 'SELECT Name, Id FROM Merchandise__c ORDER BY Name OFFSET 100' },
      { key: 10, num: 10, soql: 'SELECT Name, Id FROM Merchandise__c ORDER BY Name LIMIT 20 OFFSET 100' },
      { key: 11, num: 11, soql: 'SELECT Contact.FirstName, Contact.Account.Name FROM Contact' },
      { key: 12, num: 12, soql: "SELECT Id, Name, Account.Name FROM Contact WHERE Account.Industry = 'media'" },
      { key: 13, num: 13, soql: 'SELECT Name, (SELECT LastName FROM Contacts) FROM Account' },
      { key: 14, num: 14, soql: 'SELECT Account.Name, (SELECT Contact.LastName FROM Account.Contacts) FROM Account' },
      {
        key: 15,
        num: 15,
        soql: "SELECT Name, (SELECT LastName FROM Contacts WHERE CreatedBy.Alias='x') FROM Account WHERE Industry='media'",
      },
      {
        key: 16,
        num: 16,
        soql: "SELECT Id, FirstName__c, Mother_of_Child__r.FirstName__c FROM Daughter__c WHERE Mother_of_Child__r.LastName__c LIKE 'C%'",
      },
      { key: 17, num: 17, soql: "SELECT Name, (SELECT Name FROM Line_Items__r) FROM Merchandise__c WHERE Name LIKE 'Acme%'" },
      { key: 18, num: 18, soql: "SELECT Id, Owner.Name FROM Task WHERE Owner.FirstName LIKE 'B%'" },
      { key: 19, num: 19, soql: "SELECT Id, Who.FirstName, Who.LastName FROM Task WHERE Owner.FirstName LIKE 'B%'" },
      { key: 20, num: 20, soql: 'SELECT Id, What.Name FROM Event' },
      { key: 21, num: 21, soql: 'SELECT Name, (SELECT CreatedBy.Name FROM Notes) FROM Account' },
      { key: 22, num: 22, soql: 'SELECT UserId, LoginTime FROM LoginHistory' },
      {
        key: 23,
        num: 23,
        soql:
          'SELECT UserId, COUNT(Id) FROM LoginHistory WHERE LoginTime > 2010-09-20T22:16:30.000Z AND LoginTime < 2010-09-21 GROUP BY UserId',
      },
      { key: 24, num: 24, soql: 'SELECT Id, Name, IsActive, SobjectType, DeveloperName, Description FROM RecordType' },
      { key: 25, num: 25, soql: 'SELECT CampaignId, AVG(Amount) avg FROM Opportunity GROUP BY CampaignId HAVING COUNT(Id, Name) > 1' },
      { key: 26, num: 26, soql: 'SELECT LeadSource, COUNT(Name) cnt FROM Lead GROUP BY ROLLUP(LeadSource)' },
      { key: 27, num: 27, soql: 'SELECT Status, LeadSource, COUNT(Name) cnt FROM Lead GROUP BY ROLLUP(Status, LeadSource)' },
      { key: 28, num: 28, soql: 'SELECT c.Name, c.Account.Name FROM Contact c' },
      {
        key: 29,
        num: 29,
        soql: "SELECT LeadSource, COUNT(Name) FROM Lead GROUP BY LeadSource HAVING COUNT(Name) > 100 AND LeadSource > 'Phone'",
      },
      {
        key: 30,
        num: 30,
        soql: 'SELECT a.Id, a.Name, (SELECT a2.Id FROM ChildAccounts a2), (SELECT a1.Id FROM ChildAccounts1 a1) FROM Account a',
      },
      {
        key: 31,
        num: 31,
        soql: "SELECT Title FROM KnowledgeArticleVersion WHERE PublishStatus = 'online' WITH DATA CATEGORY Geography__c ABOVE usa__c",
      },
      {
        key: 32,
        num: 32,
        soql: 'SELECT Title FROM Question WHERE LastReplyDate > 2005-10-08T01:02:03Z WITH DATA CATEGORY Geography__c AT (usa__c, uk__c)',
      },
      { key: 33, num: 33, soql: 'SELECT Id FROM Contact FOR VIEW' },
      { key: 34, num: 34, soql: 'SELECT Id FROM Contact FOR REFERENCE' },
      { key: 35, num: 35, soql: 'SELECT Id FROM Contact FOR UPDATE' },
      { key: 36, num: 36, soql: 'SELECT Id FROM FAQ__kav FOR UPDATE' },
      { key: 37, num: 37, soql: 'SELECT Id FROM FAQ__kav FOR VIEW UPDATE TRACKING' },
      { key: 38, num: 38, soql: 'SELECT Id FROM FAQ__kav UPDATE VIEWSTAT' },
      { key: 39, num: 39, soql: 'SELECT FORMAT(MIN(closedate)) Amt FROM Opportunity' },
      { key: 40, num: 40, soql: "SELECT Company, toLabel(Status) FROM Lead WHERE toLabel(Status) = 'le Draft'" },
      {
        key: 41,
        num: 41,
        soql: "SELECT Id, Name FROM Account WHERE Id IN (SELECT AccountId FROM Opportunity WHERE StageName = 'Closed Lost')",
      },
      { key: 42, num: 42, soql: 'SELECT Id FROM Account WHERE Id NOT IN (SELECT AccountId FROM Opportunity WHERE IsClosed = TRUE)' },
      { key: 43, num: 43, soql: 'SELECT Account.Name, (SELECT Contact.LastName FROM Account.Contact.Foo.Bars) FROM Account' },
      { key: 44, num: 44, soql: 'SELECT LeadSource, COUNT(Name)cnt FROM Lead' },
      { key: 45, num: 45, soql: "SELECT Id, Name FROM Account WHERE Name != 'foo'" },
      {
        key: 46,
        num: 46,
        soql: "SELECT Id FROM Account WHERE Foo IN ('1', '2', '3') OR Bar IN (1, 2, 3) OR Baz IN (101.00, 102.50) OR Bam IN ('FOO', null)",
      },
      { key: 47, num: 47, soql: 'SELECT Id, Name FROM Account WHERE CreatedDate > LAST_N_YEARS:1 AND LastModifiedDate > LAST_MONTH' },
      { key: 48, num: 48, soql: 'SELECT Id, Name, BillingCity FROM Account WITH SECURITY_ENFORCED' },
      {
        key: 49,
        num: 49,
        soql: 'SELECT TYPEOF What WHEN Account THEN Phone, NumberOfEmployees WHEN Opportunity THEN Amount, CloseDate END FROM Event',
      },
      {
        key: 50,
        num: 50,
        soql:
          'SELECT Name FROM Account WHERE CreatedById IN (SELECT TYPEOF Owner WHEN User THEN Id WHEN Group THEN CreatedById END FROM CASE)',
      },
    ];
  };

  public onItemInvoked = (ev: any) => {
    // tslint:disable-next-line:no-console
    console.log(ev);
  };

  public onSelectionChanged = () => {
    this.props.onQuerySelected(this.state.items[this.state.selection.getSelectedIndices()[0]].soql);
  };

  public render() {
    return (
      <div>
        <div className="logo ms-font-xl">
          <div>Example Queries</div>
        </div>
        <DetailsList
          items={this.state.items}
          columns={this.state.columns}
          setKey="set"
          layoutMode={DetailsListLayoutMode.fixedColumns}
          selectionMode={SelectionMode.single}
          onItemInvoked={this.onItemInvoked}
          checkboxVisibility={CheckboxVisibility.hidden}
          selection={this.state.selection}
        />
      </div>
    );
  }
}
