class Faq < ApplicationRecord
  # Validations
  validates :question, presence: true, length: { minimum: 10, maximum: 1000 }
  validates :answer, presence: true, length: { minimum: 10, maximum: 5000 }
  validates :position, numericality: { only_integer: true, greater_than_or_equal_to: 0 }

  # Scopes
  scope :active, -> { where(active: true) }
  scope :ordered, -> { order(position: :asc, created_at: :desc) }
  scope :active_ordered, -> { active.ordered }

  # Callbacks
  before_validation :set_default_position, on: :create

  def self.ransackable_attributes(auth_object = nil)
    [ "active", "answer", "created_at", "id", "position", "question", "updated_at" ]
  end

  private

  def set_default_position
    self.position ||= (Faq.maximum(:position) || -1) + 1
  end
end
