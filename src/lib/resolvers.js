"use strict";

const courses = [
  {
    _id: 1,
    title: "Course GraphQl",
    teacher: "Oscar Raygoza",
    description: "xd!",
    topic: "testimg",
  },
  {
    _id: 2,
    title: "Course GrapfdsfdsfhQl",
    teacher: "few_testewtewtew",
    description: "xfdsfdsftew:_sdfd!",
    topic: "_tew",
  },
  {
    _id: 3,
    title: "Course tewtwGradfsdfdsphQl",
    teacher: "tewfaegs",
    description: "xfsdfsdd!",
    topic: "tesfdsfsdfdsfdsfdsfsdfdstimg",
  },
];

module.exports = {
  getCourses: () => {
    "retorna todos los cursos disponibles";
    return courses;
  },
};
