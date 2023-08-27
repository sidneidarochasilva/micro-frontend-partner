import {  Component, OnInit } from '@angular/core';
import { PartnerService } from './table.service';



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  standalone: false
})
export class TableComponent implements OnInit {

  page = 1;
  itemsPerPage = 12;
  listPartners:any = [];


  /**
 * Construtor
 *
 * @param {PartnerService} _service 
 * 
 */
  constructor(
    private _service: PartnerService,
  ) {
  
  }


  ngOnInit(): void {
   
    this.getPartners();
    
    localStorage.removeItem("id-partner");

  }


  deletePartner(id: string) {
    
    this._service.deletePartner(id).subscribe(res => {
      alert("deletado com sucesso")
      this.getPartners();
    }, err => alert("ocorreu um erro ao deletar o registro"));

  }

  redirect(id: string) {
    localStorage.setItem("id-partner", id);
    window.location.href = '/partner';
  }


  getPartners() {
    this._service.getPartners().subscribe((resp: any) =>{
      this.listPartners = resp;
    });

  }


  convertToPtBrDateFormat(isoDate: string): string {
    const date = new Date(isoDate);
    const day = date.getUTCDate().toString().padStart(2, '0');
    const month = (date.getUTCMonth() + 1).toString().padStart(2, '0');
    const year = date.getUTCFullYear().toString();
  
    return `${day}/${month}/${year}`;
  }

}


