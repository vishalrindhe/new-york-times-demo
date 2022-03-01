import { DataService } from './../../service/data.service';
import { Component, HostListener, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { ViewportScroller } from '@angular/common';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  info: any;
  isShow!: boolean;
  topPosToStartShowing = 100;
  menuValue='home'
  topStoryData:any
  topStoryData1:any
  currentDate = new Date();

  constructor(private data: DataService, private spinner: NgxSpinnerService,private viewportScroller: ViewportScroller) { }

  ngOnInit(): void {
    this.spinner.show();
    this.addItem(this.menuValue);
    // this.data.topStoriesArts().subscribe((info: any) => {
    //   this.info = info
    //   console.log(this.info);
    //   this.spinner.hide();
    // })

  }
  @HostListener('window:scroll')
  checkScroll() {
      
    // window의 scroll top
    // Both window.pageYOffset and document.documentElement.scrollTop returns the same result in all the cases. window.pageYOffset is not supported below IE 9.

    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    // console.log('[scroll]', scrollPosition);
    
    if (scrollPosition >= this.topPosToStartShowing) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }

  scrollToTop(): void {
    window.scrollTo({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }


  addItem(newItem: string) {
    this.spinner.show();

    // this.items.push(newItem);
    this.menuValue = newItem
    // alert(this.menuValue)
    if(newItem == 'home'){
      this.data.mostPopularViewed().subscribe(val =>{
        this.topStoryData = val
      // console.log("homeVal:",this.topStoryData);
      this.spinner.hide()   
      })
      this.data.archive().subscribe(val =>{
        this.topStoryData1 = val
      console.log("archive:",this.topStoryData1.response.docs[0]);
      this.spinner.hide()   
      })
    }else{
    this.data.topStories(newItem).subscribe(val =>{
      this.topStoryData = val
      // console.log("val:",this.topStoryData);
      this.spinner.hide()   
    })
  }

  }

  timeDifference(val:any){
    var startDate = new Date(this.currentDate);

    var endDate = new Date(val);
    // console.log(startDate+":"+endDate);
    var Time = Math.abs((endDate.getTime() - startDate.getTime())/3600000);
    return Time
  }


}
