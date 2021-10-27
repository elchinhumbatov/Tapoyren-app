import Category from "../models/category";
import SubCategory from "../models/subcategory";
import Course from "../models/course";
import Section from "../models/section";

export const CATEGORIES = [
  new Category("c1", "Finance", "#f5428d"),
  new Category("c2", "Information Technologies sadasad asdsad", "#f54242"),
  new Category("c3", "Languages", "#f5a443"),
  new Category("c4", "Other", "#f5fa00"),
];

export const SUBCATEGORIES = [
  new SubCategory("s1", "c1", "ACCA"),
  new SubCategory("s2", "c1", "CFA"),
  new SubCategory("s3", "c1", "DipIFR"),
  new SubCategory("s4", "c2", "CS50"),
  new SubCategory("s5", "c2", "Introduction to Programming asdasd"),
  new SubCategory("s6", "c2", "IT essentials"),
];

export const COURSES = [
  new Course(
    "m1",
    ["s1"],
    "ACCA accounting",
    9.99,
    "https://tapoyren.com/uploads/images/iZWaywgtZHCmYAEfokkeK146PWfbb0fEiDY50n7c.jpeg",
    120,
    false,
    false
  ),
  new Course(
    "m2",
    ["s1"],
    "ACCA Financial Reporting",
    9.99,
    "https://tapoyren.com/uploads/images/iZWaywgtZHCmYAEfokkeK146PWfbb0fEiDY50n7c.jpeg",
    105,
    false,
    false
  ),
  new Course(
    "m3",
    ["s1"],
    "ACCA Management Accounting",
    7.99,
    "https://tapoyren.com/uploads/images/UsuuZRlojXkQ5YCkIsfzWJ0bi7raaSWkjZfFflT8.jpeg",
    110,
    false,
    false
  ),
  new Course(
    "m4",
    ["s5"],
    "R və SQL giriş kursu",
    13.99,
    "https://tapoyren.com/uploads/images/CtR3Ke0xnNHfOhbekNy4wwdzWqZ7nxK2JGqWctAP.png",
    90,
    false,
    false
  ),
  new Course(
    "m5",
    ["s5"],
    "iOS Development, SWIFT",
    13.99,
    "https://tapoyren.com/uploads/images/VggDoutSYkwTvh9BW14K3sBTtjtLEzHQ8MnszVpH.jpeg",
    90,
    false,
    false
  ),
  new Course(
    "m6",
    ["s5"],
    "HTML and CSS course",
    13.99,
    "https://tapoyren.com/uploads/images/MEAVBe7kzNFXNGxB9IKjoqBHGIUHioohypsyVPIz.png",
    90,
    false,
    false
  ),
  new Course(
    "m7",
    ["s5"],
    "JS - JavaScript",
    13.99,
    "https://tapoyren.com/uploads/images/aRhL6RqeeNDOjgvoRgUBjXgUBleXxMTTv33iklUq.jpeg",
    90,
    false,
    false
  ),
  new Course(
    "m8",
    ["s4"],
    "Alteryx Designer",
    13.99,
    "https://tapoyren.com/uploads/images/C38wbN3jz0AJIBo98BzCSVGTM5PmmlogxvOqt79O.jpeg",
    90,
    false,
    false
  ),
  new Course(
    "m9",
    ["s4"],
    "Cyber Security (Kibernetik Mühafizə)",
    13.99,
    "https://tapoyren.com/uploads/images/dzQAA4J1sa5kzHntti2w7RNHq4in3ZVmQ1NCCZ0D.jpeg",
    90,
    false,
    false
  ),
  new Course(
    "m10",
    ["s6"],
    "Learn HTML- Beginner to Advanced",
    13.99,
    "https://tapoyren.com/uploads/images/og0j1kbNtw0XIbRvSwbTMStfiZ7i8Gaq3hc6fODS.jpeg",
    90,
    false,
    false
  ),
];

export const SECTIONS = [
  new Section(
    "p1",
    "m1",
    "5462",
    "1 - Introduction to Accounting",
    "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
  ),
  new Section("p2", "m1", "5462", "2 - The Regulatory Framework"),
  new Section(
    "p3",
    "m1",
    "5462",
    "3 - The Qualitative Characteristics of Financial İnformation",
    "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4"
  ),
  new Section(
    "p4",
    "m1",
    "5462",
    "4 - Sources, Records and Books of Prime Entry"
  ),
];

export const COURSE = [
  {
    id: 'm1',
    img: "https://tapoyren.com/uploads/images/lkJcXsCCfuREaG6oCWxbZSCn9XQuYCsXMGFAW0ft.jpeg",
    instructor: "Jamal Alishov",
    about: 'ACCA FM Financial Management (F9) BPP Revision Kit suallarının izahlı həllərini burada göstəririk. (Qeyd olaraq istəyənlər üçün bütün kursların olduğu ACCA tam paketi linki: ACCA Paketi - tıklayın)',
  },
  {
    id: 'm2',
    img: "https://tapoyren.com/uploads/images/lkJcXsCCfuREaG6oCWxbZSCn9XQuYCsXMGFAW0ft.jpeg",
    instructor: "John Doe",
    about: 'ACCA FM Financial Management (F9) BPP Revision Kit suallarının izahlı həllərini burada göstəririk. (Qeyd olaraq istəyənlər üçün bütün kursların olduğu ACCA tam paketi linki: ACCA Paketi - tıklayın)',
  },
  {
    id: 'm3',
    img: "https://tapoyren.com/uploads/images/lkJcXsCCfuREaG6oCWxbZSCn9XQuYCsXMGFAW0ft.jpeg",
    instructor: "Someone Else",
    about: 'ACCA FM Financial Management (F9) BPP Revision Kit suallarının izahlı həllərini burada göstəririk. (Qeyd olaraq istəyənlər üçün bütün kursların olduğu ACCA tam paketi linki: ACCA Paketi - tıklayın)',
  },
];
