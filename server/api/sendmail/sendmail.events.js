/**
 * Sendmail model events
 */

'use strict';

import {EventEmitter} from 'events';
import Sendmail from './sendmail.model';
var SendmailEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
SendmailEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Sendmail.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    SendmailEvents.emit(event + ':' + doc._id, doc);
    SendmailEvents.emit(event, doc);
  }
}

export default SendmailEvents;
