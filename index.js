const {
  sequelize,
  Student,
  Group,
  Subject,
  StudentSubjects,
  Sequelize: { Op },
} = require('./models');

// sequelize
//   .sync({ force: true })
//   .then(() => console.log('Sync OK)'))
//   .catch(e => console.log('e :>> ', e));

(async () => {
  const group1 = { title: 'pe2022-1', enteredAt: '2022-09-24' };
  const group2 = { title: 'pe2022-2', enteredAt: '2022-11-24' };

  const student1 = {
    firstName: 'Wally',
    lastName: 'Doe',
    email: 'test1@test.test',
    birthday: '2006-05-10',
    isMale: true,
    activitiesCount: 3,
    groupId: 1,
  };
  const student2 = {
    firstName: 'Wally',
    lastName: 'Doe',
    email: 'test2@test.test',
    birthday: '2006-05-10',
    isMale: true,
    activitiesCount: 3,
    groupId: 1,
  };
  const student3 = {
    firstName: 'Wally',
    lastName: 'Doe',
    email: 'test3@test.test',
    birthday: '2006-05-10',
    isMale: true,
    activitiesCount: 3,
    groupId: 2,
  };

  const subject1 = { title: 'Data Bases', hours: 100 };
  const subject2 = { title: 'Web-programming', hours: 150 };

  const studSubj1 = { studentId: 1, subjectId: 1, mark: 100 };
  const studSubj2 = { studentId: 1, subjectId: 2, mark: 90 };
  const studSubj3 = { studentId: 2, subjectId: 1, mark: 85 };
  const studSubj4 = { studentId: 2, subjectId: 2, mark: 88 };

  await Group.create(group1);
  await Group.create(group2);

  await Student.create(student1);
  await Student.create(student2);
  await Student.create(student3);

  await Subject.create(subject1);
  await Subject.create(subject2);

  await StudentSubjects.create(studSubj1);
  await StudentSubjects.create(studSubj2);
  await StudentSubjects.create(studSubj3);
  await StudentSubjects.create(studSubj4);

  // Eager loading (JOIN)
  // const studWithGroup = await Student.findAll({ raw: true, include: Group });
  // console.log('studWithGroup :>> ', studWithGroup);

  // Отримати список груп з студентами
  // const groupWithStud = await Group.findAll({
  //   raw: true,
  //   include: Student,
  // });
  // console.log('groupWithStud :>> ', groupWithStud);

  // Lazy loading

  // Student.belongsTo(Group) => student.getGroup(),...
  // const studInst1 = await Student.findByPk(1);
  // console.log('studInst1 :>> ', studInst1);

  // const groupOfStud = await studInst1.getGroup();
  // console.log('groupOfStud :>> ', groupOfStud.get());

  // Group.hasMany(Student) => group.getStudents(),...
  // const groupInst1 = await Group.findByPk(1);
  // const studsOfGroup = await groupInst1.getStudents({ raw: true });
  // console.log('studsOfGroup :>> ', studsOfGroup);
})();

// students n : 1 groups
// students m : n subjects
//           mark
