module Api
  module V1
    class FaqsController < ApplicationController
      before_action :set_faq, only: [ :show ]
      skip_before_action :verify_authenticity_token

      # GET /api/v1/faqs
      def index
        @faqs = Faq.active_ordered
        render json: @faqs, status: :ok
      end

      # GET /api/v1/faqs/active
      def active
        @faqs = Faq.active_ordered
        render json: @faqs, status: :ok
      end

      # GET /api/v1/faqs/:id
      def show
        render json: @faq, status: :ok
      end

      private

      def set_faq
        @faq = Faq.find(params[:id])
      rescue ActiveRecord::RecordNotFound
        render json: { error: "FAQ not found" }, status: :not_found
      end
    end
  end
end
