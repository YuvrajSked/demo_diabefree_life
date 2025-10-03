class Api::V1::ProgramsController < ApplicationController
  before_action :set_program, only: [ :show ]

  def index
    @programs = Program.where(active: true)
    render json: @programs
  end

  def show
    render json: @program
  end

  private

  def set_program
    @program = Program.find(params[:id])
  end
end
