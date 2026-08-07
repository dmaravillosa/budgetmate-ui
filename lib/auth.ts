export const AUTH_COOKIE_NAME = "budgetmate-auth";

export function createAuthToken() {
  return `bm-${crypto.randomUUID()}`;
}

export function validateAuthToken(token?: string) {
  return typeof token === "string" && token.startsWith("bm-");
}
