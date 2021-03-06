import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { VendorAssistModule } from "./modules/vendor-assist/vendor-assist.module";
import { PreHomeModule } from "./modules/pre-home/pre-home.module";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { environment } from "../environments/environment";
import { MyPlanningModule } from "./modules/my-planning/my-planning.module";
import { HomeModule } from "./modules/home/home.module";
import { ReusableModule } from "./modules/reusable/reusable.module";
import { ProductsDetailModule } from "./modules/products-detail/products-detail.module";
import { AngularFireMessagingModule } from "@angular/fire/messaging";
import { LocationModule } from "./modules/location/location.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    VendorAssistModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PreHomeModule,
    MyPlanningModule,
    HomeModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    ReusableModule,
    ProductsDetailModule,
    AngularFireMessagingModule,
    LocationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
