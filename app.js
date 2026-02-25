const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

const teamInfoData = {
	1: {
		id: 1,
		name: 'Bogdan',
		role: 'Developer',
		bio: 'Bogdan is a skilled developer with expertise in JavaScript and Node.js. He enjoys building scalable web applications and is passionate about open-source projects.',
		skills: ['JavaScript', 'Node.js', 'Express', 'MongoDB'],
		photo: "bohdan.jpg",
		},
	2: {
		id: 2,
		name: 'Andrii',
		role: 'Designer',
		bio: 'Andrii is a talented designer with a keen eye for aesthetics and user experience. He has a background in graphic design and specializes in creating visually appealing interfaces.',
		skills: ['Graphic Design', 'UI/UX', 'Adobe Photoshop', 'Figma'],
		photo: "andrii.jpg",
	},
	3: {
		id: 3,
		name: 'Angelina',
		role: 'Project Manager',
		bio: 'Angelina is an experienced project manager who excels at coordinating teams and ensuring projects are delivered on time. She has a strong background in agile methodologies and is skilled at communication and organization.',
		skills: ['Project Management', 'Agile', 'Scrum', 'Communication'],
		photo: "angelina.jpg",
	},
	4: {
		id: 4,
		name: 'Artem',
		role: 'QA Engineer',
		bio: 'Artem is a meticulous QA engineer who is dedicated to ensuring the quality of software products. He has experience in both manual and automated testing and is proficient in various testing tools.',
		skills: ['Manual Testing', 'Automated Testing', 'Selenium', 'JIRA'],
		photo: "artem.jpg",
	},
};


app.get('/student/:id', (req, res) => {
    
    // Отримуємо ID з адреси (наприклад, з /student/2 беремо "2")
    const studentId = parseInt(req.params.id);

    // Шукаємо студента в масиві
    const foundStudent = teamInfoData[studentId];

    // Перевірка на помилку 
    if (!foundStudent) {
        // Можна відрендерити сторінку помилки або просто надіслати текст
        return res.status(404).send('<h1>Помилка 404: Такого студента у нас немає :(</h1><a href="/">На головну</a>');
    }

    // Якщо знайшли — рендеримо шаблон 'student.ejs' і передаємо дані
    res.render('student', { student: foundStudent });
});

app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});