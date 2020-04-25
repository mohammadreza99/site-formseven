import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'light-box',
  templateUrl: './light-box.component.html',
  styleUrls: ['./light-box.component.scss']
})

export class LightBoxComponent implements OnInit {
  slideIndex = 1;
  slides: any;
  show: boolean = true
  @Input() images: string[];

  ngOnInit() {
    this.showSlides(this.slideIndex);

  }

  openModal() {
    document.getElementById('myModal').style.transform = "scale(1)";
    document.getElementById('myModal').style.opacity = "1";
    if (this.images.length == 1) {
      this.show = false;
    }
    else {
      this.show = true;
    }
  }

  closeModal() {
    document.getElementById('myModal').style.transform = "scale(0)";
    document.getElementById('myModal').style.opacity = "0";
  }

  plusSlides(n) {
    this.showSlides(this.slideIndex += n);
  }

  currentSlide(n) {
    this.showSlides(this.slideIndex = n);
  }

  showSlides(n) {
    this.slides = document.getElementsByClassName("mySlides");
    if (this.slides.length == 0)
      return;
    if (n > this.slides.length) { this.slideIndex = 1 }
    if (n < 1) { this.slideIndex = this.slides.length }
    for (let i = 0; i < this.slides.length; i++) {
      this.slides[i].setAttribute("style", "display:none");
    }
    this.slides[this.slideIndex - 1].setAttribute("style", "display:block");
  }
}
