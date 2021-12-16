export const experiences =
    [{
        "companyName": "VBT Yazılım A.Ş.",
        "date": "Aug 2021 - Now  | " + calculate("Aug 2021", new Date()) + " mos",
        "description": "I am working as a full stack using Java, .Net Core and Vue technologies.(I use Java and Spring Framework more than .Net Core)",
        "position": "Software Development Engineer"
    }, {
        "companyName": "VBT Yazılım A.Ş.",
        "date": "Jun 2021 – Jul 2021 | 2 mos ",
        "description": " Developed a project management application (Kanban) by working with a team using Spring Boot and Vue We attended basic C#, Redis, RabbitMq, MSSQL, design patterns, micro services and project management trainings",
        "position": "Intern"
    }, {
        "companyName": "Phexum Yazılım Ltd. Şti",
        "date": "Feb 2021 - May 2021 | 4 mos ",
        "description": "This long-term internship takes place between the dates of 15.02.2021-28.05.2021.Using Spring Boot and Vue technologies, awe developed a web application.",
        "position": "Intern"
    }, {
        "companyName": "Phexum Yazılım Ltd. Şti",
        "date": "Jun 2019 - July 2019 | 4 mos ",
        "description": "We developed an android application in Java language, I developed a spam mail management script in the JavaScript language and I learned to use Docker.",
        "position": "Intern"
    }]

function calculate(d1, d2) {
    var date1 = new Date(d1);
    var date2 = new Date(d2);
    const diffTime = Math.abs(date2 - date1);
    const diffMonths = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30));
    return diffMonths;
}