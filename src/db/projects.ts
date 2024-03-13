import { Projects } from "../interfaces/Projects";

export const projects: Projects = {
    "portfolio": {
        coverSrc: "assets/imgs/projects/electron-certificate-project.png",
        title: "Portfolio",
        content: [
        {
            src: "project-1-img-1.jpg"
        },
        {
            text: "This is the first project"
        },
        {
            text: "This is the second project"
        },
        {
            text: "This is the third project"
        }
        ]
    },
    "project-2": {
        coverSrc: "project-2.jpg",
        title: "Project 2",
        content: [
        {
            src: "project-2-img-1.jpg"
        },
        {
            text: "This is the first project"
        },
        {
            text: "This is the second project"
        },
        {
            text: "This is the third project"
        }
        ]
    }
};