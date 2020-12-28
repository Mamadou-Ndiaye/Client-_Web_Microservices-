import { Component, OnInit } from '@angular/core';
import {EtudiantsService} from "../services/etudiants.service";


@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent implements OnInit {

  //Gestion de la pagination de documents
  public  size:number=20;
  public  currentPage:number=0;
  public  totalPages:number=0;
  public  pages?:Array<number>;
  public etudiants: any;

  constructor(private  etudiantsService:EtudiantsService) { }

  ngOnInit(): void {
  }

  getetudiants()
  {

    this.etudiantsService.getAlletudiants(this.currentPage,this.size).subscribe(
      data=>{
        console.log(data);
        this.etudiants= data;
      },error => { console.log(error)});
  }


}
