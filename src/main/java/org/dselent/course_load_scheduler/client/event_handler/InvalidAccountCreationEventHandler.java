package org.dselent.course_load_scheduler.client.event_handler;

import org.dselent.course_load_scheduler.client.event.InvalidAccountCreationEvent;

import com.google.gwt.event.shared.EventHandler;

/**
 * Interface to specify an event handler
 * All classes that listen for this event should implement this interface
 * Alternatively classes can extend the EventHandlerAdapter class and override the functions
 * 
 * @author dselent
 *
 */
public interface InvalidAccountCreationEventHandler extends EventHandler
{
	  public void onInvalidAccountCreation(InvalidAccountCreationEvent evt);
}
