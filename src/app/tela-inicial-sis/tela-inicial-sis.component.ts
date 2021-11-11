import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-tela-incial',
  templateUrl: './tela-inicial-sis.component.html',
  styleUrls: ['./tela-inicial-sis.component.css']
})
export class TelaIncialComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router)
  {

  }

  ngOnInit(): void {
  }
  logout (){
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }

}
