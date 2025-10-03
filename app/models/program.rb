class Program < ApplicationRecord
  # Enum
  enum :program_type, { basic: 0, comprehensive: 1, premium: 2 }
  # Validations
  validates :title, presence: true
  validates :description, presence: true
  validates :price, presence: true, numericality: { greater_than_or_equal_to: 0 }
  validates :duration, presence: true, numericality: { greater_than_or_equal_to: 0 }
  validates :program_type, presence: true

  # Scopes
  scope :active, -> { where(active: true) }
  scope :inactive, -> { where(active: false) }
  scope :by_type, ->(type) { where(program_type: type) }

  # Default values
  after_initialize :set_defaults, if: :new_record?

  def self.ransackable_attributes(auth_object = nil)
    %w[active created_at description duration features id id_value price program_type title updated_at]
  end

  private

  def set_defaults
    self.active = true if active.nil?
    self.program_type = :basic if program_type.nil?
  end
end
