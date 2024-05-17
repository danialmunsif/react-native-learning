import {createSlice} from '@reduxjs/toolkit';

interface AuthState {
  email: string;
  name: string;
  bio: string;
  profileImage: string | null;
  socials: [] | null;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  email: '',
  name: '',
  bio: '',
  profileImage: null,
  socials: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    createAccount: (state, action) => {
      state.email = action.payload.email;
    },
    logout: state => {
      state.email = '';
      state.name = '';
      state.bio = '';
      state.profileImage = null;
      state.socials = null;
      state.isAuthenticated = false;
    },
    updateProfile: (state, action) => {
      state.name = action.payload.name;
      state.bio = action.payload.bio;
      state.profileImage = action.payload.profileImage;
    },
    updateSocial: (state, action) => {
      state.socials = action.payload.socials;
      state.isAuthenticated = true;
    },
  },
});

export const {createAccount, logout, updateProfile, updateSocial} =
  authSlice.actions;

export default authSlice.reducer;
