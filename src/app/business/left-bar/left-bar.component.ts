import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-left-bar',
  templateUrl: './left-bar.component.html',
  styleUrls: ['./left-bar.component.css']
})
export class LeftBarComponent implements OnInit {

  title = 'Load script GFG';
         constructor() {
           //this.loadScripts();
         }
         loadScripts() {
           const dynamicScripts = [
             /*"assets/admin-lte/jquery.min.js",
             "assets/admin-lte/bootstrap.bundle.min.js",
             "assets/admin-lte/demo.js",
             "assets/admin-lte/dashboard3.js",
             "assets/admin-lte/adminlte.js",
             "assets/admin-lte/Chart.min.js"*/
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
