import { Component, OnInit } from '@angular/core';
import { PartnerService } from './partner.service';



@Component({
  selector: 'app-partner',
  templateUrl: './partner.component.html',
  styleUrls: ['./partner.component.css']
})
export class PartnerComponent implements OnInit {

  partner: any;
  type: any;

  /**
* Construtor
*
* @param {PartnerService} _service 
* 
*/
  constructor(
    private _service: PartnerService
  ) { }

  ngOnInit(): void {
    var partnerID = localStorage.getItem("id-partner");

    if (partnerID) {

      this.type = 'E';
      this._service.getPartnerById(partnerID).subscribe(resp => this.partner = resp)

    } else {
      this.type = 'C';
      this.partner = {}
    }

  }



  createPartner(obj: any) {

   this._service.createPartner(obj).subscribe(resp => {
      alert("Parceiro criado com sucesso")
      window.location.href = "/initial-page"
    }) 
  }


  updatePartner(id:string,obj: any) {

    this._service.updatePartner(id,obj).subscribe(resp => {
      alert("Parceiro atualizado com sucesso")
      window.location.href = "/initial-page"
    },erro => alert("Ocorreu um erro ao atualizar"))
  }
}
