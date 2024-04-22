import {Component} from '@angular/core';
import {RouterOutlet} from "@angular/router"
import { CheckboxModule } from 'primeng/checkbox';
import {StyleClassModule} from 'primeng/styleclass';
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";


@Component({
  standalone: true,
  selector: 'app-login',
  imports: [RouterOutlet, CheckboxModule, StyleClassModule, InputTextModule, ButtonModule, RippleModule],
  templateUrl: './login.component.html'
})
export class LoginComponent {

}
