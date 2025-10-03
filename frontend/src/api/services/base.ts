import { ApiResponse } from '../types';
import { config } from '../../../config';

const API_BASE_URL = config.apiUrl;

export class BaseService {
  protected async fetchApi<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
        ...options,
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        return {
          error: data.error || `API Error: ${response.statusText}`,
          status: response.status,
        };
      }

      return { data, status: response.status };
    } catch (error) {
      console.error('API Request Error:', error);
      return {
        error: error instanceof Error ? error.message : 'An unknown error occurred',
        status: 500,
      };
    }
  }
}
