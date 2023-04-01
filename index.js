const {
  sequelize,
  Student,
  Sequelize: { Op },
} = require('./models');

// CREATE TABLE IF NOT EXISTS "Students" (
//   "id"   SERIAL ,
//   "firstName" VARCHAR(64) NOT NULL,
//   "lastName" VARCHAR(64),
//   "email" VARCHAR(128) NOT NULL UNIQUE,
//   "birthday" DATE,
//   "isMale" BOOLEAN,
//   "activitiesCount" INTEGER DEFAULT 0,
//   "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL,
//   "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL,
//   PRIMARY KEY ("id")
// );

// sequelize
//   .sync({ force: true })
//   .then(() => console.log('Sync OK)'))
//   .catch(e => console.log('e :>> ', e));

// CRUD - create, findAll(findByPk), update / upsert, destroy;

(async () => {
  const student = {
    firstName: 'Wally',
    lastName: 'Doe',
    email: 'test11@test.test',
    birthday: '2006-05-10',
    isMale: true,
    activitiesCount: 3,
  };

  // C - INSERT - create

  // INSERT INTO "Students" ("id","firstName","lastName","email","birthday","isMale","activitiesCount","createdAt","updatedAt")
  // VALUES (DEFAULT,$1,$2,$3,$4,$5,$6,$7,$8)
  // RETURNING "id","firstName","lastName","email","birthday","isMale","activitiesCount","createdAt","updatedAt";

  // const createdStudent = await Student.create(student);
  // console.log('createdStudent :>> ', createdStudent.get());

  // R - SELECT - findAll ------------------------------------------------------------------

  // SELECT "id", "firstName", "lastName", "email", "birthday", "isMale", "activitiesCount", "createdAt", "updatedAt"
  // FROM "Students" AS "Student";

  // const foundStudents = await Student.findAll({ raw: true });
  // console.log('foundStudents :>> ', foundStudents);

  // Пагінація + сортування

  // SELECT "id", "firstName", "lastName", "email", "birthday", "isMale", "activitiesCount", "createdAt", "updatedAt"
  // FROM "Students" AS "Student"
  // ORDER BY "Student"."id" ASC, "Student"."birthday" DESC
  // LIMIT 2 OFFSET 0;

  // const foundStudents = await Student.findAll({
  //   raw: true,
  //   limit: 2,
  //   offset: 0,
  //   order: [
  //     ['id', 'ASC'],
  //     ['birthday', 'DESC'],
  //   ],
  // });

  // console.log('foundStudents :>> ', foundStudents);

  // Task: Додати дані в таблицю і отримати другу сторінку при перегляді по 3 рядки,
  //       впорядкувавши за іменем

  // const foundStudents = await Student.findAll({
  //   raw: true,
  //   limit: 3,
  //   offset: 3,
  //   order: ['firstName'],
  // });

  // console.log('foundStudents :>> ', foundStudents);

  // Фільтрація

  // const foundStudents = await Student.findAll({
  //   raw: true,
  //   where: { id: 3 },
  // });

  // console.log('foundStudents :>> ', foundStudents);

  // AND

  // const foundStudents = await Student.findAll({
  //   raw: true,
  //   where: { firstName: 'John', activitiesCount: 2 },
  // });

  // console.log('foundStudents :>> ', foundStudents);

  // OR
  // const foundStudents = await Student.findAll({
  //   raw: true,
  //   where: { firstName: { [Op.or]: ['John', 'Ann'] } },
  // });

  // console.log('foundStudents :>> ', foundStudents);

  // Вивести чоловіків або у кого кількість активностей = 4
  // const foundStudents = await Student.findAll({
  //   raw: true,
  //   where: { [Op.or]: [{ isMale: false }, { activitiesCount: 4 }] },
  // });
  // console.log('foundStudents :>> ', foundStudents);

  // Проекція
  // const foundStudents = await Student.findAll({
  //   raw: true,
  //   attributes: ['email', 'id'],
  // });

  // console.log('foundStudents :>> ', foundStudents);

  // Виключення з результату
  // const foundStudents = await Student.findAll({
  //   raw: true,
  //   attributes: { exclude: ['createdAt', 'updatedAt'] },
  // });

  // console.log('foundStudents :>> ', foundStudents);

  // Додавання до результату
  // const foundStudents = await Student.findAll({
  //   raw: true,
  //   attributes: {
  //     include: [[sequelize.fn('age', sequelize.col('birthday')), 'stud_age']],
  //   },
  // });

  // console.log('foundStudents :>> ', foundStudents);

  const foundStudents = await Student.findAll({
    raw: true,
    attributes: {
      include: [
        [sequelize.literal('EXTRACT (YEAR FROM age(birthday))'), 'stud_age'],
      ],
    },
  });

  console.log('foundStudents :>> ', foundStudents);
})();
