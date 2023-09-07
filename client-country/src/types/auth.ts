export class AuthClass {
  sessionId: string
  isLogged: boolean
  constructor(isLogged: boolean = false, sessionId: string = '') {
    this.sessionId = sessionId
    this.isLogged = isLogged
  }

  getIsLogged(): boolean {
    return this.isLogged
  }

  getSessionId(): string {
    return this.sessionId
  }

  static deserialize(data: AuthClass): AuthClass {
    return new AuthClass(data.isLogged, data.sessionId)
  }
}
