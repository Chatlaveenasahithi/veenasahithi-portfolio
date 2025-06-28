import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrls: ['./skills.scss']
})
export class Skills {
  skills = [
    {
      name: 'C++',
      description: 'Efficient programming and problem solving using advanced data structures and algorithms.',
      usedIn: 'Competitive coding, core computer science concepts, academic projects',
    },
    {
      name: 'Python',
      description: 'Machine learning, data analysis, scripting, and automation.',
      usedIn: 'NLP Cyberbullying Detection, Chatbot development, Virtual Dressing Room',
    },
    {
      name: 'JavaScript',
      description: 'Dynamic and interactive web applications.',
      usedIn: 'Frontend development with Angular, backend scripting with Node.js',
    },
    {
      name: 'Node.js & Express',
      description: 'Backend APIs and microservices development.',
      usedIn: 'REST API design for chatbot and other projects',
    },
    {
      name: 'MongoDB & SQL',
      description: 'Database management and data storage solutions.',
      usedIn: 'Data-driven web applications and ML datasets',
    },
    {
      name: 'Machine Learning',
      description: 'Model training, evaluation, and deployment.',
      usedIn: 'Cyberbullying Detection, Predictive analytics projects',
    },
    {
      name: 'OpenCV & Computer Vision',
      description: 'Image processing and real-time pose estimation.',
      usedIn: 'Virtual Dressing Room, Hackathon projects',
    }
  ];
}
