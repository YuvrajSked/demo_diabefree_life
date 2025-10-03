import { BaseService } from './base';
import { Faq } from '../types';

export class FaqService extends BaseService {
  async getFaqs(): Promise<Faq[]> {
    const response = await this.fetchApi<Faq[]>('/faqs');
    if (response.error) {
      console.error('Failed to fetch FAQs:', response.error);
      return [];
    }
    return response.data || [];
  }

  async getFaq(id: number): Promise<Faq | null> {
    const response = await this.fetchApi<Faq>(`/faqs/${id}`);
    if (response.error) {
      console.error(`Failed to fetch FAQ ${id}:`, response.error);
      return null;
    }
    return response.data || null;
  }
}

export const faqService = new FaqService();
