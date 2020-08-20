import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from '../page/home-page/home-page.component';

const routes: Routes = [
    {
        path: '',
        component: HomePageComponent,

    },
    // {
    //     path: ':lng/:crncy',
    //     component: HomePageComponent,
    //     children: [
    //         {
    //             path: '',
    //             component: HomeComponent,

    //         },
    //         { path: 'details', component: PersonalDetailsComponent },
    //         { path: 'about-us', component: AboutUsComponent },
    //         { path: 'acceptable-use-policy', component: AcceptableUsePolicyComponent },
    //         { path: 'privacy-policy', component: PrivacyPolicyComponent },
    //         { path: 'terms-and-conditions', component: TermsOfOnlineSalesComponent },
    //         {
    //             path: 'duty-allowances',
    //             component: DutyAllowancesComponent
    //         }
    //     ]
    // }
]


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
