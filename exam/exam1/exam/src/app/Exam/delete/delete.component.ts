import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {CarService} from "../service/car.service";

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  car: any = {};
  id: number

  constructor(private activatedRoute: ActivatedRoute,
              private carService: CarService,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
        this.id = +paramMap.get("id")
        this.carService.findById(this.id).subscribe(next => {
          this.car = next
        })
      }
    )
  }

  ngOnInit(): void {
  }

  cancelDelete() {
    this.router.navigateByUrl("/")
  }

  delete() {
    this.carService.delete(this.id).subscribe(next => {
      alert("Đã xóa thành công")
      this.router.navigateByUrl('/')
      window.location.reload()
    }, error => console.log('Xóa không thành công, lỗi: ' + error))
  }

}
