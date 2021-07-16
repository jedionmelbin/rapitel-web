import {Component, OnInit} from '@angular/core';
import {EvidencesService} from "../../services/evidences.service";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-pictures',
  templateUrl: './pictures.component.html',
  styleUrls: ['./pictures.component.css']
})
export class PicturesComponent implements OnInit {

  evidences: any;

  constructor(private evidencesService: EvidencesService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    let id = this.route.snapshot.params.id;
    this.listAll(id);
  }

  listAll(id: any) {
    this.evidencesService.listAll(id).subscribe((response) => {
      this.evidences = response;
    });
  }
}
