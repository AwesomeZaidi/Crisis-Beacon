import axios from 'axios';
import { API_URL } from '../constants/index';

export const fetchBeacons = async (
): Promise<any> => {
  let response = await axios.get(`${API_URL}/beacons`);
  return response.data;
};
