export function requireToken() {
    const token = useCookie(tokenLabel).value;
    if(token != null) {
        return token;
    }
    throw new Error();
}

export function setToken(token: string) {
    const session = useCookie(tokenLabel);
    session.value = token;
}

export const tokenLabel = 'pawparadise-token';