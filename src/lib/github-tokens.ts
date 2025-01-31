type TokenStore = Record<string, string>;

const tokenStore: TokenStore = {};

export const tempDb = {
  async saveToken(userId: string, token: string) {
    tokenStore[userId] = token;
  },
  async getToken(userId: string) {
    return tokenStore[userId] || null;
  }
}; 