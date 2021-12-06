export interface AuthInfo {
    isFetched: boolean,
    error: string,
    user: User
}
export interface User {
    id: string,
    email: string,
    token: string,
    displayName: string,
    photoUrl?: string,
}