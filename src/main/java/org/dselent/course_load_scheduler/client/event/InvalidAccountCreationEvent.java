package org.dselent.course_load_scheduler.client.event;

import org.dselent.course_load_scheduler.client.action.InvalidAccountCreationAction;
import org.dselent.course_load_scheduler.client.event_handler.InvalidAccountCreationEventHandler;

import com.google.gwt.event.shared.GwtEvent;

/**
 * Events are "fired" and sent on the event bus to be sent to an applicable event handler
 * This event is for processing an invalid login
 * 
 * @author dselent
 *
 */
public class InvalidAccountCreationEvent extends GwtEvent<InvalidAccountCreationEventHandler>
{
	public static Type<InvalidAccountCreationEventHandler> TYPE = new Type<InvalidAccountCreationEventHandler>();

	private InvalidAccountCreationAction action;

	public InvalidAccountCreationEvent(InvalidAccountCreationAction ila)
	{
		this.action = ila;
	}

	public InvalidAccountCreationAction getAction()
	{
		return action;
	}

	/*
	 * 
	 */
	@Override
	public Type<InvalidAccountCreationEventHandler> getAssociatedType()
	{
		return TYPE;
	}

	/*
	 * 
	 */
	@Override
	protected void dispatch(InvalidAccountCreationEventHandler handler)
	{
		handler.onInvalidAccountCreation(this);
	}
}
