import { Routes } from '@angular/router';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { PythonBasicComponent } from './python-basic/python-basic.component';
import { AiBasicComponent } from './ai-basic/ai-basic.component';
import { AuthorComponent } from './author/author.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'footer', component: FooterComponent },
      { path: 'python', component:  PythonBasicComponent},
      { path: 'ai', component: AiBasicComponent },
      { path: 'author', component: AuthorComponent},
    //   { path: 'resource', component: ResourceComponent },
    //   { path: 'article', component: ArticleComponent },
    //   { path: 'checklist', component: ChecklistComponent },
    //   { path: 'pdf', component: PdfComponent },
    ]
  }
];
