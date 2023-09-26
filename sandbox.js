phones n : 1 processors

SQL: CREATE TABLE phones (
  ... 
  processor_id INTEGER REFERENCES processors(id) ON DELETE RESTRICT ON UPDATE CASCADE)

1 Models:
- 1 processors: Processor.hasMany(Phone)   => processor.getPhones()
- phones n    : Phone.belongsTo(Processor) => phone.getProcesor()

2 Migrations:
  phones:
  procesor_id: {
    type: Sequelize.INTEGER,
    references: {
      model: 'processors',
      key: 'id'
    },
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE'
  }
  