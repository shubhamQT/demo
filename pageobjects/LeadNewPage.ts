import {
  checkWhenVisible,
  clearWhenVisible,
  clickOpensNewPage,
  clickWhenVisible,
  closePage,
  doubleClickWhenVisible,
  expectChecked,
  expectContainsText,
  expectCount,
  expectCountGreaterThan,
  expectDisabled,
  expectEnabled,
  expectFocused,
  expectHidden,
  expectSelected,
  expectText,
  expectUnchecked,
  expectValue,
  expectVisible,
  fill,
  fillWhenVisible,
  getTextWhenVisible,
  goBack,
  hoverWhenVisible,
  longPressWhenVisible,
  navigateTo,
  scrollIntoView,
  scrollIntoViewWhenVisible,
  selectOptionWhenVisible,
  takeScreenshot,
  typeTextWhenVisible,
  uncheckWhenVisible,
  waitForHidden,
  waitForNewPage,
  waitForVisible,
  waitMs,
  webLocator,
} from "../support/web-actions";

export class LeadNewPage {
  private static readonly L = {
    cancelAndClose: { strategy: 'css' as const, value: '[title="Cancel and close"]', actionKind: 'button' as const },
    newLead: { strategy: 'text' as const, value: 'New Lead', shadowHost: 'records-lwc-detail-panel', actionKind: 'text' as const },
    leadInformation: { strategy: 'text' as const, value: 'Lead Information', shadowHost: 'records-record-layout-section', actionKind: 'text' as const },
    leadOwner: { strategy: 'text' as const, value: 'Lead Owner', shadowHost: 'records-record-layout-item', actionKind: 'text' as const },
    phone: { strategy: 'css' as const, value: '[name="Phone"]', shadowHost: 'lightning-primitive-input-simple', actionKind: 'textbox' as const },
    name: { strategy: 'text' as const, value: '*Name', shadowHost: 'lightning-input-name', actionKind: 'text' as const },
    salutation: { strategy: 'css' as const, value: '[name="salutation"]', shadowHost: 'lightning-base-combobox', actionKind: 'button' as const },
    firstName: { strategy: 'css' as const, value: '[name="firstName"][placeholder="First Name"]', shadowHost: 'lightning-primitive-input-simple', actionKind: 'textbox' as const },
    lastName: { strategy: 'css' as const, value: '[name="lastName"][placeholder="Last Name"]', shadowHost: 'lightning-primitive-input-simple', actionKind: 'textbox' as const },
    mobilePhone: { strategy: 'css' as const, value: '[name="MobilePhone"]', shadowHost: 'lightning-primitive-input-simple', actionKind: 'textbox' as const },
    company: { strategy: 'css' as const, value: '[name="Company"]', shadowHost: 'lightning-primitive-input-simple', actionKind: 'textbox' as const },
    fax: { strategy: 'css' as const, value: '[name="Fax"]', shadowHost: 'lightning-primitive-input-simple', actionKind: 'textbox' as const },
    title: { strategy: 'css' as const, value: '[name="Title"]', shadowHost: 'lightning-primitive-input-simple', actionKind: 'textbox' as const },
    email: { strategy: 'css' as const, value: '[name="Email"]', shadowHost: 'lightning-primitive-input-simple', actionKind: 'textbox' as const },
    leadSource: { strategy: 'label' as const, value: 'Lead Source', shadowHost: 'lightning-base-combobox', actionKind: 'button' as const },
    website: { strategy: 'css' as const, value: '[name="Website"]', shadowHost: 'lightning-primitive-input-simple', actionKind: 'textbox' as const },
    industry: { strategy: 'label' as const, value: 'Industry', shadowHost: 'lightning-base-combobox', actionKind: 'button' as const },
    leadStatus: { strategy: 'label' as const, value: 'Lead Status', shadowHost: 'lightning-base-combobox', actionKind: 'button' as const },
    annualRevenue: { strategy: 'css' as const, value: '[name="AnnualRevenue"]', shadowHost: 'lightning-primitive-input-simple', actionKind: 'textbox' as const },
    rating: { strategy: 'label' as const, value: 'Rating', shadowHost: 'lightning-base-combobox', actionKind: 'button' as const },
    numberOfEmployees: { strategy: 'css' as const, value: '[name="NumberOfEmployees"]', shadowHost: 'lightning-primitive-input-simple', actionKind: 'textbox' as const },
    addressInformation: { strategy: 'text' as const, value: 'Address Information', shadowHost: 'records-record-layout-section', actionKind: 'text' as const },
    address: { strategy: 'text' as const, value: 'Address', shadowHost: 'lightning-input-address', actionKind: 'text' as const },
    country: { strategy: 'css' as const, value: '[name="country"]', shadowHost: 'lightning-base-combobox', actionKind: 'textbox' as const },
    street: { strategy: 'css' as const, value: '[name="street"]', shadowHost: 'lightning-textarea', actionKind: 'textbox' as const },
    city: { strategy: 'css' as const, value: '[name="city"]', shadowHost: 'lightning-primitive-input-simple', actionKind: 'textbox' as const },
    province: { strategy: 'css' as const, value: '[name="province"]', shadowHost: 'lightning-base-combobox', actionKind: 'textbox' as const },
    postalCode: { strategy: 'css' as const, value: '[name="postalCode"]', shadowHost: 'lightning-primitive-input-simple', actionKind: 'textbox' as const },
    additionalInformation: { strategy: 'text' as const, value: 'Additional Information', shadowHost: 'records-record-layout-section', actionKind: 'text' as const },
    productInterest: { strategy: 'label' as const, value: 'Product Interest', shadowHost: 'lightning-base-combobox', actionKind: 'button' as const },
    currentGeneratorsC: { strategy: 'css' as const, value: '[name="CurrentGenerators__c"]', shadowHost: 'lightning-primitive-input-simple', actionKind: 'textbox' as const },
    sICCodeC: { strategy: 'css' as const, value: '[name="SICCode__c"]', shadowHost: 'lightning-primitive-input-simple', actionKind: 'textbox' as const },
    primary: { strategy: 'label' as const, value: 'Primary', shadowHost: 'lightning-base-combobox', actionKind: 'button' as const },
    numberofLocationsC: { strategy: 'css' as const, value: '[name="NumberofLocations__c"]', shadowHost: 'lightning-primitive-input-simple', actionKind: 'textbox' as const },
    descriptionInformation: { strategy: 'text' as const, value: 'Description Information', shadowHost: 'records-record-layout-section', actionKind: 'text' as const },
    cancelEdit: { strategy: 'css' as const, value: '[name="CancelEdit"]', shadowHost: 'lightning-button', actionKind: 'button' as const },
    saveAndNew: { strategy: 'css' as const, value: '[name="SaveAndNew"]', shadowHost: 'lightning-button', actionKind: 'button' as const },
    saveEdit: { strategy: 'css' as const, value: '[name="SaveEdit"]', shadowHost: 'lightning-button', actionKind: 'button' as const },
    saveButton: { strategy: 'css' as const, value: '[name="SaveEdit"]', shadowHost: 'lightning-button', actionKind: 'button' as const },
    lastNameError: { strategy: 'css' as const, value: '.slds-form-element__help, [class*="errorMessage"], div[role="alert"] p', shadowHost: 'force-record-edit-type', actionKind: 'text' as const },
    companyError: { strategy: 'css' as const, value: '.slds-form-element__help, [class*="errorMessage"], div[role="alert"] p', shadowHost: 'force-record-edit-type', actionKind: 'text' as const },
    leadRecordHeader: { strategy: 'css' as const, value: 'lightning-record-highlight-panel', actionKind: 'text' as const },
  } as const;

  constructor(private readonly page: Page) {}

  async clickCancelAndClose(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadNewPage.L.cancelAndClose));
  }

  async doubleClickCancelAndClose(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadNewPage.L.cancelAndClose));
  }

  async expectCancelAndCloseVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.cancelAndClose), timeoutMs);
  }

  async expectCancelAndCloseHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.cancelAndClose), timeoutMs);
  }

  async expectCancelAndCloseEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.cancelAndClose), timeoutMs);
  }

  async expectCancelAndCloseDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.cancelAndClose), timeoutMs);
  }

  async expectCancelAndCloseText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.cancelAndClose), expected, timeoutMs);
  }

  async expectCancelAndCloseContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.cancelAndClose), substring, timeoutMs);
  }

  async scrollCancelAndCloseIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.cancelAndClose));
  }

  async getInnerTextNewLead(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, LeadNewPage.L.newLead));
  }

  async expectNewLeadVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.newLead), timeoutMs);
  }

  async expectNewLeadHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.newLead), timeoutMs);
  }

  async expectNewLeadText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.newLead), expected, timeoutMs);
  }

  async expectNewLeadContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.newLead), substring, timeoutMs);
  }

  async scrollNewLeadIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.newLead));
  }

  async getInnerTextLeadInformation(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, LeadNewPage.L.leadInformation));
  }

  async expectLeadInformationVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.leadInformation), timeoutMs);
  }

  async expectLeadInformationHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.leadInformation), timeoutMs);
  }

  async expectLeadInformationText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.leadInformation), expected, timeoutMs);
  }

  async expectLeadInformationContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.leadInformation), substring, timeoutMs);
  }

  async scrollLeadInformationIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.leadInformation));
  }

  async getInnerTextLeadOwner(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, LeadNewPage.L.leadOwner));
  }

  async expectLeadOwnerVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.leadOwner), timeoutMs);
  }

  async expectLeadOwnerHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.leadOwner), timeoutMs);
  }

  async expectLeadOwnerText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.leadOwner), expected, timeoutMs);
  }

  async expectLeadOwnerContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.leadOwner), substring, timeoutMs);
  }

  async scrollLeadOwnerIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.leadOwner));
  }

  async fillPhone(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, LeadNewPage.L.phone), value);
  }

  async clearPhone(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, LeadNewPage.L.phone));
  }

  async typeTextPhone(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, LeadNewPage.L.phone), value);
  }

  async expectPhoneVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.phone), timeoutMs);
  }

  async expectPhoneHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.phone), timeoutMs);
  }

  async expectPhoneEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.phone), timeoutMs);
  }

  async expectPhoneDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.phone), timeoutMs);
  }

  async expectPhoneValue(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.phone), expected, timeoutMs);
  }

  async expectPhoneFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.phone), timeoutMs);
  }

  async scrollPhoneIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.phone));
  }

  async getInnerTextName(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, LeadNewPage.L.name));
  }

  async expectNameVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.name), timeoutMs);
  }

  async expectNameHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.name), timeoutMs);
  }

  async expectNameText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.name), expected, timeoutMs);
  }

  async expectNameContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.name), substring, timeoutMs);
  }

  async scrollNameIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.name));
  }

  async clickSalutation(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadNewPage.L.salutation));
  }

  async doubleClickSalutation(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadNewPage.L.salutation));
  }

  async expectSalutationVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.salutation), timeoutMs);
  }

  async expectSalutationHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.salutation), timeoutMs);
  }

  async expectSalutationEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.salutation), timeoutMs);
  }

  async expectSalutationDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.salutation), timeoutMs);
  }

  async expectSalutationText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.salutation), expected, timeoutMs);
  }

  async expectSalutationContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.salutation), substring, timeoutMs);
  }

  async scrollSalutationIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.salutation));
  }

  async fillFirstName(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, LeadNewPage.L.firstName), value);
  }

  async clearFirstName(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, LeadNewPage.L.firstName));
  }

  async typeTextFirstName(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, LeadNewPage.L.firstName), value);
  }

  async expectFirstNameVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.firstName), timeoutMs);
  }

  async expectFirstNameHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.firstName), timeoutMs);
  }

  async expectFirstNameEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.firstName), timeoutMs);
  }

  async expectFirstNameDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.firstName), timeoutMs);
  }

  async expectFirstNameValue(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.firstName), expected, timeoutMs);
  }

  async expectFirstNameFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.firstName), timeoutMs);
  }

  async scrollFirstNameIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.firstName));
  }

  async fillLastName(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, LeadNewPage.L.lastName), value);
  }

  async clearLastName(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, LeadNewPage.L.lastName));
  }

  async typeTextLastName(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, LeadNewPage.L.lastName), value);
  }

  async expectLastNameVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.lastName), timeoutMs);
  }

  async expectLastNameHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.lastName), timeoutMs);
  }

  async expectLastNameEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.lastName), timeoutMs);
  }

  async expectLastNameDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.lastName), timeoutMs);
  }

  async expectLastNameValue(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.lastName), expected, timeoutMs);
  }

  async expectLastNameFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.lastName), timeoutMs);
  }

  async scrollLastNameIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.lastName));
  }

  async fillMobilePhone(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, LeadNewPage.L.mobilePhone), value);
  }

  async clearMobilePhone(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, LeadNewPage.L.mobilePhone));
  }

  async typeTextMobilePhone(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, LeadNewPage.L.mobilePhone), value);
  }

  async expectMobilePhoneVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.mobilePhone), timeoutMs);
  }

  async expectMobilePhoneHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.mobilePhone), timeoutMs);
  }

  async expectMobilePhoneEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.mobilePhone), timeoutMs);
  }

  async expectMobilePhoneDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.mobilePhone), timeoutMs);
  }

  async expectMobilePhoneValue(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.mobilePhone), expected, timeoutMs);
  }

  async expectMobilePhoneFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.mobilePhone), timeoutMs);
  }

  async scrollMobilePhoneIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.mobilePhone));
  }

  async fillCompany(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, LeadNewPage.L.company), value);
  }

  async clearCompany(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, LeadNewPage.L.company));
  }

  async typeTextCompany(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, LeadNewPage.L.company), value);
  }

  async expectCompanyVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.company), timeoutMs);
  }

  async expectCompanyHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.company), timeoutMs);
  }

  async expectCompanyEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.company), timeoutMs);
  }

  async expectCompanyDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.company), timeoutMs);
  }

  async expectCompanyValue(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.company), expected, timeoutMs);
  }

  async expectCompanyFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.company), timeoutMs);
  }

  async scrollCompanyIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.company));
  }

  async fillFax(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, LeadNewPage.L.fax), value);
  }

  async clearFax(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, LeadNewPage.L.fax));
  }

  async typeTextFax(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, LeadNewPage.L.fax), value);
  }

  async expectFaxVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.fax), timeoutMs);
  }

  async expectFaxHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.fax), timeoutMs);
  }

  async expectFaxEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.fax), timeoutMs);
  }

  async expectFaxDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.fax), timeoutMs);
  }

  async expectFaxValue(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.fax), expected, timeoutMs);
  }

  async expectFaxFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.fax), timeoutMs);
  }

  async scrollFaxIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.fax));
  }

  async fillTitle(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, LeadNewPage.L.title), value);
  }

  async clearTitle(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, LeadNewPage.L.title));
  }

  async typeTextTitle(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, LeadNewPage.L.title), value);
  }

  async expectTitleVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.title), timeoutMs);
  }

  async expectTitleHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.title), timeoutMs);
  }

  async expectTitleEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.title), timeoutMs);
  }

  async expectTitleDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.title), timeoutMs);
  }

  async expectTitleValue(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.title), expected, timeoutMs);
  }

  async expectTitleFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.title), timeoutMs);
  }

  async scrollTitleIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.title));
  }

  async fillEmail(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, LeadNewPage.L.email), value);
  }

  async clearEmail(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, LeadNewPage.L.email));
  }

  async typeTextEmail(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, LeadNewPage.L.email), value);
  }

  async expectEmailVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.email), timeoutMs);
  }

  async expectEmailHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.email), timeoutMs);
  }

  async expectEmailEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.email), timeoutMs);
  }

  async expectEmailDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.email), timeoutMs);
  }

  async expectEmailValue(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.email), expected, timeoutMs);
  }

  async expectEmailFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.email), timeoutMs);
  }

  async scrollEmailIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.email));
  }

  async clickLeadSource(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadNewPage.L.leadSource));
  }

  async doubleClickLeadSource(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadNewPage.L.leadSource));
  }

  async expectLeadSourceVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.leadSource), timeoutMs);
  }

  async expectLeadSourceHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.leadSource), timeoutMs);
  }

  async expectLeadSourceEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.leadSource), timeoutMs);
  }

  async expectLeadSourceDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.leadSource), timeoutMs);
  }

  async expectLeadSourceText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.leadSource), expected, timeoutMs);
  }

  async expectLeadSourceContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.leadSource), substring, timeoutMs);
  }

  async scrollLeadSourceIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.leadSource));
  }

  async fillWebsite(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, LeadNewPage.L.website), value);
  }

  async clearWebsite(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, LeadNewPage.L.website));
  }

  async typeTextWebsite(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, LeadNewPage.L.website), value);
  }

  async expectWebsiteVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.website), timeoutMs);
  }

  async expectWebsiteHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.website), timeoutMs);
  }

  async expectWebsiteEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.website), timeoutMs);
  }

  async expectWebsiteDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.website), timeoutMs);
  }

  async expectWebsiteValue(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.website), expected, timeoutMs);
  }

  async expectWebsiteFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.website), timeoutMs);
  }

  async scrollWebsiteIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.website));
  }

  async clickIndustry(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadNewPage.L.industry));
  }

  async doubleClickIndustry(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadNewPage.L.industry));
  }

  async expectIndustryVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.industry), timeoutMs);
  }

  async expectIndustryHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.industry), timeoutMs);
  }

  async expectIndustryEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.industry), timeoutMs);
  }

  async expectIndustryDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.industry), timeoutMs);
  }

  async expectIndustryText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.industry), expected, timeoutMs);
  }

  async expectIndustryContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.industry), substring, timeoutMs);
  }

  async scrollIndustryIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.industry));
  }

  async clickLeadStatus(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadNewPage.L.leadStatus));
  }

  async doubleClickLeadStatus(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadNewPage.L.leadStatus));
  }

  async expectLeadStatusVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.leadStatus), timeoutMs);
  }

  async expectLeadStatusHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.leadStatus), timeoutMs);
  }

  async expectLeadStatusEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.leadStatus), timeoutMs);
  }

  async expectLeadStatusDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.leadStatus), timeoutMs);
  }

  async expectLeadStatusText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.leadStatus), expected, timeoutMs);
  }

  async expectLeadStatusContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.leadStatus), substring, timeoutMs);
  }

  async scrollLeadStatusIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.leadStatus));
  }

  async fillAnnualRevenue(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, LeadNewPage.L.annualRevenue), value);
  }

  async clearAnnualRevenue(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, LeadNewPage.L.annualRevenue));
  }

  async typeTextAnnualRevenue(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, LeadNewPage.L.annualRevenue), value);
  }

  async expectAnnualRevenueVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.annualRevenue), timeoutMs);
  }

  async expectAnnualRevenueHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.annualRevenue), timeoutMs);
  }

  async expectAnnualRevenueEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.annualRevenue), timeoutMs);
  }

  async expectAnnualRevenueDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.annualRevenue), timeoutMs);
  }

  async expectAnnualRevenueValue(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.annualRevenue), expected, timeoutMs);
  }

  async expectAnnualRevenueFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.annualRevenue), timeoutMs);
  }

  async scrollAnnualRevenueIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.annualRevenue));
  }

  async clickRating(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadNewPage.L.rating));
  }

  async doubleClickRating(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadNewPage.L.rating));
  }

  async expectRatingVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.rating), timeoutMs);
  }

  async expectRatingHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.rating), timeoutMs);
  }

  async expectRatingEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.rating), timeoutMs);
  }

  async expectRatingDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.rating), timeoutMs);
  }

  async expectRatingText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.rating), expected, timeoutMs);
  }

  async expectRatingContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.rating), substring, timeoutMs);
  }

  async scrollRatingIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.rating));
  }

  async fillNumberOfEmployees(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, LeadNewPage.L.numberOfEmployees), value);
  }

  async clearNumberOfEmployees(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, LeadNewPage.L.numberOfEmployees));
  }

  async typeTextNumberOfEmployees(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, LeadNewPage.L.numberOfEmployees), value);
  }

  async expectNumberOfEmployeesVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.numberOfEmployees), timeoutMs);
  }

  async expectNumberOfEmployeesHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.numberOfEmployees), timeoutMs);
  }

  async expectNumberOfEmployeesEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.numberOfEmployees), timeoutMs);
  }

  async expectNumberOfEmployeesDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.numberOfEmployees), timeoutMs);
  }

  async expectNumberOfEmployeesValue(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.numberOfEmployees), expected, timeoutMs);
  }

  async expectNumberOfEmployeesFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.numberOfEmployees), timeoutMs);
  }

  async scrollNumberOfEmployeesIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.numberOfEmployees));
  }

  async getInnerTextAddressInformation(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, LeadNewPage.L.addressInformation));
  }

  async expectAddressInformationVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.addressInformation), timeoutMs);
  }

  async expectAddressInformationHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.addressInformation), timeoutMs);
  }

  async expectAddressInformationText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.addressInformation), expected, timeoutMs);
  }

  async expectAddressInformationContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.addressInformation), substring, timeoutMs);
  }

  async scrollAddressInformationIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.addressInformation));
  }

  async getInnerTextAddress(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, LeadNewPage.L.address));
  }

  async expectAddressVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.address), timeoutMs);
  }

  async expectAddressHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.address), timeoutMs);
  }

  async expectAddressText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.address), expected, timeoutMs);
  }

  async expectAddressContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.address), substring, timeoutMs);
  }

  async scrollAddressIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.address));
  }

  async fillCountry(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, LeadNewPage.L.country), value);
  }

  async clearCountry(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, LeadNewPage.L.country));
  }

  async typeTextCountry(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, LeadNewPage.L.country), value);
  }

  async expectCountryVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.country), timeoutMs);
  }

  async expectCountryHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.country), timeoutMs);
  }

  async expectCountryEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.country), timeoutMs);
  }

  async expectCountryDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.country), timeoutMs);
  }

  async expectCountryValue(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.country), expected, timeoutMs);
  }

  async expectCountryFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.country), timeoutMs);
  }

  async scrollCountryIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.country));
  }

  async fillStreet(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, LeadNewPage.L.street), value);
  }

  async clearStreet(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, LeadNewPage.L.street));
  }

  async typeTextStreet(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, LeadNewPage.L.street), value);
  }

  async expectStreetVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.street), timeoutMs);
  }

  async expectStreetHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.street), timeoutMs);
  }

  async expectStreetEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.street), timeoutMs);
  }

  async expectStreetDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.street), timeoutMs);
  }

  async expectStreetValue(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.street), expected, timeoutMs);
  }

  async expectStreetFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.street), timeoutMs);
  }

  async scrollStreetIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.street));
  }

  async fillCity(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, LeadNewPage.L.city), value);
  }

  async clearCity(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, LeadNewPage.L.city));
  }

  async typeTextCity(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, LeadNewPage.L.city), value);
  }

  async expectCityVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.city), timeoutMs);
  }

  async expectCityHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.city), timeoutMs);
  }

  async expectCityEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.city), timeoutMs);
  }

  async expectCityDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.city), timeoutMs);
  }

  async expectCityValue(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.city), expected, timeoutMs);
  }

  async expectCityFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.city), timeoutMs);
  }

  async scrollCityIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.city));
  }

  async fillProvince(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, LeadNewPage.L.province), value);
  }

  async clearProvince(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, LeadNewPage.L.province));
  }

  async typeTextProvince(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, LeadNewPage.L.province), value);
  }

  async expectProvinceVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.province), timeoutMs);
  }

  async expectProvinceHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.province), timeoutMs);
  }

  async expectProvinceEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.province), timeoutMs);
  }

  async expectProvinceDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.province), timeoutMs);
  }

  async expectProvinceValue(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.province), expected, timeoutMs);
  }

  async expectProvinceFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.province), timeoutMs);
  }

  async scrollProvinceIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.province));
  }

  async fillPostalCode(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, LeadNewPage.L.postalCode), value);
  }

  async clearPostalCode(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, LeadNewPage.L.postalCode));
  }

  async typeTextPostalCode(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, LeadNewPage.L.postalCode), value);
  }

  async expectPostalCodeVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.postalCode), timeoutMs);
  }

  async expectPostalCodeHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.postalCode), timeoutMs);
  }

  async expectPostalCodeEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.postalCode), timeoutMs);
  }

  async expectPostalCodeDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.postalCode), timeoutMs);
  }

  async expectPostalCodeValue(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.postalCode), expected, timeoutMs);
  }

  async expectPostalCodeFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.postalCode), timeoutMs);
  }

  async scrollPostalCodeIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.postalCode));
  }

  async getInnerTextAdditionalInformation(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, LeadNewPage.L.additionalInformation));
  }

  async expectAdditionalInformationVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.additionalInformation), timeoutMs);
  }

  async expectAdditionalInformationHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.additionalInformation), timeoutMs);
  }

  async expectAdditionalInformationText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.additionalInformation), expected, timeoutMs);
  }

  async expectAdditionalInformationContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.additionalInformation), substring, timeoutMs);
  }

  async scrollAdditionalInformationIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.additionalInformation));
  }

  async clickProductInterest(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadNewPage.L.productInterest));
  }

  async doubleClickProductInterest(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadNewPage.L.productInterest));
  }

  async expectProductInterestVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.productInterest), timeoutMs);
  }

  async expectProductInterestHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.productInterest), timeoutMs);
  }

  async expectProductInterestEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.productInterest), timeoutMs);
  }

  async expectProductInterestDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.productInterest), timeoutMs);
  }

  async expectProductInterestText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.productInterest), expected, timeoutMs);
  }

  async expectProductInterestContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.productInterest), substring, timeoutMs);
  }

  async scrollProductInterestIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.productInterest));
  }

  async fillCurrentGeneratorsC(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, LeadNewPage.L.currentGeneratorsC), value);
  }

  async clearCurrentGeneratorsC(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, LeadNewPage.L.currentGeneratorsC));
  }

  async typeTextCurrentGeneratorsC(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, LeadNewPage.L.currentGeneratorsC), value);
  }

  async expectCurrentGeneratorsCVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.currentGeneratorsC), timeoutMs);
  }

  async expectCurrentGeneratorsCHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.currentGeneratorsC), timeoutMs);
  }

  async expectCurrentGeneratorsCEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.currentGeneratorsC), timeoutMs);
  }

  async expectCurrentGeneratorsCDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.currentGeneratorsC), timeoutMs);
  }

  async expectCurrentGeneratorsCValue(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.currentGeneratorsC), expected, timeoutMs);
  }

  async expectCurrentGeneratorsCFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.currentGeneratorsC), timeoutMs);
  }

  async scrollCurrentGeneratorsCIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.currentGeneratorsC));
  }

  async fillSICCodeC(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, LeadNewPage.L.sICCodeC), value);
  }

  async clearSICCodeC(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, LeadNewPage.L.sICCodeC));
  }

  async typeTextSICCodeC(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, LeadNewPage.L.sICCodeC), value);
  }

  async expectSICCodeCVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.sICCodeC), timeoutMs);
  }

  async expectSICCodeCHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.sICCodeC), timeoutMs);
  }

  async expectSICCodeCEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.sICCodeC), timeoutMs);
  }

  async expectSICCodeCDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.sICCodeC), timeoutMs);
  }

  async expectSICCodeCValue(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.sICCodeC), expected, timeoutMs);
  }

  async expectSICCodeCFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.sICCodeC), timeoutMs);
  }

  async scrollSICCodeCIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.sICCodeC));
  }

  async clickPrimary(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadNewPage.L.primary));
  }

  async doubleClickPrimary(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadNewPage.L.primary));
  }

  async expectPrimaryVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.primary), timeoutMs);
  }

  async expectPrimaryHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.primary), timeoutMs);
  }

  async expectPrimaryEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.primary), timeoutMs);
  }

  async expectPrimaryDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.primary), timeoutMs);
  }

  async expectPrimaryText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.primary), expected, timeoutMs);
  }

  async expectPrimaryContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.primary), substring, timeoutMs);
  }

  async scrollPrimaryIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.primary));
  }

  async fillNumberofLocationsC(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, LeadNewPage.L.numberofLocationsC), value);
  }

  async clearNumberofLocationsC(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, LeadNewPage.L.numberofLocationsC));
  }

  async typeTextNumberofLocationsC(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, LeadNewPage.L.numberofLocationsC), value);
  }

  async expectNumberofLocationsCVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.numberofLocationsC), timeoutMs);
  }

  async expectNumberofLocationsCHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.numberofLocationsC), timeoutMs);
  }

  async expectNumberofLocationsCEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.numberofLocationsC), timeoutMs);
  }

  async expectNumberofLocationsCDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.numberofLocationsC), timeoutMs);
  }

  async expectNumberofLocationsCValue(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.numberofLocationsC), expected, timeoutMs);
  }

  async expectNumberofLocationsCFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.numberofLocationsC), timeoutMs);
  }

  async scrollNumberofLocationsCIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.numberofLocationsC));
  }

  async getInnerTextDescriptionInformation(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, LeadNewPage.L.descriptionInformation));
  }

  async expectDescriptionInformationVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.descriptionInformation), timeoutMs);
  }

  async expectDescriptionInformationHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.descriptionInformation), timeoutMs);
  }

  async expectDescriptionInformationText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.descriptionInformation), expected, timeoutMs);
  }

  async expectDescriptionInformationContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.descriptionInformation), substring, timeoutMs);
  }

  async scrollDescriptionInformationIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.descriptionInformation));
  }

  async clickCancelEdit(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadNewPage.L.cancelEdit));
  }

  async doubleClickCancelEdit(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadNewPage.L.cancelEdit));
  }

  async expectCancelEditVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.cancelEdit), timeoutMs);
  }

  async expectCancelEditHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.cancelEdit), timeoutMs);
  }

  async expectCancelEditEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.cancelEdit), timeoutMs);
  }

  async expectCancelEditDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.cancelEdit), timeoutMs);
  }

  async expectCancelEditText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.cancelEdit), expected, timeoutMs);
  }

  async expectCancelEditContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.cancelEdit), substring, timeoutMs);
  }

  async scrollCancelEditIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.cancelEdit));
  }

  async clickSaveAndNew(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadNewPage.L.saveAndNew));
  }

  async doubleClickSaveAndNew(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadNewPage.L.saveAndNew));
  }

  async expectSaveAndNewVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.saveAndNew), timeoutMs);
  }

  async expectSaveAndNewHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.saveAndNew), timeoutMs);
  }

  async expectSaveAndNewEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.saveAndNew), timeoutMs);
  }

  async expectSaveAndNewDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.saveAndNew), timeoutMs);
  }

  async expectSaveAndNewText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.saveAndNew), expected, timeoutMs);
  }

  async expectSaveAndNewContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.saveAndNew), substring, timeoutMs);
  }

  async scrollSaveAndNewIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.saveAndNew));
  }

  async clickSaveEdit(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadNewPage.L.saveEdit));
  }

  async doubleClickSaveEdit(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadNewPage.L.saveEdit));
  }

  async expectSaveEditVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.saveEdit), timeoutMs);
  }

  async expectSaveEditHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LeadNewPage.L.saveEdit), timeoutMs);
  }

  async expectSaveEditEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.saveEdit), timeoutMs);
  }

  async expectSaveEditDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.saveEdit), timeoutMs);
  }

  async expectSaveEditText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.saveEdit), expected, timeoutMs);
  }

  async expectSaveEditContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.saveEdit), substring, timeoutMs);
  }

  async scrollSaveEditIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LeadNewPage.L.saveEdit));
  }

  async getPageTitle(): Promise<string> {
    return this.page.title();
  }

  async expectPageTitle(expected: string | RegExp, timeoutMs = 30_000): Promise<void> {
    await expect(this.page).toHaveTitle(expected, { timeout: timeoutMs });
  }


  async longPressCancelAndClose(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadNewPage.L.cancelAndClose));
  }

  async expectCancelAndCloseValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.cancelAndClose), value, timeoutMs);
  }

  async expectCancelAndCloseChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.cancelAndClose), timeoutMs);
  }

  async expectCancelAndCloseUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.cancelAndClose), timeoutMs);
  }

  async expectCancelAndCloseFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.cancelAndClose), timeoutMs);
  }

  async expectCancelAndCloseCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.cancelAndClose), count, timeoutMs);
  }

  async clickNewLead(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadNewPage.L.newLead));
  }

  async doubleClickNewLead(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadNewPage.L.newLead));
  }

  async longPressNewLead(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadNewPage.L.newLead));
  }

  async expectNewLeadValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.newLead), value, timeoutMs);
  }

  async expectNewLeadEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.newLead), timeoutMs);
  }

  async expectNewLeadDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.newLead), timeoutMs);
  }

  async expectNewLeadChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.newLead), timeoutMs);
  }

  async expectNewLeadUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.newLead), timeoutMs);
  }

  async expectNewLeadFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.newLead), timeoutMs);
  }

  async expectNewLeadCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.newLead), count, timeoutMs);
  }

  async clickLeadInformation(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadNewPage.L.leadInformation));
  }

  async doubleClickLeadInformation(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadNewPage.L.leadInformation));
  }

  async longPressLeadInformation(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadNewPage.L.leadInformation));
  }

  async expectLeadInformationValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.leadInformation), value, timeoutMs);
  }

  async expectLeadInformationEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.leadInformation), timeoutMs);
  }

  async expectLeadInformationDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.leadInformation), timeoutMs);
  }

  async expectLeadInformationChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.leadInformation), timeoutMs);
  }

  async expectLeadInformationUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.leadInformation), timeoutMs);
  }

  async expectLeadInformationFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.leadInformation), timeoutMs);
  }

  async expectLeadInformationCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.leadInformation), count, timeoutMs);
  }

  async clickLeadOwner(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadNewPage.L.leadOwner));
  }

  async doubleClickLeadOwner(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadNewPage.L.leadOwner));
  }

  async longPressLeadOwner(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadNewPage.L.leadOwner));
  }

  async expectLeadOwnerValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.leadOwner), value, timeoutMs);
  }

  async expectLeadOwnerEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.leadOwner), timeoutMs);
  }

  async expectLeadOwnerDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.leadOwner), timeoutMs);
  }

  async expectLeadOwnerChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.leadOwner), timeoutMs);
  }

  async expectLeadOwnerUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.leadOwner), timeoutMs);
  }

  async expectLeadOwnerFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.leadOwner), timeoutMs);
  }

  async expectLeadOwnerCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.leadOwner), count, timeoutMs);
  }

  async expectPhoneText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.phone), expected, timeoutMs);
  }

  async expectPhoneContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.phone), substring, timeoutMs);
  }

  async expectPhoneChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.phone), timeoutMs);
  }

  async expectPhoneUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.phone), timeoutMs);
  }

  async expectPhoneCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.phone), count, timeoutMs);
  }

  async clickName(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadNewPage.L.name));
  }

  async doubleClickName(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadNewPage.L.name));
  }

  async longPressName(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadNewPage.L.name));
  }

  async expectNameValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.name), value, timeoutMs);
  }

  async expectNameEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.name), timeoutMs);
  }

  async expectNameDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.name), timeoutMs);
  }

  async expectNameChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.name), timeoutMs);
  }

  async expectNameUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.name), timeoutMs);
  }

  async expectNameFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.name), timeoutMs);
  }

  async expectNameCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.name), count, timeoutMs);
  }

  async longPressSalutation(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadNewPage.L.salutation));
  }

  async expectSalutationValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.salutation), value, timeoutMs);
  }

  async expectSalutationChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.salutation), timeoutMs);
  }

  async expectSalutationUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.salutation), timeoutMs);
  }

  async expectSalutationFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.salutation), timeoutMs);
  }

  async expectSalutationCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.salutation), count, timeoutMs);
  }

  async expectFirstNameText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.firstName), expected, timeoutMs);
  }

  async expectFirstNameContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.firstName), substring, timeoutMs);
  }

  async expectFirstNameChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.firstName), timeoutMs);
  }

  async expectFirstNameUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.firstName), timeoutMs);
  }

  async expectFirstNameCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.firstName), count, timeoutMs);
  }

  async expectLastNameText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.lastName), expected, timeoutMs);
  }

  async expectLastNameContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.lastName), substring, timeoutMs);
  }

  async expectLastNameChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.lastName), timeoutMs);
  }

  async expectLastNameUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.lastName), timeoutMs);
  }

  async expectLastNameCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.lastName), count, timeoutMs);
  }

  async expectMobilePhoneText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.mobilePhone), expected, timeoutMs);
  }

  async expectMobilePhoneContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.mobilePhone), substring, timeoutMs);
  }

  async expectMobilePhoneChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.mobilePhone), timeoutMs);
  }

  async expectMobilePhoneUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.mobilePhone), timeoutMs);
  }

  async expectMobilePhoneCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.mobilePhone), count, timeoutMs);
  }

  async expectCompanyText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.company), expected, timeoutMs);
  }

  async expectCompanyContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.company), substring, timeoutMs);
  }

  async expectCompanyChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.company), timeoutMs);
  }

  async expectCompanyUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.company), timeoutMs);
  }

  async expectCompanyCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.company), count, timeoutMs);
  }

  async expectFaxText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.fax), expected, timeoutMs);
  }

  async expectFaxContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.fax), substring, timeoutMs);
  }

  async expectFaxChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.fax), timeoutMs);
  }

  async expectFaxUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.fax), timeoutMs);
  }

  async expectFaxCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.fax), count, timeoutMs);
  }

  async expectTitleText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.title), expected, timeoutMs);
  }

  async expectTitleContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.title), substring, timeoutMs);
  }

  async expectTitleChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.title), timeoutMs);
  }

  async expectTitleUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.title), timeoutMs);
  }

  async expectTitleCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.title), count, timeoutMs);
  }

  async expectEmailText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.email), expected, timeoutMs);
  }

  async expectEmailContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.email), substring, timeoutMs);
  }

  async expectEmailChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.email), timeoutMs);
  }

  async expectEmailUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.email), timeoutMs);
  }

  async expectEmailCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.email), count, timeoutMs);
  }

  async longPressLeadSource(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadNewPage.L.leadSource));
  }

  async expectLeadSourceValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.leadSource), value, timeoutMs);
  }

  async expectLeadSourceChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.leadSource), timeoutMs);
  }

  async expectLeadSourceUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.leadSource), timeoutMs);
  }

  async expectLeadSourceFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.leadSource), timeoutMs);
  }

  async expectLeadSourceCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.leadSource), count, timeoutMs);
  }

  async expectWebsiteText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.website), expected, timeoutMs);
  }

  async expectWebsiteContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.website), substring, timeoutMs);
  }

  async expectWebsiteChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.website), timeoutMs);
  }

  async expectWebsiteUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.website), timeoutMs);
  }

  async expectWebsiteCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.website), count, timeoutMs);
  }

  async longPressIndustry(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadNewPage.L.industry));
  }

  async expectIndustryValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.industry), value, timeoutMs);
  }

  async expectIndustryChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.industry), timeoutMs);
  }

  async expectIndustryUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.industry), timeoutMs);
  }

  async expectIndustryFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.industry), timeoutMs);
  }

  async expectIndustryCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.industry), count, timeoutMs);
  }

  async longPressLeadStatus(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadNewPage.L.leadStatus));
  }

  async expectLeadStatusValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.leadStatus), value, timeoutMs);
  }

  async expectLeadStatusChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.leadStatus), timeoutMs);
  }

  async expectLeadStatusUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.leadStatus), timeoutMs);
  }

  async expectLeadStatusFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.leadStatus), timeoutMs);
  }

  async expectLeadStatusCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.leadStatus), count, timeoutMs);
  }

  async expectAnnualRevenueText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.annualRevenue), expected, timeoutMs);
  }

  async expectAnnualRevenueContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.annualRevenue), substring, timeoutMs);
  }

  async expectAnnualRevenueChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.annualRevenue), timeoutMs);
  }

  async expectAnnualRevenueUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.annualRevenue), timeoutMs);
  }

  async expectAnnualRevenueCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.annualRevenue), count, timeoutMs);
  }

  async longPressRating(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadNewPage.L.rating));
  }

  async expectRatingValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.rating), value, timeoutMs);
  }

  async expectRatingChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.rating), timeoutMs);
  }

  async expectRatingUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.rating), timeoutMs);
  }

  async expectRatingFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.rating), timeoutMs);
  }

  async expectRatingCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.rating), count, timeoutMs);
  }

  async expectNumberOfEmployeesText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.numberOfEmployees), expected, timeoutMs);
  }

  async expectNumberOfEmployeesContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.numberOfEmployees), substring, timeoutMs);
  }

  async expectNumberOfEmployeesChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.numberOfEmployees), timeoutMs);
  }

  async expectNumberOfEmployeesUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.numberOfEmployees), timeoutMs);
  }

  async expectNumberOfEmployeesCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.numberOfEmployees), count, timeoutMs);
  }

  async clickAddressInformation(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadNewPage.L.addressInformation));
  }

  async doubleClickAddressInformation(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadNewPage.L.addressInformation));
  }

  async longPressAddressInformation(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadNewPage.L.addressInformation));
  }

  async expectAddressInformationValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.addressInformation), value, timeoutMs);
  }

  async expectAddressInformationEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.addressInformation), timeoutMs);
  }

  async expectAddressInformationDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.addressInformation), timeoutMs);
  }

  async expectAddressInformationChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.addressInformation), timeoutMs);
  }

  async expectAddressInformationUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.addressInformation), timeoutMs);
  }

  async expectAddressInformationFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.addressInformation), timeoutMs);
  }

  async expectAddressInformationCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.addressInformation), count, timeoutMs);
  }

  async clickAddress(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadNewPage.L.address));
  }

  async doubleClickAddress(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadNewPage.L.address));
  }

  async longPressAddress(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadNewPage.L.address));
  }

  async expectAddressValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.address), value, timeoutMs);
  }

  async expectAddressEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.address), timeoutMs);
  }

  async expectAddressDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.address), timeoutMs);
  }

  async expectAddressChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.address), timeoutMs);
  }

  async expectAddressUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.address), timeoutMs);
  }

  async expectAddressFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.address), timeoutMs);
  }

  async expectAddressCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.address), count, timeoutMs);
  }

  async expectCountryText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.country), expected, timeoutMs);
  }

  async expectCountryContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.country), substring, timeoutMs);
  }

  async expectCountryChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.country), timeoutMs);
  }

  async expectCountryUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.country), timeoutMs);
  }

  async expectCountryCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.country), count, timeoutMs);
  }

  async expectStreetText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.street), expected, timeoutMs);
  }

  async expectStreetContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.street), substring, timeoutMs);
  }

  async expectStreetChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.street), timeoutMs);
  }

  async expectStreetUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.street), timeoutMs);
  }

  async expectStreetCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.street), count, timeoutMs);
  }

  async expectCityText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.city), expected, timeoutMs);
  }

  async expectCityContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.city), substring, timeoutMs);
  }

  async expectCityChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.city), timeoutMs);
  }

  async expectCityUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.city), timeoutMs);
  }

  async expectCityCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.city), count, timeoutMs);
  }

  async expectProvinceText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.province), expected, timeoutMs);
  }

  async expectProvinceContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.province), substring, timeoutMs);
  }

  async expectProvinceChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.province), timeoutMs);
  }

  async expectProvinceUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.province), timeoutMs);
  }

  async expectProvinceCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.province), count, timeoutMs);
  }

  async expectPostalCodeText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.postalCode), expected, timeoutMs);
  }

  async expectPostalCodeContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.postalCode), substring, timeoutMs);
  }

  async expectPostalCodeChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.postalCode), timeoutMs);
  }

  async expectPostalCodeUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.postalCode), timeoutMs);
  }

  async expectPostalCodeCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.postalCode), count, timeoutMs);
  }

  async clickAdditionalInformation(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadNewPage.L.additionalInformation));
  }

  async doubleClickAdditionalInformation(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadNewPage.L.additionalInformation));
  }

  async longPressAdditionalInformation(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadNewPage.L.additionalInformation));
  }

  async expectAdditionalInformationValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.additionalInformation), value, timeoutMs);
  }

  async expectAdditionalInformationEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.additionalInformation), timeoutMs);
  }

  async expectAdditionalInformationDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.additionalInformation), timeoutMs);
  }

  async expectAdditionalInformationChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.additionalInformation), timeoutMs);
  }

  async expectAdditionalInformationUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.additionalInformation), timeoutMs);
  }

  async expectAdditionalInformationFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.additionalInformation), timeoutMs);
  }

  async expectAdditionalInformationCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.additionalInformation), count, timeoutMs);
  }

  async longPressProductInterest(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadNewPage.L.productInterest));
  }

  async expectProductInterestValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.productInterest), value, timeoutMs);
  }

  async expectProductInterestChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.productInterest), timeoutMs);
  }

  async expectProductInterestUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.productInterest), timeoutMs);
  }

  async expectProductInterestFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.productInterest), timeoutMs);
  }

  async expectProductInterestCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.productInterest), count, timeoutMs);
  }

  async expectCurrentGeneratorsCText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.currentGeneratorsC), expected, timeoutMs);
  }

  async expectCurrentGeneratorsCContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.currentGeneratorsC), substring, timeoutMs);
  }

  async expectCurrentGeneratorsCChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.currentGeneratorsC), timeoutMs);
  }

  async expectCurrentGeneratorsCUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.currentGeneratorsC), timeoutMs);
  }

  async expectCurrentGeneratorsCCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.currentGeneratorsC), count, timeoutMs);
  }

  async expectSICCodeCText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.sICCodeC), expected, timeoutMs);
  }

  async expectSICCodeCContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.sICCodeC), substring, timeoutMs);
  }

  async expectSICCodeCChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.sICCodeC), timeoutMs);
  }

  async expectSICCodeCUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.sICCodeC), timeoutMs);
  }

  async expectSICCodeCCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.sICCodeC), count, timeoutMs);
  }

  async longPressPrimary(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadNewPage.L.primary));
  }

  async expectPrimaryValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.primary), value, timeoutMs);
  }

  async expectPrimaryChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.primary), timeoutMs);
  }

  async expectPrimaryUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.primary), timeoutMs);
  }

  async expectPrimaryFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.primary), timeoutMs);
  }

  async expectPrimaryCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.primary), count, timeoutMs);
  }

  async expectNumberofLocationsCText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.numberofLocationsC), expected, timeoutMs);
  }

  async expectNumberofLocationsCContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LeadNewPage.L.numberofLocationsC), substring, timeoutMs);
  }

  async expectNumberofLocationsCChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.numberofLocationsC), timeoutMs);
  }

  async expectNumberofLocationsCUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.numberofLocationsC), timeoutMs);
  }

  async expectNumberofLocationsCCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.numberofLocationsC), count, timeoutMs);
  }

  async clickDescriptionInformation(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadNewPage.L.descriptionInformation));
  }

  async doubleClickDescriptionInformation(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LeadNewPage.L.descriptionInformation));
  }

  async longPressDescriptionInformation(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadNewPage.L.descriptionInformation));
  }

  async expectDescriptionInformationValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.descriptionInformation), value, timeoutMs);
  }

  async expectDescriptionInformationEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LeadNewPage.L.descriptionInformation), timeoutMs);
  }

  async expectDescriptionInformationDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LeadNewPage.L.descriptionInformation), timeoutMs);
  }

  async expectDescriptionInformationChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.descriptionInformation), timeoutMs);
  }

  async expectDescriptionInformationUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.descriptionInformation), timeoutMs);
  }

  async expectDescriptionInformationFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.descriptionInformation), timeoutMs);
  }

  async expectDescriptionInformationCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.descriptionInformation), count, timeoutMs);
  }

  async longPressCancelEdit(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadNewPage.L.cancelEdit));
  }

  async expectCancelEditValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.cancelEdit), value, timeoutMs);
  }

  async expectCancelEditChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.cancelEdit), timeoutMs);
  }

  async expectCancelEditUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.cancelEdit), timeoutMs);
  }

  async expectCancelEditFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.cancelEdit), timeoutMs);
  }

  async expectCancelEditCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.cancelEdit), count, timeoutMs);
  }

  async longPressSaveAndNew(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadNewPage.L.saveAndNew));
  }

  async expectSaveAndNewValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.saveAndNew), value, timeoutMs);
  }

  async expectSaveAndNewChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.saveAndNew), timeoutMs);
  }

  async expectSaveAndNewUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.saveAndNew), timeoutMs);
  }

  async expectSaveAndNewFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.saveAndNew), timeoutMs);
  }

  async expectSaveAndNewCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.saveAndNew), count, timeoutMs);
  }

  async longPressSaveEdit(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LeadNewPage.L.saveEdit));
  }

  async expectSaveEditValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LeadNewPage.L.saveEdit), value, timeoutMs);
  }

  async expectSaveEditChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LeadNewPage.L.saveEdit), timeoutMs);
  }

  async expectSaveEditUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LeadNewPage.L.saveEdit), timeoutMs);
  }

  async expectSaveEditFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LeadNewPage.L.saveEdit), timeoutMs);
  }

  async expectSaveEditCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LeadNewPage.L.saveEdit), count, timeoutMs);
  }

  async clickSaveButton(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LeadNewPage.L.saveButton));
  }

  async expectLastNameErrorVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.lastNameError), timeoutMs);
  }

  async expectLastNameErrorText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.lastNameError), expected, timeoutMs);
  }

  async expectCompanyErrorVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.companyError), timeoutMs);
  }

  async expectCompanyErrorText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LeadNewPage.L.companyError), expected, timeoutMs);
  }

  async expectLeadRecordHeaderVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LeadNewPage.L.leadRecordHeader), timeoutMs);
  }

}
