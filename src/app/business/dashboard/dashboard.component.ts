import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    title = 'Load script GFG';
       constructor() {
         this.loadScripts();
       }

       // Method to dynamically load JavaScript
       loadScripts() {

         // This array contains all the files/CDNs
         const dynamicScripts = [
            'assets/Chart.min.js',
            'assets/dashboard3.js'
         ];
         for (let i = 0; i < dynamicScripts.length; i++) {
           const node = document.createElement('script');
           node.src = dynamicScripts[i];
           node.type = 'text/javascript';
           node.async = false;
           document.getElementsByTagName('head')[0].appendChild(node);
         }
      }

  ngOnInit(): void {
  }

}
