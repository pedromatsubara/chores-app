import axios from "axios";
import { UserProfile } from "../../interfaces/userInterface/userProfile";
import { User } from "../../interfaces/userInterface/userList";

const API_URL = "http://localhost:3001/";

export const fetchUserProfile = async (userId: string): Promise<UserProfile> => {
  const response = await axios.get<UserProfile>(`${API_URL}users/${userId}`);
  return response.data;
};

export const fetchUsers = async (): Promise<User[]> => {
  const response = await axios.get<User[]>(`${API_URL}users`);
  return response.data;
};

export const deleteUser = async (userId: string): Promise<void> => {
  await axios.delete(`${API_URL}users/${userId}`);
};