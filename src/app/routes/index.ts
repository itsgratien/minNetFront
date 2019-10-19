
import { MoviesComponent } from '../movies/movies.component';
import { SinglemovieComponent } from '../singlemovie/singlemovie.component';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';

export const AppRoutes = [
  {
    path: '',
    component: MoviesComponent
  },
  {
    path: 'login',
    component: LoginComponent
},
{
  path: 'register',
  component: RegisterComponent
},
  {
      path: ':slug',
      component: SinglemovieComponent
  },
];
