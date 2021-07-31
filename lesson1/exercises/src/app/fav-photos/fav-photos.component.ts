import { Component, OnInit } from "@angular/core";

@Component({
  selector: "fav-photos",
  templateUrl: "./fav-photos.component.html",
  styleUrls: ["./fav-photos.component.css"],
})
export class FavPhotosComponent implements OnInit {
  photosTitle = "My favorite photos";
  image1 =
    "https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png";
  image2 =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfMgz69Vu2ADKI0ywdKy9NDvp8hhpwZg6gZA&usqp=CAU";
  image3 =
    "https://i.pinimg.com/originals/5b/b4/8b/5bb48b07fa6e3840bb3afa2bc821b882.jpg";

  constructor() {}

  ngOnInit() {}
}
