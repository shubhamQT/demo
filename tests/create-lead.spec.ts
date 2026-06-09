import { test, expect } from '../support/fixtures';
import testData from '../testdata/test-data.json';

test('Attempt to create Lead without Last Name and verify validation error', { tag: ["@e2e","@regression","@lead","@P0","@create-lead-missing-last-name"] }, async ({ page, homePage, leadListPage, leadNewPage }) => {
  await test.step('Open — Open Salesforce environment home page', async () => {
    await page.goto('/');
  });
  await test.step('Click — Click on Leads tab', async () => {
    await homePage.clickLeads();
  });
  await test.step('Click — Click on New button', async () => {
    await leadListPage.clickNew();
  });
  await test.step('Fill — Enter Company', async () => {
    await leadNewPage.fillCompany(testData.createLead.companyName);
  });
  await test.step('Click — Click Save button', async () => {
    await leadNewPage.clickSaveButton();
  });
  await test.step('Assert visible — Verify Last Name validation error is displayed', async () => {
    await leadNewPage.expectLastNameErrorVisible();
  });
  await test.step('Assert text — Verify error message text for Last Name', async () => {
    await leadNewPage.expectLastNameErrorText('These required fields must be completed: Last Name');
  });
});

test('Attempt to create Lead without Company and verify validation error', { tag: ["@e2e","@regression","@lead","@P0","@create-lead-missing-company"] }, async ({ page, homePage, leadListPage, leadNewPage }) => {
  await test.step('Open — Open Salesforce environment home page', async () => {
    await page.goto('/');
  });
  await test.step('Click — Click on Leads tab', async () => {
    await homePage.clickLeads();
  });
  await test.step('Click — Click on New button', async () => {
    await leadListPage.clickNew();
  });
  await test.step('Fill — Enter Last Name', async () => {
    await leadNewPage.fillLastName(testData.createLead.lastName);
  });
  await test.step('Click — Click Save button', async () => {
    await leadNewPage.clickSaveButton();
  });
  await test.step('Assert visible — Verify Company validation error is displayed', async () => {
    await leadNewPage.expectCompanyErrorVisible();
  });
  await test.step('Assert text — Verify error message text for Company', async () => {
    await leadNewPage.expectCompanyErrorText('These required fields must be completed: Company');
  });
});

test('Verify user is redirected to Lead record page after successful creation', { tag: ["@e2e","@regression","@lead","@P1","@redirect-to-lead-record-after-save"] }, async ({ page, homePage, leadListPage, leadNewPage }) => {
  await test.step('Open — Open Salesforce environment home page', async () => {
    await page.goto('/');
  });
  await test.step('Click — Click on Leads tab', async () => {
    await homePage.clickLeads();
  });
  await test.step('Click — Click on New button', async () => {
    await leadListPage.clickNew();
  });
  await test.step('Fill — Enter Last Name', async () => {
    await leadNewPage.fillLastName(testData.createLead.lastName);
  });
  await test.step('Fill — Enter Company', async () => {
    await leadNewPage.fillCompany(testData.createLead.companyName);
  });
  await test.step('Click — Click Save button', async () => {
    await leadNewPage.clickSaveButton();
  });
  await test.step('Assert visible — Verify Lead record page is displayed', async () => {
    await leadNewPage.expectLeadRecordHeaderVisible();
  });
});
