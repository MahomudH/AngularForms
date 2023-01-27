## Reactive Forms:
&raquo;Features in reactive forms:
<ol>
<li>Code and the logic resides in the component class</li>
<li>No two way binding</li>
<li>Well sutied for complex scenarios</li>
<li>Dynamic form fileds</li>
<li>Custom validation</li>
<li>Dynamic validation</li>
<li>Unit test</li>
</ol>

## To Create Template Drevin Form
 <ol>
 <li> must import ReactiveFormsModule</li>
 <li> create FormGroup in .ts file</li>
 <li> associate the model with the view "HTML form"</li>
    <ol style="list-style-type:upper-roman">
    <li>add [FormGroup]="name of form group"</li>  
    <li>add formControlName for each input in the form</li>  
    </ol>
 </ol>
 <i>we can use the FormName.value to reach the value of each form cotrol</i>

<ul style="color:red">
 <li>There is two method to set the data in the form</li>
 <li>setValue() => must pass all the form controll values</li>
 <li>TsetValue() => can pass some of form controll values</li>
 </ul>