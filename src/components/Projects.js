import React, { Component } from 'react';
import ProjectCard from './ProjectCard';

const allProject = [
    {
        id:1,
        img: "./assets/weath.PNG",
        alt: "Weather Dashboard app",
        name: "Weather Dashboard",
        deployed: "https://maryvpie.github.io/wheather-dashboard/",
        repo: "https://github.com/MaryVPie/wheather-dashboard",
        description: "This weather dashboard application shows the current and five days weather forecast for various cities."
    },
    {
        id:2,
        img: "./assets/notetr.PNG",
        alt: "Note Taker app",
        name: "Note Taker",
        deployed: "https://note-taker-mvpie.herokuapp.com/",
        repo: "https://github.com/MaryVPie/note-taker",
        description: "This is an application called Note Taker that can be used to write and save notes."
    },
    {
        id:3,
        img: "./assets/Planner.PNG",
        alt: "Planner app",
        name: "Plan your workday",
        deployed: "https://maryvpie.github.io/planner/",
        repo: "https://github.com/MaryVPie/planner",
        description: "There is a calendar application that allows a user to save events for each hour of the day."
    },
    {
        id:4,
        img: "./assets/pasgen.PNG",
        alt: "password generator app",
        name: "Password Generator",
        deployed: "https://maryvpie.github.io/password-generator/Develop/",
        repo: "https://github.com/MaryVPie/password-generator",
        description: "There is an application generates random passwords based on selected criteria."
    },
    {
        id:5,
        img: "./assets/blog.PNG",
        alt: "Tech Blog app",
        name: "Tech Blog",
        deployed: "https://technical-blog-mvpie.herokuapp.com/",
        repo: "https://github.com/MaryVPie/MVC-tech-blog",
        description: "There is a blog site, where developers can publish their blog posts."
    },
    {
        id:6,
        img: "./assets/quiz.PNG",
        alt: "Quiz Game app",
        name: "Quiz Game",
        deployed: "https://maryvpie.github.io/Quiz-game/",
        repo: "https://github.com/MaryVPie/Quiz-game",
        description: "This is an application called Note Taker that can be used to write and save notes."
    },
    {
        id:7,
        img: "./assets/USREP.PNG",
        alt: "US Representatives app",
        name: "US Voter Representatives",
        deployed: "https://maryvpie.github.io/us-voter-representatives/",
        repo: "https://github.com/MaryVPie/us-voter-representatives",
        description: "This app helps US voters to be informed about their representatives."
    },
    {
        id:8,
        img: "./assets/tutor.PNG",
        alt: "Tutorade app",
        name: "Tutorade",
        deployed: "https://new-tutor.herokuapp.com/login",
        repo: "https://github.com/Conso97/Tutorade",
        description: "Finding a Tutor is so Refreshing! This app helps students and tutors connect with each other."
    }
];

class Projects extends Component {
  
  render() {
    
    return <div class="row  row-cols-1 row-cols-sm-2 row-cols-lg-3" >
       {allProject.map( ( projectInfo ) => (
					<ProjectCard
                    key={projectInfo.id}
                    img={projectInfo.img}
                    alt={projectInfo.alt}
                    name={projectInfo.name}
                    deployed={projectInfo.deployed}
                    repo={projectInfo.repo}
                    description={projectInfo.description} />
				) )}
    </div>
  }
}

export default Projects;