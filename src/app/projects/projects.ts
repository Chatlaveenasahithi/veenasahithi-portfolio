import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],  
  templateUrl: './projects.html',
  styleUrls: ['./projects.scss'],
})
export class Projects {
  projects = [
    {
      title: 'Cyberbullying Detection on Twitter',
      description: `Developed an NLP pipeline using vectorization and lemmatization for tweet preprocessing.
        Trained Logistic Regression and SVM models, achieving 85%+ accuracy in abuse detection.
        Received a patent for this innovation.`,
      techStack: 'Python, Scikit-learn, NLP',
      link: 'https://github.com/Chatlaveenasahithi'
    },
    {
      title: 'College Chatbot for PVPSIT',
      description: `Built distributed NLP-powered chatbot to automate student queries, reducing manual workload by 60%.
        Implemented RESTful microservices to improve backend response times by 40%.`,
      techStack: 'Python, NLP, REST APIs, BeautifulSoup',
      link: 'https://github.com/Chatlaveenasahithi'
    },
    {
      title: 'Cloud-Based Virtual Dressing Room',
      description: `Integrated OpenCV and cvzone for real-time pose estimation and cloth fitting.
        Finalist in Hack’O Holic and Galgotias Hackathon for innovative Computer Vision project.`,
      techStack: 'OpenCV, Python, Computer Vision',
      link: 'https://github.com/Chatlaveenasahithi/Mynthra_Project'
    }
  ];
}
