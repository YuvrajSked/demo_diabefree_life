import { BaseService } from './base';
import { Program } from '../types';

export class ProgramService extends BaseService {
  async getPrograms(): Promise<Program[]> {
    const response = await this.fetchApi<Program[]>('/programs');
    if (response.error) {
      console.error('Failed to fetch programs:', response.error);
      return [];
    }
    return response.data || [];
  }

  async getProgram(id: number): Promise<Program | null> {
    const response = await this.fetchApi<Program>(`/programs/${id}`);
    if (response.error) {
      console.error(`Failed to fetch program ${id}:`, response.error);
      return null;
    }
    return response.data || null;
  }
}

export const programService = new ProgramService();
