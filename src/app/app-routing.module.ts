import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'signup-one',
    loadChildren: () => import('./signup-one/signup-one.module').then( m => m.SignupOnePageModule)
  },
  {
    path: 'signup-two',
    loadChildren: () => import('./signup-two/signup-two.module').then( m => m.SignupTwoPageModule)
  },
  {
    path: 'signin',
    loadChildren: () => import('./signin/signin.module').then( m => m.SigninPageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'landing-page',
    loadChildren: () => import('./landing-page/landing-page.module').then( m => m.LandingPagePageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'recommendations',
    loadChildren: () => import('./recommendations/recommendations.module').then( m => m.RecommendationsPageModule)
  },
  {
    path: 'recommendations-details',
    loadChildren: () => import('./recommendations-details/recommendations-details.module').then( m => m.RecommendationsDetailsPageModule)
  },
  {
    path: 'recommendations-details-two',
    loadChildren: () => import('./recommendations-details-two/recommendations-details-two.module').then( m => m.RecommendationsDetailsTwoPageModule)
  },
  {
    path: 'recommendations-details-three',
    loadChildren: () => import('./recommendations-details-three/recommendations-details-three.module').then( m => m.RecommendationsDetailsThreePageModule)
  },
  {
    path: 'recommendations-details-four',
    loadChildren: () => import('./recommendations-details-four/recommendations-details-four.module').then( m => m.RecommendationsDetailsFourPageModule)
  },
  {
    path: 'signout',
    loadChildren: () => import('./signout/signout.module').then( m => m.SignoutPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
