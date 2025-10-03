class Api::V1::TestimonialsController < ApplicationController
  before_action :set_testimonial, only: [ :show ]

  def index
    @testimonials = Testimonial.all
    render json: @testimonials
  end

  def show
    render json: @testimonial
  end

  private

  def set_testimonial
    @testimonial = Testimonial.find(params[:id])
  end
end
