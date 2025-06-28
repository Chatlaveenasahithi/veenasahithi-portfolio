import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrls: ['./experience.scss'],
})
export class Experience {
  experiences = [
    {
      role: 'Packaged App Development Associate Intern',
      company: 'Accenture',
      duration: 'Feb 2025 – June 2025',
      location: 'Hyderabad, Telangana',
      responsibilities: [
        'Developed and customized 3+ dynamic web forms using Adobe Experience Manager (AEM).',
        'Contributed to QA testing and delivered sprint objectives in agile teams.'
      ]
    },
    {
      role: 'Machine Learning Intern',
      company: 'Maganti IT Solutions',
      duration: 'May 2024 – June 2024',
      location: 'Vijayawada, Andhra Pradesh',
      responsibilities: [
        'Engineered a data anonymization system using hashing techniques on retail datasets.',
        'Gained hands-on experience in data preprocessing, modeling, and evaluation.'
      ]
    }
  ];
}
