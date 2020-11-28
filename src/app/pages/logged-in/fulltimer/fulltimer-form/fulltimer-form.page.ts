import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, ModalController } from '@ionic/angular';
// service
import { AuthService } from "../../../../providers/auth.service";
import { CountryService } from 'src/app/providers/logged-in/country.service';
import { FulltimerService } from 'src/app/providers/logged-in/fulltimer.service';
// model
import { Fulltimer } from 'src/app/models/fulltimer';


@Component({
  selector: 'app-fulltimer-form',
  templateUrl: './fulltimer-form.page.html',
  styleUrls: ['./fulltimer-form.page.scss'],
})
export class FulltimerFormPage implements OnInit {

  public model: Fulltimer = new Fulltimer();

  public fulltimers: any = [];

  public operation: string;

  public fulltimerUUID = null;

  public form: FormGroup;

  public loading = false;

  public borderLimit = false;

  public countrylistData = [];

  constructor(
    public activatedRoute: ActivatedRoute,
    public fulltimerService: FulltimerService,
    private fb: FormBuilder,
    private modelCtrl: ModalController,
    private alertCtrl: AlertController,
    public countryService: CountryService,
    private authService: AuthService
  ) {
    this.fulltimerUUID = this.activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    // Load the passed model if available
    const state = window.history.state;

    if (state.model) {
      this.model = state.model;
    }

    this.loadCountryList();

    this.formInit();
  }

  formInit() {
    // Init Form
    if (!this.model.fulltimer_uuid) { // Show Create Form
      this.operation = 'Create';
      this.form = this.fb.group({
        nationality_id: ['', Validators.required],
        area_uuid: ['', Validators.required],
        country_id: ['', Validators.required],
        latitude: ['', Validators.required],
        longitude: ['', Validators.required],
        name: ['', Validators.required],
        phone: ['', Validators.required],
        email: ['', Validators.required],
        pdf_cv: ['', Validators.required]
      });
    } else { // Show Update Form
      this.operation = 'Update';
      this.form = this.fb.group({
        nationality_id: [this.model.nationality_id, Validators.required],
        area_uuid: [this.model.fulltimer_area_uuid, Validators.required],
        country_id: [this.model.country_id, Validators.required],
        latitude: [this.model.fulltimer_latitude, Validators.required],
        longitude: [this.model.fulltimer_longitude, Validators.required],
        name: [this.model.fulltimer_name, Validators.required],
        phone: [this.model.fulltimer_phone, Validators.required],
        email: [this.model.fulltimer_email, Validators.required],
        pdf_cv: [this.model.fulltimer_pdf_cv, Validators.required]
      });
    }
  }

  /**
   * Load list of countries
   */
  loadCountryList() {
    this.countryService.listAll().subscribe(response => {
      this.countrylistData = response;
    });
  }

  async updateResume() {
    window.history.pushState({ navigationId: window.history.state.navigationId }, null, window.location.pathname);

    const modal = await this.modalCtrl.create({
      component: UploadCvPage,
      componentProps: {
        candidate: this.model,
      }
    });
    modal.present();
    modal.onDidDismiss().then(e => {

      if (!e.data || e.data.from != 'native-back-btn') {
        window['history-back-from'] = 'onDidDismiss';
        window.history.back();
      }
    });
    
    const { data } = await modal.onWillDismiss();

    if (data && data.pdf_cv) {
      this.form.controls.pdf_cv.setValue(data.pdf_cv);
      this.form.controls.pdf_cv.markAsDirty();
      this.model.fulltimer_pdf_cv = data.pdf_cv;
    }
  }

  /**
   * Update Model Data based on Form Input
   */
  updateModelDataFromForm() {
    this.model.nationality_id = this.form.value.nationality_id;
    this.model.country_id = this.form.value.country_id;
    this.model.fulltimer_area_uuid = this.form.value.area_uuid;
    this.model.fulltimer_latitude = this.form.value.latitude;
    this.model.fulltimer_longitude = this.form.value.longitude;
    this.model.fulltimer_name = this.form.value.name;
    this.model.fulltimer_phone = this.form.value.phone;
    this.model.fulltimer_email = this.form.value.email;
    this.model.fulltimer_pdf_cv = this.form.value.pdf_cv;
  }

  /**
   * Close the page
   */
  close(refresh = false) {
    const data = { refresh };
    this.modelCtrl.dismiss(data);
  }

  /**
   * Save the model
   */
  async save() {
    this.loading = true;

    this.updateModelDataFromForm();

    let action;
    if (!this.model.fulltimer_uuid) {
      // Create
      action = this.fulltimerService.create(this.model);
    } else {
      // Update
      action = this.fulltimerService.update(this.model);
    }

    action.subscribe(async jsonResponse => {
      this.loading = false;

      // On Success
      if (jsonResponse.operation == 'success') {
        // Close the page
        this.close(true);
      }

      // On Failure
      if (jsonResponse.operation == 'error') {
        const prompt = await this.alertCtrl.create({
          message: this.authService.errorMessage(jsonResponse.message),
          buttons: ['Ok']
        });
        prompt.present();
      }
    });
  }

  logScrolling(e) {
    this.borderLimit = (e.detail.scrollTop > 20) ? true : false;
  }
}
