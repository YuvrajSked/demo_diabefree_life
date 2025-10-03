import { BaseService } from './base';
import { Testimonial } from '../types';

export class TestimonialService extends BaseService {
  async getTestimonials(): Promise<Testimonial[]> {
    const response = await this.fetchApi<Testimonial[]>('/testimonials');
    if (response.error) {
      console.error('Failed to fetch testimonials:', response.error);
      return [];
    }
    return response.data || [];
  }

  async getTestimonial(id: number): Promise<Testimonial | null> {
    const response = await this.fetchApi<Testimonial>(`/testimonials/${id}`);
    if (response.error) {
      console.error(`Failed to fetch testimonial ${id}:`, response.error);
      return null;
    }
    return response.data || null;
  }
}

export const testimonialService = new TestimonialService();
