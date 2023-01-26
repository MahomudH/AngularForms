## Angular Forms

&loz; In this repository, we will see an example of angular forms

&loz; There are two types of angular forms:
<ol>
<li> Template-driven forms.</li>
<li> Reactive forms.</li>
</ol>
 <hr/>
  
## To Create Template Drevin Form


 <ol>
 <li> must import FormsModule</li>
 <li> create Refrance to form tag => #userFrom="ngForm"</li>
 <li> write ngModel to each input elment in form</li>
 <li> must add name attribute to each input elment</li>
 </ol>


&raquo; [ngModel]="userModel.subscribe" use for one way binding => from back to view 

<br>
&raquo; [(ngModel)]="userModel.name" use for two way binding => from back to view and vice versa
&loz; Track control state and validity
   <table>
  <tr>
    <th>State</th>
    <th>Class if true</th>
    <th>Class if false</th>
  </tr>
  <tr>
    <td>The control has been visited</td>
    <td><code>ng-touched</code></td>
    <td><code>ng-untouched</code></td>
  </tr>
   <tr>
    <td>The control's value has changed</td>
    <td><code>ng-dirty</code></td>
    <td><code>ng-pristine</code></td>
  </tr>
   <tr>
    <td>The control's value is valid</td>
    <td><code>ng-valid</code></td>
    <td><code>ng-invalid</code></td>
  </tr>
</table>

<hr/>
&raquo; when use form valiation as in commit "form validation", this validation can track build in validation so 
we must add "or" operator for our custom validation
<br>
<br>
&radic; Lastly, To add a server to this angular form we will need:
 <ol>
 <li> npm init --yes</li>
 <li> npm install --save express body-parser cors</li>
    <ul>
      <li>express: is a web server</li>
      <li>body-parser: is the middleware to handle form data</li>
      <li>body-parser: is the package to make request across different ports</li>
    </ul>
   <li>create server.js</li>
   <li>run the command "node server"</li>
 </ol>

