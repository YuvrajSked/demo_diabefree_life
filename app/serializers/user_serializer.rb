class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :role, :status, :created_at, :avatar_url

  def avatar_url
    # You can implement avatar URL logic here (e.g., using Gravatar or Active Storage)
    nil
  end
end
