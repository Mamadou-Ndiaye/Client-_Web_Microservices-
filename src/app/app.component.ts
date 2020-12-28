import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {EtudiantsService} from "./services/etudiants.service";
import {Etudiant} from "./classes/Etudiant";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'clientWebService';

  signUp: boolean=false;

  //Gestion de la pagination de documents
  public  size:number=20;
  public  currentPage:number=0;
  public  totalPages:number=0;
  public  pages?:Array<number>;
  public etudiants: any;
  private id: any;

  constructor(private  etudiantsService:EtudiantsService) {

  }

  ngOnInit(): void {
    this.getetudiants()
  }

  getetudiants()
  {

    this.etudiantsService.getAlletudiants(this.currentPage,this.size).subscribe(
      data=>{
        console.log(data);
        this.etudiants= data;
      },error => { console.log(error)});
  }

  // Methode d'inscription
  etudiant: Etudiant = new Etudiant();

  save(dataForm: Etudiant) {

    console.log("inscription "  + dataForm);
   this.etudiantsService.createUser(dataForm).subscribe(
      data =>{ console.log(data)
        this.getetudiants();
      },
      error =>{ console.log(error)}
      );


  }


  // onDeleteEtudiant(e: any) {
  //
  //   let  conf=confirm("Etes vous sure ?");
  //   if(conf)
  //   {
  //     console.log(e);
  //     //this.etudiantsService.deleteResssouce(p._links.self.href)
  //      // .subscribe(data=>{
  //        // this.chercherProduit()
  //      // },error => {
  //        // console.log(error);
  //       //});
  //
  //   }
  //
  // }



  onSignUp() {
    this.signUp=true;
  }

  onDeleteEtudiant(id: any) {
    let  conf=confirm("Etes vous sure ?");
    if(conf)
    {
      console.log(id);

    this.etudiantsService.delete(id)
      .subscribe(
        data => {
          console.log(data);
          this.getetudiants();
        },
        error => console.log(error));
    }
  }

  onUpdateEtudiant(id: any) {
    console.log(id);
    this.id= id;
    console.log("Ud "+id);


  }

  update(value: any) {
    this.etudiantsService.update(this.id,value)
      .subscribe(
        data => {
          console.log(data);
          this.getetudiants();
        },
        error => console.log(error));


  }
}
