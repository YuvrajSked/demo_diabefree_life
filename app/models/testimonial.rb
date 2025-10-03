class Testimonial < ApplicationRecord
  # Validations

  validates :name, presence: true
  validates :age, presence: true, numericality: { greater_than_or_equal_to: 0, less_than: 120 }
  validates :location, presence: true
  validates :content, presence: true
  validates :hba1c_before, presence: true, numericality: { greater_than_or_equal_to: 0 }
  validates :hba1c_after, presence: true, numericality: { greater_than_or_equal_to: 0 }
  validates :weight_lost, numericality: { greater_than_or_equal_to: 0 }, allow_blank: true
  validates :program_duration, presence: true, numericality: { greater_than_or_equal_to: 0 }

  # Scopes
  scope :featured, -> { where(featured: true) }
  scope :recent, -> { where("created_at > ?", 1.month.ago) }
  scope :high_improvement, -> { where("hba1c_before - hba1c_after > 3") }

  # Default values
  after_initialize :set_defaults, if: :new_record?
  def self.ransackable_attributes(auth_object = nil)
    %w[age content created_at featured hba1c_after hba1c_before id id_value location name program_duration updated_at weight_lost]
  end
  # Instance methods
  def hba1c_improvement
    return 0 unless hba1c_before && hba1c_after
    (hba1c_before - hba1c_after).round(1)
  end

  private

  def set_defaults
    self.featured = false if featured.nil?
  end
end
