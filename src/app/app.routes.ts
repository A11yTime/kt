import { Routes } from '@angular/router';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { PythonBasicComponent } from './python-basic/python-basic.component';
import { AiBasicComponent } from './ai-basic/ai-basic.component';
import { AuthorComponent } from './author/author.component';
import { VsCodeComponent } from './vs-code/vs-code.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', component: HomeComponent,
        data: { title: 'Home - Universal Approach' }
       },
      { path: 'footer', component: FooterComponent },
      { path: 'python', component:  PythonBasicComponent,
        data: { title: 'Python Basics - Universal Approach' }
      },
      { path: 'ai', component: AiBasicComponent,
        data: { title: 'AI Basics - Universal Approach' }
       },
      { path: 'author', component: AuthorComponent},
      { path: 'vs', component: VsCodeComponent, 
        data: { title: 'VS Code - Universal Approach' }
       },
    //   { path: 'article', component: ArticleComponent },
    //   { path: 'checklist', component: ChecklistComponent },
    //   { path: 'pdf', component: PdfComponent },
    ]
  }
];
