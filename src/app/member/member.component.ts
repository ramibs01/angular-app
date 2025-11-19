import { Component } from '@angular/core';
import {Member} from "../../Modeles/Member";
import {MatTableModule} from '@angular/material/table';
@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent {
  //declarer un tableau membre
  dataSource:Member[]=[
    {id:"1231",
    cin:"A12345",
    name:"John Doe",
    type:"admin",
    cv:"link_to_cv",
    createdDate:"2023-10-01"
    }
    ,{
    id:"1232",
    cin:"B67890",
    name:"Jane Smith",
    type:"user",
    cv:"link_to_cv",
    createdDate:"2023-11-15"
    }]
  displayedColumns: string[] = ['id', 'cin', 'name', 'type', 'cv', 'createdDate'];
}
