import { Component, OnInit } from '@angular/core';
import { Package } from '../model/package';
import { PackageService } from '../service/package.service';

@Component({
  selector: 'app-packages-list',
  templateUrl: './packages-list.component.html',
  styleUrls: ['./packages-list.component.css']
})
export class PackagesListComponent implements OnInit {

  packages!:Package[];

  constructor(private packageService:PackageService) { }

  ngOnInit() {
    this.packageService.getAll().subscribe(
      (data) =>{
        this.packages=data;
      }
    );
  }

}
