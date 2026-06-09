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

export class OpportunityNewPage {
  private static readonly L = {
    cancelAndClose: { strategy: 'css' as const, value: '[title="Cancel and close"]', actionKind: 'button' as const },
    newOpportunity: { strategy: 'text' as const, value: 'New Opportunity', shadowHost: 'records-lwc-detail-panel', actionKind: 'text' as const },
    opportunityInformation: { strategy: 'text' as const, value: 'Opportunity Information', shadowHost: 'records-record-layout-section', actionKind: 'text' as const },
    opportunityOwner: { strategy: 'text' as const, value: 'Opportunity Owner', shadowHost: 'records-record-layout-item', actionKind: 'text' as const },
    amount: { strategy: 'css' as const, value: '[name="Amount"]', shadowHost: 'lightning-primitive-input-simple', actionKind: 'textbox' as const },
    closeDate: { strategy: 'css' as const, value: '[name="CloseDate"]', shadowHost: 'lightning-datepicker', actionKind: 'textbox' as const },
    selectADateFor: { strategy: 'css' as const, value: '[title="Select a date for Close Date"]', shadowHost: 'lightning-button-icon', actionKind: 'button' as const },
    name: { strategy: 'css' as const, value: '[name="Name"]', shadowHost: 'lightning-primitive-input-simple', actionKind: 'textbox' as const },
    nextStep: { strategy: 'css' as const, value: '[name="NextStep"]', shadowHost: 'lightning-primitive-input-simple', actionKind: 'textbox' as const },
    accountName: { strategy: 'label' as const, value: 'Account Name', shadowHost: 'lightning-base-combobox', actionKind: 'textbox' as const },
    stage: { strategy: 'label' as const, value: 'Stage', shadowHost: 'lightning-base-combobox', actionKind: 'button' as const },
    type: { strategy: 'label' as const, value: 'Type', shadowHost: 'lightning-base-combobox', actionKind: 'button' as const },
    probability: { strategy: 'css' as const, value: '[name="Probability"]', shadowHost: 'lightning-primitive-input-simple', actionKind: 'textbox' as const },
    leadSource: { strategy: 'label' as const, value: 'Lead Source', shadowHost: 'lightning-base-combobox', actionKind: 'button' as const },
    primaryCampaignSource: { strategy: 'label' as const, value: 'Primary Campaign Source', shadowHost: 'lightning-base-combobox', actionKind: 'textbox' as const },
    additionalInformation: { strategy: 'text' as const, value: 'Additional Information', shadowHost: 'records-record-layout-section', actionKind: 'text' as const },
    orderNumberC: { strategy: 'css' as const, value: '[name="OrderNumber__c"]', shadowHost: 'lightning-primitive-input-simple', actionKind: 'textbox' as const },
    mainCompetitorsC: { strategy: 'css' as const, value: '[name="MainCompetitors__c"]', shadowHost: 'lightning-primitive-input-simple', actionKind: 'textbox' as const },
    currentGeneratorsC: { strategy: 'css' as const, value: '[name="CurrentGenerators__c"]', shadowHost: 'lightning-primitive-input-simple', actionKind: 'textbox' as const },
    deliveryInstallationStatus: { strategy: 'label' as const, value: 'Delivery/Installation Status', shadowHost: 'lightning-base-combobox', actionKind: 'button' as const },
    trackingNumberC: { strategy: 'css' as const, value: '[name="TrackingNumber__c"]', shadowHost: 'lightning-primitive-input-simple', actionKind: 'textbox' as const },
    descriptionInformation: { strategy: 'text' as const, value: 'Description Information', shadowHost: 'records-record-layout-section', actionKind: 'text' as const },
    cancelEdit: { strategy: 'css' as const, value: '[name="CancelEdit"]', shadowHost: 'lightning-button', actionKind: 'button' as const },
    saveAndNew: { strategy: 'css' as const, value: '[name="SaveAndNew"]', shadowHost: 'lightning-button', actionKind: 'button' as const },
    saveEdit: { strategy: 'css' as const, value: '[name="SaveEdit"]', shadowHost: 'lightning-button', actionKind: 'button' as const },
  } as const;

  constructor(private readonly page: Page) {}

  async clickCancelAndClose(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OpportunityNewPage.L.cancelAndClose));
  }

  async doubleClickCancelAndClose(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OpportunityNewPage.L.cancelAndClose));
  }

  async expectCancelAndCloseVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OpportunityNewPage.L.cancelAndClose), timeoutMs);
  }

  async expectCancelAndCloseHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OpportunityNewPage.L.cancelAndClose), timeoutMs);
  }

  async expectCancelAndCloseEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OpportunityNewPage.L.cancelAndClose), timeoutMs);
  }

  async expectCancelAndCloseDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OpportunityNewPage.L.cancelAndClose), timeoutMs);
  }

  async expectCancelAndCloseText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OpportunityNewPage.L.cancelAndClose), expected, timeoutMs);
  }

  async expectCancelAndCloseContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OpportunityNewPage.L.cancelAndClose), substring, timeoutMs);
  }

  async scrollCancelAndCloseIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OpportunityNewPage.L.cancelAndClose));
  }

  async getInnerTextNewOpportunity(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, OpportunityNewPage.L.newOpportunity));
  }

  async expectNewOpportunityVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OpportunityNewPage.L.newOpportunity), timeoutMs);
  }

  async expectNewOpportunityHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OpportunityNewPage.L.newOpportunity), timeoutMs);
  }

  async expectNewOpportunityText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OpportunityNewPage.L.newOpportunity), expected, timeoutMs);
  }

  async expectNewOpportunityContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OpportunityNewPage.L.newOpportunity), substring, timeoutMs);
  }

  async scrollNewOpportunityIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OpportunityNewPage.L.newOpportunity));
  }

  async getInnerTextOpportunityInformation(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, OpportunityNewPage.L.opportunityInformation));
  }

  async expectOpportunityInformationVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OpportunityNewPage.L.opportunityInformation), timeoutMs);
  }

  async expectOpportunityInformationHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OpportunityNewPage.L.opportunityInformation), timeoutMs);
  }

  async expectOpportunityInformationText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OpportunityNewPage.L.opportunityInformation), expected, timeoutMs);
  }

  async expectOpportunityInformationContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OpportunityNewPage.L.opportunityInformation), substring, timeoutMs);
  }

  async scrollOpportunityInformationIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OpportunityNewPage.L.opportunityInformation));
  }

  async getInnerTextOpportunityOwner(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, OpportunityNewPage.L.opportunityOwner));
  }

  async expectOpportunityOwnerVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OpportunityNewPage.L.opportunityOwner), timeoutMs);
  }

  async expectOpportunityOwnerHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OpportunityNewPage.L.opportunityOwner), timeoutMs);
  }

  async expectOpportunityOwnerText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OpportunityNewPage.L.opportunityOwner), expected, timeoutMs);
  }

  async expectOpportunityOwnerContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OpportunityNewPage.L.opportunityOwner), substring, timeoutMs);
  }

  async scrollOpportunityOwnerIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OpportunityNewPage.L.opportunityOwner));
  }

  async fillAmount(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, OpportunityNewPage.L.amount), value);
  }

  async clearAmount(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, OpportunityNewPage.L.amount));
  }

  async typeTextAmount(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, OpportunityNewPage.L.amount), value);
  }

  async expectAmountVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OpportunityNewPage.L.amount), timeoutMs);
  }

  async expectAmountHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OpportunityNewPage.L.amount), timeoutMs);
  }

  async expectAmountEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OpportunityNewPage.L.amount), timeoutMs);
  }

  async expectAmountDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OpportunityNewPage.L.amount), timeoutMs);
  }

  async expectAmountValue(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OpportunityNewPage.L.amount), expected, timeoutMs);
  }

  async expectAmountFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OpportunityNewPage.L.amount), timeoutMs);
  }

  async scrollAmountIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OpportunityNewPage.L.amount));
  }

  async fillCloseDate(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, OpportunityNewPage.L.closeDate), value);
  }

  async clearCloseDate(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, OpportunityNewPage.L.closeDate));
  }

  async typeTextCloseDate(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, OpportunityNewPage.L.closeDate), value);
  }

  async expectCloseDateVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OpportunityNewPage.L.closeDate), timeoutMs);
  }

  async expectCloseDateHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OpportunityNewPage.L.closeDate), timeoutMs);
  }

  async expectCloseDateEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OpportunityNewPage.L.closeDate), timeoutMs);
  }

  async expectCloseDateDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OpportunityNewPage.L.closeDate), timeoutMs);
  }

  async expectCloseDateValue(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OpportunityNewPage.L.closeDate), expected, timeoutMs);
  }

  async expectCloseDateFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OpportunityNewPage.L.closeDate), timeoutMs);
  }

  async scrollCloseDateIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OpportunityNewPage.L.closeDate));
  }

  async clickSelectADateFor(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OpportunityNewPage.L.selectADateFor));
  }

  async doubleClickSelectADateFor(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OpportunityNewPage.L.selectADateFor));
  }

  async expectSelectADateForVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OpportunityNewPage.L.selectADateFor), timeoutMs);
  }

  async expectSelectADateForHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OpportunityNewPage.L.selectADateFor), timeoutMs);
  }

  async expectSelectADateForEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OpportunityNewPage.L.selectADateFor), timeoutMs);
  }

  async expectSelectADateForDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OpportunityNewPage.L.selectADateFor), timeoutMs);
  }

  async expectSelectADateForText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OpportunityNewPage.L.selectADateFor), expected, timeoutMs);
  }

  async expectSelectADateForContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OpportunityNewPage.L.selectADateFor), substring, timeoutMs);
  }

  async scrollSelectADateForIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OpportunityNewPage.L.selectADateFor));
  }

  async fillName(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, OpportunityNewPage.L.name), value);
  }

  async clearName(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, OpportunityNewPage.L.name));
  }

  async typeTextName(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, OpportunityNewPage.L.name), value);
  }

  async expectNameVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OpportunityNewPage.L.name), timeoutMs);
  }

  async expectNameHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OpportunityNewPage.L.name), timeoutMs);
  }

  async expectNameEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OpportunityNewPage.L.name), timeoutMs);
  }

  async expectNameDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OpportunityNewPage.L.name), timeoutMs);
  }

  async expectNameValue(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OpportunityNewPage.L.name), expected, timeoutMs);
  }

  async expectNameFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OpportunityNewPage.L.name), timeoutMs);
  }

  async scrollNameIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OpportunityNewPage.L.name));
  }

  async fillNextStep(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, OpportunityNewPage.L.nextStep), value);
  }

  async clearNextStep(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, OpportunityNewPage.L.nextStep));
  }

  async typeTextNextStep(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, OpportunityNewPage.L.nextStep), value);
  }

  async expectNextStepVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OpportunityNewPage.L.nextStep), timeoutMs);
  }

  async expectNextStepHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OpportunityNewPage.L.nextStep), timeoutMs);
  }

  async expectNextStepEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OpportunityNewPage.L.nextStep), timeoutMs);
  }

  async expectNextStepDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OpportunityNewPage.L.nextStep), timeoutMs);
  }

  async expectNextStepValue(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OpportunityNewPage.L.nextStep), expected, timeoutMs);
  }

  async expectNextStepFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OpportunityNewPage.L.nextStep), timeoutMs);
  }

  async scrollNextStepIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OpportunityNewPage.L.nextStep));
  }

  async fillAccountName(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, OpportunityNewPage.L.accountName), value);
  }

  async clearAccountName(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, OpportunityNewPage.L.accountName));
  }

  async typeTextAccountName(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, OpportunityNewPage.L.accountName), value);
  }

  async expectAccountNameVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OpportunityNewPage.L.accountName), timeoutMs);
  }

  async expectAccountNameHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OpportunityNewPage.L.accountName), timeoutMs);
  }

  async expectAccountNameEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OpportunityNewPage.L.accountName), timeoutMs);
  }

  async expectAccountNameDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OpportunityNewPage.L.accountName), timeoutMs);
  }

  async expectAccountNameValue(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OpportunityNewPage.L.accountName), expected, timeoutMs);
  }

  async expectAccountNameFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OpportunityNewPage.L.accountName), timeoutMs);
  }

  async scrollAccountNameIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OpportunityNewPage.L.accountName));
  }

  async clickStage(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OpportunityNewPage.L.stage));
  }

  async doubleClickStage(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OpportunityNewPage.L.stage));
  }

  async expectStageVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OpportunityNewPage.L.stage), timeoutMs);
  }

  async expectStageHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OpportunityNewPage.L.stage), timeoutMs);
  }

  async expectStageEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OpportunityNewPage.L.stage), timeoutMs);
  }

  async expectStageDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OpportunityNewPage.L.stage), timeoutMs);
  }

  async expectStageText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OpportunityNewPage.L.stage), expected, timeoutMs);
  }

  async expectStageContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OpportunityNewPage.L.stage), substring, timeoutMs);
  }

  async scrollStageIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OpportunityNewPage.L.stage));
  }

  async clickType(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OpportunityNewPage.L.type));
  }

  async doubleClickType(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OpportunityNewPage.L.type));
  }

  async expectTypeVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OpportunityNewPage.L.type), timeoutMs);
  }

  async expectTypeHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OpportunityNewPage.L.type), timeoutMs);
  }

  async expectTypeEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OpportunityNewPage.L.type), timeoutMs);
  }

  async expectTypeDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OpportunityNewPage.L.type), timeoutMs);
  }

  async expectTypeText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OpportunityNewPage.L.type), expected, timeoutMs);
  }

  async expectTypeContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OpportunityNewPage.L.type), substring, timeoutMs);
  }

  async scrollTypeIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OpportunityNewPage.L.type));
  }

  async fillProbability(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, OpportunityNewPage.L.probability), value);
  }

  async clearProbability(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, OpportunityNewPage.L.probability));
  }

  async typeTextProbability(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, OpportunityNewPage.L.probability), value);
  }

  async expectProbabilityVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OpportunityNewPage.L.probability), timeoutMs);
  }

  async expectProbabilityHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OpportunityNewPage.L.probability), timeoutMs);
  }

  async expectProbabilityEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OpportunityNewPage.L.probability), timeoutMs);
  }

  async expectProbabilityDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OpportunityNewPage.L.probability), timeoutMs);
  }

  async expectProbabilityValue(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OpportunityNewPage.L.probability), expected, timeoutMs);
  }

  async expectProbabilityFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OpportunityNewPage.L.probability), timeoutMs);
  }

  async scrollProbabilityIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OpportunityNewPage.L.probability));
  }

  async clickLeadSource(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OpportunityNewPage.L.leadSource));
  }

  async doubleClickLeadSource(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OpportunityNewPage.L.leadSource));
  }

  async expectLeadSourceVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OpportunityNewPage.L.leadSource), timeoutMs);
  }

  async expectLeadSourceHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OpportunityNewPage.L.leadSource), timeoutMs);
  }

  async expectLeadSourceEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OpportunityNewPage.L.leadSource), timeoutMs);
  }

  async expectLeadSourceDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OpportunityNewPage.L.leadSource), timeoutMs);
  }

  async expectLeadSourceText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OpportunityNewPage.L.leadSource), expected, timeoutMs);
  }

  async expectLeadSourceContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OpportunityNewPage.L.leadSource), substring, timeoutMs);
  }

  async scrollLeadSourceIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OpportunityNewPage.L.leadSource));
  }

  async fillPrimaryCampaignSource(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, OpportunityNewPage.L.primaryCampaignSource), value);
  }

  async clearPrimaryCampaignSource(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, OpportunityNewPage.L.primaryCampaignSource));
  }

  async typeTextPrimaryCampaignSource(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, OpportunityNewPage.L.primaryCampaignSource), value);
  }

  async expectPrimaryCampaignSourceVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OpportunityNewPage.L.primaryCampaignSource), timeoutMs);
  }

  async expectPrimaryCampaignSourceHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OpportunityNewPage.L.primaryCampaignSource), timeoutMs);
  }

  async expectPrimaryCampaignSourceEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OpportunityNewPage.L.primaryCampaignSource), timeoutMs);
  }

  async expectPrimaryCampaignSourceDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OpportunityNewPage.L.primaryCampaignSource), timeoutMs);
  }

  async expectPrimaryCampaignSourceValue(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OpportunityNewPage.L.primaryCampaignSource), expected, timeoutMs);
  }

  async expectPrimaryCampaignSourceFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OpportunityNewPage.L.primaryCampaignSource), timeoutMs);
  }

  async scrollPrimaryCampaignSourceIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OpportunityNewPage.L.primaryCampaignSource));
  }

  async getInnerTextAdditionalInformation(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, OpportunityNewPage.L.additionalInformation));
  }

  async expectAdditionalInformationVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OpportunityNewPage.L.additionalInformation), timeoutMs);
  }

  async expectAdditionalInformationHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OpportunityNewPage.L.additionalInformation), timeoutMs);
  }

  async expectAdditionalInformationText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OpportunityNewPage.L.additionalInformation), expected, timeoutMs);
  }

  async expectAdditionalInformationContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OpportunityNewPage.L.additionalInformation), substring, timeoutMs);
  }

  async scrollAdditionalInformationIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OpportunityNewPage.L.additionalInformation));
  }

  async fillOrderNumberC(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, OpportunityNewPage.L.orderNumberC), value);
  }

  async clearOrderNumberC(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, OpportunityNewPage.L.orderNumberC));
  }

  async typeTextOrderNumberC(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, OpportunityNewPage.L.orderNumberC), value);
  }

  async expectOrderNumberCVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OpportunityNewPage.L.orderNumberC), timeoutMs);
  }

  async expectOrderNumberCHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OpportunityNewPage.L.orderNumberC), timeoutMs);
  }

  async expectOrderNumberCEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OpportunityNewPage.L.orderNumberC), timeoutMs);
  }

  async expectOrderNumberCDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OpportunityNewPage.L.orderNumberC), timeoutMs);
  }

  async expectOrderNumberCValue(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OpportunityNewPage.L.orderNumberC), expected, timeoutMs);
  }

  async expectOrderNumberCFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OpportunityNewPage.L.orderNumberC), timeoutMs);
  }

  async scrollOrderNumberCIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OpportunityNewPage.L.orderNumberC));
  }

  async fillMainCompetitorsC(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, OpportunityNewPage.L.mainCompetitorsC), value);
  }

  async clearMainCompetitorsC(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, OpportunityNewPage.L.mainCompetitorsC));
  }

  async typeTextMainCompetitorsC(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, OpportunityNewPage.L.mainCompetitorsC), value);
  }

  async expectMainCompetitorsCVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OpportunityNewPage.L.mainCompetitorsC), timeoutMs);
  }

  async expectMainCompetitorsCHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OpportunityNewPage.L.mainCompetitorsC), timeoutMs);
  }

  async expectMainCompetitorsCEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OpportunityNewPage.L.mainCompetitorsC), timeoutMs);
  }

  async expectMainCompetitorsCDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OpportunityNewPage.L.mainCompetitorsC), timeoutMs);
  }

  async expectMainCompetitorsCValue(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OpportunityNewPage.L.mainCompetitorsC), expected, timeoutMs);
  }

  async expectMainCompetitorsCFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OpportunityNewPage.L.mainCompetitorsC), timeoutMs);
  }

  async scrollMainCompetitorsCIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OpportunityNewPage.L.mainCompetitorsC));
  }

  async fillCurrentGeneratorsC(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, OpportunityNewPage.L.currentGeneratorsC), value);
  }

  async clearCurrentGeneratorsC(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, OpportunityNewPage.L.currentGeneratorsC));
  }

  async typeTextCurrentGeneratorsC(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, OpportunityNewPage.L.currentGeneratorsC), value);
  }

  async expectCurrentGeneratorsCVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OpportunityNewPage.L.currentGeneratorsC), timeoutMs);
  }

  async expectCurrentGeneratorsCHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OpportunityNewPage.L.currentGeneratorsC), timeoutMs);
  }

  async expectCurrentGeneratorsCEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OpportunityNewPage.L.currentGeneratorsC), timeoutMs);
  }

  async expectCurrentGeneratorsCDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OpportunityNewPage.L.currentGeneratorsC), timeoutMs);
  }

  async expectCurrentGeneratorsCValue(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OpportunityNewPage.L.currentGeneratorsC), expected, timeoutMs);
  }

  async expectCurrentGeneratorsCFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OpportunityNewPage.L.currentGeneratorsC), timeoutMs);
  }

  async scrollCurrentGeneratorsCIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OpportunityNewPage.L.currentGeneratorsC));
  }

  async clickDeliveryInstallationStatus(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OpportunityNewPage.L.deliveryInstallationStatus));
  }

  async doubleClickDeliveryInstallationStatus(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OpportunityNewPage.L.deliveryInstallationStatus));
  }

  async expectDeliveryInstallationStatusVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OpportunityNewPage.L.deliveryInstallationStatus), timeoutMs);
  }

  async expectDeliveryInstallationStatusHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OpportunityNewPage.L.deliveryInstallationStatus), timeoutMs);
  }

  async expectDeliveryInstallationStatusEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OpportunityNewPage.L.deliveryInstallationStatus), timeoutMs);
  }

  async expectDeliveryInstallationStatusDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OpportunityNewPage.L.deliveryInstallationStatus), timeoutMs);
  }

  async expectDeliveryInstallationStatusText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OpportunityNewPage.L.deliveryInstallationStatus), expected, timeoutMs);
  }

  async expectDeliveryInstallationStatusContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OpportunityNewPage.L.deliveryInstallationStatus), substring, timeoutMs);
  }

  async scrollDeliveryInstallationStatusIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OpportunityNewPage.L.deliveryInstallationStatus));
  }

  async fillTrackingNumberC(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, OpportunityNewPage.L.trackingNumberC), value);
  }

  async clearTrackingNumberC(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, OpportunityNewPage.L.trackingNumberC));
  }

  async typeTextTrackingNumberC(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, OpportunityNewPage.L.trackingNumberC), value);
  }

  async expectTrackingNumberCVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OpportunityNewPage.L.trackingNumberC), timeoutMs);
  }

  async expectTrackingNumberCHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OpportunityNewPage.L.trackingNumberC), timeoutMs);
  }

  async expectTrackingNumberCEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OpportunityNewPage.L.trackingNumberC), timeoutMs);
  }

  async expectTrackingNumberCDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OpportunityNewPage.L.trackingNumberC), timeoutMs);
  }

  async expectTrackingNumberCValue(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OpportunityNewPage.L.trackingNumberC), expected, timeoutMs);
  }

  async expectTrackingNumberCFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OpportunityNewPage.L.trackingNumberC), timeoutMs);
  }

  async scrollTrackingNumberCIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OpportunityNewPage.L.trackingNumberC));
  }

  async getInnerTextDescriptionInformation(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, OpportunityNewPage.L.descriptionInformation));
  }

  async expectDescriptionInformationVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OpportunityNewPage.L.descriptionInformation), timeoutMs);
  }

  async expectDescriptionInformationHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OpportunityNewPage.L.descriptionInformation), timeoutMs);
  }

  async expectDescriptionInformationText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OpportunityNewPage.L.descriptionInformation), expected, timeoutMs);
  }

  async expectDescriptionInformationContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OpportunityNewPage.L.descriptionInformation), substring, timeoutMs);
  }

  async scrollDescriptionInformationIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OpportunityNewPage.L.descriptionInformation));
  }

  async clickCancelEdit(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OpportunityNewPage.L.cancelEdit));
  }

  async doubleClickCancelEdit(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OpportunityNewPage.L.cancelEdit));
  }

  async expectCancelEditVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OpportunityNewPage.L.cancelEdit), timeoutMs);
  }

  async expectCancelEditHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OpportunityNewPage.L.cancelEdit), timeoutMs);
  }

  async expectCancelEditEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OpportunityNewPage.L.cancelEdit), timeoutMs);
  }

  async expectCancelEditDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OpportunityNewPage.L.cancelEdit), timeoutMs);
  }

  async expectCancelEditText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OpportunityNewPage.L.cancelEdit), expected, timeoutMs);
  }

  async expectCancelEditContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OpportunityNewPage.L.cancelEdit), substring, timeoutMs);
  }

  async scrollCancelEditIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OpportunityNewPage.L.cancelEdit));
  }

  async clickSaveAndNew(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OpportunityNewPage.L.saveAndNew));
  }

  async doubleClickSaveAndNew(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OpportunityNewPage.L.saveAndNew));
  }

  async expectSaveAndNewVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OpportunityNewPage.L.saveAndNew), timeoutMs);
  }

  async expectSaveAndNewHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OpportunityNewPage.L.saveAndNew), timeoutMs);
  }

  async expectSaveAndNewEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OpportunityNewPage.L.saveAndNew), timeoutMs);
  }

  async expectSaveAndNewDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OpportunityNewPage.L.saveAndNew), timeoutMs);
  }

  async expectSaveAndNewText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OpportunityNewPage.L.saveAndNew), expected, timeoutMs);
  }

  async expectSaveAndNewContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OpportunityNewPage.L.saveAndNew), substring, timeoutMs);
  }

  async scrollSaveAndNewIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OpportunityNewPage.L.saveAndNew));
  }

  async clickSaveEdit(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OpportunityNewPage.L.saveEdit));
  }

  async doubleClickSaveEdit(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OpportunityNewPage.L.saveEdit));
  }

  async expectSaveEditVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OpportunityNewPage.L.saveEdit), timeoutMs);
  }

  async expectSaveEditHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OpportunityNewPage.L.saveEdit), timeoutMs);
  }

  async expectSaveEditEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OpportunityNewPage.L.saveEdit), timeoutMs);
  }

  async expectSaveEditDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OpportunityNewPage.L.saveEdit), timeoutMs);
  }

  async expectSaveEditText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OpportunityNewPage.L.saveEdit), expected, timeoutMs);
  }

  async expectSaveEditContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OpportunityNewPage.L.saveEdit), substring, timeoutMs);
  }

  async scrollSaveEditIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OpportunityNewPage.L.saveEdit));
  }

  async getPageTitle(): Promise<string> {
    return this.page.title();
  }

  async expectPageTitle(expected: string | RegExp, timeoutMs = 30_000): Promise<void> {
    await expect(this.page).toHaveTitle(expected, { timeout: timeoutMs });
  }


  async longPressCancelAndClose(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OpportunityNewPage.L.cancelAndClose));
  }

  async expectCancelAndCloseValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OpportunityNewPage.L.cancelAndClose), value, timeoutMs);
  }

  async expectCancelAndCloseChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OpportunityNewPage.L.cancelAndClose), timeoutMs);
  }

  async expectCancelAndCloseUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OpportunityNewPage.L.cancelAndClose), timeoutMs);
  }

  async expectCancelAndCloseFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OpportunityNewPage.L.cancelAndClose), timeoutMs);
  }

  async expectCancelAndCloseCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OpportunityNewPage.L.cancelAndClose), count, timeoutMs);
  }

  async clickNewOpportunity(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OpportunityNewPage.L.newOpportunity));
  }

  async doubleClickNewOpportunity(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OpportunityNewPage.L.newOpportunity));
  }

  async longPressNewOpportunity(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OpportunityNewPage.L.newOpportunity));
  }

  async expectNewOpportunityValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OpportunityNewPage.L.newOpportunity), value, timeoutMs);
  }

  async expectNewOpportunityEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OpportunityNewPage.L.newOpportunity), timeoutMs);
  }

  async expectNewOpportunityDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OpportunityNewPage.L.newOpportunity), timeoutMs);
  }

  async expectNewOpportunityChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OpportunityNewPage.L.newOpportunity), timeoutMs);
  }

  async expectNewOpportunityUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OpportunityNewPage.L.newOpportunity), timeoutMs);
  }

  async expectNewOpportunityFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OpportunityNewPage.L.newOpportunity), timeoutMs);
  }

  async expectNewOpportunityCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OpportunityNewPage.L.newOpportunity), count, timeoutMs);
  }

  async clickOpportunityInformation(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OpportunityNewPage.L.opportunityInformation));
  }

  async doubleClickOpportunityInformation(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OpportunityNewPage.L.opportunityInformation));
  }

  async longPressOpportunityInformation(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OpportunityNewPage.L.opportunityInformation));
  }

  async expectOpportunityInformationValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OpportunityNewPage.L.opportunityInformation), value, timeoutMs);
  }

  async expectOpportunityInformationEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OpportunityNewPage.L.opportunityInformation), timeoutMs);
  }

  async expectOpportunityInformationDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OpportunityNewPage.L.opportunityInformation), timeoutMs);
  }

  async expectOpportunityInformationChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OpportunityNewPage.L.opportunityInformation), timeoutMs);
  }

  async expectOpportunityInformationUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OpportunityNewPage.L.opportunityInformation), timeoutMs);
  }

  async expectOpportunityInformationFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OpportunityNewPage.L.opportunityInformation), timeoutMs);
  }

  async expectOpportunityInformationCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OpportunityNewPage.L.opportunityInformation), count, timeoutMs);
  }

  async clickOpportunityOwner(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OpportunityNewPage.L.opportunityOwner));
  }

  async doubleClickOpportunityOwner(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OpportunityNewPage.L.opportunityOwner));
  }

  async longPressOpportunityOwner(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OpportunityNewPage.L.opportunityOwner));
  }

  async expectOpportunityOwnerValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OpportunityNewPage.L.opportunityOwner), value, timeoutMs);
  }

  async expectOpportunityOwnerEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OpportunityNewPage.L.opportunityOwner), timeoutMs);
  }

  async expectOpportunityOwnerDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OpportunityNewPage.L.opportunityOwner), timeoutMs);
  }

  async expectOpportunityOwnerChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OpportunityNewPage.L.opportunityOwner), timeoutMs);
  }

  async expectOpportunityOwnerUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OpportunityNewPage.L.opportunityOwner), timeoutMs);
  }

  async expectOpportunityOwnerFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OpportunityNewPage.L.opportunityOwner), timeoutMs);
  }

  async expectOpportunityOwnerCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OpportunityNewPage.L.opportunityOwner), count, timeoutMs);
  }

  async expectAmountText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OpportunityNewPage.L.amount), expected, timeoutMs);
  }

  async expectAmountContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OpportunityNewPage.L.amount), substring, timeoutMs);
  }

  async expectAmountChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OpportunityNewPage.L.amount), timeoutMs);
  }

  async expectAmountUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OpportunityNewPage.L.amount), timeoutMs);
  }

  async expectAmountCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OpportunityNewPage.L.amount), count, timeoutMs);
  }

  async expectCloseDateText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OpportunityNewPage.L.closeDate), expected, timeoutMs);
  }

  async expectCloseDateContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OpportunityNewPage.L.closeDate), substring, timeoutMs);
  }

  async expectCloseDateChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OpportunityNewPage.L.closeDate), timeoutMs);
  }

  async expectCloseDateUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OpportunityNewPage.L.closeDate), timeoutMs);
  }

  async expectCloseDateCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OpportunityNewPage.L.closeDate), count, timeoutMs);
  }

  async longPressSelectADateFor(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OpportunityNewPage.L.selectADateFor));
  }

  async expectSelectADateForValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OpportunityNewPage.L.selectADateFor), value, timeoutMs);
  }

  async expectSelectADateForChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OpportunityNewPage.L.selectADateFor), timeoutMs);
  }

  async expectSelectADateForUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OpportunityNewPage.L.selectADateFor), timeoutMs);
  }

  async expectSelectADateForFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OpportunityNewPage.L.selectADateFor), timeoutMs);
  }

  async expectSelectADateForCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OpportunityNewPage.L.selectADateFor), count, timeoutMs);
  }

  async expectNameText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OpportunityNewPage.L.name), expected, timeoutMs);
  }

  async expectNameContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OpportunityNewPage.L.name), substring, timeoutMs);
  }

  async expectNameChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OpportunityNewPage.L.name), timeoutMs);
  }

  async expectNameUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OpportunityNewPage.L.name), timeoutMs);
  }

  async expectNameCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OpportunityNewPage.L.name), count, timeoutMs);
  }

  async expectNextStepText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OpportunityNewPage.L.nextStep), expected, timeoutMs);
  }

  async expectNextStepContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OpportunityNewPage.L.nextStep), substring, timeoutMs);
  }

  async expectNextStepChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OpportunityNewPage.L.nextStep), timeoutMs);
  }

  async expectNextStepUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OpportunityNewPage.L.nextStep), timeoutMs);
  }

  async expectNextStepCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OpportunityNewPage.L.nextStep), count, timeoutMs);
  }

  async expectAccountNameText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OpportunityNewPage.L.accountName), expected, timeoutMs);
  }

  async expectAccountNameContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OpportunityNewPage.L.accountName), substring, timeoutMs);
  }

  async expectAccountNameChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OpportunityNewPage.L.accountName), timeoutMs);
  }

  async expectAccountNameUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OpportunityNewPage.L.accountName), timeoutMs);
  }

  async expectAccountNameCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OpportunityNewPage.L.accountName), count, timeoutMs);
  }

  async longPressStage(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OpportunityNewPage.L.stage));
  }

  async expectStageValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OpportunityNewPage.L.stage), value, timeoutMs);
  }

  async expectStageChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OpportunityNewPage.L.stage), timeoutMs);
  }

  async expectStageUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OpportunityNewPage.L.stage), timeoutMs);
  }

  async expectStageFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OpportunityNewPage.L.stage), timeoutMs);
  }

  async expectStageCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OpportunityNewPage.L.stage), count, timeoutMs);
  }

  async longPressType(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OpportunityNewPage.L.type));
  }

  async expectTypeValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OpportunityNewPage.L.type), value, timeoutMs);
  }

  async expectTypeChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OpportunityNewPage.L.type), timeoutMs);
  }

  async expectTypeUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OpportunityNewPage.L.type), timeoutMs);
  }

  async expectTypeFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OpportunityNewPage.L.type), timeoutMs);
  }

  async expectTypeCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OpportunityNewPage.L.type), count, timeoutMs);
  }

  async expectProbabilityText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OpportunityNewPage.L.probability), expected, timeoutMs);
  }

  async expectProbabilityContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OpportunityNewPage.L.probability), substring, timeoutMs);
  }

  async expectProbabilityChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OpportunityNewPage.L.probability), timeoutMs);
  }

  async expectProbabilityUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OpportunityNewPage.L.probability), timeoutMs);
  }

  async expectProbabilityCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OpportunityNewPage.L.probability), count, timeoutMs);
  }

  async longPressLeadSource(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OpportunityNewPage.L.leadSource));
  }

  async expectLeadSourceValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OpportunityNewPage.L.leadSource), value, timeoutMs);
  }

  async expectLeadSourceChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OpportunityNewPage.L.leadSource), timeoutMs);
  }

  async expectLeadSourceUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OpportunityNewPage.L.leadSource), timeoutMs);
  }

  async expectLeadSourceFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OpportunityNewPage.L.leadSource), timeoutMs);
  }

  async expectLeadSourceCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OpportunityNewPage.L.leadSource), count, timeoutMs);
  }

  async expectPrimaryCampaignSourceText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OpportunityNewPage.L.primaryCampaignSource), expected, timeoutMs);
  }

  async expectPrimaryCampaignSourceContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OpportunityNewPage.L.primaryCampaignSource), substring, timeoutMs);
  }

  async expectPrimaryCampaignSourceChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OpportunityNewPage.L.primaryCampaignSource), timeoutMs);
  }

  async expectPrimaryCampaignSourceUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OpportunityNewPage.L.primaryCampaignSource), timeoutMs);
  }

  async expectPrimaryCampaignSourceCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OpportunityNewPage.L.primaryCampaignSource), count, timeoutMs);
  }

  async clickAdditionalInformation(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OpportunityNewPage.L.additionalInformation));
  }

  async doubleClickAdditionalInformation(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OpportunityNewPage.L.additionalInformation));
  }

  async longPressAdditionalInformation(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OpportunityNewPage.L.additionalInformation));
  }

  async expectAdditionalInformationValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OpportunityNewPage.L.additionalInformation), value, timeoutMs);
  }

  async expectAdditionalInformationEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OpportunityNewPage.L.additionalInformation), timeoutMs);
  }

  async expectAdditionalInformationDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OpportunityNewPage.L.additionalInformation), timeoutMs);
  }

  async expectAdditionalInformationChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OpportunityNewPage.L.additionalInformation), timeoutMs);
  }

  async expectAdditionalInformationUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OpportunityNewPage.L.additionalInformation), timeoutMs);
  }

  async expectAdditionalInformationFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OpportunityNewPage.L.additionalInformation), timeoutMs);
  }

  async expectAdditionalInformationCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OpportunityNewPage.L.additionalInformation), count, timeoutMs);
  }

  async expectOrderNumberCText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OpportunityNewPage.L.orderNumberC), expected, timeoutMs);
  }

  async expectOrderNumberCContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OpportunityNewPage.L.orderNumberC), substring, timeoutMs);
  }

  async expectOrderNumberCChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OpportunityNewPage.L.orderNumberC), timeoutMs);
  }

  async expectOrderNumberCUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OpportunityNewPage.L.orderNumberC), timeoutMs);
  }

  async expectOrderNumberCCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OpportunityNewPage.L.orderNumberC), count, timeoutMs);
  }

  async expectMainCompetitorsCText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OpportunityNewPage.L.mainCompetitorsC), expected, timeoutMs);
  }

  async expectMainCompetitorsCContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OpportunityNewPage.L.mainCompetitorsC), substring, timeoutMs);
  }

  async expectMainCompetitorsCChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OpportunityNewPage.L.mainCompetitorsC), timeoutMs);
  }

  async expectMainCompetitorsCUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OpportunityNewPage.L.mainCompetitorsC), timeoutMs);
  }

  async expectMainCompetitorsCCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OpportunityNewPage.L.mainCompetitorsC), count, timeoutMs);
  }

  async expectCurrentGeneratorsCText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OpportunityNewPage.L.currentGeneratorsC), expected, timeoutMs);
  }

  async expectCurrentGeneratorsCContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OpportunityNewPage.L.currentGeneratorsC), substring, timeoutMs);
  }

  async expectCurrentGeneratorsCChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OpportunityNewPage.L.currentGeneratorsC), timeoutMs);
  }

  async expectCurrentGeneratorsCUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OpportunityNewPage.L.currentGeneratorsC), timeoutMs);
  }

  async expectCurrentGeneratorsCCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OpportunityNewPage.L.currentGeneratorsC), count, timeoutMs);
  }

  async longPressDeliveryInstallationStatus(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OpportunityNewPage.L.deliveryInstallationStatus));
  }

  async expectDeliveryInstallationStatusValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OpportunityNewPage.L.deliveryInstallationStatus), value, timeoutMs);
  }

  async expectDeliveryInstallationStatusChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OpportunityNewPage.L.deliveryInstallationStatus), timeoutMs);
  }

  async expectDeliveryInstallationStatusUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OpportunityNewPage.L.deliveryInstallationStatus), timeoutMs);
  }

  async expectDeliveryInstallationStatusFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OpportunityNewPage.L.deliveryInstallationStatus), timeoutMs);
  }

  async expectDeliveryInstallationStatusCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OpportunityNewPage.L.deliveryInstallationStatus), count, timeoutMs);
  }

  async expectTrackingNumberCText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OpportunityNewPage.L.trackingNumberC), expected, timeoutMs);
  }

  async expectTrackingNumberCContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OpportunityNewPage.L.trackingNumberC), substring, timeoutMs);
  }

  async expectTrackingNumberCChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OpportunityNewPage.L.trackingNumberC), timeoutMs);
  }

  async expectTrackingNumberCUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OpportunityNewPage.L.trackingNumberC), timeoutMs);
  }

  async expectTrackingNumberCCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OpportunityNewPage.L.trackingNumberC), count, timeoutMs);
  }

  async clickDescriptionInformation(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OpportunityNewPage.L.descriptionInformation));
  }

  async doubleClickDescriptionInformation(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OpportunityNewPage.L.descriptionInformation));
  }

  async longPressDescriptionInformation(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OpportunityNewPage.L.descriptionInformation));
  }

  async expectDescriptionInformationValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OpportunityNewPage.L.descriptionInformation), value, timeoutMs);
  }

  async expectDescriptionInformationEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OpportunityNewPage.L.descriptionInformation), timeoutMs);
  }

  async expectDescriptionInformationDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OpportunityNewPage.L.descriptionInformation), timeoutMs);
  }

  async expectDescriptionInformationChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OpportunityNewPage.L.descriptionInformation), timeoutMs);
  }

  async expectDescriptionInformationUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OpportunityNewPage.L.descriptionInformation), timeoutMs);
  }

  async expectDescriptionInformationFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OpportunityNewPage.L.descriptionInformation), timeoutMs);
  }

  async expectDescriptionInformationCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OpportunityNewPage.L.descriptionInformation), count, timeoutMs);
  }

  async longPressCancelEdit(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OpportunityNewPage.L.cancelEdit));
  }

  async expectCancelEditValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OpportunityNewPage.L.cancelEdit), value, timeoutMs);
  }

  async expectCancelEditChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OpportunityNewPage.L.cancelEdit), timeoutMs);
  }

  async expectCancelEditUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OpportunityNewPage.L.cancelEdit), timeoutMs);
  }

  async expectCancelEditFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OpportunityNewPage.L.cancelEdit), timeoutMs);
  }

  async expectCancelEditCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OpportunityNewPage.L.cancelEdit), count, timeoutMs);
  }

  async longPressSaveAndNew(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OpportunityNewPage.L.saveAndNew));
  }

  async expectSaveAndNewValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OpportunityNewPage.L.saveAndNew), value, timeoutMs);
  }

  async expectSaveAndNewChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OpportunityNewPage.L.saveAndNew), timeoutMs);
  }

  async expectSaveAndNewUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OpportunityNewPage.L.saveAndNew), timeoutMs);
  }

  async expectSaveAndNewFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OpportunityNewPage.L.saveAndNew), timeoutMs);
  }

  async expectSaveAndNewCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OpportunityNewPage.L.saveAndNew), count, timeoutMs);
  }

  async longPressSaveEdit(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OpportunityNewPage.L.saveEdit));
  }

  async expectSaveEditValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OpportunityNewPage.L.saveEdit), value, timeoutMs);
  }

  async expectSaveEditChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OpportunityNewPage.L.saveEdit), timeoutMs);
  }

  async expectSaveEditUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OpportunityNewPage.L.saveEdit), timeoutMs);
  }

  async expectSaveEditFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OpportunityNewPage.L.saveEdit), timeoutMs);
  }

  async expectSaveEditCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OpportunityNewPage.L.saveEdit), count, timeoutMs);
  }

}
