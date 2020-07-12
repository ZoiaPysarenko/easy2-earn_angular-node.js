import { Injectable } from '@angular/core';
import { Work } from './../work';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WorksService {

  private worksList: Work[] = []

  // private worksList: Work[] = [
  //   {
  //     id: 1,
  //     title: "Easy2λearn (Android)",
  //     description: "An android application designed for learning English words. Easy and joyful way to increase kids vocabulary via games and competions",
  //     imageUrl: "../../../assets/images/app_bg.jpg"
  //   },
  //   {
  //     id: 2,
  //     title: "Easy2λearn (IOS)",
  //     description: "An IOS application designed for learning English words. Easy and joyful way to increase kids vocabulary via games and competions",
  //     imageUrl: "../../../assets/images/app_bg.jpg"
  //   },
  //   {
  //     id: 3,
  //     title: "Easy2λearn Kids Club",
  //     description: "Classes for kids 0+. Early development, language courses, educational meetings and dozens of specialists who love what they do!",
  //     imageUrl: "../../../assets/images/app_bg.jpg"
  //   },
  //   {
  //     id: 4,
  //     title: "Easy2λearn Materials",
  //     description: "Educational materials, projects and ideas for teachers and parents. Hundreds of innovations based on the experience of the past",
  //     imageUrl: "../../../assets/images/app_bg.jpg"
  //   }
  // ];

  getWorks(){
    return [...this.worksList];
  }

  addWord(work: Work){
    this.worksList.push(work);
  }

  constructor(private http: HttpClient) { }

  loadWorksList(){
    const url = 'https://easy2learn-portfolio.herokuapp.com/api/works';
    return this.http.get<Work[]>(url);
  }
}
