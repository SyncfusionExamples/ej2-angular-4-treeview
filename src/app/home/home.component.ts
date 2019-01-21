import { Component, OnInit } from '@angular/core';
 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
  public treeData: Object[] = [
        {
            nodeId: '1', nodeText: 'Documents',
            nodeChild: [
                { nodeId: '11', nodeText: 'Team management.docx' },
                { nodeId: '12', nodeText: 'Entity Framework Core.pdf' },
            ]
        },
        {
            nodeId: '2', nodeText: 'Downloads',
            nodeChild: [
                { nodeId: '21', nodeText: 'Sales report.ppt' },
                { nodeId: '22', nodeText: 'Introduction to Angular.pdf' },
                { nodeId: '23', nodeText: 'Paint.exe' },
                { nodeId: '24', nodeText: 'TypeScript sample.zip' },
            ]
        },
        {
            nodeId: '3', nodeText: 'Music',
            nodeChild: [
                { nodeId: '31', nodeText: 'Crazy tone.mp3' }
            ]
        },
        {
            nodeId: '4', nodeText: 'Videos',
            nodeChild: [
                { nodeId: '41', nodeText: 'Angular tutorials.mp4' },
                { nodeId: '42', nodeText: 'Basics of Programming.mp4' },
            ]
        }
  ];
 
  public treeFields: Object = { 
    dataSource: this.treeData, 
    id: 'nodeId', 
    text: 'nodeText', 
    child: 'nodeChild'
  };
 
  constructor() { }
 
  ngOnInit() {
 
  }
 
}