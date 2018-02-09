package org.dselent.course_load_scheduler.client.event;

import org.dselent.course_load_scheduler.client.action.InvalidLoginAction;
import org.dselent.course_load_scheduler.client.event_handler.InvalidLoginEventHandler;

import com.google.gwt.event.shared.GwtEvent;

/**
 * Events are "fired" and sent on the event bus to be sent to an applicable event handler
 * This event is for processing an invalid login
 * 
 * @author dselent
 *
 */
public class InvalidLoginEvent extends GwtEvent<InvalidLoginEventHandler>
{
	public static Type<InvalidLoginEventHandler> TYPE = new Type<InvalidLoginEventHandler>();
	
	private InvalidLoginAction action;
	
	public InvalidLoginEvent(InvalidLoginAction action)
	{
		this.action = action;
	}
	
	public InvalidLoginAction getAction()
	{
		return action;
	}
	
	/*
	 * 
	 */
	@Override
	public Type<InvalidLoginEventHandler> getAssociatedType()
	{
		return TYPE;
	}

	/*
	 * 
	 */
	@Override
	protected void dispatch(InvalidLoginEventHandler handler)
	{
		handler.onInvalidLogin(this);
	}
}
