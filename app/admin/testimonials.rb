ActiveAdmin.register Testimonial do
  # Specify parameters which should be permitted for assignment
  permit_params :name, :age, :location, :content, :hba1c_before, :hba1c_after, :weight_lost, :program_duration, :featured

  # or consider:
  #
  # permit_params do
  #   permitted = [:name, :age, :location, :content, :hba1c_before, :hba1c_after, :weight_lost, :program_duration, :featured]
  #   permitted << :other if params[:action] == 'create' && current_user.admin?
  #   permitted
  # end

  # For security, limit the actions that should be available
  actions :all, except: []

  # Add or remove filters to toggle their visibility
  filter :id
  filter :name
  filter :age
  filter :location
  filter :content
  filter :hba1c_before
  filter :hba1c_after
  filter :weight_lost
  filter :program_duration
  filter :featured
  filter :created_at
  filter :updated_at

  # Add or remove columns to toggle their visibility in the index action
  index do
    selectable_column
    id_column
    column :name
    column :age
    column :location
    column :hba1c_before
    column :hba1c_after
    column :weight_lost
    column :program_duration
    column :featured
    column :created_at
    column :updated_at
    actions
  end

  # Add or remove rows to toggle their visibility in the show action
  show do
    attributes_table_for(resource) do
      row :id
      row :name
      row :age
      row :location
      row :content
      row :hba1c_before
      row :hba1c_after
      row :weight_lost
      row :program_duration
      row :featured
      row :created_at
      row :updated_at
    end
  end

  # Add or remove fields to toggle their visibility in the form
  form do |f|
    f.semantic_errors(*f.object.errors.attribute_names)
    f.inputs do
      f.input :name
      f.input :age
      f.input :location
      f.input :content
      f.input :hba1c_before
      f.input :hba1c_after
      f.input :weight_lost
      f.input :program_duration
      f.input :featured
    end
    f.actions
  end
end
