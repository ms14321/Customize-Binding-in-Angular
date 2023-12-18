import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  Courses = [
    {
      id: 1,
      name: 'Introduction to Angular',
      author: 'John Doe',
      duration: 10,
      type: 'Free',
      price: 0,
      rating: 4.5,
      image: 'https://picsum.photos/200/300?image=100',
      description: 'Learn the fundamentals of Angular and build your first web application.'
    },
    {
      id: 2,
      name: 'Angular Advanced Concepts',
      author: 'Jane Smith',
      duration: 15,
      type: 'Premium',
      price: 49.99,
      rating: 4.8,
      image: 'https://picsum.photos/200/300?image=200',
      description: 'Dive into advanced Angular concepts such as reactive programming, component communication, and routing.'
    },
    {
      id: 3,
      name: 'Building Real-World Angular Applications',
      author: 'Peter Jones',
      duration: 20,
      type: 'Premium',
      price: 59.99,
      rating: 5.0,
      image: 'https://picsum.photos/200/300?image=300',
      description: 'Learn how to build and deploy real-world Angular applications with industry best practices.'
    },
    {
      id: 4,
      name: 'Mastering React',
      author: 'Sarah Williams',
      duration: 12,
      type: 'Free',
      price: 0,
      rating: 4.7,
      image: 'https://picsum.photos/200/300?image=400',
      description: 'Learn how to create and deploy interactive and performant React applications.'
    },
    {
      id: 5, 
      author: 'David Miller',
      duration: 15,
      type: 'Premium',
      price: 45.99,
      rating: 4.9,
      image: 'https://picsum.photos/200/300?image=500',
      description: 'Learn the core concepts of Vue.js and build modern and maintainable web applications.'
    },
    {
      id: 6,
      name: 'Node.js Essential Training',
      author: 'Michael Brown',
      duration: 18,
      type: 'Free',
      price: 0,
      rating: 4.6,
      image: 'https://picsum.photos/200/300?image=600',
      description: 'Learn the fundamentals of Node.js and build server-side JavaScript applications.'
    },
    {
      id: 7,
      name: 'Express.js: Building Web APIs',
      author: 'Jessica Smith',
      duration: 12,
      type: 'Premium',
      price: 39.99,
      rating: 4.8,
      image: 'https://picsum.photos/200/300?image=700',
      description: 'Learn how to create RESTful APIs using Express.js and connect them to your applications.'
    },
    {
      id: 8,
      name: 'MongoDB Masterclass',
      author: 'Andrew Thomas',
      duration: 16,
      type: 'Premium',
      price: 47.99,
      rating: 4.9,
      image: 'https://picsum.photos/200/300?image=800',
      description: 'Learn how to use MongoDB to store and manage data for your applications.'
    }
  ]
  getTotalCourses(){
    return this.Courses.length;

  }
  getTotalFreeCourses(){
    return this.Courses.filter(course => course.type=== 'Free').length;

  }

  getTotalPremiumCourses(){
    return this.Courses.filter(course => course.type=== 'Premium').length;

  }

  courseCountRadionButton: string = 'All';
  searchText: string = '';

  onFilterRadiochanged(data: string){
    this.courseCountRadionButton = data;
    // console.log(this.courseCountRadionButton);

  }

  onSearchTextEntered(SearchValue: string){
    this.searchText = SearchValue;
    console.log(this.searchText);

  }


}
