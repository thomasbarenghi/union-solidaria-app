const Routes = {
  HOME: "/",
  ABOUT: "/about",
  INITIATIVES: "/initiatives",
  CREATE_INITIATIVE: "/initiatives/create",
  INDIVIDUAL_INITIATIVE: (id: string) => `/initiatives/${id}`,
  HELP: "/help",
  LOGOUT: "/logout",
  LOGIN: "/login",
  REGISTER: "/register",
  ACCOUNT: "/account",
  EDIT_ACCOUNT: "/account",
  PROFILE: (username: string) => `/@${username}`,
  DASHBOARD: "/dashboard",
  FEED: "/feed",
  INSTITUTIONAL: "/institutional",
  DONATION: "/donation",
  INSTITUTIONAL_TYC: "/institutional/TYC",
  INSTITUTIONAL_PDP: "/institutional/PDP",
  LEGAL: "/legal",
};

export default Routes;
