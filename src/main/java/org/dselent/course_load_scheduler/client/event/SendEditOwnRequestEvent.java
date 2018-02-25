package org.dselent.course_load_scheduler.client.event;

import org.dselent.course_load_scheduler.client.action.SendEditOwnRequestAction;
import org.dselent.course_load_scheduler.client.event_handler.SendEditOwnRequestEventHandler;

import com.google.gwt.event.shared.GwtEvent;
import com.google.gwt.event.shared.GwtEvent.Type;

public class SendEditOwnRequestEvent extends GwtEvent<SendEditOwnRequestEventHandler>{
	public static Type<SendEditOwnRequestEventHandler> TYPE = new Type<SendEditOwnRequestEventHandler>();
	
	private SendEditOwnRequestAction action;
	
	public SendEditOwnRequestEvent(SendEditOwnRequestAction action)
	{
		this.action = action;
	}
	
	public SendEditOwnRequestAction getAction()
	{
		return action;
	}
	
	/*
	 * 
	 */
	@Override
	public Type<SendEditOwnRequestEventHandler> getAssociatedType()
	{
		return TYPE;
	}

	/*
	 * 
	 */
	@Override
	protected void dispatch(SendEditOwnRequestEventHandler handler)
	{
		handler.onSendEditOwnRequest(this);
	}
}
