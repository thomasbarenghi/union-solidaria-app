export type FetchLoginStatus = 200 | 401 | 500

export type FetchLogoutStatus = 200 | 401 | 500

export type FetchRegisterStatus = 201 | 400 | 500

export type FetchUserByEmailStatus = 200 | 400 | 404 | 500

// TODO: verify status returned by the server
export type FetchUpdateUserStatus = 200 | 400 | 404 | 500

export type FetchUpdatePasswordStatus = 200 | 400 | 404 | 500

export type FetchPostInitiativeStatus = 201 | 400 | 401 | 413 | 500
