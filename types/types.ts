export interface Note {
  userId: string,
	id: number,
	title: string,
	body: string
}

export interface AppState {
  isLoggedIn: boolean;
  user: {
    username: string;
    email: string;
  } | null;
  error: string | null;
  isInitialized: boolean;
  initializeAuth: () => Promise<void>;
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => Promise<void>;
}