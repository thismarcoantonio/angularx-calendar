# AngularX-Calendar

Angular 5.x Calendar, using Drag and Drop API, no jQuery.
Currently in development.

## How to use?
First of all install it with npm using:
```npm install angularx-calendar```

Then import it in your ngModule:
```import CalendarModule from 'angularx-calendar'```
And reference it in the imports:
```
...
imports: [
  ...,
  CalendarModule,
  ...
]
```
And apply it in your HTML:
```
<ngx-calendar [eventList]="eventList"></ngx-calendar>
```

### Required Inputs
For get it running, you just need to specify 'eventList' object. Every value should have an id by key, and for value, your event.

Example: 
```
eventList = {
  0: 'EventOne',
  1: 'EventTwo',
  2: 'EventThree'
}
```
### Required Inputs
Optional Inputs

#### Months
You can specify the Months in your language, they must have more than 11 months to work (I didn't test it with more than 11 months)

#### Days
Like months, you can specify the days at the header calendar in your language. Just make sure to index 0 be equal Sunday.

#### RemoveAfterDrop
Use it if you want to remove the events when use it.

## Okay, but what should I do?
This calendar is currently in development, but you can use it if you want to modify an object of events. You can do Pull Requests if you want to contribute, I'll try to document PR later.

## Next-steps
- [ ] - Update to support Angular 6
- [x] - Calendar Month Navigation
- [x] - Add event system for the Calendar using Drag and Drop API
- [x] - Style Calendar
- [x] - Remove Event (and remove it from cell when passed to another)
- [x] - Remove After Drop feature
- [ ] - Better Documentation and organization
- [ ] - Multiple Event Handling
- [ ] - Error Handling (Also provide option to deny add more than one equal entry)
- [ ] - Custom Events (Because now you need to provide a list with event array containing every event id)
- [ ] - Insert event in another cell
- [ ] - Publish in NPM
- [ ] - Responsive UI
- [ ] - Custom Styles
