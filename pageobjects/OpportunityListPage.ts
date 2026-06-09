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

export class OpportunityListPage {
  private static readonly L = {
    skipToNavigation: { strategy: 'role' as const, value: 'Skip to Navigation', role: 'link', actionKind: 'link' as const },
    skipToMainContent: { strategy: 'role' as const, value: 'Skip to Main Content', role: 'link', actionKind: 'link' as const },
    togglePanel: { strategy: 'label' as const, value: 'Toggle Panel', shadowHost: 'devops_center-panel-button', actionKind: 'button' as const },
    developerEdition: { strategy: 'text' as const, value: 'Developer Edition', shadowHost: 'devops_center-org-info', actionKind: 'text' as const },
    showMenu: { strategy: 'role' as const, value: 'Show menu', role: 'button', shadowHost: 'lightning-button-menu', actionKind: 'button' as const },
    search: { strategy: 'label' as const, value: 'Search', actionKind: 'button' as const },
    addFavoriteFavoritesList: { strategy: 'text' as const, value: 'Add favorite Favorites list', actionKind: 'text' as const },
    addFavorite: { strategy: 'label' as const, value: 'Add favorite', actionKind: 'button' as const },
    favoritesList: { strategy: 'role' as const, value: 'Favorites list', role: 'button', actionKind: 'button' as const },
    globalActions: { strategy: 'role' as const, value: 'Global Actions', role: 'button', actionKind: 'link' as const },
    guidanceCenter: { strategy: 'role' as const, value: 'Guidance Center', role: 'button', actionKind: 'button' as const },
    salesforceHelp: { strategy: 'role' as const, value: 'Salesforce Help', role: 'button', actionKind: 'button' as const },
    setup: { strategy: 'role' as const, value: 'Setup', role: 'button', actionKind: 'link' as const },
    Notifications2New: { strategy: 'text' as const, value: '2 Notifications 2 new notifications', actionKind: 'text' as const },
    Notifications: { strategy: 'role' as const, value: '2 Notifications', role: 'button', actionKind: 'button' as const },
    viewProfile: { strategy: 'role' as const, value: 'View profile', role: 'button', actionKind: 'button' as const },
    appLauncher: { strategy: 'css' as const, value: '[title="App Launcher"]', shadowHost: 'one-app-launcher-header', actionKind: 'button' as const },
    sales: { strategy: 'text' as const, value: 'Sales', shadowHost: 'one-appnav', actionKind: 'text' as const },
    home: { strategy: 'css' as const, value: '[title="Home"]', shadowHost: 'one-app-nav-bar-item-root', actionKind: 'link' as const },
    opportunities: { strategy: 'css' as const, value: '[title="Opportunities"]', shadowHost: 'one-app-nav-bar-item-root', actionKind: 'link' as const },
    opportunitiesList: { strategy: 'role' as const, value: 'Opportunities List', role: 'button', shadowHost: 'one-app-nav-bar-menu-button', actionKind: 'link' as const },
    leads: { strategy: 'css' as const, value: '[title="Leads"]', shadowHost: 'one-app-nav-bar-item-root', actionKind: 'link' as const },
    leadsList: { strategy: 'role' as const, value: 'Leads List', role: 'button', shadowHost: 'one-app-nav-bar-menu-button', actionKind: 'link' as const },
    tasks: { strategy: 'css' as const, value: '[title="Tasks"]', shadowHost: 'one-app-nav-bar-item-root', actionKind: 'link' as const },
    tasksList: { strategy: 'role' as const, value: 'Tasks List', role: 'button', shadowHost: 'one-app-nav-bar-menu-button', actionKind: 'link' as const },
    files: { strategy: 'css' as const, value: '[title="Files"]', shadowHost: 'one-app-nav-bar-item-root', actionKind: 'link' as const },
    filesList: { strategy: 'role' as const, value: 'Files List', role: 'button', shadowHost: 'one-app-nav-bar-menu-button', actionKind: 'link' as const },
    accounts: { strategy: 'css' as const, value: '[title="Accounts"]', shadowHost: 'one-app-nav-bar-item-root', actionKind: 'link' as const },
    accountsList: { strategy: 'role' as const, value: 'Accounts List', role: 'button', shadowHost: 'one-app-nav-bar-menu-button', actionKind: 'link' as const },
    contacts: { strategy: 'css' as const, value: '[title="Contacts"]', shadowHost: 'one-app-nav-bar-item-root', actionKind: 'link' as const },
    contactsList: { strategy: 'role' as const, value: 'Contacts List', role: 'button', shadowHost: 'one-app-nav-bar-menu-button', actionKind: 'link' as const },
    campaigns: { strategy: 'css' as const, value: '[title="Campaigns"]', shadowHost: 'one-app-nav-bar-item-root', actionKind: 'link' as const },
    campaignsList: { strategy: 'role' as const, value: 'Campaigns List', role: 'button', shadowHost: 'one-app-nav-bar-menu-button', actionKind: 'link' as const },
    dashboards: { strategy: 'css' as const, value: '[title="Dashboards"]', shadowHost: 'one-app-nav-bar-item-root', actionKind: 'link' as const },
    dashboardsList: { strategy: 'role' as const, value: 'Dashboards List', role: 'button', shadowHost: 'one-app-nav-bar-menu-button', actionKind: 'link' as const },
    reports: { strategy: 'css' as const, value: '[title="Reports"]', shadowHost: 'one-app-nav-bar-item-root', actionKind: 'link' as const },
    reportsList: { strategy: 'role' as const, value: 'Reports List', role: 'button', shadowHost: 'one-app-nav-bar-menu-button', actionKind: 'link' as const },
    moreShowMoreNavigation: { strategy: 'role' as const, value: 'More Show more navigation items', role: 'button', shadowHost: 'one-app-nav-bar-menu-button', actionKind: 'link' as const },
    personalizeYourNavBar: { strategy: 'css' as const, value: '[title="Personalize your nav bar"]', shadowHost: 'lightning-button-icon', actionKind: 'button' as const },
    opportunitiesRecentlyViewed: { strategy: 'text' as const, value: 'Opportunities Recently Viewed', shadowHost: 'lst-list-view-picker', actionKind: 'text' as const },
    recentlyViewed: { strategy: 'text' as const, value: 'Recently Viewed', shadowHost: 'lst-list-view-picker', actionKind: 'text' as const },
    selectAListView: { strategy: 'css' as const, value: '[title="Select a List View: Opportunities"]', shadowHost: 'lightning-button-icon', actionKind: 'button' as const },
    thisListIsPinned: { strategy: 'css' as const, value: '[title="This list is pinned."]', shadowHost: 'lightning-button-icon', actionKind: 'button' as const },
    new: { strategy: 'css' as const, value: '[title="New"]', shadowHost: 'lst-list-view-manager-header', actionKind: 'link' as const },
    assignLabel: { strategy: 'css' as const, value: '[title="Assign Label"]', shadowHost: 'lst-list-view-manager-header', actionKind: 'link' as const },
    ItemsUpdated: { strategy: 'text' as const, value: '0 items • Updated a few seconds ago', shadowHost: 'lst-list-view-manager-header', actionKind: 'text' as const },
    Items: { strategy: 'text' as const, value: '0 items •', shadowHost: 'force-list-view-manager-status-info', actionKind: 'text' as const },
    updatedAFewSeconds: { strategy: 'text' as const, value: 'Updated a few seconds ago', shadowHost: 'force-list-view-manager-status-info', actionKind: 'text' as const },
    opportunitySearchInput: { strategy: 'css' as const, value: '[name="Opportunity-search-input"][placeholder="Search this list..."]', shadowHost: 'lightning-primitive-input-simple', actionKind: 'textbox' as const },
    listViewControls: { strategy: 'css' as const, value: '[title="List View Controls"]', shadowHost: 'lightning-button-menu', actionKind: 'button' as const },
    selectListDisplay: { strategy: 'css' as const, value: '[title="Select list display"]', shadowHost: 'lightning-button-menu', actionKind: 'button' as const },
    refreshButton: { strategy: 'css' as const, value: '[name="refreshButton"][title="Refresh"]', shadowHost: 'lightning-button-icon', actionKind: 'button' as const },
    multiColumnSortButton: { strategy: 'css' as const, value: '[name="multiColumnSortButton"][title="Column sort"]', shadowHost: 'lightning-button-icon', actionKind: 'button' as const },
    inlineEditButton: { strategy: 'css' as const, value: '[name="inlineEditButton"][title="Edit List"]', shadowHost: 'lightning-button-icon', actionKind: 'button' as const },
    nothingToSeeHere: { strategy: 'text' as const, value: 'Nothing to see here', shadowHost: 'lst-empty-state-illustration', actionKind: 'text' as const },
    thereSNothingInYour: { strategy: 'text' as const, value: 'There\'s nothing in your list yet. Try adding a new', shadowHost: 'lst-empty-state-illustration', actionKind: 'text' as const },
    toDoList: { strategy: 'role' as const, value: 'To Do List', role: 'button', actionKind: 'button' as const },
  } as const;

  constructor(private readonly page: Page) {}

  async clickSkipToNavigation(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OpportunityListPage.L.skipToNavigation));
  }

  async doubleClickSkipToNavigation(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OpportunityListPage.L.skipToNavigation));
  }

  async expectSkipToNavigationVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OpportunityListPage.L.skipToNavigation), timeoutMs);
  }

  async expectSkipToNavigationHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OpportunityListPage.L.skipToNavigation), timeoutMs);
  }

  async expectSkipToNavigationText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OpportunityListPage.L.skipToNavigation), expected, timeoutMs);
  }

  async expectSkipToNavigationContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OpportunityListPage.L.skipToNavigation), substring, timeoutMs);
  }

  async scrollSkipToNavigationIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OpportunityListPage.L.skipToNavigation));
  }

  async clickSkipToMainContent(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OpportunityListPage.L.skipToMainContent));
  }

  async doubleClickSkipToMainContent(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OpportunityListPage.L.skipToMainContent));
  }

  async expectSkipToMainContentVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OpportunityListPage.L.skipToMainContent), timeoutMs);
  }

  async expectSkipToMainContentHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OpportunityListPage.L.skipToMainContent), timeoutMs);
  }

  async expectSkipToMainContentText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OpportunityListPage.L.skipToMainContent), expected, timeoutMs);
  }

  async expectSkipToMainContentContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OpportunityListPage.L.skipToMainContent), substring, timeoutMs);
  }

  async scrollSkipToMainContentIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OpportunityListPage.L.skipToMainContent));
  }

  async clickTogglePanel(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OpportunityListPage.L.togglePanel));
  }

  async doubleClickTogglePanel(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OpportunityListPage.L.togglePanel));
  }

  async expectTogglePanelVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OpportunityListPage.L.togglePanel), timeoutMs);
  }

  async expectTogglePanelHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OpportunityListPage.L.togglePanel), timeoutMs);
  }

  async expectTogglePanelEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OpportunityListPage.L.togglePanel), timeoutMs);
  }

  async expectTogglePanelDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OpportunityListPage.L.togglePanel), timeoutMs);
  }

  async expectTogglePanelText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OpportunityListPage.L.togglePanel), expected, timeoutMs);
  }

  async expectTogglePanelContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OpportunityListPage.L.togglePanel), substring, timeoutMs);
  }

  async scrollTogglePanelIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OpportunityListPage.L.togglePanel));
  }

  async getInnerTextDeveloperEdition(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, OpportunityListPage.L.developerEdition));
  }

  async expectDeveloperEditionVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OpportunityListPage.L.developerEdition), timeoutMs);
  }

  async expectDeveloperEditionHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OpportunityListPage.L.developerEdition), timeoutMs);
  }

  async expectDeveloperEditionText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OpportunityListPage.L.developerEdition), expected, timeoutMs);
  }

  async expectDeveloperEditionContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OpportunityListPage.L.developerEdition), substring, timeoutMs);
  }

  async scrollDeveloperEditionIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OpportunityListPage.L.developerEdition));
  }

  async clickShowMenu(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OpportunityListPage.L.showMenu));
  }

  async doubleClickShowMenu(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OpportunityListPage.L.showMenu));
  }

  async expectShowMenuVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OpportunityListPage.L.showMenu), timeoutMs);
  }

  async expectShowMenuHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OpportunityListPage.L.showMenu), timeoutMs);
  }

  async expectShowMenuEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OpportunityListPage.L.showMenu), timeoutMs);
  }

  async expectShowMenuDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OpportunityListPage.L.showMenu), timeoutMs);
  }

  async expectShowMenuText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OpportunityListPage.L.showMenu), expected, timeoutMs);
  }

  async expectShowMenuContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OpportunityListPage.L.showMenu), substring, timeoutMs);
  }

  async scrollShowMenuIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OpportunityListPage.L.showMenu));
  }

  async clickSearch(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OpportunityListPage.L.search));
  }

  async doubleClickSearch(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OpportunityListPage.L.search));
  }

  async expectSearchVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OpportunityListPage.L.search), timeoutMs);
  }

  async expectSearchHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OpportunityListPage.L.search), timeoutMs);
  }

  async expectSearchEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OpportunityListPage.L.search), timeoutMs);
  }

  async expectSearchDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OpportunityListPage.L.search), timeoutMs);
  }

  async expectSearchText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OpportunityListPage.L.search), expected, timeoutMs);
  }

  async expectSearchContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OpportunityListPage.L.search), substring, timeoutMs);
  }

  async scrollSearchIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OpportunityListPage.L.search));
  }

  async getInnerTextAddFavoriteFavoritesList(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, OpportunityListPage.L.addFavoriteFavoritesList));
  }

  async expectAddFavoriteFavoritesListVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OpportunityListPage.L.addFavoriteFavoritesList), timeoutMs);
  }

  async expectAddFavoriteFavoritesListHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OpportunityListPage.L.addFavoriteFavoritesList), timeoutMs);
  }

  async expectAddFavoriteFavoritesListText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OpportunityListPage.L.addFavoriteFavoritesList), expected, timeoutMs);
  }

  async expectAddFavoriteFavoritesListContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OpportunityListPage.L.addFavoriteFavoritesList), substring, timeoutMs);
  }

  async scrollAddFavoriteFavoritesListIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OpportunityListPage.L.addFavoriteFavoritesList));
  }

  async clickAddFavorite(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OpportunityListPage.L.addFavorite));
  }

  async doubleClickAddFavorite(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OpportunityListPage.L.addFavorite));
  }

  async expectAddFavoriteVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OpportunityListPage.L.addFavorite), timeoutMs);
  }

  async expectAddFavoriteHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OpportunityListPage.L.addFavorite), timeoutMs);
  }

  async expectAddFavoriteEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OpportunityListPage.L.addFavorite), timeoutMs);
  }

  async expectAddFavoriteDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OpportunityListPage.L.addFavorite), timeoutMs);
  }

  async expectAddFavoriteText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OpportunityListPage.L.addFavorite), expected, timeoutMs);
  }

  async expectAddFavoriteContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OpportunityListPage.L.addFavorite), substring, timeoutMs);
  }

  async scrollAddFavoriteIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OpportunityListPage.L.addFavorite));
  }

  async clickFavoritesList(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OpportunityListPage.L.favoritesList));
  }

  async doubleClickFavoritesList(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OpportunityListPage.L.favoritesList));
  }

  async expectFavoritesListVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OpportunityListPage.L.favoritesList), timeoutMs);
  }

  async expectFavoritesListHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OpportunityListPage.L.favoritesList), timeoutMs);
  }

  async expectFavoritesListEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OpportunityListPage.L.favoritesList), timeoutMs);
  }

  async expectFavoritesListDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OpportunityListPage.L.favoritesList), timeoutMs);
  }

  async expectFavoritesListText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OpportunityListPage.L.favoritesList), expected, timeoutMs);
  }

  async expectFavoritesListContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OpportunityListPage.L.favoritesList), substring, timeoutMs);
  }

  async scrollFavoritesListIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OpportunityListPage.L.favoritesList));
  }

  async clickGlobalActions(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OpportunityListPage.L.globalActions));
  }

  async doubleClickGlobalActions(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OpportunityListPage.L.globalActions));
  }

  async expectGlobalActionsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OpportunityListPage.L.globalActions), timeoutMs);
  }

  async expectGlobalActionsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OpportunityListPage.L.globalActions), timeoutMs);
  }

  async expectGlobalActionsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OpportunityListPage.L.globalActions), expected, timeoutMs);
  }

  async expectGlobalActionsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OpportunityListPage.L.globalActions), substring, timeoutMs);
  }

  async scrollGlobalActionsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OpportunityListPage.L.globalActions));
  }

  async clickGuidanceCenter(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OpportunityListPage.L.guidanceCenter));
  }

  async doubleClickGuidanceCenter(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OpportunityListPage.L.guidanceCenter));
  }

  async expectGuidanceCenterVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OpportunityListPage.L.guidanceCenter), timeoutMs);
  }

  async expectGuidanceCenterHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OpportunityListPage.L.guidanceCenter), timeoutMs);
  }

  async expectGuidanceCenterEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OpportunityListPage.L.guidanceCenter), timeoutMs);
  }

  async expectGuidanceCenterDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OpportunityListPage.L.guidanceCenter), timeoutMs);
  }

  async expectGuidanceCenterText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OpportunityListPage.L.guidanceCenter), expected, timeoutMs);
  }

  async expectGuidanceCenterContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OpportunityListPage.L.guidanceCenter), substring, timeoutMs);
  }

  async scrollGuidanceCenterIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OpportunityListPage.L.guidanceCenter));
  }

  async clickSalesforceHelp(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OpportunityListPage.L.salesforceHelp));
  }

  async doubleClickSalesforceHelp(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OpportunityListPage.L.salesforceHelp));
  }

  async expectSalesforceHelpVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OpportunityListPage.L.salesforceHelp), timeoutMs);
  }

  async expectSalesforceHelpHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OpportunityListPage.L.salesforceHelp), timeoutMs);
  }

  async expectSalesforceHelpEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OpportunityListPage.L.salesforceHelp), timeoutMs);
  }

  async expectSalesforceHelpDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OpportunityListPage.L.salesforceHelp), timeoutMs);
  }

  async expectSalesforceHelpText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OpportunityListPage.L.salesforceHelp), expected, timeoutMs);
  }

  async expectSalesforceHelpContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OpportunityListPage.L.salesforceHelp), substring, timeoutMs);
  }

  async scrollSalesforceHelpIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OpportunityListPage.L.salesforceHelp));
  }

  async clickSetup(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OpportunityListPage.L.setup));
  }

  async doubleClickSetup(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OpportunityListPage.L.setup));
  }

  async expectSetupVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OpportunityListPage.L.setup), timeoutMs);
  }

  async expectSetupHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OpportunityListPage.L.setup), timeoutMs);
  }

  async expectSetupText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OpportunityListPage.L.setup), expected, timeoutMs);
  }

  async expectSetupContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OpportunityListPage.L.setup), substring, timeoutMs);
  }

  async scrollSetupIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OpportunityListPage.L.setup));
  }

  async getInnerTextNotifications2New(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, OpportunityListPage.L.Notifications2New));
  }

  async expectNotifications2NewVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OpportunityListPage.L.Notifications2New), timeoutMs);
  }

  async expectNotifications2NewHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OpportunityListPage.L.Notifications2New), timeoutMs);
  }

  async expectNotifications2NewText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OpportunityListPage.L.Notifications2New), expected, timeoutMs);
  }

  async expectNotifications2NewContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OpportunityListPage.L.Notifications2New), substring, timeoutMs);
  }

  async scrollNotifications2NewIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OpportunityListPage.L.Notifications2New));
  }

  async clickNotifications(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OpportunityListPage.L.Notifications));
  }

  async doubleClickNotifications(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OpportunityListPage.L.Notifications));
  }

  async expectNotificationsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OpportunityListPage.L.Notifications), timeoutMs);
  }

  async expectNotificationsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OpportunityListPage.L.Notifications), timeoutMs);
  }

  async expectNotificationsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OpportunityListPage.L.Notifications), timeoutMs);
  }

  async expectNotificationsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OpportunityListPage.L.Notifications), timeoutMs);
  }

  async expectNotificationsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OpportunityListPage.L.Notifications), expected, timeoutMs);
  }

  async expectNotificationsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OpportunityListPage.L.Notifications), substring, timeoutMs);
  }

  async scrollNotificationsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OpportunityListPage.L.Notifications));
  }

  async clickViewProfile(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OpportunityListPage.L.viewProfile));
  }

  async doubleClickViewProfile(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OpportunityListPage.L.viewProfile));
  }

  async expectViewProfileVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OpportunityListPage.L.viewProfile), timeoutMs);
  }

  async expectViewProfileHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OpportunityListPage.L.viewProfile), timeoutMs);
  }

  async expectViewProfileEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OpportunityListPage.L.viewProfile), timeoutMs);
  }

  async expectViewProfileDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OpportunityListPage.L.viewProfile), timeoutMs);
  }

  async expectViewProfileText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OpportunityListPage.L.viewProfile), expected, timeoutMs);
  }

  async expectViewProfileContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OpportunityListPage.L.viewProfile), substring, timeoutMs);
  }

  async scrollViewProfileIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OpportunityListPage.L.viewProfile));
  }

  async clickAppLauncher(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OpportunityListPage.L.appLauncher));
  }

  async doubleClickAppLauncher(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OpportunityListPage.L.appLauncher));
  }

  async expectAppLauncherVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OpportunityListPage.L.appLauncher), timeoutMs);
  }

  async expectAppLauncherHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OpportunityListPage.L.appLauncher), timeoutMs);
  }

  async expectAppLauncherEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OpportunityListPage.L.appLauncher), timeoutMs);
  }

  async expectAppLauncherDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OpportunityListPage.L.appLauncher), timeoutMs);
  }

  async expectAppLauncherText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OpportunityListPage.L.appLauncher), expected, timeoutMs);
  }

  async expectAppLauncherContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OpportunityListPage.L.appLauncher), substring, timeoutMs);
  }

  async scrollAppLauncherIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OpportunityListPage.L.appLauncher));
  }

  async getInnerTextSales(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, OpportunityListPage.L.sales));
  }

  async expectSalesVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OpportunityListPage.L.sales), timeoutMs);
  }

  async expectSalesHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OpportunityListPage.L.sales), timeoutMs);
  }

  async expectSalesText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OpportunityListPage.L.sales), expected, timeoutMs);
  }

  async expectSalesContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OpportunityListPage.L.sales), substring, timeoutMs);
  }

  async scrollSalesIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OpportunityListPage.L.sales));
  }

  async clickHome(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OpportunityListPage.L.home));
  }

  async doubleClickHome(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OpportunityListPage.L.home));
  }

  async expectHomeVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OpportunityListPage.L.home), timeoutMs);
  }

  async expectHomeHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OpportunityListPage.L.home), timeoutMs);
  }

  async expectHomeText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OpportunityListPage.L.home), expected, timeoutMs);
  }

  async expectHomeContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OpportunityListPage.L.home), substring, timeoutMs);
  }

  async scrollHomeIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OpportunityListPage.L.home));
  }

  async clickOpportunities(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OpportunityListPage.L.opportunities));
  }

  async doubleClickOpportunities(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OpportunityListPage.L.opportunities));
  }

  async expectOpportunitiesVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OpportunityListPage.L.opportunities), timeoutMs);
  }

  async expectOpportunitiesHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OpportunityListPage.L.opportunities), timeoutMs);
  }

  async expectOpportunitiesText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OpportunityListPage.L.opportunities), expected, timeoutMs);
  }

  async expectOpportunitiesContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OpportunityListPage.L.opportunities), substring, timeoutMs);
  }

  async scrollOpportunitiesIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OpportunityListPage.L.opportunities));
  }

  async clickOpportunitiesList(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OpportunityListPage.L.opportunitiesList));
  }

  async doubleClickOpportunitiesList(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OpportunityListPage.L.opportunitiesList));
  }

  async expectOpportunitiesListVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OpportunityListPage.L.opportunitiesList), timeoutMs);
  }

  async expectOpportunitiesListHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OpportunityListPage.L.opportunitiesList), timeoutMs);
  }

  async expectOpportunitiesListText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OpportunityListPage.L.opportunitiesList), expected, timeoutMs);
  }

  async expectOpportunitiesListContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OpportunityListPage.L.opportunitiesList), substring, timeoutMs);
  }

  async scrollOpportunitiesListIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OpportunityListPage.L.opportunitiesList));
  }

  async clickLeads(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OpportunityListPage.L.leads));
  }

  async doubleClickLeads(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OpportunityListPage.L.leads));
  }

  async expectLeadsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OpportunityListPage.L.leads), timeoutMs);
  }

  async expectLeadsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OpportunityListPage.L.leads), timeoutMs);
  }

  async expectLeadsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OpportunityListPage.L.leads), expected, timeoutMs);
  }

  async expectLeadsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OpportunityListPage.L.leads), substring, timeoutMs);
  }

  async scrollLeadsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OpportunityListPage.L.leads));
  }

  async clickLeadsList(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OpportunityListPage.L.leadsList));
  }

  async doubleClickLeadsList(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OpportunityListPage.L.leadsList));
  }

  async expectLeadsListVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OpportunityListPage.L.leadsList), timeoutMs);
  }

  async expectLeadsListHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OpportunityListPage.L.leadsList), timeoutMs);
  }

  async expectLeadsListText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OpportunityListPage.L.leadsList), expected, timeoutMs);
  }

  async expectLeadsListContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OpportunityListPage.L.leadsList), substring, timeoutMs);
  }

  async scrollLeadsListIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OpportunityListPage.L.leadsList));
  }

  async clickTasks(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OpportunityListPage.L.tasks));
  }

  async doubleClickTasks(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OpportunityListPage.L.tasks));
  }

  async expectTasksVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OpportunityListPage.L.tasks), timeoutMs);
  }

  async expectTasksHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OpportunityListPage.L.tasks), timeoutMs);
  }

  async expectTasksText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OpportunityListPage.L.tasks), expected, timeoutMs);
  }

  async expectTasksContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OpportunityListPage.L.tasks), substring, timeoutMs);
  }

  async scrollTasksIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OpportunityListPage.L.tasks));
  }

  async clickTasksList(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OpportunityListPage.L.tasksList));
  }

  async doubleClickTasksList(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OpportunityListPage.L.tasksList));
  }

  async expectTasksListVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OpportunityListPage.L.tasksList), timeoutMs);
  }

  async expectTasksListHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OpportunityListPage.L.tasksList), timeoutMs);
  }

  async expectTasksListText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OpportunityListPage.L.tasksList), expected, timeoutMs);
  }

  async expectTasksListContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OpportunityListPage.L.tasksList), substring, timeoutMs);
  }

  async scrollTasksListIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OpportunityListPage.L.tasksList));
  }

  async clickFiles(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OpportunityListPage.L.files));
  }

  async doubleClickFiles(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OpportunityListPage.L.files));
  }

  async expectFilesVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OpportunityListPage.L.files), timeoutMs);
  }

  async expectFilesHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OpportunityListPage.L.files), timeoutMs);
  }

  async expectFilesText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OpportunityListPage.L.files), expected, timeoutMs);
  }

  async expectFilesContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OpportunityListPage.L.files), substring, timeoutMs);
  }

  async scrollFilesIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OpportunityListPage.L.files));
  }

  async clickFilesList(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OpportunityListPage.L.filesList));
  }

  async doubleClickFilesList(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OpportunityListPage.L.filesList));
  }

  async expectFilesListVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OpportunityListPage.L.filesList), timeoutMs);
  }

  async expectFilesListHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OpportunityListPage.L.filesList), timeoutMs);
  }

  async expectFilesListText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OpportunityListPage.L.filesList), expected, timeoutMs);
  }

  async expectFilesListContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OpportunityListPage.L.filesList), substring, timeoutMs);
  }

  async scrollFilesListIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OpportunityListPage.L.filesList));
  }

  async clickAccounts(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OpportunityListPage.L.accounts));
  }

  async doubleClickAccounts(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OpportunityListPage.L.accounts));
  }

  async expectAccountsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OpportunityListPage.L.accounts), timeoutMs);
  }

  async expectAccountsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OpportunityListPage.L.accounts), timeoutMs);
  }

  async expectAccountsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OpportunityListPage.L.accounts), expected, timeoutMs);
  }

  async expectAccountsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OpportunityListPage.L.accounts), substring, timeoutMs);
  }

  async scrollAccountsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OpportunityListPage.L.accounts));
  }

  async clickAccountsList(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OpportunityListPage.L.accountsList));
  }

  async doubleClickAccountsList(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OpportunityListPage.L.accountsList));
  }

  async expectAccountsListVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OpportunityListPage.L.accountsList), timeoutMs);
  }

  async expectAccountsListHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OpportunityListPage.L.accountsList), timeoutMs);
  }

  async expectAccountsListText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OpportunityListPage.L.accountsList), expected, timeoutMs);
  }

  async expectAccountsListContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OpportunityListPage.L.accountsList), substring, timeoutMs);
  }

  async scrollAccountsListIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OpportunityListPage.L.accountsList));
  }

  async clickContacts(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OpportunityListPage.L.contacts));
  }

  async doubleClickContacts(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OpportunityListPage.L.contacts));
  }

  async expectContactsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OpportunityListPage.L.contacts), timeoutMs);
  }

  async expectContactsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OpportunityListPage.L.contacts), timeoutMs);
  }

  async expectContactsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OpportunityListPage.L.contacts), expected, timeoutMs);
  }

  async expectContactsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OpportunityListPage.L.contacts), substring, timeoutMs);
  }

  async scrollContactsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OpportunityListPage.L.contacts));
  }

  async clickContactsList(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OpportunityListPage.L.contactsList));
  }

  async doubleClickContactsList(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OpportunityListPage.L.contactsList));
  }

  async expectContactsListVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OpportunityListPage.L.contactsList), timeoutMs);
  }

  async expectContactsListHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OpportunityListPage.L.contactsList), timeoutMs);
  }

  async expectContactsListText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OpportunityListPage.L.contactsList), expected, timeoutMs);
  }

  async expectContactsListContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OpportunityListPage.L.contactsList), substring, timeoutMs);
  }

  async scrollContactsListIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OpportunityListPage.L.contactsList));
  }

  async clickCampaigns(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OpportunityListPage.L.campaigns));
  }

  async doubleClickCampaigns(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OpportunityListPage.L.campaigns));
  }

  async expectCampaignsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OpportunityListPage.L.campaigns), timeoutMs);
  }

  async expectCampaignsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OpportunityListPage.L.campaigns), timeoutMs);
  }

  async expectCampaignsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OpportunityListPage.L.campaigns), expected, timeoutMs);
  }

  async expectCampaignsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OpportunityListPage.L.campaigns), substring, timeoutMs);
  }

  async scrollCampaignsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OpportunityListPage.L.campaigns));
  }

  async clickCampaignsList(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OpportunityListPage.L.campaignsList));
  }

  async doubleClickCampaignsList(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OpportunityListPage.L.campaignsList));
  }

  async expectCampaignsListVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OpportunityListPage.L.campaignsList), timeoutMs);
  }

  async expectCampaignsListHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OpportunityListPage.L.campaignsList), timeoutMs);
  }

  async expectCampaignsListText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OpportunityListPage.L.campaignsList), expected, timeoutMs);
  }

  async expectCampaignsListContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OpportunityListPage.L.campaignsList), substring, timeoutMs);
  }

  async scrollCampaignsListIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OpportunityListPage.L.campaignsList));
  }

  async clickDashboards(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OpportunityListPage.L.dashboards));
  }

  async doubleClickDashboards(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OpportunityListPage.L.dashboards));
  }

  async expectDashboardsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OpportunityListPage.L.dashboards), timeoutMs);
  }

  async expectDashboardsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OpportunityListPage.L.dashboards), timeoutMs);
  }

  async expectDashboardsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OpportunityListPage.L.dashboards), expected, timeoutMs);
  }

  async expectDashboardsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OpportunityListPage.L.dashboards), substring, timeoutMs);
  }

  async scrollDashboardsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OpportunityListPage.L.dashboards));
  }

  async clickDashboardsList(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OpportunityListPage.L.dashboardsList));
  }

  async doubleClickDashboardsList(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OpportunityListPage.L.dashboardsList));
  }

  async expectDashboardsListVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OpportunityListPage.L.dashboardsList), timeoutMs);
  }

  async expectDashboardsListHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OpportunityListPage.L.dashboardsList), timeoutMs);
  }

  async expectDashboardsListText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OpportunityListPage.L.dashboardsList), expected, timeoutMs);
  }

  async expectDashboardsListContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OpportunityListPage.L.dashboardsList), substring, timeoutMs);
  }

  async scrollDashboardsListIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OpportunityListPage.L.dashboardsList));
  }

  async clickReports(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OpportunityListPage.L.reports));
  }

  async doubleClickReports(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OpportunityListPage.L.reports));
  }

  async expectReportsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OpportunityListPage.L.reports), timeoutMs);
  }

  async expectReportsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OpportunityListPage.L.reports), timeoutMs);
  }

  async expectReportsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OpportunityListPage.L.reports), expected, timeoutMs);
  }

  async expectReportsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OpportunityListPage.L.reports), substring, timeoutMs);
  }

  async scrollReportsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OpportunityListPage.L.reports));
  }

  async clickReportsList(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OpportunityListPage.L.reportsList));
  }

  async doubleClickReportsList(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OpportunityListPage.L.reportsList));
  }

  async expectReportsListVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OpportunityListPage.L.reportsList), timeoutMs);
  }

  async expectReportsListHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OpportunityListPage.L.reportsList), timeoutMs);
  }

  async expectReportsListText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OpportunityListPage.L.reportsList), expected, timeoutMs);
  }

  async expectReportsListContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OpportunityListPage.L.reportsList), substring, timeoutMs);
  }

  async scrollReportsListIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OpportunityListPage.L.reportsList));
  }

  async clickMoreShowMoreNavigation(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OpportunityListPage.L.moreShowMoreNavigation));
  }

  async doubleClickMoreShowMoreNavigation(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OpportunityListPage.L.moreShowMoreNavigation));
  }

  async expectMoreShowMoreNavigationVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OpportunityListPage.L.moreShowMoreNavigation), timeoutMs);
  }

  async expectMoreShowMoreNavigationHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OpportunityListPage.L.moreShowMoreNavigation), timeoutMs);
  }

  async expectMoreShowMoreNavigationText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OpportunityListPage.L.moreShowMoreNavigation), expected, timeoutMs);
  }

  async expectMoreShowMoreNavigationContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OpportunityListPage.L.moreShowMoreNavigation), substring, timeoutMs);
  }

  async scrollMoreShowMoreNavigationIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OpportunityListPage.L.moreShowMoreNavigation));
  }

  async clickPersonalizeYourNavBar(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OpportunityListPage.L.personalizeYourNavBar));
  }

  async doubleClickPersonalizeYourNavBar(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OpportunityListPage.L.personalizeYourNavBar));
  }

  async expectPersonalizeYourNavBarVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OpportunityListPage.L.personalizeYourNavBar), timeoutMs);
  }

  async expectPersonalizeYourNavBarHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OpportunityListPage.L.personalizeYourNavBar), timeoutMs);
  }

  async expectPersonalizeYourNavBarEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OpportunityListPage.L.personalizeYourNavBar), timeoutMs);
  }

  async expectPersonalizeYourNavBarDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OpportunityListPage.L.personalizeYourNavBar), timeoutMs);
  }

  async expectPersonalizeYourNavBarText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OpportunityListPage.L.personalizeYourNavBar), expected, timeoutMs);
  }

  async expectPersonalizeYourNavBarContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OpportunityListPage.L.personalizeYourNavBar), substring, timeoutMs);
  }

  async scrollPersonalizeYourNavBarIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OpportunityListPage.L.personalizeYourNavBar));
  }

  async getInnerTextOpportunitiesRecentlyViewed(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, OpportunityListPage.L.opportunitiesRecentlyViewed));
  }

  async expectOpportunitiesRecentlyViewedVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OpportunityListPage.L.opportunitiesRecentlyViewed), timeoutMs);
  }

  async expectOpportunitiesRecentlyViewedHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OpportunityListPage.L.opportunitiesRecentlyViewed), timeoutMs);
  }

  async expectOpportunitiesRecentlyViewedText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OpportunityListPage.L.opportunitiesRecentlyViewed), expected, timeoutMs);
  }

  async expectOpportunitiesRecentlyViewedContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OpportunityListPage.L.opportunitiesRecentlyViewed), substring, timeoutMs);
  }

  async scrollOpportunitiesRecentlyViewedIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OpportunityListPage.L.opportunitiesRecentlyViewed));
  }

  async getInnerTextRecentlyViewed(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, OpportunityListPage.L.recentlyViewed));
  }

  async expectRecentlyViewedVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OpportunityListPage.L.recentlyViewed), timeoutMs);
  }

  async expectRecentlyViewedHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OpportunityListPage.L.recentlyViewed), timeoutMs);
  }

  async expectRecentlyViewedText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OpportunityListPage.L.recentlyViewed), expected, timeoutMs);
  }

  async expectRecentlyViewedContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OpportunityListPage.L.recentlyViewed), substring, timeoutMs);
  }

  async scrollRecentlyViewedIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OpportunityListPage.L.recentlyViewed));
  }

  async clickSelectAListView(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OpportunityListPage.L.selectAListView));
  }

  async doubleClickSelectAListView(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OpportunityListPage.L.selectAListView));
  }

  async expectSelectAListViewVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OpportunityListPage.L.selectAListView), timeoutMs);
  }

  async expectSelectAListViewHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OpportunityListPage.L.selectAListView), timeoutMs);
  }

  async expectSelectAListViewEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OpportunityListPage.L.selectAListView), timeoutMs);
  }

  async expectSelectAListViewDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OpportunityListPage.L.selectAListView), timeoutMs);
  }

  async expectSelectAListViewText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OpportunityListPage.L.selectAListView), expected, timeoutMs);
  }

  async expectSelectAListViewContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OpportunityListPage.L.selectAListView), substring, timeoutMs);
  }

  async scrollSelectAListViewIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OpportunityListPage.L.selectAListView));
  }

  async clickThisListIsPinned(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OpportunityListPage.L.thisListIsPinned));
  }

  async doubleClickThisListIsPinned(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OpportunityListPage.L.thisListIsPinned));
  }

  async expectThisListIsPinnedVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OpportunityListPage.L.thisListIsPinned), timeoutMs);
  }

  async expectThisListIsPinnedHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OpportunityListPage.L.thisListIsPinned), timeoutMs);
  }

  async expectThisListIsPinnedEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OpportunityListPage.L.thisListIsPinned), timeoutMs);
  }

  async expectThisListIsPinnedDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OpportunityListPage.L.thisListIsPinned), timeoutMs);
  }

  async expectThisListIsPinnedText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OpportunityListPage.L.thisListIsPinned), expected, timeoutMs);
  }

  async expectThisListIsPinnedContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OpportunityListPage.L.thisListIsPinned), substring, timeoutMs);
  }

  async scrollThisListIsPinnedIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OpportunityListPage.L.thisListIsPinned));
  }

  async clickNew(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OpportunityListPage.L.new));
  }

  async doubleClickNew(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OpportunityListPage.L.new));
  }

  async expectNewVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OpportunityListPage.L.new), timeoutMs);
  }

  async expectNewHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OpportunityListPage.L.new), timeoutMs);
  }

  async expectNewText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OpportunityListPage.L.new), expected, timeoutMs);
  }

  async expectNewContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OpportunityListPage.L.new), substring, timeoutMs);
  }

  async scrollNewIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OpportunityListPage.L.new));
  }

  async clickAssignLabel(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OpportunityListPage.L.assignLabel));
  }

  async doubleClickAssignLabel(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OpportunityListPage.L.assignLabel));
  }

  async expectAssignLabelVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OpportunityListPage.L.assignLabel), timeoutMs);
  }

  async expectAssignLabelHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OpportunityListPage.L.assignLabel), timeoutMs);
  }

  async expectAssignLabelText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OpportunityListPage.L.assignLabel), expected, timeoutMs);
  }

  async expectAssignLabelContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OpportunityListPage.L.assignLabel), substring, timeoutMs);
  }

  async scrollAssignLabelIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OpportunityListPage.L.assignLabel));
  }

  async getInnerTextItemsUpdated(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, OpportunityListPage.L.ItemsUpdated));
  }

  async expectItemsUpdatedVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OpportunityListPage.L.ItemsUpdated), timeoutMs);
  }

  async expectItemsUpdatedHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OpportunityListPage.L.ItemsUpdated), timeoutMs);
  }

  async expectItemsUpdatedText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OpportunityListPage.L.ItemsUpdated), expected, timeoutMs);
  }

  async expectItemsUpdatedContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OpportunityListPage.L.ItemsUpdated), substring, timeoutMs);
  }

  async scrollItemsUpdatedIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OpportunityListPage.L.ItemsUpdated));
  }

  async getInnerTextItems(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, OpportunityListPage.L.Items));
  }

  async expectItemsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OpportunityListPage.L.Items), timeoutMs);
  }

  async expectItemsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OpportunityListPage.L.Items), timeoutMs);
  }

  async expectItemsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OpportunityListPage.L.Items), expected, timeoutMs);
  }

  async expectItemsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OpportunityListPage.L.Items), substring, timeoutMs);
  }

  async scrollItemsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OpportunityListPage.L.Items));
  }

  async getInnerTextUpdatedAFewSeconds(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, OpportunityListPage.L.updatedAFewSeconds));
  }

  async expectUpdatedAFewSecondsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OpportunityListPage.L.updatedAFewSeconds), timeoutMs);
  }

  async expectUpdatedAFewSecondsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OpportunityListPage.L.updatedAFewSeconds), timeoutMs);
  }

  async expectUpdatedAFewSecondsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OpportunityListPage.L.updatedAFewSeconds), expected, timeoutMs);
  }

  async expectUpdatedAFewSecondsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OpportunityListPage.L.updatedAFewSeconds), substring, timeoutMs);
  }

  async scrollUpdatedAFewSecondsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OpportunityListPage.L.updatedAFewSeconds));
  }

  async fillOpportunitySearchInput(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, OpportunityListPage.L.opportunitySearchInput), value);
  }

  async clearOpportunitySearchInput(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, OpportunityListPage.L.opportunitySearchInput));
  }

  async typeTextOpportunitySearchInput(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, OpportunityListPage.L.opportunitySearchInput), value);
  }

  async expectOpportunitySearchInputVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OpportunityListPage.L.opportunitySearchInput), timeoutMs);
  }

  async expectOpportunitySearchInputHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OpportunityListPage.L.opportunitySearchInput), timeoutMs);
  }

  async expectOpportunitySearchInputEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OpportunityListPage.L.opportunitySearchInput), timeoutMs);
  }

  async expectOpportunitySearchInputDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OpportunityListPage.L.opportunitySearchInput), timeoutMs);
  }

  async expectOpportunitySearchInputValue(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OpportunityListPage.L.opportunitySearchInput), expected, timeoutMs);
  }

  async expectOpportunitySearchInputFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OpportunityListPage.L.opportunitySearchInput), timeoutMs);
  }

  async scrollOpportunitySearchInputIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OpportunityListPage.L.opportunitySearchInput));
  }

  async clickListViewControls(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OpportunityListPage.L.listViewControls));
  }

  async doubleClickListViewControls(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OpportunityListPage.L.listViewControls));
  }

  async expectListViewControlsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OpportunityListPage.L.listViewControls), timeoutMs);
  }

  async expectListViewControlsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OpportunityListPage.L.listViewControls), timeoutMs);
  }

  async expectListViewControlsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OpportunityListPage.L.listViewControls), timeoutMs);
  }

  async expectListViewControlsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OpportunityListPage.L.listViewControls), timeoutMs);
  }

  async expectListViewControlsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OpportunityListPage.L.listViewControls), expected, timeoutMs);
  }

  async expectListViewControlsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OpportunityListPage.L.listViewControls), substring, timeoutMs);
  }

  async scrollListViewControlsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OpportunityListPage.L.listViewControls));
  }

  async clickSelectListDisplay(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OpportunityListPage.L.selectListDisplay));
  }

  async doubleClickSelectListDisplay(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OpportunityListPage.L.selectListDisplay));
  }

  async expectSelectListDisplayVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OpportunityListPage.L.selectListDisplay), timeoutMs);
  }

  async expectSelectListDisplayHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OpportunityListPage.L.selectListDisplay), timeoutMs);
  }

  async expectSelectListDisplayEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OpportunityListPage.L.selectListDisplay), timeoutMs);
  }

  async expectSelectListDisplayDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OpportunityListPage.L.selectListDisplay), timeoutMs);
  }

  async expectSelectListDisplayText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OpportunityListPage.L.selectListDisplay), expected, timeoutMs);
  }

  async expectSelectListDisplayContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OpportunityListPage.L.selectListDisplay), substring, timeoutMs);
  }

  async scrollSelectListDisplayIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OpportunityListPage.L.selectListDisplay));
  }

  async clickRefreshButton(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OpportunityListPage.L.refreshButton));
  }

  async doubleClickRefreshButton(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OpportunityListPage.L.refreshButton));
  }

  async expectRefreshButtonVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OpportunityListPage.L.refreshButton), timeoutMs);
  }

  async expectRefreshButtonHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OpportunityListPage.L.refreshButton), timeoutMs);
  }

  async expectRefreshButtonEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OpportunityListPage.L.refreshButton), timeoutMs);
  }

  async expectRefreshButtonDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OpportunityListPage.L.refreshButton), timeoutMs);
  }

  async expectRefreshButtonText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OpportunityListPage.L.refreshButton), expected, timeoutMs);
  }

  async expectRefreshButtonContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OpportunityListPage.L.refreshButton), substring, timeoutMs);
  }

  async scrollRefreshButtonIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OpportunityListPage.L.refreshButton));
  }

  async clickMultiColumnSortButton(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OpportunityListPage.L.multiColumnSortButton));
  }

  async doubleClickMultiColumnSortButton(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OpportunityListPage.L.multiColumnSortButton));
  }

  async expectMultiColumnSortButtonVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OpportunityListPage.L.multiColumnSortButton), timeoutMs);
  }

  async expectMultiColumnSortButtonHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OpportunityListPage.L.multiColumnSortButton), timeoutMs);
  }

  async expectMultiColumnSortButtonEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OpportunityListPage.L.multiColumnSortButton), timeoutMs);
  }

  async expectMultiColumnSortButtonDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OpportunityListPage.L.multiColumnSortButton), timeoutMs);
  }

  async expectMultiColumnSortButtonText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OpportunityListPage.L.multiColumnSortButton), expected, timeoutMs);
  }

  async expectMultiColumnSortButtonContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OpportunityListPage.L.multiColumnSortButton), substring, timeoutMs);
  }

  async scrollMultiColumnSortButtonIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OpportunityListPage.L.multiColumnSortButton));
  }

  async clickInlineEditButton(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OpportunityListPage.L.inlineEditButton));
  }

  async doubleClickInlineEditButton(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OpportunityListPage.L.inlineEditButton));
  }

  async expectInlineEditButtonVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OpportunityListPage.L.inlineEditButton), timeoutMs);
  }

  async expectInlineEditButtonHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OpportunityListPage.L.inlineEditButton), timeoutMs);
  }

  async expectInlineEditButtonEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OpportunityListPage.L.inlineEditButton), timeoutMs);
  }

  async expectInlineEditButtonDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OpportunityListPage.L.inlineEditButton), timeoutMs);
  }

  async expectInlineEditButtonText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OpportunityListPage.L.inlineEditButton), expected, timeoutMs);
  }

  async expectInlineEditButtonContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OpportunityListPage.L.inlineEditButton), substring, timeoutMs);
  }

  async scrollInlineEditButtonIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OpportunityListPage.L.inlineEditButton));
  }

  async getInnerTextNothingToSeeHere(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, OpportunityListPage.L.nothingToSeeHere));
  }

  async expectNothingToSeeHereVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OpportunityListPage.L.nothingToSeeHere), timeoutMs);
  }

  async expectNothingToSeeHereHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OpportunityListPage.L.nothingToSeeHere), timeoutMs);
  }

  async expectNothingToSeeHereText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OpportunityListPage.L.nothingToSeeHere), expected, timeoutMs);
  }

  async expectNothingToSeeHereContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OpportunityListPage.L.nothingToSeeHere), substring, timeoutMs);
  }

  async scrollNothingToSeeHereIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OpportunityListPage.L.nothingToSeeHere));
  }

  async getInnerTextThereSNothingInYour(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, OpportunityListPage.L.thereSNothingInYour));
  }

  async expectThereSNothingInYourVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OpportunityListPage.L.thereSNothingInYour), timeoutMs);
  }

  async expectThereSNothingInYourHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OpportunityListPage.L.thereSNothingInYour), timeoutMs);
  }

  async expectThereSNothingInYourText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OpportunityListPage.L.thereSNothingInYour), expected, timeoutMs);
  }

  async expectThereSNothingInYourContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OpportunityListPage.L.thereSNothingInYour), substring, timeoutMs);
  }

  async scrollThereSNothingInYourIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OpportunityListPage.L.thereSNothingInYour));
  }

  async clickToDoList(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OpportunityListPage.L.toDoList));
  }

  async doubleClickToDoList(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OpportunityListPage.L.toDoList));
  }

  async expectToDoListVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, OpportunityListPage.L.toDoList), timeoutMs);
  }

  async expectToDoListHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, OpportunityListPage.L.toDoList), timeoutMs);
  }

  async expectToDoListEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OpportunityListPage.L.toDoList), timeoutMs);
  }

  async expectToDoListDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OpportunityListPage.L.toDoList), timeoutMs);
  }

  async expectToDoListText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OpportunityListPage.L.toDoList), expected, timeoutMs);
  }

  async expectToDoListContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OpportunityListPage.L.toDoList), substring, timeoutMs);
  }

  async scrollToDoListIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, OpportunityListPage.L.toDoList));
  }

  async getPageTitle(): Promise<string> {
    return this.page.title();
  }

  async expectPageTitle(expected: string | RegExp, timeoutMs = 30_000): Promise<void> {
    await expect(this.page).toHaveTitle(expected, { timeout: timeoutMs });
  }


  async longPressSkipToNavigation(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OpportunityListPage.L.skipToNavigation));
  }

  async expectSkipToNavigationValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OpportunityListPage.L.skipToNavigation), value, timeoutMs);
  }

  async expectSkipToNavigationEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OpportunityListPage.L.skipToNavigation), timeoutMs);
  }

  async expectSkipToNavigationDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OpportunityListPage.L.skipToNavigation), timeoutMs);
  }

  async expectSkipToNavigationChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OpportunityListPage.L.skipToNavigation), timeoutMs);
  }

  async expectSkipToNavigationUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OpportunityListPage.L.skipToNavigation), timeoutMs);
  }

  async expectSkipToNavigationFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OpportunityListPage.L.skipToNavigation), timeoutMs);
  }

  async expectSkipToNavigationCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OpportunityListPage.L.skipToNavigation), count, timeoutMs);
  }

  async longPressSkipToMainContent(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OpportunityListPage.L.skipToMainContent));
  }

  async expectSkipToMainContentValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OpportunityListPage.L.skipToMainContent), value, timeoutMs);
  }

  async expectSkipToMainContentEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OpportunityListPage.L.skipToMainContent), timeoutMs);
  }

  async expectSkipToMainContentDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OpportunityListPage.L.skipToMainContent), timeoutMs);
  }

  async expectSkipToMainContentChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OpportunityListPage.L.skipToMainContent), timeoutMs);
  }

  async expectSkipToMainContentUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OpportunityListPage.L.skipToMainContent), timeoutMs);
  }

  async expectSkipToMainContentFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OpportunityListPage.L.skipToMainContent), timeoutMs);
  }

  async expectSkipToMainContentCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OpportunityListPage.L.skipToMainContent), count, timeoutMs);
  }

  async longPressTogglePanel(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OpportunityListPage.L.togglePanel));
  }

  async expectTogglePanelValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OpportunityListPage.L.togglePanel), value, timeoutMs);
  }

  async expectTogglePanelChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OpportunityListPage.L.togglePanel), timeoutMs);
  }

  async expectTogglePanelUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OpportunityListPage.L.togglePanel), timeoutMs);
  }

  async expectTogglePanelFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OpportunityListPage.L.togglePanel), timeoutMs);
  }

  async expectTogglePanelCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OpportunityListPage.L.togglePanel), count, timeoutMs);
  }

  async clickDeveloperEdition(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OpportunityListPage.L.developerEdition));
  }

  async doubleClickDeveloperEdition(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OpportunityListPage.L.developerEdition));
  }

  async longPressDeveloperEdition(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OpportunityListPage.L.developerEdition));
  }

  async expectDeveloperEditionValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OpportunityListPage.L.developerEdition), value, timeoutMs);
  }

  async expectDeveloperEditionEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OpportunityListPage.L.developerEdition), timeoutMs);
  }

  async expectDeveloperEditionDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OpportunityListPage.L.developerEdition), timeoutMs);
  }

  async expectDeveloperEditionChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OpportunityListPage.L.developerEdition), timeoutMs);
  }

  async expectDeveloperEditionUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OpportunityListPage.L.developerEdition), timeoutMs);
  }

  async expectDeveloperEditionFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OpportunityListPage.L.developerEdition), timeoutMs);
  }

  async expectDeveloperEditionCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OpportunityListPage.L.developerEdition), count, timeoutMs);
  }

  async longPressShowMenu(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OpportunityListPage.L.showMenu));
  }

  async expectShowMenuValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OpportunityListPage.L.showMenu), value, timeoutMs);
  }

  async expectShowMenuChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OpportunityListPage.L.showMenu), timeoutMs);
  }

  async expectShowMenuUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OpportunityListPage.L.showMenu), timeoutMs);
  }

  async expectShowMenuFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OpportunityListPage.L.showMenu), timeoutMs);
  }

  async expectShowMenuCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OpportunityListPage.L.showMenu), count, timeoutMs);
  }

  async longPressSearch(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OpportunityListPage.L.search));
  }

  async expectSearchValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OpportunityListPage.L.search), value, timeoutMs);
  }

  async expectSearchChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OpportunityListPage.L.search), timeoutMs);
  }

  async expectSearchUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OpportunityListPage.L.search), timeoutMs);
  }

  async expectSearchFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OpportunityListPage.L.search), timeoutMs);
  }

  async expectSearchCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OpportunityListPage.L.search), count, timeoutMs);
  }

  async clickAddFavoriteFavoritesList(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OpportunityListPage.L.addFavoriteFavoritesList));
  }

  async doubleClickAddFavoriteFavoritesList(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OpportunityListPage.L.addFavoriteFavoritesList));
  }

  async longPressAddFavoriteFavoritesList(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OpportunityListPage.L.addFavoriteFavoritesList));
  }

  async expectAddFavoriteFavoritesListValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OpportunityListPage.L.addFavoriteFavoritesList), value, timeoutMs);
  }

  async expectAddFavoriteFavoritesListEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OpportunityListPage.L.addFavoriteFavoritesList), timeoutMs);
  }

  async expectAddFavoriteFavoritesListDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OpportunityListPage.L.addFavoriteFavoritesList), timeoutMs);
  }

  async expectAddFavoriteFavoritesListChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OpportunityListPage.L.addFavoriteFavoritesList), timeoutMs);
  }

  async expectAddFavoriteFavoritesListUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OpportunityListPage.L.addFavoriteFavoritesList), timeoutMs);
  }

  async expectAddFavoriteFavoritesListFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OpportunityListPage.L.addFavoriteFavoritesList), timeoutMs);
  }

  async expectAddFavoriteFavoritesListCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OpportunityListPage.L.addFavoriteFavoritesList), count, timeoutMs);
  }

  async longPressAddFavorite(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OpportunityListPage.L.addFavorite));
  }

  async expectAddFavoriteValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OpportunityListPage.L.addFavorite), value, timeoutMs);
  }

  async expectAddFavoriteChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OpportunityListPage.L.addFavorite), timeoutMs);
  }

  async expectAddFavoriteUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OpportunityListPage.L.addFavorite), timeoutMs);
  }

  async expectAddFavoriteFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OpportunityListPage.L.addFavorite), timeoutMs);
  }

  async expectAddFavoriteCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OpportunityListPage.L.addFavorite), count, timeoutMs);
  }

  async longPressFavoritesList(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OpportunityListPage.L.favoritesList));
  }

  async expectFavoritesListValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OpportunityListPage.L.favoritesList), value, timeoutMs);
  }

  async expectFavoritesListChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OpportunityListPage.L.favoritesList), timeoutMs);
  }

  async expectFavoritesListUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OpportunityListPage.L.favoritesList), timeoutMs);
  }

  async expectFavoritesListFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OpportunityListPage.L.favoritesList), timeoutMs);
  }

  async expectFavoritesListCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OpportunityListPage.L.favoritesList), count, timeoutMs);
  }

  async longPressGlobalActions(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OpportunityListPage.L.globalActions));
  }

  async expectGlobalActionsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OpportunityListPage.L.globalActions), value, timeoutMs);
  }

  async expectGlobalActionsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OpportunityListPage.L.globalActions), timeoutMs);
  }

  async expectGlobalActionsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OpportunityListPage.L.globalActions), timeoutMs);
  }

  async expectGlobalActionsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OpportunityListPage.L.globalActions), timeoutMs);
  }

  async expectGlobalActionsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OpportunityListPage.L.globalActions), timeoutMs);
  }

  async expectGlobalActionsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OpportunityListPage.L.globalActions), timeoutMs);
  }

  async expectGlobalActionsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OpportunityListPage.L.globalActions), count, timeoutMs);
  }

  async longPressGuidanceCenter(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OpportunityListPage.L.guidanceCenter));
  }

  async expectGuidanceCenterValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OpportunityListPage.L.guidanceCenter), value, timeoutMs);
  }

  async expectGuidanceCenterChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OpportunityListPage.L.guidanceCenter), timeoutMs);
  }

  async expectGuidanceCenterUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OpportunityListPage.L.guidanceCenter), timeoutMs);
  }

  async expectGuidanceCenterFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OpportunityListPage.L.guidanceCenter), timeoutMs);
  }

  async expectGuidanceCenterCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OpportunityListPage.L.guidanceCenter), count, timeoutMs);
  }

  async longPressSalesforceHelp(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OpportunityListPage.L.salesforceHelp));
  }

  async expectSalesforceHelpValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OpportunityListPage.L.salesforceHelp), value, timeoutMs);
  }

  async expectSalesforceHelpChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OpportunityListPage.L.salesforceHelp), timeoutMs);
  }

  async expectSalesforceHelpUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OpportunityListPage.L.salesforceHelp), timeoutMs);
  }

  async expectSalesforceHelpFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OpportunityListPage.L.salesforceHelp), timeoutMs);
  }

  async expectSalesforceHelpCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OpportunityListPage.L.salesforceHelp), count, timeoutMs);
  }

  async longPressSetup(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OpportunityListPage.L.setup));
  }

  async expectSetupValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OpportunityListPage.L.setup), value, timeoutMs);
  }

  async expectSetupEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OpportunityListPage.L.setup), timeoutMs);
  }

  async expectSetupDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OpportunityListPage.L.setup), timeoutMs);
  }

  async expectSetupChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OpportunityListPage.L.setup), timeoutMs);
  }

  async expectSetupUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OpportunityListPage.L.setup), timeoutMs);
  }

  async expectSetupFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OpportunityListPage.L.setup), timeoutMs);
  }

  async expectSetupCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OpportunityListPage.L.setup), count, timeoutMs);
  }

  async clickNotifications2New(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OpportunityListPage.L.Notifications2New));
  }

  async doubleClickNotifications2New(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OpportunityListPage.L.Notifications2New));
  }

  async longPressNotifications2New(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OpportunityListPage.L.Notifications2New));
  }

  async expectNotifications2NewValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OpportunityListPage.L.Notifications2New), value, timeoutMs);
  }

  async expectNotifications2NewEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OpportunityListPage.L.Notifications2New), timeoutMs);
  }

  async expectNotifications2NewDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OpportunityListPage.L.Notifications2New), timeoutMs);
  }

  async expectNotifications2NewChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OpportunityListPage.L.Notifications2New), timeoutMs);
  }

  async expectNotifications2NewUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OpportunityListPage.L.Notifications2New), timeoutMs);
  }

  async expectNotifications2NewFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OpportunityListPage.L.Notifications2New), timeoutMs);
  }

  async expectNotifications2NewCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OpportunityListPage.L.Notifications2New), count, timeoutMs);
  }

  async longPressNotifications(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OpportunityListPage.L.Notifications));
  }

  async expectNotificationsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OpportunityListPage.L.Notifications), value, timeoutMs);
  }

  async expectNotificationsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OpportunityListPage.L.Notifications), timeoutMs);
  }

  async expectNotificationsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OpportunityListPage.L.Notifications), timeoutMs);
  }

  async expectNotificationsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OpportunityListPage.L.Notifications), timeoutMs);
  }

  async expectNotificationsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OpportunityListPage.L.Notifications), count, timeoutMs);
  }

  async longPressViewProfile(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OpportunityListPage.L.viewProfile));
  }

  async expectViewProfileValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OpportunityListPage.L.viewProfile), value, timeoutMs);
  }

  async expectViewProfileChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OpportunityListPage.L.viewProfile), timeoutMs);
  }

  async expectViewProfileUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OpportunityListPage.L.viewProfile), timeoutMs);
  }

  async expectViewProfileFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OpportunityListPage.L.viewProfile), timeoutMs);
  }

  async expectViewProfileCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OpportunityListPage.L.viewProfile), count, timeoutMs);
  }

  async longPressAppLauncher(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OpportunityListPage.L.appLauncher));
  }

  async expectAppLauncherValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OpportunityListPage.L.appLauncher), value, timeoutMs);
  }

  async expectAppLauncherChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OpportunityListPage.L.appLauncher), timeoutMs);
  }

  async expectAppLauncherUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OpportunityListPage.L.appLauncher), timeoutMs);
  }

  async expectAppLauncherFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OpportunityListPage.L.appLauncher), timeoutMs);
  }

  async expectAppLauncherCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OpportunityListPage.L.appLauncher), count, timeoutMs);
  }

  async clickSales(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OpportunityListPage.L.sales));
  }

  async doubleClickSales(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OpportunityListPage.L.sales));
  }

  async longPressSales(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OpportunityListPage.L.sales));
  }

  async expectSalesValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OpportunityListPage.L.sales), value, timeoutMs);
  }

  async expectSalesEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OpportunityListPage.L.sales), timeoutMs);
  }

  async expectSalesDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OpportunityListPage.L.sales), timeoutMs);
  }

  async expectSalesChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OpportunityListPage.L.sales), timeoutMs);
  }

  async expectSalesUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OpportunityListPage.L.sales), timeoutMs);
  }

  async expectSalesFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OpportunityListPage.L.sales), timeoutMs);
  }

  async expectSalesCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OpportunityListPage.L.sales), count, timeoutMs);
  }

  async longPressHome(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OpportunityListPage.L.home));
  }

  async expectHomeValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OpportunityListPage.L.home), value, timeoutMs);
  }

  async expectHomeEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OpportunityListPage.L.home), timeoutMs);
  }

  async expectHomeDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OpportunityListPage.L.home), timeoutMs);
  }

  async expectHomeChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OpportunityListPage.L.home), timeoutMs);
  }

  async expectHomeUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OpportunityListPage.L.home), timeoutMs);
  }

  async expectHomeFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OpportunityListPage.L.home), timeoutMs);
  }

  async expectHomeCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OpportunityListPage.L.home), count, timeoutMs);
  }

  async longPressOpportunities(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OpportunityListPage.L.opportunities));
  }

  async expectOpportunitiesValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OpportunityListPage.L.opportunities), value, timeoutMs);
  }

  async expectOpportunitiesEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OpportunityListPage.L.opportunities), timeoutMs);
  }

  async expectOpportunitiesDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OpportunityListPage.L.opportunities), timeoutMs);
  }

  async expectOpportunitiesChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OpportunityListPage.L.opportunities), timeoutMs);
  }

  async expectOpportunitiesUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OpportunityListPage.L.opportunities), timeoutMs);
  }

  async expectOpportunitiesFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OpportunityListPage.L.opportunities), timeoutMs);
  }

  async expectOpportunitiesCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OpportunityListPage.L.opportunities), count, timeoutMs);
  }

  async longPressOpportunitiesList(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OpportunityListPage.L.opportunitiesList));
  }

  async expectOpportunitiesListValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OpportunityListPage.L.opportunitiesList), value, timeoutMs);
  }

  async expectOpportunitiesListEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OpportunityListPage.L.opportunitiesList), timeoutMs);
  }

  async expectOpportunitiesListDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OpportunityListPage.L.opportunitiesList), timeoutMs);
  }

  async expectOpportunitiesListChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OpportunityListPage.L.opportunitiesList), timeoutMs);
  }

  async expectOpportunitiesListUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OpportunityListPage.L.opportunitiesList), timeoutMs);
  }

  async expectOpportunitiesListFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OpportunityListPage.L.opportunitiesList), timeoutMs);
  }

  async expectOpportunitiesListCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OpportunityListPage.L.opportunitiesList), count, timeoutMs);
  }

  async longPressLeads(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OpportunityListPage.L.leads));
  }

  async expectLeadsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OpportunityListPage.L.leads), value, timeoutMs);
  }

  async expectLeadsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OpportunityListPage.L.leads), timeoutMs);
  }

  async expectLeadsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OpportunityListPage.L.leads), timeoutMs);
  }

  async expectLeadsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OpportunityListPage.L.leads), timeoutMs);
  }

  async expectLeadsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OpportunityListPage.L.leads), timeoutMs);
  }

  async expectLeadsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OpportunityListPage.L.leads), timeoutMs);
  }

  async expectLeadsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OpportunityListPage.L.leads), count, timeoutMs);
  }

  async longPressLeadsList(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OpportunityListPage.L.leadsList));
  }

  async expectLeadsListValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OpportunityListPage.L.leadsList), value, timeoutMs);
  }

  async expectLeadsListEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OpportunityListPage.L.leadsList), timeoutMs);
  }

  async expectLeadsListDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OpportunityListPage.L.leadsList), timeoutMs);
  }

  async expectLeadsListChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OpportunityListPage.L.leadsList), timeoutMs);
  }

  async expectLeadsListUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OpportunityListPage.L.leadsList), timeoutMs);
  }

  async expectLeadsListFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OpportunityListPage.L.leadsList), timeoutMs);
  }

  async expectLeadsListCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OpportunityListPage.L.leadsList), count, timeoutMs);
  }

  async longPressTasks(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OpportunityListPage.L.tasks));
  }

  async expectTasksValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OpportunityListPage.L.tasks), value, timeoutMs);
  }

  async expectTasksEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OpportunityListPage.L.tasks), timeoutMs);
  }

  async expectTasksDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OpportunityListPage.L.tasks), timeoutMs);
  }

  async expectTasksChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OpportunityListPage.L.tasks), timeoutMs);
  }

  async expectTasksUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OpportunityListPage.L.tasks), timeoutMs);
  }

  async expectTasksFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OpportunityListPage.L.tasks), timeoutMs);
  }

  async expectTasksCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OpportunityListPage.L.tasks), count, timeoutMs);
  }

  async longPressTasksList(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OpportunityListPage.L.tasksList));
  }

  async expectTasksListValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OpportunityListPage.L.tasksList), value, timeoutMs);
  }

  async expectTasksListEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OpportunityListPage.L.tasksList), timeoutMs);
  }

  async expectTasksListDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OpportunityListPage.L.tasksList), timeoutMs);
  }

  async expectTasksListChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OpportunityListPage.L.tasksList), timeoutMs);
  }

  async expectTasksListUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OpportunityListPage.L.tasksList), timeoutMs);
  }

  async expectTasksListFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OpportunityListPage.L.tasksList), timeoutMs);
  }

  async expectTasksListCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OpportunityListPage.L.tasksList), count, timeoutMs);
  }

  async longPressFiles(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OpportunityListPage.L.files));
  }

  async expectFilesValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OpportunityListPage.L.files), value, timeoutMs);
  }

  async expectFilesEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OpportunityListPage.L.files), timeoutMs);
  }

  async expectFilesDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OpportunityListPage.L.files), timeoutMs);
  }

  async expectFilesChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OpportunityListPage.L.files), timeoutMs);
  }

  async expectFilesUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OpportunityListPage.L.files), timeoutMs);
  }

  async expectFilesFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OpportunityListPage.L.files), timeoutMs);
  }

  async expectFilesCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OpportunityListPage.L.files), count, timeoutMs);
  }

  async longPressFilesList(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OpportunityListPage.L.filesList));
  }

  async expectFilesListValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OpportunityListPage.L.filesList), value, timeoutMs);
  }

  async expectFilesListEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OpportunityListPage.L.filesList), timeoutMs);
  }

  async expectFilesListDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OpportunityListPage.L.filesList), timeoutMs);
  }

  async expectFilesListChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OpportunityListPage.L.filesList), timeoutMs);
  }

  async expectFilesListUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OpportunityListPage.L.filesList), timeoutMs);
  }

  async expectFilesListFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OpportunityListPage.L.filesList), timeoutMs);
  }

  async expectFilesListCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OpportunityListPage.L.filesList), count, timeoutMs);
  }

  async longPressAccounts(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OpportunityListPage.L.accounts));
  }

  async expectAccountsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OpportunityListPage.L.accounts), value, timeoutMs);
  }

  async expectAccountsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OpportunityListPage.L.accounts), timeoutMs);
  }

  async expectAccountsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OpportunityListPage.L.accounts), timeoutMs);
  }

  async expectAccountsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OpportunityListPage.L.accounts), timeoutMs);
  }

  async expectAccountsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OpportunityListPage.L.accounts), timeoutMs);
  }

  async expectAccountsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OpportunityListPage.L.accounts), timeoutMs);
  }

  async expectAccountsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OpportunityListPage.L.accounts), count, timeoutMs);
  }

  async longPressAccountsList(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OpportunityListPage.L.accountsList));
  }

  async expectAccountsListValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OpportunityListPage.L.accountsList), value, timeoutMs);
  }

  async expectAccountsListEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OpportunityListPage.L.accountsList), timeoutMs);
  }

  async expectAccountsListDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OpportunityListPage.L.accountsList), timeoutMs);
  }

  async expectAccountsListChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OpportunityListPage.L.accountsList), timeoutMs);
  }

  async expectAccountsListUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OpportunityListPage.L.accountsList), timeoutMs);
  }

  async expectAccountsListFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OpportunityListPage.L.accountsList), timeoutMs);
  }

  async expectAccountsListCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OpportunityListPage.L.accountsList), count, timeoutMs);
  }

  async longPressContacts(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OpportunityListPage.L.contacts));
  }

  async expectContactsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OpportunityListPage.L.contacts), value, timeoutMs);
  }

  async expectContactsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OpportunityListPage.L.contacts), timeoutMs);
  }

  async expectContactsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OpportunityListPage.L.contacts), timeoutMs);
  }

  async expectContactsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OpportunityListPage.L.contacts), timeoutMs);
  }

  async expectContactsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OpportunityListPage.L.contacts), timeoutMs);
  }

  async expectContactsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OpportunityListPage.L.contacts), timeoutMs);
  }

  async expectContactsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OpportunityListPage.L.contacts), count, timeoutMs);
  }

  async longPressContactsList(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OpportunityListPage.L.contactsList));
  }

  async expectContactsListValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OpportunityListPage.L.contactsList), value, timeoutMs);
  }

  async expectContactsListEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OpportunityListPage.L.contactsList), timeoutMs);
  }

  async expectContactsListDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OpportunityListPage.L.contactsList), timeoutMs);
  }

  async expectContactsListChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OpportunityListPage.L.contactsList), timeoutMs);
  }

  async expectContactsListUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OpportunityListPage.L.contactsList), timeoutMs);
  }

  async expectContactsListFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OpportunityListPage.L.contactsList), timeoutMs);
  }

  async expectContactsListCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OpportunityListPage.L.contactsList), count, timeoutMs);
  }

  async longPressCampaigns(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OpportunityListPage.L.campaigns));
  }

  async expectCampaignsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OpportunityListPage.L.campaigns), value, timeoutMs);
  }

  async expectCampaignsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OpportunityListPage.L.campaigns), timeoutMs);
  }

  async expectCampaignsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OpportunityListPage.L.campaigns), timeoutMs);
  }

  async expectCampaignsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OpportunityListPage.L.campaigns), timeoutMs);
  }

  async expectCampaignsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OpportunityListPage.L.campaigns), timeoutMs);
  }

  async expectCampaignsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OpportunityListPage.L.campaigns), timeoutMs);
  }

  async expectCampaignsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OpportunityListPage.L.campaigns), count, timeoutMs);
  }

  async longPressCampaignsList(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OpportunityListPage.L.campaignsList));
  }

  async expectCampaignsListValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OpportunityListPage.L.campaignsList), value, timeoutMs);
  }

  async expectCampaignsListEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OpportunityListPage.L.campaignsList), timeoutMs);
  }

  async expectCampaignsListDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OpportunityListPage.L.campaignsList), timeoutMs);
  }

  async expectCampaignsListChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OpportunityListPage.L.campaignsList), timeoutMs);
  }

  async expectCampaignsListUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OpportunityListPage.L.campaignsList), timeoutMs);
  }

  async expectCampaignsListFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OpportunityListPage.L.campaignsList), timeoutMs);
  }

  async expectCampaignsListCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OpportunityListPage.L.campaignsList), count, timeoutMs);
  }

  async longPressDashboards(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OpportunityListPage.L.dashboards));
  }

  async expectDashboardsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OpportunityListPage.L.dashboards), value, timeoutMs);
  }

  async expectDashboardsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OpportunityListPage.L.dashboards), timeoutMs);
  }

  async expectDashboardsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OpportunityListPage.L.dashboards), timeoutMs);
  }

  async expectDashboardsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OpportunityListPage.L.dashboards), timeoutMs);
  }

  async expectDashboardsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OpportunityListPage.L.dashboards), timeoutMs);
  }

  async expectDashboardsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OpportunityListPage.L.dashboards), timeoutMs);
  }

  async expectDashboardsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OpportunityListPage.L.dashboards), count, timeoutMs);
  }

  async longPressDashboardsList(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OpportunityListPage.L.dashboardsList));
  }

  async expectDashboardsListValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OpportunityListPage.L.dashboardsList), value, timeoutMs);
  }

  async expectDashboardsListEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OpportunityListPage.L.dashboardsList), timeoutMs);
  }

  async expectDashboardsListDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OpportunityListPage.L.dashboardsList), timeoutMs);
  }

  async expectDashboardsListChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OpportunityListPage.L.dashboardsList), timeoutMs);
  }

  async expectDashboardsListUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OpportunityListPage.L.dashboardsList), timeoutMs);
  }

  async expectDashboardsListFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OpportunityListPage.L.dashboardsList), timeoutMs);
  }

  async expectDashboardsListCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OpportunityListPage.L.dashboardsList), count, timeoutMs);
  }

  async longPressReports(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OpportunityListPage.L.reports));
  }

  async expectReportsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OpportunityListPage.L.reports), value, timeoutMs);
  }

  async expectReportsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OpportunityListPage.L.reports), timeoutMs);
  }

  async expectReportsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OpportunityListPage.L.reports), timeoutMs);
  }

  async expectReportsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OpportunityListPage.L.reports), timeoutMs);
  }

  async expectReportsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OpportunityListPage.L.reports), timeoutMs);
  }

  async expectReportsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OpportunityListPage.L.reports), timeoutMs);
  }

  async expectReportsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OpportunityListPage.L.reports), count, timeoutMs);
  }

  async longPressReportsList(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OpportunityListPage.L.reportsList));
  }

  async expectReportsListValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OpportunityListPage.L.reportsList), value, timeoutMs);
  }

  async expectReportsListEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OpportunityListPage.L.reportsList), timeoutMs);
  }

  async expectReportsListDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OpportunityListPage.L.reportsList), timeoutMs);
  }

  async expectReportsListChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OpportunityListPage.L.reportsList), timeoutMs);
  }

  async expectReportsListUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OpportunityListPage.L.reportsList), timeoutMs);
  }

  async expectReportsListFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OpportunityListPage.L.reportsList), timeoutMs);
  }

  async expectReportsListCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OpportunityListPage.L.reportsList), count, timeoutMs);
  }

  async longPressMoreShowMoreNavigation(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OpportunityListPage.L.moreShowMoreNavigation));
  }

  async expectMoreShowMoreNavigationValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OpportunityListPage.L.moreShowMoreNavigation), value, timeoutMs);
  }

  async expectMoreShowMoreNavigationEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OpportunityListPage.L.moreShowMoreNavigation), timeoutMs);
  }

  async expectMoreShowMoreNavigationDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OpportunityListPage.L.moreShowMoreNavigation), timeoutMs);
  }

  async expectMoreShowMoreNavigationChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OpportunityListPage.L.moreShowMoreNavigation), timeoutMs);
  }

  async expectMoreShowMoreNavigationUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OpportunityListPage.L.moreShowMoreNavigation), timeoutMs);
  }

  async expectMoreShowMoreNavigationFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OpportunityListPage.L.moreShowMoreNavigation), timeoutMs);
  }

  async expectMoreShowMoreNavigationCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OpportunityListPage.L.moreShowMoreNavigation), count, timeoutMs);
  }

  async longPressPersonalizeYourNavBar(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OpportunityListPage.L.personalizeYourNavBar));
  }

  async expectPersonalizeYourNavBarValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OpportunityListPage.L.personalizeYourNavBar), value, timeoutMs);
  }

  async expectPersonalizeYourNavBarChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OpportunityListPage.L.personalizeYourNavBar), timeoutMs);
  }

  async expectPersonalizeYourNavBarUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OpportunityListPage.L.personalizeYourNavBar), timeoutMs);
  }

  async expectPersonalizeYourNavBarFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OpportunityListPage.L.personalizeYourNavBar), timeoutMs);
  }

  async expectPersonalizeYourNavBarCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OpportunityListPage.L.personalizeYourNavBar), count, timeoutMs);
  }

  async clickOpportunitiesRecentlyViewed(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OpportunityListPage.L.opportunitiesRecentlyViewed));
  }

  async doubleClickOpportunitiesRecentlyViewed(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OpportunityListPage.L.opportunitiesRecentlyViewed));
  }

  async longPressOpportunitiesRecentlyViewed(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OpportunityListPage.L.opportunitiesRecentlyViewed));
  }

  async expectOpportunitiesRecentlyViewedValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OpportunityListPage.L.opportunitiesRecentlyViewed), value, timeoutMs);
  }

  async expectOpportunitiesRecentlyViewedEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OpportunityListPage.L.opportunitiesRecentlyViewed), timeoutMs);
  }

  async expectOpportunitiesRecentlyViewedDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OpportunityListPage.L.opportunitiesRecentlyViewed), timeoutMs);
  }

  async expectOpportunitiesRecentlyViewedChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OpportunityListPage.L.opportunitiesRecentlyViewed), timeoutMs);
  }

  async expectOpportunitiesRecentlyViewedUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OpportunityListPage.L.opportunitiesRecentlyViewed), timeoutMs);
  }

  async expectOpportunitiesRecentlyViewedFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OpportunityListPage.L.opportunitiesRecentlyViewed), timeoutMs);
  }

  async expectOpportunitiesRecentlyViewedCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OpportunityListPage.L.opportunitiesRecentlyViewed), count, timeoutMs);
  }

  async clickRecentlyViewed(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OpportunityListPage.L.recentlyViewed));
  }

  async doubleClickRecentlyViewed(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OpportunityListPage.L.recentlyViewed));
  }

  async longPressRecentlyViewed(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OpportunityListPage.L.recentlyViewed));
  }

  async expectRecentlyViewedValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OpportunityListPage.L.recentlyViewed), value, timeoutMs);
  }

  async expectRecentlyViewedEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OpportunityListPage.L.recentlyViewed), timeoutMs);
  }

  async expectRecentlyViewedDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OpportunityListPage.L.recentlyViewed), timeoutMs);
  }

  async expectRecentlyViewedChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OpportunityListPage.L.recentlyViewed), timeoutMs);
  }

  async expectRecentlyViewedUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OpportunityListPage.L.recentlyViewed), timeoutMs);
  }

  async expectRecentlyViewedFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OpportunityListPage.L.recentlyViewed), timeoutMs);
  }

  async expectRecentlyViewedCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OpportunityListPage.L.recentlyViewed), count, timeoutMs);
  }

  async longPressSelectAListView(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OpportunityListPage.L.selectAListView));
  }

  async expectSelectAListViewValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OpportunityListPage.L.selectAListView), value, timeoutMs);
  }

  async expectSelectAListViewChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OpportunityListPage.L.selectAListView), timeoutMs);
  }

  async expectSelectAListViewUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OpportunityListPage.L.selectAListView), timeoutMs);
  }

  async expectSelectAListViewFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OpportunityListPage.L.selectAListView), timeoutMs);
  }

  async expectSelectAListViewCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OpportunityListPage.L.selectAListView), count, timeoutMs);
  }

  async longPressThisListIsPinned(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OpportunityListPage.L.thisListIsPinned));
  }

  async expectThisListIsPinnedValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OpportunityListPage.L.thisListIsPinned), value, timeoutMs);
  }

  async expectThisListIsPinnedChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OpportunityListPage.L.thisListIsPinned), timeoutMs);
  }

  async expectThisListIsPinnedUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OpportunityListPage.L.thisListIsPinned), timeoutMs);
  }

  async expectThisListIsPinnedFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OpportunityListPage.L.thisListIsPinned), timeoutMs);
  }

  async expectThisListIsPinnedCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OpportunityListPage.L.thisListIsPinned), count, timeoutMs);
  }

  async longPressNew(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OpportunityListPage.L.new));
  }

  async expectNewValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OpportunityListPage.L.new), value, timeoutMs);
  }

  async expectNewEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OpportunityListPage.L.new), timeoutMs);
  }

  async expectNewDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OpportunityListPage.L.new), timeoutMs);
  }

  async expectNewChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OpportunityListPage.L.new), timeoutMs);
  }

  async expectNewUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OpportunityListPage.L.new), timeoutMs);
  }

  async expectNewFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OpportunityListPage.L.new), timeoutMs);
  }

  async expectNewCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OpportunityListPage.L.new), count, timeoutMs);
  }

  async longPressAssignLabel(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OpportunityListPage.L.assignLabel));
  }

  async expectAssignLabelValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OpportunityListPage.L.assignLabel), value, timeoutMs);
  }

  async expectAssignLabelEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OpportunityListPage.L.assignLabel), timeoutMs);
  }

  async expectAssignLabelDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OpportunityListPage.L.assignLabel), timeoutMs);
  }

  async expectAssignLabelChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OpportunityListPage.L.assignLabel), timeoutMs);
  }

  async expectAssignLabelUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OpportunityListPage.L.assignLabel), timeoutMs);
  }

  async expectAssignLabelFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OpportunityListPage.L.assignLabel), timeoutMs);
  }

  async expectAssignLabelCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OpportunityListPage.L.assignLabel), count, timeoutMs);
  }

  async clickItemsUpdated(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OpportunityListPage.L.ItemsUpdated));
  }

  async doubleClickItemsUpdated(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OpportunityListPage.L.ItemsUpdated));
  }

  async longPressItemsUpdated(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OpportunityListPage.L.ItemsUpdated));
  }

  async expectItemsUpdatedValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OpportunityListPage.L.ItemsUpdated), value, timeoutMs);
  }

  async expectItemsUpdatedEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OpportunityListPage.L.ItemsUpdated), timeoutMs);
  }

  async expectItemsUpdatedDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OpportunityListPage.L.ItemsUpdated), timeoutMs);
  }

  async expectItemsUpdatedChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OpportunityListPage.L.ItemsUpdated), timeoutMs);
  }

  async expectItemsUpdatedUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OpportunityListPage.L.ItemsUpdated), timeoutMs);
  }

  async expectItemsUpdatedFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OpportunityListPage.L.ItemsUpdated), timeoutMs);
  }

  async expectItemsUpdatedCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OpportunityListPage.L.ItemsUpdated), count, timeoutMs);
  }

  async clickItems(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OpportunityListPage.L.Items));
  }

  async doubleClickItems(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OpportunityListPage.L.Items));
  }

  async longPressItems(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OpportunityListPage.L.Items));
  }

  async expectItemsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OpportunityListPage.L.Items), value, timeoutMs);
  }

  async expectItemsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OpportunityListPage.L.Items), timeoutMs);
  }

  async expectItemsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OpportunityListPage.L.Items), timeoutMs);
  }

  async expectItemsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OpportunityListPage.L.Items), timeoutMs);
  }

  async expectItemsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OpportunityListPage.L.Items), timeoutMs);
  }

  async expectItemsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OpportunityListPage.L.Items), timeoutMs);
  }

  async expectItemsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OpportunityListPage.L.Items), count, timeoutMs);
  }

  async clickUpdatedAFewSeconds(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OpportunityListPage.L.updatedAFewSeconds));
  }

  async doubleClickUpdatedAFewSeconds(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OpportunityListPage.L.updatedAFewSeconds));
  }

  async longPressUpdatedAFewSeconds(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OpportunityListPage.L.updatedAFewSeconds));
  }

  async expectUpdatedAFewSecondsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OpportunityListPage.L.updatedAFewSeconds), value, timeoutMs);
  }

  async expectUpdatedAFewSecondsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OpportunityListPage.L.updatedAFewSeconds), timeoutMs);
  }

  async expectUpdatedAFewSecondsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OpportunityListPage.L.updatedAFewSeconds), timeoutMs);
  }

  async expectUpdatedAFewSecondsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OpportunityListPage.L.updatedAFewSeconds), timeoutMs);
  }

  async expectUpdatedAFewSecondsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OpportunityListPage.L.updatedAFewSeconds), timeoutMs);
  }

  async expectUpdatedAFewSecondsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OpportunityListPage.L.updatedAFewSeconds), timeoutMs);
  }

  async expectUpdatedAFewSecondsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OpportunityListPage.L.updatedAFewSeconds), count, timeoutMs);
  }

  async expectOpportunitySearchInputText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, OpportunityListPage.L.opportunitySearchInput), expected, timeoutMs);
  }

  async expectOpportunitySearchInputContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, OpportunityListPage.L.opportunitySearchInput), substring, timeoutMs);
  }

  async expectOpportunitySearchInputChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OpportunityListPage.L.opportunitySearchInput), timeoutMs);
  }

  async expectOpportunitySearchInputUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OpportunityListPage.L.opportunitySearchInput), timeoutMs);
  }

  async expectOpportunitySearchInputCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OpportunityListPage.L.opportunitySearchInput), count, timeoutMs);
  }

  async longPressListViewControls(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OpportunityListPage.L.listViewControls));
  }

  async expectListViewControlsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OpportunityListPage.L.listViewControls), value, timeoutMs);
  }

  async expectListViewControlsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OpportunityListPage.L.listViewControls), timeoutMs);
  }

  async expectListViewControlsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OpportunityListPage.L.listViewControls), timeoutMs);
  }

  async expectListViewControlsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OpportunityListPage.L.listViewControls), timeoutMs);
  }

  async expectListViewControlsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OpportunityListPage.L.listViewControls), count, timeoutMs);
  }

  async longPressSelectListDisplay(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OpportunityListPage.L.selectListDisplay));
  }

  async expectSelectListDisplayValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OpportunityListPage.L.selectListDisplay), value, timeoutMs);
  }

  async expectSelectListDisplayChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OpportunityListPage.L.selectListDisplay), timeoutMs);
  }

  async expectSelectListDisplayUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OpportunityListPage.L.selectListDisplay), timeoutMs);
  }

  async expectSelectListDisplayFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OpportunityListPage.L.selectListDisplay), timeoutMs);
  }

  async expectSelectListDisplayCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OpportunityListPage.L.selectListDisplay), count, timeoutMs);
  }

  async longPressRefreshButton(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OpportunityListPage.L.refreshButton));
  }

  async expectRefreshButtonValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OpportunityListPage.L.refreshButton), value, timeoutMs);
  }

  async expectRefreshButtonChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OpportunityListPage.L.refreshButton), timeoutMs);
  }

  async expectRefreshButtonUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OpportunityListPage.L.refreshButton), timeoutMs);
  }

  async expectRefreshButtonFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OpportunityListPage.L.refreshButton), timeoutMs);
  }

  async expectRefreshButtonCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OpportunityListPage.L.refreshButton), count, timeoutMs);
  }

  async longPressMultiColumnSortButton(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OpportunityListPage.L.multiColumnSortButton));
  }

  async expectMultiColumnSortButtonValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OpportunityListPage.L.multiColumnSortButton), value, timeoutMs);
  }

  async expectMultiColumnSortButtonChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OpportunityListPage.L.multiColumnSortButton), timeoutMs);
  }

  async expectMultiColumnSortButtonUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OpportunityListPage.L.multiColumnSortButton), timeoutMs);
  }

  async expectMultiColumnSortButtonFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OpportunityListPage.L.multiColumnSortButton), timeoutMs);
  }

  async expectMultiColumnSortButtonCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OpportunityListPage.L.multiColumnSortButton), count, timeoutMs);
  }

  async longPressInlineEditButton(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OpportunityListPage.L.inlineEditButton));
  }

  async expectInlineEditButtonValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OpportunityListPage.L.inlineEditButton), value, timeoutMs);
  }

  async expectInlineEditButtonChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OpportunityListPage.L.inlineEditButton), timeoutMs);
  }

  async expectInlineEditButtonUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OpportunityListPage.L.inlineEditButton), timeoutMs);
  }

  async expectInlineEditButtonFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OpportunityListPage.L.inlineEditButton), timeoutMs);
  }

  async expectInlineEditButtonCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OpportunityListPage.L.inlineEditButton), count, timeoutMs);
  }

  async clickNothingToSeeHere(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OpportunityListPage.L.nothingToSeeHere));
  }

  async doubleClickNothingToSeeHere(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OpportunityListPage.L.nothingToSeeHere));
  }

  async longPressNothingToSeeHere(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OpportunityListPage.L.nothingToSeeHere));
  }

  async expectNothingToSeeHereValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OpportunityListPage.L.nothingToSeeHere), value, timeoutMs);
  }

  async expectNothingToSeeHereEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OpportunityListPage.L.nothingToSeeHere), timeoutMs);
  }

  async expectNothingToSeeHereDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OpportunityListPage.L.nothingToSeeHere), timeoutMs);
  }

  async expectNothingToSeeHereChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OpportunityListPage.L.nothingToSeeHere), timeoutMs);
  }

  async expectNothingToSeeHereUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OpportunityListPage.L.nothingToSeeHere), timeoutMs);
  }

  async expectNothingToSeeHereFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OpportunityListPage.L.nothingToSeeHere), timeoutMs);
  }

  async expectNothingToSeeHereCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OpportunityListPage.L.nothingToSeeHere), count, timeoutMs);
  }

  async clickThereSNothingInYour(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, OpportunityListPage.L.thereSNothingInYour));
  }

  async doubleClickThereSNothingInYour(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, OpportunityListPage.L.thereSNothingInYour));
  }

  async longPressThereSNothingInYour(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OpportunityListPage.L.thereSNothingInYour));
  }

  async expectThereSNothingInYourValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OpportunityListPage.L.thereSNothingInYour), value, timeoutMs);
  }

  async expectThereSNothingInYourEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, OpportunityListPage.L.thereSNothingInYour), timeoutMs);
  }

  async expectThereSNothingInYourDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, OpportunityListPage.L.thereSNothingInYour), timeoutMs);
  }

  async expectThereSNothingInYourChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OpportunityListPage.L.thereSNothingInYour), timeoutMs);
  }

  async expectThereSNothingInYourUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OpportunityListPage.L.thereSNothingInYour), timeoutMs);
  }

  async expectThereSNothingInYourFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OpportunityListPage.L.thereSNothingInYour), timeoutMs);
  }

  async expectThereSNothingInYourCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OpportunityListPage.L.thereSNothingInYour), count, timeoutMs);
  }

  async longPressToDoList(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, OpportunityListPage.L.toDoList));
  }

  async expectToDoListValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, OpportunityListPage.L.toDoList), value, timeoutMs);
  }

  async expectToDoListChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, OpportunityListPage.L.toDoList), timeoutMs);
  }

  async expectToDoListUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, OpportunityListPage.L.toDoList), timeoutMs);
  }

  async expectToDoListFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, OpportunityListPage.L.toDoList), timeoutMs);
  }

  async expectToDoListCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, OpportunityListPage.L.toDoList), count, timeoutMs);
  }

}
