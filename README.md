## To Create Template Drevin Form 
 <ol>
 <li> must import FormsModule</li>
 <li> create Refrance to form tag => #userFrom="ngForm"</li>
 <li> write ngModel to each input elment in form</li>
 <li> must add name attribute to each input elment</li>
 <ol>


<li> [ngModel]="userModel.subscribe" use for one way binding => from back to view 
<li> [(ngModel)]="userModel.name" use for two way binding => from back to view and vice versa
