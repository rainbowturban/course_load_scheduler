package org.dselent.course_load_scheduler.client.event;

import org.dselent.course_load_scheduler.client.action.SendGetOwnRequestAction;
import org.dselent.course_load_scheduler.client.event_handler.SendGetOwnRequestEventHandler;

import com.google.gwt.event.shared.GwtEvent;
import com.google.gwt.event.shared.GwtEvent.Type;

public class SendGetOwnRequestEvent extends GwtEvent<SendGetOwnRequestEventHandler>{
	public static Type<SendGetOwnRequestEventHandler> TYPE = new Type<SendGetOwnRequestEventHandler>();
	
	private SendGetOwnRequestAction action;
	
	public SendGetOwnRequestEvent(SendGetOwnRequestAction action)
	{
		this.action = action;
	}
	
	public SendGetOwnRequestAction getAction()
	{
		return action;
	}
	
	/*
	 * 
	 */
	@Override
	public Type<SendGetOwnRequestEventHandler> getAssociatedType()
	{
		return TYPE;
	}

	/*
	 * 
	 */
	@Override
	protected void dispatch(SendGetOwnRequestEventHandler handler)
	{
		handler.onSendGetOwnRequest(this);
	}
}
