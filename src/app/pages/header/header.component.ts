import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup } from '@angular/forms';

const DARK = 'dark';
const LIGHT = 'light';
const $body = document.body;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isChecked: boolean = true;
  headerForm!: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.selectedTheme();
  }

  selectedTheme() {
    const isThemeSelected: any = sessionStorage.getItem('isDarkModeSelected');
    const selected = JSON.parse(isThemeSelected);
    if (selected) $body.setAttribute('data-theme', DARK);
    else $body.setAttribute('data-theme', LIGHT);
    this.initForm(selected);
  }

  initForm(data: any) {
    this.headerForm = this.fb.group({
      selectedTheme: [data || ''],
    });
  }
  handleSelection(event: any) {
    $body.setAttribute('data-theme', event.target.checked ? DARK : LIGHT);
    sessionStorage.setItem(
      'isDarkModeSelected',
      JSON.stringify(event.target.checked)
    );
  }
}
