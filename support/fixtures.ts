import { test as base, expect } from "@playwright/test";
import { HomePage } from "../pageobjects/HomePage";
import { LeadListPage } from "../pageobjects/LeadListPage";
import { LeadNewPage } from "../pageobjects/LeadNewPage";
import { LoginPage } from "../pageobjects/LoginPage";
import { OpportunityListPage } from "../pageobjects/OpportunityListPage";
import { OpportunityNewPage } from "../pageobjects/OpportunityNewPage";

type AppFixtures = {
  homePage: HomePage;
  leadListPage: LeadListPage;
  leadNewPage: LeadNewPage;
  loginPage: LoginPage;
  opportunityListPage: OpportunityListPage;
  opportunityNewPage: OpportunityNewPage;
};

export const test = base.extend<AppFixtures>({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  leadListPage: async ({ page }, use) => {
    await use(new LeadListPage(page));
  },
  leadNewPage: async ({ page }, use) => {
    await use(new LeadNewPage(page));
  },
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  opportunityListPage: async ({ page }, use) => {
    await use(new OpportunityListPage(page));
  },
  opportunityNewPage: async ({ page }, use) => {
    await use(new OpportunityNewPage(page));
  },
});

export { expect };
